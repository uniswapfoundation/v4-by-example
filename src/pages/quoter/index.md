---
title: Quoter
version: 0.8.20
description: Offchain Quoter, to fetch input/output amounts
keywords: [quoter, quoting, exact input, exact output, single, multi, multihop]
---

- Quoting swaps -- for **offchain purposes**

- Quoter performs a swap and reverts, this very *expensive* and should not be used onchain

The `Quoter` contract provides helper functions for quoting different types of swaps:

```
|             | Exact Input           | Exact Output           |
|-------------|-----------------------|------------------------|
| Single Pool | quoteExactInputSingle | quoteExactOutputSingle |
| Multi-hop   | quoteExactInput       | quoteExactOutput       |
```

`Exact Input`: Given the `input` amount, how many *output* tokens can I expect

`Exact Output`: Given the desired `output` amount, how many *input* tokens should I provide

---

## Quoter snippet

```solidity
{{{QuoterSnippet}}}
```

## Example: Single Pool

Please see `testQuoter_output()` and `testQuoter_input()` for example usage and validation
```solidity
{{{Quoter}}}
```
