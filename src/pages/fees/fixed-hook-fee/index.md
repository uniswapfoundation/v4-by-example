---
title: Static Hook Fee
version: 0.8.20
description: Charge a static hook fee
keywords: [hook, hooks, fee, static fee, hook fee]
---

- Charge a static hook fee

Optional hook fees are taken (from swappers) via the Access Lock. Hook fees can be dynamically calculated, or simply set to a fixed amount.

This example showcases a static fee amount

---
## Example Static Hook Fee

`FIXED_HOOK_FEE = 0.0001e18`

The hook fee is on the *input* token. If `swapAmount = 1e18`, the swapper pays `1.0001e18`

```solidity
{{{FixedHookFee}}}
```

Collecting the fee, to recipient `alice`
```solidity
hook.collectFee(address(alice), Currency.wrap(address(TOKEN)));
```

#### Enabling Access Lock

To allow a hook to call `poolManager.mint` (fee taking), without a lock, you need to enable the `ACCESS_LOCK` permission

```solidity
{{{EnableAccessLock}}}
```

Example permissions during hook deployment:
```solidity
{{{SetAccessLockPermission}}}
```
