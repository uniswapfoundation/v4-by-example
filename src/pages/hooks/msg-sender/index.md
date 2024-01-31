---
title: Access msg.sender within a Hook
version: 0.8.20
description: Access msg.sender within a hook
keywords: [hook, hooks, msg.sender, msgsender, sender]
---

Please note there are multiple solutions -- each includes different tradeoffs

### Use-cases

Accessing the user's address inside a hook provides a lot of expressivity such as:

- Volume-based discounts
- Permissioned / compliant access

### Using `hookData`

Callers (EOAs / contracts / multisigs) of periphery contracts (`PoolSwapTest`) can provide the user's address as the `hookData` argument

- Tradeoff: Routing, quoters, and user interfaces will need to be aware of this non-standard parameter. `hookData` breaks generic/conventional paths

### Get Lock Caller

Callers directly use `PoolManager.lock` to invoke a periphery router. The lock caller (i.e. EOA) is saved in transient storage and can be accessed within a hook

- Tradeoff: the transaction entrypoint is `poolManager.lock` and not `PoolSwapTest.swap`, leading to unconventional UX

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

## Get Lock Caller

Invoke `poolManager.lock` with the user, and specify the `PoolSwapTest` router

```solidity
{{{PoolManagerLock}}}
```

Access the Lock Caller via `poolManager.getLock()`

```solidity
{{{GetCurrentLockCaller}}}
```
