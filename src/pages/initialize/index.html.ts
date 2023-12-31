// metadata
export const version = "0.8.20"
export const title = "Initialize a Pool"
export const description = "Initializing a pool in Uniswap v4"

export const keywords = [
    "pool",
    "initialize",
    "init",
    "create",
    "pair",
    "factory",
]

export const codes = [
    {
        fileName: "HookDataInit.sol",
        code: "UG9vbEluaXRpYWxpemVUZXN0IGluaXRpYWxpemVSb3V0ZXIgPSBQb29sSW5pdGlhbGl6ZVRlc3QoMHgwMSk7CgphZGRyZXNzIGhvb2sgPSBhZGRyZXNzKDB4ODApOyAvLyBwcmVmaXggaW5kaWNhdGVzIHRoZSBob29rIG9ubHkgaGFzIGEgYmVmb3JlSW5pdGlhbGl6ZSgpIGZ1bmN0aW9uCmFkZHJlc3MgdG9rZW4wID0gYWRkcmVzcygweDExKTsKYWRkcmVzcyB0b2tlbjEgPSBhZGRyZXNzKDB4MjIpOwp1aW50MjQgc3dhcEZlZSA9IDMwMDA7IC8vIDAuMzAlIGZlZSB0aWVyCmludDI0IHRpY2tTcGFjaW5nID0gNjA7CgovLyBmbG9vcihzcXJ0KDEpICogMl45NikKdWludDE2MCBzdGFydGluZ1ByaWNlID0gNzkyMjgxNjI1MTQyNjQzMzc1OTM1NDM5NTAzMzY7CgovLyBBc3N1bWUgdGhlIGN1c3RvbSBob29rIHJlcXVpcmVzIGEgdGltZXN0YW1wIHdoZW4gaW5pdGlhbGl6aW5nIGl0CmJ5dGVzIG1lbW9yeSBob29rRGF0YSA9IGFiaS5lbmNvZGUoYmxvY2sudGltZXN0YW1wKTsKClBvb2xLZXkgbWVtb3J5IHBvb2wgPSBQb29sS2V5KHsKICAgIGN1cnJlbmN5MDogQ3VycmVuY3kud3JhcCh0b2tlbjApLAogICAgY3VycmVuY3kxOiBDdXJyZW5jeS53cmFwKHRva2VuMSksCiAgICBmZWU6IHN3YXBGZWUsCiAgICB0aWNrU3BhY2luZzogdGlja1NwYWNpbmcsCiAgICBob29rczogSUhvb2tzKGhvb2spCn0pOwppbml0aWFsaXplUm91dGVyLmluaXRpYWxpemUocG9vbCwgc3RhcnRpbmdQcmljZSwgaG9va0RhdGEpOw==",
    },
    {
        fileName: "Hookless.sol",
        code: "UG9vbEluaXRpYWxpemVUZXN0IGluaXRpYWxpemVSb3V0ZXIgPSBQb29sSW5pdGlhbGl6ZVRlc3QoMHgwMSk7CgphZGRyZXNzIHRva2VuMCA9IGFkZHJlc3MoMHgxMSk7CmFkZHJlc3MgdG9rZW4xID0gYWRkcmVzcygweDIyKTsKdWludDI0IHN3YXBGZWUgPSA1MDA7IC8vIDAuMDUlIGZlZSB0aWVyCmludDI0IHRpY2tTcGFjaW5nID0gMTA7CgovLyBmbG9vcihzcXJ0KDEpICogMl45NikKdWludDE2MCBzdGFydGluZ1ByaWNlID0gNzkyMjgxNjI1MTQyNjQzMzc1OTM1NDM5NTAzMzY7CgovLyBob29rbGVzcyBwb29sIGRvZXNudCBleHBlY3QgYW55IGluaXRpYWxpemF0aW9uIGRhdGEKYnl0ZXMgbWVtb3J5IGhvb2tEYXRhID0gbmV3IGJ5dGVzKDApOwoKUG9vbEtleSBtZW1vcnkgcG9vbCA9IFBvb2xLZXkoewogICAgY3VycmVuY3kwOiBDdXJyZW5jeS53cmFwKHRva2VuMCksCiAgICBjdXJyZW5jeTE6IEN1cnJlbmN5LndyYXAodG9rZW4xKSwKICAgIGZlZTogc3dhcEZlZSwKICAgIHRpY2tTcGFjaW5nOiB0aWNrU3BhY2luZywKICAgIGhvb2tzOiBJSG9va3MoYWRkcmVzcygweDApKSAvLyAhISEgSG9va2xlc3MgcG9vbCBpcyBhZGRyZXNzKDB4MCkKfSk7CmluaXRpYWxpemVSb3V0ZXIuaW5pdGlhbGl6ZShwb29sLCBzdGFydGluZ1ByaWNlLCBob29rRGF0YSk7",
    },
    {
        fileName: "PoolInitialize.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEluaXRpYWxpemVUZXN0fSBmcm9tICJ2NC1jb3JlL3Rlc3QvUG9vbEluaXRpYWxpemVUZXN0LnNvbCI7CmltcG9ydCB7SUhvb2tzfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSUhvb2tzLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS90eXBlcy9Qb29sS2V5LnNvbCI7CmltcG9ydCB7Q3VycmVuY3lMaWJyYXJ5LCBDdXJyZW5jeX0gZnJvbSAidjQtY29yZS90eXBlcy9DdXJyZW5jeS5zb2wiOwoKY29udHJhY3QgUG9vbEluaXRpYWxpemUgewogICAgdXNpbmcgQ3VycmVuY3lMaWJyYXJ5IGZvciBDdXJyZW5jeTsKCiAgICAvLyBzZXQgdGhlIGluaXRpYWxpemUgcm91dGVyCiAgICBQb29sSW5pdGlhbGl6ZVRlc3QgaW5pdGlhbGl6ZVJvdXRlciA9IFBvb2xJbml0aWFsaXplVGVzdChhZGRyZXNzKDB4MDIpKTsKCiAgICBmdW5jdGlvbiBpbml0KAogICAgICAgIGFkZHJlc3MgdG9rZW4wLAogICAgICAgIGFkZHJlc3MgdG9rZW4xLAogICAgICAgIHVpbnQyNCBzd2FwRmVlLAogICAgICAgIGludDI0IHRpY2tTcGFjaW5nLAogICAgICAgIGFkZHJlc3MgaG9vaywKICAgICAgICB1aW50MTYwIHNxcnRQcmljZVg5NiwKICAgICAgICBieXRlcyBjYWxsZGF0YSBob29rRGF0YQogICAgKSBleHRlcm5hbCB7CiAgICAgICAgLy8gc29ydCB5b3VyIHRva2VucyEgdjQgcmVxdWlyZXMgdG9rZW4wIDwgdG9rZW4xCiAgICAgICAgaWYgKHRva2VuMCA+IHRva2VuMSkgewogICAgICAgICAgICAodG9rZW4wLCB0b2tlbjEpID0gKHRva2VuMSwgdG9rZW4wKTsKICAgICAgICB9CgogICAgICAgIFBvb2xLZXkgbWVtb3J5IHBvb2wgPSBQb29sS2V5KHsKICAgICAgICAgICAgY3VycmVuY3kwOiBDdXJyZW5jeS53cmFwKHRva2VuMCksCiAgICAgICAgICAgIGN1cnJlbmN5MTogQ3VycmVuY3kud3JhcCh0b2tlbjEpLAogICAgICAgICAgICBmZWU6IHN3YXBGZWUsCiAgICAgICAgICAgIHRpY2tTcGFjaW5nOiB0aWNrU3BhY2luZywKICAgICAgICAgICAgaG9va3M6IElIb29rcyhob29rKQogICAgICAgIH0pOwogICAgICAgIGluaXRpYWxpemVSb3V0ZXIuaW5pdGlhbGl6ZShwb29sLCBzcXJ0UHJpY2VYOTYsIGhvb2tEYXRhKTsKICAgIH0KfQo=",
    },
]

const html = `<ul>
<li>Create a Uniswap v4 Pool</li>
</ul>
<p>A single trading pair (<em>ETH/USDC</em>), can exist as an infinite number of pools in v4. Uniswap v4 does <strong>not</strong> restrict fee tiers to 1%, 0.30%, or 0.05%. A trading pair exists as many pools, but one <em>pool</em> has one <em>hook contract</em></p>
<p>In V4, pools are initialized and managed by a single contract: <code>PoolManager</code></p>
<p><em>Think of a <code>PoolKey</code> as the unique identifier for a pool, i.e. like a v3 pair&#39;s contract address</em></p>
<p>Creating a Pool is determined by 5 primary arguments:</p>
<ul>
<li>Trading pair <em>currency0, currency1</em></li>
<li>Fee tier</li>
<li>Tick spacing</li>
<li>Hook</li>
<li>Starting Price</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolInitializeTest</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/test/PoolInitializeTest.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IHooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IHooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">CurrencyLibrary</span>, <span class="hljs-title">Currency</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/Currency.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">PoolInitialize</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

    <span class="hljs-comment">// set the initialize router</span>
    PoolInitializeTest initializeRouter <span class="hljs-operator">=</span> PoolInitializeTest(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x02</span>));

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">init</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> token0,
        <span class="hljs-keyword">address</span> token1,
        <span class="hljs-keyword">uint24</span> swapFee,
        <span class="hljs-keyword">int24</span> tickSpacing,
        <span class="hljs-keyword">address</span> hook,
        <span class="hljs-keyword">uint160</span> sqrtPriceX96,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// sort your tokens! v4 requires token0 &lt; token1</span>
        <span class="hljs-keyword">if</span> (token0 <span class="hljs-operator">&gt;</span> token1) {
            (token0, token1) <span class="hljs-operator">=</span> (token1, token0);
        }

        PoolKey <span class="hljs-keyword">memory</span> pool <span class="hljs-operator">=</span> PoolKey({
            currency0: Currency.<span class="hljs-built_in">wrap</span>(token0),
            currency1: Currency.<span class="hljs-built_in">wrap</span>(token1),
            fee: swapFee,
            tickSpacing: tickSpacing,
            hooks: IHooks(hook)
        });
        initializeRouter.initialize(pool, sqrtPriceX96, hookData);
    }
}
</code></pre><h3>Examples of Initializing a V4 Pool</h3>
<p><em>Hooks are not mandatory, you can create a pool without a hook</em></p>
<pre><code class="language-solidity">PoolInitializeTest initializeRouter <span class="hljs-operator">=</span> PoolInitializeTest(<span class="hljs-number">0x01</span>);

<span class="hljs-keyword">address</span> token0 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x11</span>);
<span class="hljs-keyword">address</span> token1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x22</span>);
<span class="hljs-keyword">uint24</span> swapFee <span class="hljs-operator">=</span> <span class="hljs-number">500</span>; <span class="hljs-comment">// 0.05% fee tier</span>
<span class="hljs-keyword">int24</span> tickSpacing <span class="hljs-operator">=</span> <span class="hljs-number">10</span>;

<span class="hljs-comment">// floor(sqrt(1) * 2^96)</span>
<span class="hljs-keyword">uint160</span> startingPrice <span class="hljs-operator">=</span> <span class="hljs-number">79228162514264337593543950336</span>;

<span class="hljs-comment">// hookless pool doesnt expect any initialization data</span>
<span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>(<span class="hljs-number">0</span>);

PoolKey <span class="hljs-keyword">memory</span> pool <span class="hljs-operator">=</span> PoolKey({
    currency0: Currency.<span class="hljs-built_in">wrap</span>(token0),
    currency1: Currency.<span class="hljs-built_in">wrap</span>(token1),
    fee: swapFee,
    tickSpacing: tickSpacing,
    hooks: IHooks(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x0</span>)) <span class="hljs-comment">// !!! Hookless pool is address(0x0)</span>
});
initializeRouter.initialize(pool, startingPrice, hookData);
</code></pre><p><em>Some hooks may require initialization data, i.e. <code>block.timestamp</code></em></p>
<pre><code class="language-solidity">PoolInitializeTest initializeRouter <span class="hljs-operator">=</span> PoolInitializeTest(<span class="hljs-number">0x01</span>);

<span class="hljs-keyword">address</span> hook <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x80</span>); <span class="hljs-comment">// prefix indicates the hook only has a beforeInitialize() function</span>
<span class="hljs-keyword">address</span> token0 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x11</span>);
<span class="hljs-keyword">address</span> token1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x22</span>);
<span class="hljs-keyword">uint24</span> swapFee <span class="hljs-operator">=</span> <span class="hljs-number">3000</span>; <span class="hljs-comment">// 0.30% fee tier</span>
<span class="hljs-keyword">int24</span> tickSpacing <span class="hljs-operator">=</span> <span class="hljs-number">60</span>;

<span class="hljs-comment">// floor(sqrt(1) * 2^96)</span>
<span class="hljs-keyword">uint160</span> startingPrice <span class="hljs-operator">=</span> <span class="hljs-number">79228162514264337593543950336</span>;

<span class="hljs-comment">// Assume the custom hook requires a timestamp when initializing it</span>
<span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);

PoolKey <span class="hljs-keyword">memory</span> pool <span class="hljs-operator">=</span> PoolKey({
    currency0: Currency.<span class="hljs-built_in">wrap</span>(token0),
    currency1: Currency.<span class="hljs-built_in">wrap</span>(token1),
    fee: swapFee,
    tickSpacing: tickSpacing,
    hooks: IHooks(hook)
});
initializeRouter.initialize(pool, startingPrice, hookData);
</code></pre>`

export default html
