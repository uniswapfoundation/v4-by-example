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
import {NoOpSwap} from "@v4-by-example/pages/hooks/no-op/NoOpSwap.sol";
import {HookMiner} from "./utils/HookMiner.sol";

contract NoOpSwapTest is Test, Deployers {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    NoOpSwap hook;
    PoolKey poolKey;
    PoolId poolId;

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(NoOpSwap).creationCode, abi.encode(address(manager)));
        hook = new NoOpSwap{salt: salt}(IPoolManager(address(manager)));
        require(address(hook) == hookAddress, "NoOpSwapTest: hook address mismatch");

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

    function test_noOp() public {
        assertEq(hook.beforeSwapCount(poolId), 0);

        // Perform a test swap //
        int256 amount = 69e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(poolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        // no-op will return an indicator that the swap was skipped
        assertEq(int256(swapDelta.amount0()), -1);

        // Swapping with 69e18 will skip the swap logic!
        assertEq(hook.beforeSwapCount(poolId), 0);
    }

    function test_swap() public {
        assertEq(hook.beforeSwapCount(poolId), 0);

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(poolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        assertEq(int256(swapDelta.amount0()), amount);

        assertEq(hook.beforeSwapCount(poolId), 1);
    }
}
