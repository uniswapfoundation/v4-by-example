// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {IHooks} from "@uniswap/v4-core/contracts/interfaces/IHooks.sol";
import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";
import {CurrencyLibrary, Currency} from "@uniswap/v4-core/contracts/types/Currency.sol";

contract PoolInitializeExampleInputs {
    using CurrencyLibrary for Currency;

    // set the pool manager address
    IPoolManager manager = IPoolManager(0x01);

    /// @notice Initialize a hookless pool:
    ///     0.05% swap fee
    ///     tick spacing of 10
    ///     starting price of 1:1
    function exampleA() external {
        address token0 = address(0x11);
        address token1 = address(0x22);
        uint24 swapFee = 500;
        int24 tickSpacing = 10;

        // floor(sqrt(1) * 2^96)
        uint160 startingPrice = 79228162514264337593543950336;

        // hookless pool doesnt expect any initialization data
        bytes memory hookData = new bytes(0);

        PoolKey memory pool = PoolKey({
            currency0: Currency.wrap(token0),
            currency1: Currency.wrap(token1),
            fee: swapFee,
            tickSpacing: tickSpacing,
            hooks: IHooks(address(0x0))
        });
        manager.initialize(pool, startingPrice, hookData);
    }

    /// @notice Initialize a pool with a custom hook:
    ///     0.30% swap fee
    ///     tick spacing of 60
    ///     starting price of 1:1
    ///     hook's beforeInitialize() requires providing a timestamp
    function exampleB() external {
        address hook = address(0x80); // prefix indicates the hook only has a beforeInitialize() function
        address token0 = address(0x11);
        address token1 = address(0x22);
        uint24 swapFee = 3000;
        int24 tickSpacing = 60;

        // floor(sqrt(1) * 2^96)
        uint160 startingPrice = 79228162514264337593543950336;

        // Assume the custom hook requires a timestamp when initializing it
        bytes memory hookData = abi.encode(block.timestamp);

        PoolKey memory pool = PoolKey({
            currency0: Currency.wrap(token0),
            currency1: Currency.wrap(token1),
            fee: swapFee,
            tickSpacing: tickSpacing,
            hooks: IHooks(hook)
        });
        manager.initialize(pool, startingPrice, hookData);
    }
}
