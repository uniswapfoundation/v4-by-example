---
title: Initialize a Pool
version: 0.8.20
description: Initializing a pool in Uniswap v4
keywords: [pool, initialize, init, create, pair, factory]
---

* Create a Uniswap v4 Pool

A single trading pair (*ETH/USDC*), can exist as an infinite number of pools in v4. Uniswap v4 does **not** restrict fee tiers to 1%, 0.30%, or 0.05%. The same trading pair can also have an infinite number of hooks.

Initializing a V3 Pair involved deploying a contract via the factory. In V4, pools are initialized and managed by a single contract: `PoolManager`

*Think of a `PoolKey` as the unique identifier for a pool, i.e. like a v3 pair's contract address*

Creating a Pool is determined by 5 primary arguments:

* Trading pair *currency0, currency1*
* Fee tier
* Tick spacing
* Hook
* Starting Price

```solidity
{{{PoolInitialize}}}
```

### Examples of Initializing a V4 Pool

*Hooks are not mandatory, you can create a pool without a hook*

```solidity
{{{PoolInitializeExampleInputs}}}
```
