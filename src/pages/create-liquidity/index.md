---
title: Create Liquidity
version: 0.8.20
description: Providing Liquidity to a Uniswap V4 Pool
keywords: [liquidity, LP, provision, supply]
---

> Expect Uniswap Labs to release an official contract around launch

> ⚠️ Using the test router in production will lead to a loss of funds ⚠️ 

Using the `v4-core` provided *test* router, we can provide liquidity to a pool. This should only be used for non-production testing purposes




Creating liquidity involves using periphery contracts. It is **not** recommended to directly provide liquidity with `poolManager.modifyPosition`

```solidity
{{{CreateLiquidity}}}
```

### Examples of Providing Liquidity to a V4 Pool

```solidity
{{{CreateLiquidityExampleInputs}}}
```
