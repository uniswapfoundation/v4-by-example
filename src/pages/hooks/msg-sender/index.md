---
title: Access `msg.sender`
version: 0.8.20
description: Access msg.sender within a hook
keywords: [hook, hooks, msg.sender, msgsender, sender]
---

Please note accessing `msg.sender` inside a hook has multiple solutions -- each solution includes different tradeoffs

## `bytes memory hookData` - provide the caller as arbitrary data to the periphery router

Callers of periphery contracts (`PoolSwapTest`) should provide the user's address in the `bytes memory hookData` argument

* Tradeoff: Routing and/or user interfaces will need to be aware of this

## Get Current Lock Caller - save the initial lock caller by using the `PoolManager` to invoke a periphery router

Callers of `poolManager.lock` will specify their periphery router (`PoolSwapTest`). The calleris saved to the `Lockers` data structure and accessed with `Lockers.getCurrentLockCaller()`

* Tradeoff: the transaction entrypoint is `poolManager.lock` and not `PoolSwapTest.swap` (nonconventional UX)

---

## `bytes memory hookData`

Provide the user's address to the `PoolSwapTest`
```solidity
IPoolManager.SwapParams memory params;

PoolSwapTest.TestSettings memory testSettings;

bytes memory hookData = abi.encode(address(USER_ADDRESS));
swapRouter.swap(key, params, testSettings, hookData);
```

```solidity
{{{MsgSenderHookData}}}
```

## Get Current Lock Target
