// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import {IHooks} from "v4-core/interfaces/IHooks.sol";
import {Hooks} from "v4-core/libraries/Hooks.sol";
import {TickMath} from "v4-core/libraries/TickMath.sol";
import {IPoolManager} from "v4-core/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/types/PoolKey.sol";
import {BalanceDelta} from "v4-core/types/BalanceDelta.sol";
import {PoolId, PoolIdLibrary} from "v4-core/types/PoolId.sol";
import {Constants} from "v4-core/../test/utils/Constants.sol";
import {CurrencyLibrary, Currency} from "v4-core/types/Currency.sol";
import {HookTest} from "./utils/HookTest.sol";
import {FixedHookFee} from "@v4-by-example/pages/fees/fixed-hook-fee/FixedHookFee.sol";
import {HookMiner} from "./utils/HookMiner.sol";

contract FixedHookFeeTest is HookTest {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    FixedHookFee hook;
    PoolKey poolKey;
    PoolId poolId;

    address alice = makeAddr("alice");

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        HookTest.initHookTestEnv();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.ACCESS_LOCK_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(FixedHookFee).creationCode, abi.encode(address(manager)));
        hook = new FixedHookFee{salt: salt}(IPoolManager(address(manager)));
        require(address(hook) == hookAddress, "FixedHookFeeTest: hook address mismatch");

        // Create the pool
        poolKey = PoolKey(Currency.wrap(address(token0)), Currency.wrap(address(token1)), 3000, 60, IHooks(hook));
        poolId = poolKey.toId();
        initializeRouter.initialize(poolKey, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyPositionRouter.modifyLiquidity(poolKey, IPoolManager.ModifyLiquidityParams(-60, 60, 10 ether), ZERO_BYTES);
        modifyPositionRouter.modifyLiquidity(
            poolKey, IPoolManager.ModifyLiquidityParams(-120, 120, 10 ether), ZERO_BYTES
        );
        modifyPositionRouter.modifyLiquidity(
            poolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 10_000 ether),
            ZERO_BYTES
        );
    }

    function test_hookFee() public {
        uint256 balanceBefore = token0.balanceOf(address(this));
        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        swap(poolKey, amount, zeroForOne, ZERO_BYTES);
        // ------------------- //
        uint256 balanceAfter = token0.balanceOf(address(this));

        // swapper paid for the fixed hook fee
        assertEq(balanceBefore - balanceAfter, uint256(amount) + hook.FIXED_HOOK_FEE());

        // collect the hook fees
        assertEq(token0.balanceOf(alice), 0);
        hook.collectFee(alice, Currency.wrap(address(token0)));
        assertEq(token0.balanceOf(alice), hook.FIXED_HOOK_FEE());
    }
}
