// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {BaseHook} from "@v4-by-example/utils/BaseHook.sol";

import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
import {Currency, CurrencyLibrary} from "v4-core/src/types/Currency.sol";

contract FixedHookFee is BaseHook {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    uint256 public constant FIXED_HOOK_FEE = 0.0001e18;

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
            afterDonate: false
        });
    }

    function beforeSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata params, bytes calldata)
        external
        override
        returns (bytes4)
    {
        // take a fixed fee of 0.0001 of the input token
        params.zeroForOne
            ? poolManager.mint(address(this), key.currency0.toId(), FIXED_HOOK_FEE)
            : poolManager.mint(address(this), key.currency1.toId(), FIXED_HOOK_FEE);

        return BaseHook.beforeSwap.selector;
    }

    /// @dev Hook fees are kept as PoolManager claims, so collecting ERC20s will require locking
    function collectFee(address recipient, Currency currency) external returns (uint256 amount) {
        amount = abi.decode(poolManager.lock(abi.encodeCall(this.handleCollectFee, (recipient, currency))), (uint256));
    }

    /// @dev requires the lock pattern in order to call poolManager.burn
    function handleCollectFee(address recipient, Currency currency) external returns (uint256 amount) {
        // convert the fee (Claims) into ERC20 tokens
        amount = poolManager.balanceOf(address(this), currency.toId());
        poolManager.burn(address(this), currency.toId(), amount);

        // direct claims (the tokens) to the recipient
        poolManager.take(currency, recipient, amount);
    }
}
