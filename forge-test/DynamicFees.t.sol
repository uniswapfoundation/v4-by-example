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
import {SwapFeeLibrary} from "v4-core/src/libraries/SwapFeeLibrary.sol";
import {Deployers} from "v4-core/test/utils/Deployers.sol";
import {HookMiner} from "./utils/HookMiner.sol";
import {GasSnapshot} from "forge-gas-snapshot/GasSnapshot.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";
import {FixedPointMathLib} from "solmate/utils/FixedPointMathLib.sol";

import {ManualDynamicFee} from "@v4-by-example/pages/fees/dynamic-fee/ManualDynamicFee.sol";
import {AutoDynamicFee} from "@v4-by-example/pages/fees/dynamic-fee/AutoDynamicFee.sol";

contract DynamicFeesTest is Test, Deployers, GasSnapshot {
    using FixedPointMathLib for uint256;
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    AutoDynamicFee autoDynamicFee;
    ManualDynamicFee manualDynamicFee;

    PoolKey autoDynamicFeePoolKey;
    PoolKey manualDynamicFeePoolKey;

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(AutoDynamicFee).creationCode, abi.encode(address(manager)));
        autoDynamicFee = new AutoDynamicFee{salt: salt}(IPoolManager(address(manager)));
        require(address(autoDynamicFee) == hookAddress, "hook address mismatch");

        (hookAddress, salt) =
            HookMiner.find(address(this), uint160(0), type(ManualDynamicFee).creationCode, abi.encode(address(manager)));
        manualDynamicFee = new ManualDynamicFee{salt: salt}(IPoolManager(address(manager)));
        require(address(manualDynamicFee) == hookAddress, "hook address mismatch");

        // Create the pools
        autoDynamicFeePoolKey = PoolKey(currency0, currency1, SwapFeeLibrary.DYNAMIC_FEE_FLAG, 60, IHooks(autoDynamicFee));
        manager.initialize(autoDynamicFeePoolKey, SQRT_RATIO_1_1, ZERO_BYTES);

        manualDynamicFeePoolKey =
            PoolKey(currency0, currency1, SwapFeeLibrary.DYNAMIC_FEE_FLAG, 60, IHooks(manualDynamicFee));
        manager.initialize(manualDynamicFeePoolKey, SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyLiquidityRouter.modifyLiquidity(
            autoDynamicFeePoolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 100000 ether),
            ZERO_BYTES
        );

        modifyLiquidityRouter.modifyLiquidity(
            manualDynamicFeePoolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 100000 ether),
            ZERO_BYTES
        );
    }

    function test_start_autoFee() public {
        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(autoDynamicFeePoolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        // fee on output token, so expect ~0.95e18 output
        assertLt(uint256(-int256(swapDelta.amount1())), 0.95e18);
        assertGt(uint256(-int256(swapDelta.amount1())), 0.94e18);
        assertApproxEqAbs(
            uint256(-int256(swapDelta.amount1())), uint256(amount), uint256(amount).mulWadDown(0.05001e18)
        );
    }

    function test_floor_autoFee() public {
        // skip 496,000 seconds, fee is now floored at 0.05%
        skip(496000);

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(autoDynamicFeePoolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        assertLt(uint256(-int256(swapDelta.amount1())), 0.9995e18);
        assertGt(uint256(-int256(swapDelta.amount1())), 0.9994e18);
        assertApproxEqAbs(
            uint256(-int256(swapDelta.amount1())), uint256(amount), uint256(amount).mulWadDown(0.00051e18)
        );
    }

    function test_start_manualFee() public {
        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(manualDynamicFeePoolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        // fee on output token, so expect ~0.95e18 output
        assertLt(uint256(-int256(swapDelta.amount1())), 0.95e18);
        assertGt(uint256(-int256(swapDelta.amount1())), 0.94e18);
        assertApproxEqAbs(
            uint256(-int256(swapDelta.amount1())), uint256(amount), uint256(amount).mulWadDown(0.05001e18)
        );
    }

    function test_floor_manualFee() public {
        // skip 496,000 seconds, fee is now floored at 0.05%
        skip(496000);

        // manually update the fee
        manualDynamicFee.setFee(manualDynamicFeePoolKey);

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(manualDynamicFeePoolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        assertLt(uint256(-int256(swapDelta.amount1())), 0.9995e18);
        assertGt(uint256(-int256(swapDelta.amount1())), 0.9994e18);
        assertApproxEqAbs(
            uint256(-int256(swapDelta.amount1())), uint256(amount), uint256(amount).mulWadDown(0.00051e18)
        );
    }

    function test_staleFee_manualFee() public {
        // skip 496,000 seconds, but the fee is still 5% since its stale and wasnt updated
        skip(496000);

        // Perform a test swap //
        int256 amount = 1e18;
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(manualDynamicFeePoolKey, zeroForOne, amount, ZERO_BYTES);
        // ------------------- //

        // fee on output token, so expect ~0.95e18 output
        assertLt(uint256(-int256(swapDelta.amount1())), 0.95e18);
        assertGt(uint256(-int256(swapDelta.amount1())), 0.94e18);
        assertApproxEqAbs(
            uint256(-int256(swapDelta.amount1())), uint256(amount), uint256(amount).mulWadDown(0.05001e18)
        );
    }

    function test_snapshot_autoFee() public {
        skip(100_000);
        int256 amount = 1e18;
        bool zeroForOne = true;
        IPoolManager.SwapParams memory params = IPoolManager.SwapParams({
            zeroForOne: zeroForOne,
            amountSpecified: amount,
            sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT // unlimited impact
        });

        PoolSwapTest.TestSettings memory testSettings =
            PoolSwapTest.TestSettings({withdrawTokens: true, settleUsingTransfer: true, currencyAlreadySent: false});

        snapStart("autodynamic fee");
        swapRouter.swap(autoDynamicFeePoolKey, params, testSettings, ZERO_BYTES);
        snapEnd();
    }

    function test_snapshot_manualFee() public {
        skip(100_000);
        // update the fee
        manualDynamicFee.setFee(manualDynamicFeePoolKey);

        int256 amount = 1e18;
        bool zeroForOne = true;
        IPoolManager.SwapParams memory params = IPoolManager.SwapParams({
            zeroForOne: zeroForOne,
            amountSpecified: amount,
            sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT // unlimited impact
        });

        PoolSwapTest.TestSettings memory testSettings =
            PoolSwapTest.TestSettings({withdrawTokens: true, settleUsingTransfer: true, currencyAlreadySent: false});

        snapStart("manual dynamic fee");
        swapRouter.swap(manualDynamicFeePoolKey, params, testSettings, ZERO_BYTES);
        snapEnd();
    }
}
