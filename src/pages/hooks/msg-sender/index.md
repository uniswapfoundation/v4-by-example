---
title: Access msg.sender within a Hook
version: 0.8.20
description: Access msg.sender within a hook
keywords: [hook, hooks, msg.sender, msgsender, sender]
---

Please note there are multiple solutions -- each includes different tradeoffs

### Using `hookData`

Callers (EOAs / contracts / multisigs) of periphery contracts (`PoolSwapTest`) can provide the user's address as the `hookData` argument

* Tradeoff: Routing, quoters, and user interfaces will need to be aware of this non-standard parameter

### Get Lock Caller

Callers can use the `PoolManager` to invoke a periphery router. The lock caller is saved in transient storage and can be accessed within a hook

* Tradeoff: the transaction entrypoint is `poolManager.lock` and not `PoolSwapTest.swap`, leading to unconventional UX

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
