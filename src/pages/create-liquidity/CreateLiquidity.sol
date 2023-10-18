// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";
import {PoolModifyPositionTest} from "@uniswap/v4-core/contracts/test/PoolModifyPositionTest.sol";

contract CreateLiquidity {
    // set the router address
    PoolModifyPositionTest lpRouter = PoolModifyPositionTest(0x01);

    function createLiquidity(
        PoolKey memory poolKey,
        int24 tickLower,
        int24 tickUpper,
        int256 liquidity,
        bytes calldata hookData
    ) external {
        // if 0 < liquidity: add liquidity -- otherwise remove liquidity
        lpRouter.modifyPosition(
            poolKey,
            IPoolManager.ModifyPositionParams({tickLower: tickLower, tickUpper: tickUpper, liquidityDelta: liquidity}),
            hookData
        );
    }
}
