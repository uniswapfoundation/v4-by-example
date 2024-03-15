---
title: Custom Curve
version: 0.8.20
description: Replace v3 concentrated liquidity curve
keywords: [hook, hooks, noop, no-op, custom curve, custom accounting]
---

# UNDER CONSTRUCTION

# PROCEED IF YOU ARE BRAVE

## requires using a [bleeding edge PR](https://github.com/Uniswap/v4-core/pull/482)

...

Custom Curves:

- Replace the v3 concentrated liquidity curve with your own

In v4, hooks can swap on any curve, formula, or arbitrary logic (offchain quoters). Custom curves may include:

* [Constant-sum](https://github.com/saucepoint/v4-constant-sum): always swap tokens 1:1
* [StableSwap](https://docs.curve.fi/pdf/stableswap-paper.pdf)
* [LAMMbert](https://github.com/euler-mab/LAMMbert/blob/main/LAMMbert.pdf)
