// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// TODO: update to v4-periphery/BaseHook.sol when its compatible
import {BaseHook} from "@v4-by-example/utils/BaseHook.sol";

import {Hooks} from "v4-core/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/types/PoolId.sol";
import {BalanceDelta} from "v4-core/types/BalanceDelta.sol";

contract MsgSenderHookData is BaseHook {
    using PoolIdLibrary for PoolKey;

    mapping(address user => bool allowed) public allowedUsers;

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {}

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeAddLiquidity: false,
            beforeRemoveLiquidity: false,
            afterAddLiquidity: false,
            afterRemoveLiquidity: false,
            beforeSwap: true,
            afterSwap: false,
            beforeDonate: false,
            afterDonate: false,
            noOp: false,
            accessLock: false
        });
    }

    function beforeSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata, bytes calldata hookData)
        external
        override
        returns (bytes4)
    {
        // --- Read the user's address --- //
        address user = abi.decode(hookData, (address));
        require(allowedUsers[user], "MsgSenderHookData: User not allowed");
        return BaseHook.beforeSwap.selector;
    }

    // Helper function for demonstration
    function setAllowedUser(address user, bool allowed) external {
        allowedUsers[user] = allowed;
    }
}
