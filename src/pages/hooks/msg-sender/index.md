---
title: Access msg.sender within a Hook
version: 0.8.20
description: Access msg.sender within a hook
keywords: [hook, hooks, msg.sender, msgsender, sender]
---

### Use-cases

Accessing the user's address inside a hook provides a lot of expressivity such as:

- Volume-based discounts
- Permissioned / compliant access

### Using `hookData`

Callers (EOAs / contracts / multisigs) of periphery contracts (`PoolSwapTest`) can provide the user's address as the `hookData` argument

- Tradeoff: Routing, quoters, and user interfaces will need to be aware of this non-standard parameter. `hookData` breaks generic/conventional paths

    - Additionally, it's possible to spoof the "`msg.sender` by manually providing an arbitrary address

---

## `bytes memory hookData`

Provide the user's address to the `PoolSwapTest`

```solidity
{{{PoolSwapTestHookData}}}
```

Decode the `hookData` into an `address` type

```solidity
{{{MsgSenderHookData}}}
```
