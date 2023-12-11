// metadata
export const version = "0.8.20"
export const title = "Single Swap"
export const description = "Swapping on a single pool"

export const keywords = [
    "swap",
    "trade",
    "swapping",
]

export const codes = [
    {
        fileName: "Swap.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS90eXBlcy9Qb29sS2V5LnNvbCI7CmltcG9ydCB7UG9vbFN3YXBUZXN0fSBmcm9tICJ2NC1jb3JlL3Rlc3QvUG9vbFN3YXBUZXN0LnNvbCI7CmltcG9ydCB7VGlja01hdGh9IGZyb20gInY0LWNvcmUvbGlicmFyaWVzL1RpY2tNYXRoLnNvbCI7Cgpjb250cmFjdCBTd2FwIHsKICAgIC8vIHNldCB0aGUgcm91dGVyIGFkZHJlc3MKICAgIFBvb2xTd2FwVGVzdCBzd2FwUm91dGVyID0gUG9vbFN3YXBUZXN0KGFkZHJlc3MoMHgwMSkpOwoKICAgIC8vIHNsaXBwYWdlIHRvbGVyYW5jZSB0byBhbGxvdyBmb3IgdW5saW1pdGVkIHByaWNlIGltcGFjdAogICAgdWludDE2MCBwdWJsaWMgY29uc3RhbnQgTUlOX1BSSUNFX0xJTUlUID0gVGlja01hdGguTUlOX1NRUlRfUkFUSU8gKyAxOwogICAgdWludDE2MCBwdWJsaWMgY29uc3RhbnQgTUFYX1BSSUNFX0xJTUlUID0gVGlja01hdGguTUFYX1NRUlRfUkFUSU8gLSAxOwoKICAgIC8vLyBAbm90aWNlIFN3YXAgdG9rZW5zCiAgICAvLy8gQHBhcmFtIGtleSB0aGUgcG9vbCB3aGVyZSB0aGUgc3dhcCBpcyBoYXBwZW5pbmcKICAgIC8vLyBAcGFyYW0gYW1vdW50U3BlY2lmaWVkIHRoZSBhbW91bnQgb2YgdG9rZW5zIHRvIHN3YXAKICAgIC8vLyBAcGFyYW0gemVyb0Zvck9uZSB3aGV0aGVyIHRoZSBzd2FwIGlzIHRva2VuMCAtPiB0b2tlbjEgb3IgdG9rZW4xIC0+IHRva2VuMAogICAgLy8vIEBwYXJhbSBob29rRGF0YSBhbnkgZGF0YSB0byBiZSBwYXNzZWQgdG8gdGhlIHBvb2wncyBob29rCiAgICBmdW5jdGlvbiBzd2FwKFBvb2xLZXkgbWVtb3J5IGtleSwgaW50MjU2IGFtb3VudFNwZWNpZmllZCwgYm9vbCB6ZXJvRm9yT25lLCBieXRlcyBtZW1vcnkgaG9va0RhdGEpIGludGVybmFsIHsKICAgICAgICBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBtZW1vcnkgcGFyYW1zID0gSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMoewogICAgICAgICAgICB6ZXJvRm9yT25lOiB6ZXJvRm9yT25lLAogICAgICAgICAgICBhbW91bnRTcGVjaWZpZWQ6IGFtb3VudFNwZWNpZmllZCwKICAgICAgICAgICAgc3FydFByaWNlTGltaXRYOTY6IHplcm9Gb3JPbmUgPyBNSU5fUFJJQ0VfTElNSVQgOiBNQVhfUFJJQ0VfTElNSVQgLy8gdW5saW1pdGVkIGltcGFjdAogICAgICAgIH0pOwoKICAgICAgICAvLyBpbiB2NCwgdXNlcnMgaGF2ZSB0aGUgb3B0aW9uIHRvIHJlY2VpZXZlIG5hdGl2ZSBFUkMyMHMgb3Igd3JhcHBlZCBFUkMxMTU1IHRva2VucwogICAgICAgIC8vIGhlcmUsIHdlJ2xsIHRha2UgdGhlIEVSQzIwcwogICAgICAgIFBvb2xTd2FwVGVzdC5UZXN0U2V0dGluZ3MgbWVtb3J5IHRlc3RTZXR0aW5ncyA9CiAgICAgICAgICAgIFBvb2xTd2FwVGVzdC5UZXN0U2V0dGluZ3Moe3dpdGhkcmF3VG9rZW5zOiB0cnVlLCBzZXR0bGVVc2luZ1RyYW5zZmVyOiB0cnVlLCBjdXJyZW5jeUFscmVhZHlTZW50OiBmYWxzZX0pOwoKICAgICAgICBzd2FwUm91dGVyLnN3YXAoa2V5LCBwYXJhbXMsIHRlc3RTZXR0aW5ncywgaG9va0RhdGEpOwogICAgfQp9Cg==",
    },
    {
        fileName: "SwapExampleInputs.sol",
        code: "UG9vbFN3YXBUZXN0IHN3YXBSb3V0ZXIgPSBQb29sU3dhcFRlc3QoMHgwMSk7CgovLyBzbGlwcGFnZSB0b2xlcmFuY2UgdG8gYWxsb3cgZm9yIHVubGltaXRlZCBwcmljZSBpbXBhY3QKdWludDE2MCBwdWJsaWMgY29uc3RhbnQgTUlOX1BSSUNFX0xJTUlUID0gVGlja01hdGguTUlOX1NRUlRfUkFUSU8gKyAxOwp1aW50MTYwIHB1YmxpYyBjb25zdGFudCBNQVhfUFJJQ0VfTElNSVQgPSBUaWNrTWF0aC5NQVhfU1FSVF9SQVRJTyAtIDE7CgphZGRyZXNzIHRva2VuMCA9IGFkZHJlc3MoMHgxMSk7CmFkZHJlc3MgdG9rZW4xID0gYWRkcmVzcygweDIyKTsKYWRkcmVzcyBob29rQWRkciA9IGFkZHJlc3MoMHgzMyk7CgpQb29sS2V5IG1lbW9yeSBwb29sID0gUG9vbEtleSh7CiAgICBjdXJyZW5jeTA6IEN1cnJlbmN5LndyYXAodG9rZW4wKSwKICAgIGN1cnJlbmN5MTogQ3VycmVuY3kud3JhcCh0b2tlbjEpLAogICAgZmVlOiAzMDAwLAogICAgdGlja1NwYWNpbmc6IDYwLAogICAgaG9va3M6IElIb29rcyhob29rQWRkcikKfSk7CgovLyBhcHByb3ZlIHRva2VucyB0byB0aGUgc3dhcCByb3V0ZXIKSUVSQzIwKHRva2VuMCkuYXBwcm92ZShhZGRyZXNzKHN3YXBSb3V0ZXIpLCB0eXBlKHVpbnQyNTYpLm1heCk7CklFUkMyMCh0b2tlbjEpLmFwcHJvdmUoYWRkcmVzcyhzd2FwUm91dGVyKSwgdHlwZSh1aW50MjU2KS5tYXgpOwoKLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvLwovLyBTd2FwIDFlMTggdG9rZW4wIGludG8gdG9rZW4xCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy8KYm9vbCB6ZXJvRm9yT25lID0gdHJ1ZTsKSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgbWVtb3J5IHBhcmFtcyA9IElQb29sTWFuYWdlci5Td2FwUGFyYW1zKHsKICAgIHplcm9Gb3JPbmU6IHplcm9Gb3JPbmUsCiAgICBhbW91bnRTcGVjaWZpZWQ6IDFlMTgsCiAgICBzcXJ0UHJpY2VMaW1pdFg5NjogemVyb0Zvck9uZSA/IE1JTl9QUklDRV9MSU1JVCA6IE1BWF9QUklDRV9MSU1JVCAvLyB1bmxpbWl0ZWQgaW1wYWN0Cn0pOwoKLy8gaW4gdjQsIHVzZXJzIGhhdmUgdGhlIG9wdGlvbiB0byByZWNlaWV2ZSBuYXRpdmUgRVJDMjBzIG9yIHdyYXBwZWQgRVJDMTE1NSB0b2tlbnMKLy8gaGVyZSwgd2UnbGwgdGFrZSB0aGUgRVJDMjBzClBvb2xTd2FwVGVzdC5UZXN0U2V0dGluZ3MgbWVtb3J5IHRlc3RTZXR0aW5ncyA9CiAgICBQb29sU3dhcFRlc3QuVGVzdFNldHRpbmdzKHt3aXRoZHJhd1Rva2VuczogdHJ1ZSwgc2V0dGxlVXNpbmdUcmFuc2ZlcjogdHJ1ZX0pOwoKYnl0ZXMgbWVtb3J5IGhvb2tEYXRhID0gbmV3IGJ5dGVzKDApOyAvLyBubyBob29rIGRhdGEgb24gdGhlIGhvb2tsZXNzIHBvb2wKc3dhcFJvdXRlci5zd2FwKGtleSwgcGFyYW1zLCB0ZXN0U2V0dGluZ3MsIGhvb2tEYXRhKTsK",
    },
]

const html = `<ul>
<li>Swap between tokens on a single pool</li>
</ul>
<p>Swapping will typically make use of a periphery contract. It is <strong>not</strong> recommended to directly swap with <code>poolManager.swap</code></p>
<hr>
<p>Using the <code>v4-core</code> provided <em>test</em> router, we can swap on a single pool. These snippets should only be used for non-production, testing purposes</p>
<hr>
<p>Swapping involves 3 primary arguments:</p>
<ul>
<li>Which pool to swap on</li>
<li>The direction of the swap, <code>token0 -&gt; token1</code> or <code>token1 -&gt; token0</code></li>
<li>The input token amount</li>
</ul>
<p>(Note: A quoter contract is unavailable at this time)</p>
<h4>Expect Uniswap Labs to release an official contract around launch</h4>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolSwapTest</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/test/PoolSwapTest.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">TickMath</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/TickMath.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Swap</span> </span>{
    <span class="hljs-comment">// set the router address</span>
    PoolSwapTest swapRouter <span class="hljs-operator">=</span> PoolSwapTest(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x01</span>));

    <span class="hljs-comment">// slippage tolerance to allow for unlimited price impact</span>
    <span class="hljs-keyword">uint160</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MIN_PRICE_LIMIT <span class="hljs-operator">=</span> TickMath.MIN_SQRT_RATIO <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
    <span class="hljs-keyword">uint160</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MAX_PRICE_LIMIT <span class="hljs-operator">=</span> TickMath.MAX_SQRT_RATIO <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;

    <span class="hljs-comment">/// @notice Swap tokens</span>
    <span class="hljs-comment">/// @param key the pool where the swap is happening</span>
    <span class="hljs-comment">/// @param amountSpecified the amount of tokens to swap</span>
    <span class="hljs-comment">/// @param zeroForOne whether the swap is token0 -&gt; token1 or token1 -&gt; token0</span>
    <span class="hljs-comment">/// @param hookData any data to be passed to the pool&#x27;s hook</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">PoolKey <span class="hljs-keyword">memory</span> key, <span class="hljs-keyword">int256</span> amountSpecified, <span class="hljs-keyword">bool</span> zeroForOne, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        IPoolManager.SwapParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> IPoolManager.SwapParams({
            zeroForOne: zeroForOne,
            amountSpecified: amountSpecified,
            sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT <span class="hljs-comment">// unlimited impact</span>
        });

        <span class="hljs-comment">// in v4, users have the option to receieve native ERC20s or wrapped ERC1155 tokens</span>
        <span class="hljs-comment">// here, we&#x27;ll take the ERC20s</span>
        PoolSwapTest.TestSettings <span class="hljs-keyword">memory</span> testSettings <span class="hljs-operator">=</span>
            PoolSwapTest.TestSettings({withdrawTokens: <span class="hljs-literal">true</span>, settleUsingTransfer: <span class="hljs-literal">true</span>, currencyAlreadySent: <span class="hljs-literal">false</span>});

        swapRouter.swap(key, params, testSettings, hookData);
    }
}
</code></pre><h3>Examples of Swapping on a V4 Pool</h3>
<pre><code class="language-solidity">PoolSwapTest swapRouter <span class="hljs-operator">=</span> PoolSwapTest(<span class="hljs-number">0x01</span>);

<span class="hljs-comment">// slippage tolerance to allow for unlimited price impact</span>
<span class="hljs-keyword">uint160</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MIN_PRICE_LIMIT <span class="hljs-operator">=</span> TickMath.MIN_SQRT_RATIO <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
<span class="hljs-keyword">uint160</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MAX_PRICE_LIMIT <span class="hljs-operator">=</span> TickMath.MAX_SQRT_RATIO <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;

<span class="hljs-keyword">address</span> token0 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x11</span>);
<span class="hljs-keyword">address</span> token1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x22</span>);
<span class="hljs-keyword">address</span> hookAddr <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x33</span>);

PoolKey <span class="hljs-keyword">memory</span> pool <span class="hljs-operator">=</span> PoolKey({
    currency0: Currency.<span class="hljs-built_in">wrap</span>(token0),
    currency1: Currency.<span class="hljs-built_in">wrap</span>(token1),
    fee: <span class="hljs-number">3000</span>,
    tickSpacing: <span class="hljs-number">60</span>,
    hooks: IHooks(hookAddr)
});

<span class="hljs-comment">// approve tokens to the swap router</span>
IERC20(token0).approve(<span class="hljs-keyword">address</span>(swapRouter), <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);
IERC20(token1).approve(<span class="hljs-keyword">address</span>(swapRouter), <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);

<span class="hljs-comment">// ---------------------------- //</span>
<span class="hljs-comment">// Swap 1e18 token0 into token1</span>
<span class="hljs-comment">// ---------------------------- //</span>
<span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
IPoolManager.SwapParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> IPoolManager.SwapParams({
    zeroForOne: zeroForOne,
    amountSpecified: <span class="hljs-number">1e18</span>,
    sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT <span class="hljs-comment">// unlimited impact</span>
});

<span class="hljs-comment">// in v4, users have the option to receieve native ERC20s or wrapped ERC1155 tokens</span>
<span class="hljs-comment">// here, we&#x27;ll take the ERC20s</span>
PoolSwapTest.TestSettings <span class="hljs-keyword">memory</span> testSettings <span class="hljs-operator">=</span>
    PoolSwapTest.TestSettings({withdrawTokens: <span class="hljs-literal">true</span>, settleUsingTransfer: <span class="hljs-literal">true</span>});

<span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>(<span class="hljs-number">0</span>); <span class="hljs-comment">// no hook data on the hookless pool</span>
swapRouter.swap(key, params, testSettings, hookData);
</code></pre>`

export default html
