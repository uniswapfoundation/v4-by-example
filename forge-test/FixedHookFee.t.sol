// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import {IHooks} from "v4-core/src/interfaces/IHooks.sol";
import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {TickMath} from "v4-core/src/libraries/TickMath.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {Deployers} from "v4-core/test/utils/Deployers.sol";
import {FixedHookFee} from "@v4-by-example/pages/fees/fixed-hook-fee/FixedHookFee.sol";
import {HookMiner} from "./utils/HookMiner.sol";
import {GasSnapshot} from "forge-gas-snapshot/GasSnapshot.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";

contract FixedHookFeeTest is Test, Deployers, GasSnapshot {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    FixedHookFee hook;
    PoolKey poolKey;
    PoolId poolId;

    address alice = makeAddr("alice");

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(FixedHookFee).creationCode, abi.encode(address(manager)));
        hook = new FixedHookFee{salt: salt}(IPoolManager(address(manager)));
        require(address(hook) == hookAddress, "FixedHookFeeTest: hook address mismatch");

        // Create the pool
        poolKey = PoolKey(currency0, currency1, 3000, 60, IHooks(hook));
        poolId = poolKey.toId();
        manager.initialize(poolKey, SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyLiquidityRouter.modifyLiquidity(
            poolKey, IPoolManager.ModifyLiquidityParams(-60, 60, 10 ether), ZERO_BYTES
        );
        modifyLiquidityRouter.modifyLiquidity(
            poolKey, IPoolManager.ModifyLiquidityParams(-120, 120, 10 ether), ZERO_BYTES
        );
        modifyLiquidityRouter.modifyLiquidity(
            poolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 10_000 ether),
            ZERO_BYTES
        );
    }

    function test_hookFee() public {
        uint256 balanceBefore = currency0.balanceOfSelf();
        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        swap(poolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //
        uint256 balanceAfter = currency0.balanceOfSelf();

        // swapper paid for the fixed hook fee
        assertEq(balanceBefore - balanceAfter, uint256(amount) + hook.FIXED_HOOK_FEE());

        // collect the hook fees
        assertEq(currency0.balanceOf(alice), 0);
        hook.collectFee(alice, currency0);
        assertEq(currency0.balanceOf(alice), hook.FIXED_HOOK_FEE());
    }

    function test_snap_hookFee() public {
        int256 amount = 1e18;
        bool zeroForOne = true;
        IPoolManager.SwapParams memory params = IPoolManager.SwapParams({
            zeroForOne: zeroForOne,
            amountSpecified: amount,
            sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT // unlimited impact
        });

        PoolSwapTest.TestSettings memory testSettings =
            PoolSwapTest.TestSettings({withdrawTokens: true, settleUsingTransfer: true, currencyAlreadySent: false});

        snapStart("hookFee");
        swapRouter.swap(poolKey, params, testSettings, ZERO_BYTES);
        snapEnd();
    }
}
