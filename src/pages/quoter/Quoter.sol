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
import {Constants} from "v4-core/src/../test/utils/Constants.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {Deployers} from "v4-core/src/../test/utils/Deployers.sol";
import {IQuoter} from "v4-periphery/interfaces/IQuoter.sol";
import {Quoter} from "v4-periphery/lens/Quoter.sol";

contract QuoterTest is Test, Deployers {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    PoolKey poolKey;
    PoolId poolId;
    Quoter quoter;

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();
        quoter = new Quoter(address(manager));

        // Create the pool
        poolKey = PoolKey(currency0, currency1, 3000, 60, IHooks(address(0x0)));
        poolId = poolKey.toId();
        manager.initialize(poolKey, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyLiquidityRouter.modifyLiquidity(
            poolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 1000 ether),
            ZERO_BYTES
        );
    }

    function testQuoter_output() public {
        uint128 amountIn = 1e18;
        bool zeroForOne = true;
        uint160 MAX_SLIPPAGE = zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT;

        // get the quote
        PoolKey memory key = poolKey;
        (int128[] memory deltaAmounts, uint160 sqrtPriceX96After,) = quoter.quoteExactInputSingle(
            IQuoter.QuoteExactSingleParams(key, zeroForOne, address(this), amountIn, MAX_SLIPPAGE, ZERO_BYTES)
        );

        // output is amount 1
        int128 outputAmount = deltaAmounts[1];
        console2.log("Quoted output amount: ", int256(outputAmount));

        // Perform a test swap
        BalanceDelta swapDelta = swap(poolKey, int256(uint256(amountIn)), zeroForOne, ZERO_BYTES);

        // quote agrees with the actual swap
        assertEq(outputAmount, swapDelta.amount1());
    }

    function testQuoter_input() public {
        uint128 amountOut = 1e18;
        bool zeroForOne = true;
        uint160 MAX_SLIPPAGE = zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT;

        // get the quote
        PoolKey memory key = poolKey;
        (int128[] memory deltaAmounts, uint160 sqrtPriceX96After,) = quoter.quoteExactOutputSingle(
            IQuoter.QuoteExactSingleParams(key, zeroForOne, address(this), amountOut, MAX_SLIPPAGE, ZERO_BYTES)
        );

        // input (quoted) is amount 0
        int128 inputAmount = deltaAmounts[0];
        console2.log("Quoted input amount: ", int256(inputAmount));

        // Perform a exact-output swap
        BalanceDelta swapDelta = swap(poolKey, -int256(uint256(amountOut)), zeroForOne, ZERO_BYTES);
        assertEq(inputAmount, swapDelta.amount0());
        (uint160 sqrtPriceX96,,) = manager.getSlot0(poolId);
        assertEq(sqrtPriceX96After, sqrtPriceX96);
    }
}
