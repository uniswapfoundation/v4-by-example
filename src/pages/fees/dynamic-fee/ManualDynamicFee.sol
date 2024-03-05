// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// TODO: update to v4-periphery/BaseHook.sol when its compatible
import {BaseHook} from "@v4-by-example/utils/BaseHook.sol";

import {Hooks} from "v4-core/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/types/PoolKey.sol";
import {IDynamicFeeManager} from "v4-core/interfaces/IDynamicFeeManager.sol";

/// @notice A time-decaying dynamically fee, updated manually with external PoolManager.updateDynamicSwapFee() calls
contract ManualDynamicFee is BaseHook, IDynamicFeeManager {
    uint256 public immutable startTimestamp;

    // Start at 5% fee, decaying at rate of 0.00001% per second
    // after 495,000 seconds (5.72 days), fee will be a minimum of 0.05%
    // NOTE: because fees are uint24, we will lose some precision
    uint128 public constant START_FEE = 500000; // represents 5%
    uint128 public constant MIN_FEE = 500; // minimum fee of 0.05%

    uint128 public constant decayRate = 1; // 0.00001% per second

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {
        startTimestamp = block.timestamp;
    }

    /// @dev Deteremines a Pool's swap fee. Called and cached by PoolManager.updateDynamicFee()
    function getFee(address, PoolKey calldata) external view override returns (uint24 _currentFee) {
        // Linearly decaying fee, y = mx + b
        // After 495,000 seconds (5.72 days), fee will be a minimum of 0.05%
        unchecked {
            uint256 timeElapsed = block.timestamp - startTimestamp;
            _currentFee = timeElapsed > 495000 ? uint24(MIN_FEE) : uint24((START_FEE - (timeElapsed * decayRate)) / 10);
        }
    }

    /// @dev this example hook contract does not implement any hooks
    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeAddLiquidity: false,
            afterAddLiquidity: false,
            beforeRemoveLiquidity: false,
            afterRemoveLiquidity: false,
            beforeSwap: false,
            afterSwap: false,
            beforeDonate: false,
            afterDonate: false
        });
    }
}
