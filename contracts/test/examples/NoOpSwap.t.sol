// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import {IHooks} from "@uniswap/v4-core/contracts/interfaces/IHooks.sol";
import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";
import {TickMath} from "@uniswap/v4-core/contracts/libraries/TickMath.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";
import {BalanceDelta} from "@uniswap/v4-core/contracts/types/BalanceDelta.sol";
import {PoolId, PoolIdLibrary} from "@uniswap/v4-core/contracts/types/PoolId.sol";
import {Constants} from "@uniswap/v4-core/contracts/../test/utils/Constants.sol";
import {CurrencyLibrary, Currency} from "@uniswap/v4-core/contracts/types/Currency.sol";
import {HookTest} from "../utils/HookTest.sol";
import {NoOpSwap} from "../../src/examples/NoOpSwap.sol";
import {HookMiner} from "../utils/HookMiner.sol";

contract NoOpSwapTest is HookTest {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    NoOpSwap hook;
    PoolKey poolKey;
    PoolId poolId;

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        HookTest.initHookTestEnv();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.AFTER_SWAP_FLAG | Hooks.NO_OP_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(NoOpSwap).creationCode, abi.encode(address(manager)));
        hook = new NoOpSwap{salt: salt}(IPoolManager(address(manager)));
        require(address(hook) == hookAddress, "NoOpSwapTest: hook address mismatch");

        // Create the pool
        poolKey = PoolKey(Currency.wrap(address(token0)), Currency.wrap(address(token1)), 3000, 60, IHooks(hook));
        poolId = poolKey.toId();
        initializeRouter.initialize(poolKey, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyPositionRouter.modifyPosition(poolKey, IPoolManager.ModifyPositionParams(-60, 60, 10 ether), ZERO_BYTES);
        modifyPositionRouter.modifyPosition(poolKey, IPoolManager.ModifyPositionParams(-120, 120, 10 ether), ZERO_BYTES);
        modifyPositionRouter.modifyPosition(
            poolKey,
            IPoolManager.ModifyPositionParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 10_000 ether),
            ZERO_BYTES
        );
    }

    function test_noOp() public {
        assertEq(hook.beforeSwapCount(poolId), 0);
        assertEq(hook.afterSwapCount(poolId), 0);

        // Perform a test swap //
        int256 amount = 69e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(poolKey, amount, zeroForOne, ZERO_BYTES);
        // ------------------- //

        // no-op will return an indicator that the swap was skipped
        assertEq(int256(swapDelta.amount0()), -1);

        // Swapping with 69e18 will skip the swap logic!
        assertEq(hook.beforeSwapCount(poolId), 0);
        assertEq(hook.afterSwapCount(poolId), 0);
    }

    function test_swap() public {
        assertEq(hook.beforeSwapCount(poolId), 0);
        assertEq(hook.afterSwapCount(poolId), 0);

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(poolKey, amount, zeroForOne, ZERO_BYTES);
        // ------------------- //

        assertEq(int256(swapDelta.amount0()), amount);

        assertEq(hook.beforeSwapCount(poolId), 1);
        assertEq(hook.afterSwapCount(poolId), 1);
    }
}
