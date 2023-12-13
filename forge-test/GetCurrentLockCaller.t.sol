// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import {IHooks} from "v4-core/interfaces/IHooks.sol";
import {Hooks} from "v4-core/libraries/Hooks.sol";
import {TickMath} from "v4-core/libraries/TickMath.sol";
import {IPoolManager} from "v4-core/interfaces/IPoolManager.sol";
import {PoolSwapTest} from "v4-core/test/PoolSwapTest.sol";
import {PoolKey} from "v4-core/types/PoolKey.sol";
import {BalanceDelta} from "v4-core/types/BalanceDelta.sol";
import {PoolId, PoolIdLibrary} from "v4-core/types/PoolId.sol";
import {Constants} from "v4-core/../test/utils/Constants.sol";
import {CurrencyLibrary, Currency} from "v4-core/types/Currency.sol";
import {HookTest} from "./utils/HookTest.sol";
import {GetCurrentLockCaller} from "src/pages/hooks/msg-sender/GetCurrentLockCaller.sol";
import {HookMiner} from "./utils/HookMiner.sol";

contract GetCurrentLockCallerTest is HookTest {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    GetCurrentLockCaller counter;
    PoolKey poolKey;
    PoolId poolId;

    address alice = makeAddr("alice");

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        HookTest.initHookTestEnv();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(GetCurrentLockCaller).creationCode, abi.encode(address(manager)));
        counter = new GetCurrentLockCaller{salt: salt}(IPoolManager(address(manager)));
        require(address(counter) == hookAddress, "GetCurrentLockCallerTest: hook address mismatch");

        // Create the pool
        poolKey = PoolKey(Currency.wrap(address(token0)), Currency.wrap(address(token1)), 3000, 60, IHooks(counter));
        poolId = poolKey.toId();
        initializeRouter.initialize(poolKey, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyPositionRouter.modifyPosition(poolKey, IPoolManager.ModifyPositionParams(-60, 60, 10 ether), ZERO_BYTES);
        modifyPositionRouter.modifyPosition(poolKey, IPoolManager.ModifyPositionParams(-120, 120, 10 ether), ZERO_BYTES);
        modifyPositionRouter.modifyPosition(
            poolKey,
            IPoolManager.ModifyPositionParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 10 ether),
            ZERO_BYTES
        );
    }

    function test_getCurrentLockCaller() public {
        counter.setAllowedUser(alice, true);
        token0.mint(alice, 100 ether);

        vm.startPrank(alice);
        token0.approve(address(swapRouter), type(uint256).max);

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        lockSwap(poolKey, amount, zeroForOne, ZERO_BYTES, false);
        // ------------------- //
        vm.stopPrank();
    }

    function test_getCurrentLockCallerRevert() public {
        counter.setAllowedUser(alice, false);
        token0.mint(alice, 100 ether);

        vm.startPrank(alice);
        token0.approve(address(swapRouter), type(uint256).max);

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        // vm.expectRevert();
        lockSwap(poolKey, amount, zeroForOne, ZERO_BYTES, true);
        // ------------------- //
        vm.stopPrank();
    }

    function lockSwap(PoolKey memory key, int256 amountSpecified, bool zeroForOne, bytes memory hookData, bool expectRevert)
        internal
        returns (BalanceDelta swapDelta)
    {
        IPoolManager.SwapParams memory params = IPoolManager.SwapParams({
            zeroForOne: zeroForOne,
            amountSpecified: amountSpecified,
            sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT // unlimited impact
        });

        PoolSwapTest.TestSettings memory testSettings =
            PoolSwapTest.TestSettings({withdrawTokens: true, settleUsingTransfer: true, currencyAlreadySent: false});

        bytes memory result;
        if (expectRevert) {
            vm.expectRevert();
            result = manager.lock(
                address(swapRouter),
                abi.encode(PoolSwapTest.CallbackData(address(this), testSettings, key, params, hookData))
            );
        } else {
            result = manager.lock(
                address(swapRouter),
                abi.encode(PoolSwapTest.CallbackData(address(this), testSettings, key, params, hookData))
            );
        }

        swapDelta = abi.decode(result, (BalanceDelta));
    }
}
