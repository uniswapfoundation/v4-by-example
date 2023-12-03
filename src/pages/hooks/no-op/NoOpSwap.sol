// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {BaseHook} from "v4-periphery/BaseHook.sol";

import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "@uniswap/v4-core/contracts/types/PoolId.sol";

contract NoOpSwap is BaseHook {
    using PoolIdLibrary for PoolKey;

    mapping(PoolId => uint256 count) public beforeSwapCount;
    mapping(PoolId => uint256 count) public afterSwapCount;

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {}

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeModifyPosition: false,
            afterModifyPosition: false,
            beforeSwap: true, // -- No-op'ing the swap --  //
            afterSwap: false,
            beforeDonate: false,
            afterDonate: false,
            noOp: true // -- ENABLE NO-OP --  //
        });
    }

    function beforeSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata params, bytes calldata)
        external
        override
        returns (bytes4)
    {
        // ------------------------------------------------------------------------------- //
        // Example NoOp: if swap amount is 69e18, then the swap will be skipped            //
        // ------------------------------------------------------------------------------- //
        if (params.amountSpecified == 69e18) return Hooks.NO_OP_SELECTOR;

        beforeSwapCount[key.toId()]++;
        return BaseHook.beforeSwap.selector;
    }
}
