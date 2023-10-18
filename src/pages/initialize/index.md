---
title: Pool Initialization
version: 0.8.20
description: Initializing a pool in Uniswap v4
keywords: [pool, initialize, init, create, pair, factory]
---

A single trading pair (ETH/USDC), can exist as an infinite number of pools in v4. Uniswap v4 does **not** restrict fee tiers to 1%, 0.30%, or 0.05%. The same trading pair can also have an infinite number of hooks.

Initializing a V3 Pair involved deploying a contract via the factory. In V4, pools are initialized and managed by a single contract: `PoolManager`

```solidity
{{{PoolInitialize}}}
```

### Examples of Initializing a V4 Pool

```solidity
{{{PoolInitializeExampleInputs}}}
```
