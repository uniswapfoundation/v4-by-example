---
title: Single Swap
version: 0.8.20
description: Swapping on a single pool
keywords: [swap, trade, swapping]
---

> Expect Uniswap Labs to release an official contract around launch

Using the `v4-core` provided *test* router, we can swap on a single pool. These snippets should only be used for non-production, testing purposes

Swapping, in production, will typically use a periphery contract. It is **not** recommended to directly swap with `poolManager.swap`

Swapping involves 3 primary arguments:

* Which pool/hook to swap on
* The direction of the swap, token0 -> token1 or token1 -> token0
* The input token amount

(Note: A quoter contract is unavailable at this time)

```solidity
{{{Swap}}}
```

### Examples of Swapping on a V4 Pool

```solidity
{{{SwapExampleInputs}}}
```
