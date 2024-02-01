---
title: Swap Fees
version: 0.8.20
description: Swap Fees in v4
keywords: [fees, swap, swap fee, lp fee, fee tier]
---

Swap fees are accrued to liquidity providers and paid by swappers. The core logic and accrual design is exactly the same as v3.

In v3, there were four fixed fee-tiers `0.01%, 0.05%, 0.30%, and 1.0%`. In v4, fee-tiers are continuous

### Fee Charging

Swap fees are charged on the "open" side of a trade

- exact-input: fees are taken from the output token
- exact-output: fees are taken on the input token

Example:

- **Exact Input**: User is swapping exactly 100 USDC into ETH: fee is taken from the **ETH output**
- **Exact Output**: User is willing to pay USDC for 0.01 ETH: fee is taken from the **USDC input**

### Note on Protocol Fee

The protocol fee is **not** currently enabled. However, it is expressed as a percentage of the swap fee and _taken_ from the swap fee

Example:

- swap fee 0.30%, protocol fee 0.10%
- A swapper pays 1e18 in fees (0.30% of their swap size)
- 0.001e18 token (0.10% of 1e18) is taken for the protocol
- 0.999e18 token (99.9% of 1e18) is given the liquidity providers

---

## Example: Setting a Swap Fee

The swap fee is set during pool creation, as defined in its `PoolKey`

```solidity
{{{SetSwapFee}}}
```
