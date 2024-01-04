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
import {IQuoter} from "v4-periphery/interfaces/IQuoter.sol";
import {Quoter} from "v4-periphery/lens/Quoter.sol";

contract QuoterTest is HookTest {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    PoolKey poolKey;
    PoolId poolId;
    Quoter quoter;

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        HookTest.initHookTestEnv();
        quoter = new Quoter(address(manager));

        // Create the pool
        poolKey =
            PoolKey(Currency.wrap(address(token0)), Currency.wrap(address(token1)), 3000, 60, IHooks(address(0x0)));
        poolId = poolKey.toId();
        initializeRouter.initialize(poolKey, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyPositionRouter.modifyLiquidity(
            poolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 1000 ether),
            ZERO_BYTES
        );
    }

    function testQuoter() public {
        uint128 amountIn = 1e18;
        bool zeroForOne = true;

        // maximum slippage
        uint160 sqrtPriceLimitX96 = zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT;

        PoolKey memory key = poolKey;
        (int128[] memory deltaAmounts, uint160 sqrtPriceX96After,) = quoter.quoteExactInputSingle(
            IQuoter.QuoteExactSingleParams(key, zeroForOne, address(this), amountIn, sqrtPriceLimitX96, ZERO_BYTES)
        );

        console2.log(deltaAmounts[1]);

        // Perform a test swap //
        BalanceDelta swapDelta = swap(poolKey, int256(uint256(amountIn)), zeroForOne, ZERO_BYTES);
        // ------------------- //
    }
}
