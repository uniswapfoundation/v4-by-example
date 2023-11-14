---
title: Initialize a Pool
version: 0.8.20
description: Initializing a pool in Uniswap v4
keywords: [pool, initialize, init, create, pair, factory]
---

- Create a Uniswap v4 Pool

A single trading pair (_ETH/USDC_), can exist as an infinite number of pools in v4. Uniswap v4 does **not** restrict fee tiers to 1%, 0.30%, or 0.05%. A trading pair exists as many pools, but one _pool_ has one _hook contract_

In V4, pools are initialized and managed by a single contract: `PoolManager`

_Think of a `PoolKey` as the unique identifier for a pool, i.e. like a v3 pair's contract address_

Creating a Pool is determined by 5 primary arguments:

- Trading pair _currency0, currency1_
- Fee tier
- Tick spacing
- Hook
- Starting Price

```solidity
{{{PoolInitialize}}}
```

### Examples of Initializing a V4 Pool

_Hooks are not mandatory, you can create a pool without a hook_

```solidity
{{{Hookless}}}
```

_Some hooks may require initialization data, i.e. `block.timestamp`_

```solidity
{{{HookDataInit}}}
```
