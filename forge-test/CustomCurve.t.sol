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
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {Deployers} from "v4-core/test/utils/Deployers.sol";
import {CustomCurve} from "@v4-by-example/pages/hooks/custom-curve/CustomCurve.sol";
import {HookMiner} from "./utils/HookMiner.sol";
import {IERC20} from "forge-std/interfaces/IERC20.sol";

contract CustomCurveTest is Test, Deployers {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    CustomCurve hook;
    PoolKey poolKey;
    PoolId poolId;

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.BEFORE_ADD_LIQUIDITY_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(CustomCurve).creationCode, abi.encode(address(manager)));
        hook = new CustomCurve{salt: salt}(IPoolManager(address(manager)));
        require(address(hook) == hookAddress, "CustomCurveTest: hook address mismatch");

        // Create the pool
        poolKey = PoolKey(currency0, currency1, 3000, 60, IHooks(hook));
        poolId = poolKey.toId();
        manager.initialize(poolKey, SQRT_RATIO_1_1, ZERO_BYTES);

        PoolKey memory hookless = PoolKey(currency0, currency1, 3000, 60, IHooks(address(0x0)));
        manager.initialize(hookless, SQRT_RATIO_1_1, ZERO_BYTES);

        // add liquidity so theres tokens to take
        modifyLiquidityRouter.modifyLiquidity(
            hookless, IPoolManager.ModifyLiquidityParams(-60, 60, 10000 ether), ZERO_BYTES
        );

        // Provide liquidity to the pool
        IERC20(Currency.unwrap(currency0)).transfer(address(hook), 10_000 ether);
        IERC20(Currency.unwrap(currency1)).transfer(address(hook), 10_000 ether);
    }

    function test_swap() public {
        uint256 token1Before = currency1.balanceOfSelf();

        // Perform a test swap //
        int256 amount = 10e18;
        bool zeroForOne = true;
        swap(poolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        uint256 token1After = currency1.balanceOfSelf();

        assertEq(token1After - token1Before, 1e18);
    }
}
