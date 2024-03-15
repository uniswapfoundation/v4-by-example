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
import {MsgSenderHookData} from "src/pages/hooks/msg-sender/MsgSenderHookData.sol";
import {HookMiner} from "./utils/HookMiner.sol";
import {IERC20} from "forge-std/interfaces/IERC20.sol";

contract MsgSenderHookDataTest is Test, Deployers {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    MsgSenderHookData counter;
    PoolKey poolKey;
    PoolId poolId;

    address alice = makeAddr("alice");

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(MsgSenderHookData).creationCode, abi.encode(address(manager)));
        counter = new MsgSenderHookData{salt: salt}(IPoolManager(address(manager)));
        require(address(counter) == hookAddress, "MsgSenderHookDataTest: hook address mismatch");

        // Create the pool
        poolKey = PoolKey(currency0, currency1, 3000, 60, IHooks(counter));
        poolId = poolKey.toId();
        manager.initialize(poolKey, SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyLiquidityRouter.modifyLiquidity(
            poolKey, IPoolManager.ModifyLiquidityParams(-60, 60, 10 ether), ZERO_BYTES
        );
        modifyLiquidityRouter.modifyLiquidity(
            poolKey, IPoolManager.ModifyLiquidityParams(-120, 120, 10 ether), ZERO_BYTES
        );
        modifyLiquidityRouter.modifyLiquidity(
            poolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 10 ether),
            ZERO_BYTES
        );
    }

    function test_msgSenderHookData() public {
        IERC20 token0 = IERC20(Currency.unwrap(currency0));
        counter.setAllowedUser(alice, true);
        token0.transfer(alice, 100 ether);

        vm.startPrank(alice);
        token0.approve(address(swapRouter), type(uint256).max);

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        swap(poolKey, zeroForOne, amount, abi.encode(alice));
        // ------------------- //
        vm.stopPrank();
    }

    function test_msgSenderRevert() public {
        IERC20 token0 = IERC20(Currency.unwrap(currency0));
        counter.setAllowedUser(alice, false);
        token0.transfer(alice, 100 ether);

        vm.startPrank(alice);
        token0.approve(address(swapRouter), type(uint256).max);

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        vm.expectRevert();
        swap(poolKey, zeroForOne, amount, abi.encode(alice));
        // ------------------- //
        vm.stopPrank();
    }
}
