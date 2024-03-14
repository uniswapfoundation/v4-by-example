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
import {HookMiner} from "./utils/HookMiner.sol";
import {GasSnapshot} from "forge-gas-snapshot/GasSnapshot.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";

contract SwapFeeTest is Test, Deployers, GasSnapshot {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    PoolKey poolKey;
    PoolId poolId;

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Create the pool
        poolKey = PoolKey(currency0, currency1, 3000, 60, IHooks(address(0x0)));
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
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 10 ether),
            ZERO_BYTES
        );
    }

    function test_zeroForOne_exactInput() public {
        uint256 balance0Before = currency0.balanceOfSelf();
        uint256 balance1Before = currency1.balanceOfSelf();

        // Perform a test swap //
        int256 amount = -1e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(poolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        uint256 balance0After = currency0.balanceOfSelf();
        uint256 balance1After = currency1.balanceOfSelf();

        assertEq(balance0Before - balance0After, 1e18);
        assertApproxEqAbs(balance1After - balance1Before, 1e18, 0.1e18); // fee on output token
    }

    function test_zeroForOne_exactOutput() public {
        uint256 balance0Before = currency0.balanceOfSelf();
        uint256 balance1Before = currency1.balanceOfSelf();

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(poolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        uint256 balance0After = currency0.balanceOfSelf();
        uint256 balance1After = currency1.balanceOfSelf();

        assertApproxEqAbs(balance0Before - balance0After, 1e18, 0.1e18); // fee on input token
        assertEq(balance1After - balance1Before, 1e18);
    }

    function test_oneForZero_exactInput() public {
        uint256 balance0Before = currency0.balanceOfSelf();
        uint256 balance1Before = currency1.balanceOfSelf();

        // Perform a test swap //
        int256 amount = -1e18;
        bool zeroForOne = false;
        BalanceDelta swapDelta = swap(poolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        uint256 balance0After = currency0.balanceOfSelf();
        uint256 balance1After = currency1.balanceOfSelf();

        // fee on output token 0
        assertEq(balance1Before - balance1After, 1e18);
        assertApproxEqAbs(balance0After - balance0Before, 1e18, 0.1e18);
    }

    function test_oneForZero_exactOutput() public {
        uint256 balance0Before = currency0.balanceOfSelf();
        uint256 balance1Before = currency1.balanceOfSelf();

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = false;
        BalanceDelta swapDelta = swap(poolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        uint256 balance0After = currency0.balanceOfSelf();
        uint256 balance1After = currency1.balanceOfSelf();

        // fee on input token
        assertApproxEqAbs(balance1Before - balance1After, 1e18, 0.1e18);
        assertEq(balance0After - balance0Before, 1e18);
    }
}
