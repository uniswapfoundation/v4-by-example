---
title: No Op
version: 0.8.20
description: Elect to skip an operation without reverting
keywords: [hook, hooks, noop, no-op, skip, swap, skip swap]
---

# UNDER CONSTRUCTION

# PROCEED IF YOU ARE BRAVE

## requires using a [bleeding edge PR](https://github.com/Uniswap/v4-core/pull/482)

NoOp:
- Elect to skip an operation (swap, modify position, or donate) without reverting

When a `before` hook returns `Hooks.NO_OP_SELECTOR`, the subsequent operation is *skipped*

> NoOp will *only* work on `beforeSwap`, `beforeModifyPosition`, and `beforeDonate`

The hooks will **not revert**

---

Use-cases:
  * Asynchronous swap fulfillment. Reorder and fulfill swaps at a later point in the time
  * Combine `NoOp` + custom accounting to facilitate swaps with external liquidity

---
