---
title: Custom Curve
version: 0.8.20
description: Replace v3 concentrated liquidity curve
keywords: [hook, hooks, noop, no-op, custom curve, custom accounting]
---

- Replace the v3 concentrated liquidity curve with your own

In v4, hooks can swap on any curve, formula, or arbitrary logic (offchain quoters). Custom curves may include:

* [Constant-sum](https://github.com/saucepoint/v4-constant-sum): always swap tokens 1:1
* [StableSwap](https://docs.curve.fi/pdf/stableswap-paper.pdf)
* [LAMMbert](https://github.com/euler-mab/LAMMbert/blob/main/LAMMbert.pdf)

Custom curves will require [NoOp](https://www.v4-by-example.org/hooks/no-op) to *skip v3 swap math*

By creating credits and debits through the `PoolManager`, the official Uniswap router can route through custom curves!

---

## Custom Curve Template

To get started with a custom curve, simply implement `getTokenIn()`, `getTokenOut()`, and `addLiquidity()`

```solidity
{{{CustomCurve}}}
```

### A note on testing

* Custom curves will require taking tokens from PoolManager. You should seed some liquidity on the hookless pool seen [here](https://github.com/saucepoint/v4-constant-sum/blob/main/test/Counter.t.sol#L45-L52)

* Custom curves should support both exact-amount-in and exact-amount-out. You can see an example test [here](https://github.com/saucepoint/v4-constant-sum/blob/main/test/Counter.t.sol#L88-L92)

For an end-to-end complete example of testing a custom curve, please see [constant-sum](https://github.com/saucepoint/v4-constant-sum)
