---
title: Create Liquidity
version: 0.8.20
description: Providing Liquidity to a Uniswap V4 Pool
keywords: [liquidity, LP, lp, provide, provision, supply]
---

- Provide Liquidity to a Uniswap v4 Pool

Creating liquidity involves using periphery contracts. It is **not** recommended to directly provide liquidity with `poolManager.modifyPosition`

---

Using the provided _test_ router, we can provide liquidity to a pool. These snippets should only be used for non-production, testing purposes

(⚠️ Using the test router in production **will lead to a loss of funds** ⚠️ )

---

Providing liquidity involves 3 primary arguments:

- Which pool to LP on
- The range of the the liquidity, i.e. the upper and lower bounds
- A `liquidity` value that determines input token amounts

Please see [LiquidityAmounts](https://github.com/Uniswap/v4-periphery/blob/main/contracts/libraries/LiquidityAmounts.sol) for calculating the `liquidity` value

#### Expect Uniswap Labs to release an official contract around launch

```solidity
{{{CreateLiquidity}}}
```

### Examples of Providing Liquidity to a V4 Pool

```solidity
{{{CreateLiquidityExampleInputs}}}
```
