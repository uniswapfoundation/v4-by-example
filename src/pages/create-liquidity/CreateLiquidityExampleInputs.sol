// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "forge-std/interfaces/IERC20.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";
import {PoolModifyPositionTest} from "@uniswap/v4-core/contracts/test/PoolModifyPositionTest.sol";
import {CurrencyLibrary, Currency} from "@uniswap/v4-core/contracts/types/Currency.sol";

contract CreateLiquidityExampleInputs {
    using CurrencyLibrary for Currency;

    // set the router address
    PoolModifyPositionTest lpRouter = PoolModifyPositionTest(0x01);

    function exampleA() external {
        address token0 = address(0x11);
        address token1 = address(0x22);

        // Using a hookless pool
        PoolKey memory pool = PoolKey({
            currency0: Currency(token0),
            currency1: Currency(token1),
            fee: 3000,
            tickSpacing: 60,
            hooks: IHooks(address(0x0))
        });

        // approve tokens to the LP Router
        IERC20(token0).approve(address(lpRouter), type(uint256).max);
        IERC20(token1).approve(address(lpRouter), type(uint256).max);

        // Provide 10e18 worth of liquidity on the range of [-600, 600]
        int24 tickLower = -600;
        int24 tickUpper = 600;
        int256 liquidity = 10e18;
        lpRouter.modifyPosition(
            poolKey,
            IPoolManager.ModifyPositionParams({tickLower: tickLower, tickUpper: tickUpper, liquidityDelta: liquidity}),
            new bytes(0)
        );
    }
}
