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
import {HookTest} from "@v4-by-example/utils/HookTest.sol";
import {CustomCurve} from "@v4-by-example/pages/hooks/custom-curve/CustomCurve.sol";
import {HookMiner} from "./utils/HookMiner.sol";

contract CustomCurveTest is HookTest {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    CustomCurve hook;
    PoolKey poolKey;
    PoolId poolId;

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        HookTest.initHookTestEnv();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.BEFORE_ADD_LIQUIDITY_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(CustomCurve).creationCode, abi.encode(address(manager)));
        hook = new CustomCurve{salt: salt}(IPoolManager(address(manager)));
        require(address(hook) == hookAddress, "CustomCurveTest: hook address mismatch");

        // Create the pool
        poolKey = PoolKey(Currency.wrap(address(token0)), Currency.wrap(address(token1)), 3000, 60, IHooks(hook));
        poolId = poolKey.toId();
        initializeRouter.initialize(poolKey, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        PoolKey memory hookless =
            PoolKey(Currency.wrap(address(token0)), Currency.wrap(address(token1)), 3000, 60, IHooks(address(0x0)));
        initializeRouter.initialize(hookless, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        // add liquidity so theres tokens to take
        modifyPositionRouter.modifyLiquidity(
            hookless, IPoolManager.ModifyLiquidityParams(-60, 60, 10000 ether), ZERO_BYTES
        );

        // Provide liquidity to the pool
        token0.mint(address(hook), 10_000 ether);
        token1.mint(address(hook), 10_000 ether);
    }

    function test_swap() public {
        uint256 token1Before = token1.balanceOf(address(this));

        // Perform a test swap //
        int256 amount = 10e18;
        bool zeroForOne = true;
        swap(poolKey, amount, zeroForOne, ZERO_BYTES);
        // ------------------- //

        uint256 token1After = token1.balanceOf(address(this));

        assertEq(token1After - token1Before, 1e18);
    }
}
