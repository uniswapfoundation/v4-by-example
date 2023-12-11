---
title: Custom Curve
version: 0.8.20
description: Replace v3 concentrated liquidity curve
keywords: [hook, hooks, noop, no-op, custom curve, custom accounting]
---

- Replace the v3 concentrated liquidity curve with your own

In v4, hooks can swap on any curve, formula, or arbitrary logic (offchain quoters). Custom curves may include:

* Constant-sum: always swap tokens 1:1
* [StableSwap](https://docs.curve.fi/pdf/stableswap-paper.pdf)
* [LAMMbert](https://github.com/euler-mab/LAMMbert/blob/main/LAMMbert.pdf)

Custom curves will require [NoOp](https://www.v4-by-example.org/hooks/no-op) to *skip v3 swap math*

By creating credits and debits through the `PoolManager`, custom curves can be supported on the official Uniswap router

---

## Custom Curve Template

To get started with a custom curve, simply implement `getTokenIn()`, `getTokenOut()`, and `addLiquidity()`

```solidity
{{{CustomCurve}}}
```