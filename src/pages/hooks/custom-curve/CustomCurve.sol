// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// TODO: replace with v4-periphery/BaseHook.sol when compatibility is fixed
import {BaseHook} from "@v4-by-example/utils/BaseHook.sol";

import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {Currency, CurrencyLibrary} from "v4-core/src/types/Currency.sol";

import {IERC20} from "forge-std/interfaces/IERC20.sol";

contract CustomCurve is BaseHook {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {}

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeAddLiquidity: true, // -- disable v4 liquidity with a revert -- //
            beforeRemoveLiquidity: false,
            afterAddLiquidity: false,
            afterRemoveLiquidity: false,
            beforeSwap: true, // -- No-op'ing the swap --  //
            afterSwap: false,
            beforeDonate: false,
            afterDonate: false
        });
    }

    // ------------------------------------------ //
    // Liquidity Functions (not production ready) //
    // ------------------------------------------ //
    /// @notice Add liquidity for the custom curve
    /// @param key PoolKey of the pool to add liquidity to
    /// @param liquidityDelta Amount of liquidity to add
    function addLiquidity(PoolKey calldata key, uint256 liquidityDelta) external {
        // @dev: Update this
        // Given spot price and the custom curve, calculate the ratio of tokens to add
        uint256 token0In;
        uint256 token1In;

        // transfer tokens to hook, to act as liquidity for swaps
        IERC20(Currency.unwrap(key.currency0)).transferFrom(msg.sender, address(this), token0In);
        IERC20(Currency.unwrap(key.currency1)).transferFrom(msg.sender, address(this), token1In);

        // TODO: production-ready requires minting a receipt token etc
    }

    /// @notice Calculate the amount of tokens paid by the swapper
    /// @param params SwapParams passed to the swap function
    /// @return The amount of tokens paid by the swapper
    function getTokenInAmount(IPoolManager.SwapParams calldata params) public pure returns (uint256) {
        return 1e18;
    }

    /// @notice Calculate the amount of tokens sent to the swapper
    /// @param params SwapParams passed to the swap function
    /// @return The amount of tokens sent to the swapper
    function getTokenOutAmount(IPoolManager.SwapParams calldata params) public pure returns (uint256) {
        return 1e18;
    }

    function beforeSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata params, bytes calldata)
        external
        override
        returns (bytes4)
    {
        // calculate the amount of tokens, based on a custom curve
        uint256 tokenInAmount = getTokenInAmount(params); // amount of tokens paid by the swapper
        uint256 tokenOutAmount = getTokenOutAmount(params); // amount of tokens sent to the swapper

        // determine inbound/outbound token based on 0->1 or 1->0 swap
        (Currency inbound, Currency outbound) =
            params.zeroForOne ? (key.currency0, key.currency1) : (key.currency1, key.currency0);

        // inbound token is added to hook's reserves, debt paid by the swapper
        poolManager.take(inbound, address(this), tokenInAmount);

        // outbound token is removed from hook's reserves, and sent to the swapper
        outbound.transfer(address(poolManager), tokenOutAmount);
        poolManager.settle(outbound);

        // prevent normal v4 swap logic from executing
        return BaseHook.beforeSwap.selector;
    }

    /// @notice No liquidity will be managed by v4 PoolManager
    function beforeAddLiquidity(
        address,
        PoolKey calldata key,
        IPoolManager.ModifyLiquidityParams calldata,
        bytes calldata
    ) external override returns (bytes4) {
        revert("No v4 Liquidity allowed");
    }
}
