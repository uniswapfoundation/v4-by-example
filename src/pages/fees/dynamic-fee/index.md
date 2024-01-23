---
title: Dynamic Fees
version: 0.8.20
description: Design a v4 pool with a dynamic fee
keywords: [fee, fees, dynamic fee, dynamic, poke]
---

- Design a v4 pool with a dynamic fee

Uniswap v4 pools can support dynamic swap fees, and do not need to adhere to a static fee (0.05% / 0.30% / 1.0%). The hook needs to inherit `IDynamicFeeManager` and use `FeeLibrary.DYNAMIC_FEE_FLAG` in its `PoolKey.fee`.

Despite its name, the fee is *cached* by the `PoolManager` and an external call `PoolManager.updateDynamicFee()` is required to change the swap fee.

**Note: dynamic fees can be computed every swap, but incurs a gas overhead**

---

### Initialize a Dynamic Fee Pool

```solidity
import {FeeLibrary} from "v4-core/libraries/FeeLibrary.sol";


poolKey = PoolKey(
    Currency.wrap(address(token0)),
    Currency.wrap(address(token1)),
    FeeLibrary.DYNAMIC_FEE_FLAG, // signal that the pool has a dynamic fee
    60,
    IHooks(hook)
);
initializeRouter.initialize(poolKey, startingPrice, hookData);
```

## Example: Manual Dynamic Fee

*Implements a time-decaying dynamic fee*

* The swap fee starts at 5.0% 
* The fee decays 0.00001% every second
* After 495,000 seconds, the minimum fee is set to 0.05%


1) Inherit `IDynamicFeeManager`
2) Implement `getFee()`
3) Poke `PoolManager.updateDynamicFee()` to change the fee
```solidity
{{{ManualDynamicFee}}}
```

## Example: Automatic Dynamic Fee

*Implements an automatically-updated, time-decaying dynamic fee*

The hook uses `beforeSwap` to automatically poke the PoolManager, ensuring the fee is always up-to-date

*incurs +23,000 gas overhead*
```solidity
{{{AutoDynamicFee}}}
```
