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
        fileName: "PoolInitialize.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJAdW5pc3dhcC92NC1jb3JlL2NvbnRyYWN0cy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge0lIb29rc30gZnJvbSAiQHVuaXN3YXAvdjQtY29yZS9jb250cmFjdHMvaW50ZXJmYWNlcy9JSG9va3Muc29sIjsKaW1wb3J0IHtQb29sS2V5fSBmcm9tICJAdW5pc3dhcC92NC1jb3JlL2NvbnRyYWN0cy90eXBlcy9Qb29sS2V5LnNvbCI7CmltcG9ydCB7Q3VycmVuY3lMaWJyYXJ5LCBDdXJyZW5jeX0gZnJvbSAiQHVuaXN3YXAvdjQtY29yZS9jb250cmFjdHMvdHlwZXMvQ3VycmVuY3kuc29sIjsKCmNvbnRyYWN0IFBvb2xJbml0aWFsaXplIHsKICAgIHVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CgogICAgLy8gc2V0IHRoZSBwb29sIG1hbmFnZXIgYWRkcmVzcwogICAgSVBvb2xNYW5hZ2VyIG1hbmFnZXIgPSBJUG9vbE1hbmFnZXIoMHgwMSk7CgogICAgZnVuY3Rpb24gaW5pdCgKICAgICAgICBhZGRyZXNzIHRva2VuMCwKICAgICAgICBhZGRyZXNzIHRva2VuMSwKICAgICAgICB1aW50MjQgc3dhcEZlZSwKICAgICAgICBpbnQyNCB0aWNrU3BhY2luZywKICAgICAgICBhZGRyZXNzIGhvb2ssCiAgICAgICAgdWludDE2MCBzcXJ0UHJpY2VYOTYsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgaG9va0RhdGEKICAgICkgZXh0ZXJuYWwgewogICAgICAgIC8vIHNvcnQgeW91ciB0b2tlbnMhIHY0IHJlcXVpcmVzIHRva2VuMCA8IHRva2VuMQogICAgICAgIGlmICh0b2tlbjAgPiB0b2tlbjEpIHsKICAgICAgICAgICAgKHRva2VuMCwgdG9rZW4xKSA9ICh0b2tlbjEsIHRva2VuMCk7CiAgICAgICAgfQoKICAgICAgICBQb29sS2V5IG1lbW9yeSBwb29sID0gUG9vbEtleSh7CiAgICAgICAgICAgIGN1cnJlbmN5MDogQ3VycmVuY3kodG9rZW4wKSwKICAgICAgICAgICAgY3VycmVuY3kxOiBDdXJyZW5jeSh0b2tlbjEpLAogICAgICAgICAgICBmZWU6IHN3YXBGZWUsCiAgICAgICAgICAgIHRpY2tTcGFjaW5nOiB0aWNrU3BhY2luZywKICAgICAgICAgICAgaG9va3M6IElIb29rcyhob29rKQogICAgICAgIH0pOwogICAgICAgIG1hbmFnZXIuaW5pdGlhbGl6ZShwb29sLCBzcXJ0UHJpY2VYOTYsIGhvb2tEYXRhKTsKICAgIH0KfQo=",
    },
    {
        fileName: "PoolInitializeExampleInputs.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJAdW5pc3dhcC92NC1jb3JlL2NvbnRyYWN0cy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge0lIb29rc30gZnJvbSAiQHVuaXN3YXAvdjQtY29yZS9jb250cmFjdHMvaW50ZXJmYWNlcy9JSG9va3Muc29sIjsKaW1wb3J0IHtQb29sS2V5fSBmcm9tICJAdW5pc3dhcC92NC1jb3JlL2NvbnRyYWN0cy90eXBlcy9Qb29sS2V5LnNvbCI7CmltcG9ydCB7Q3VycmVuY3lMaWJyYXJ5LCBDdXJyZW5jeX0gZnJvbSAiQHVuaXN3YXAvdjQtY29yZS9jb250cmFjdHMvdHlwZXMvQ3VycmVuY3kuc29sIjsKCmNvbnRyYWN0IFBvb2xJbml0aWFsaXplRXhhbXBsZUlucHV0cyB7CiAgICB1c2luZyBDdXJyZW5jeUxpYnJhcnkgZm9yIEN1cnJlbmN5OwoKICAgIC8vIHNldCB0aGUgcG9vbCBtYW5hZ2VyIGFkZHJlc3MKICAgIElQb29sTWFuYWdlciBtYW5hZ2VyID0gSVBvb2xNYW5hZ2VyKDB4MDEpOwoKICAgIC8vLyBAbm90aWNlIEluaXRpYWxpemUgYSBob29rbGVzcyBwb29sOgogICAgLy8vICAgICAwLjA1JSBzd2FwIGZlZQogICAgLy8vICAgICB0aWNrIHNwYWNpbmcgb2YgMTAKICAgIC8vLyAgICAgc3RhcnRpbmcgcHJpY2Ugb2YgMToxCiAgICBmdW5jdGlvbiBleGFtcGxlQSgpIGV4dGVybmFsIHsKICAgICAgICBhZGRyZXNzIHRva2VuMCA9IGFkZHJlc3MoMHgxMSk7CiAgICAgICAgYWRkcmVzcyB0b2tlbjEgPSBhZGRyZXNzKDB4MjIpOwogICAgICAgIHVpbnQyNCBzd2FwRmVlID0gNTAwOwogICAgICAgIGludDI0IHRpY2tTcGFjaW5nID0gMTA7CgogICAgICAgIC8vIGZsb29yKHNxcnQoMSkgKiAyXjk2KQogICAgICAgIHVpbnQxNjAgc3RhcnRpbmdQcmljZSA9IDc5MjI4MTYyNTE0MjY0MzM3NTkzNTQzOTUwMzM2OwoKICAgICAgICAvLyBob29rbGVzcyBwb29sIGRvZXNudCBleHBlY3QgYW55IGluaXRpYWxpemF0aW9uIGRhdGEKICAgICAgICBieXRlcyBtZW1vcnkgaG9va0RhdGEgPSBuZXcgYnl0ZXMoMCk7CgogICAgICAgIFBvb2xLZXkgbWVtb3J5IHBvb2wgPSBQb29sS2V5KHsKICAgICAgICAgICAgY3VycmVuY3kwOiBDdXJyZW5jeSh0b2tlbjApLAogICAgICAgICAgICBjdXJyZW5jeTE6IEN1cnJlbmN5KHRva2VuMSksCiAgICAgICAgICAgIGZlZTogc3dhcEZlZSwKICAgICAgICAgICAgdGlja1NwYWNpbmc6IHRpY2tTcGFjaW5nLAogICAgICAgICAgICBob29rczogSUhvb2tzKGFkZHJlc3MoMHgwKSkKICAgICAgICB9KTsKICAgICAgICBtYW5hZ2VyLmluaXRpYWxpemUocG9vbCwgc3RhcnRpbmdQcmljZSwgaG9va0RhdGEpOwogICAgfQoKICAgIC8vLyBAbm90aWNlIEluaXRpYWxpemUgYSBwb29sIHdpdGggYSBjdXN0b20gaG9vazoKICAgIC8vLyAgICAgMC4zMCUgc3dhcCBmZWUKICAgIC8vLyAgICAgdGljayBzcGFjaW5nIG9mIDYwCiAgICAvLy8gICAgIHN0YXJ0aW5nIHByaWNlIG9mIDE6MQogICAgLy8vICAgICBob29rJ3MgYmVmb3JlSW5pdGlhbGl6ZSgpIHJlcXVpcmVzIHByb3ZpZGluZyBhIHRpbWVzdGFtcAogICAgZnVuY3Rpb24gZXhhbXBsZUIoKSBleHRlcm5hbCB7CiAgICAgICAgYWRkcmVzcyBob29rID0gYWRkcmVzcygweDgwKTsgLy8gcHJlZml4IGluZGljYXRlcyB0aGUgaG9vayBvbmx5IGhhcyBhIGJlZm9yZUluaXRpYWxpemUoKSBmdW5jdGlvbgogICAgICAgIGFkZHJlc3MgdG9rZW4wID0gYWRkcmVzcygweDExKTsKICAgICAgICBhZGRyZXNzIHRva2VuMSA9IGFkZHJlc3MoMHgyMik7CiAgICAgICAgdWludDI0IHN3YXBGZWUgPSAzMDAwOwogICAgICAgIGludDI0IHRpY2tTcGFjaW5nID0gNjA7CgogICAgICAgIC8vIGZsb29yKHNxcnQoMSkgKiAyXjk2KQogICAgICAgIHVpbnQxNjAgc3RhcnRpbmdQcmljZSA9IDc5MjI4MTYyNTE0MjY0MzM3NTkzNTQzOTUwMzM2OwoKICAgICAgICAvLyBBc3N1bWUgdGhlIGN1c3RvbSBob29rIHJlcXVpcmVzIGEgdGltZXN0YW1wIHdoZW4gaW5pdGlhbGl6aW5nIGl0CiAgICAgICAgYnl0ZXMgbWVtb3J5IGhvb2tEYXRhID0gYWJpLmVuY29kZShibG9jay50aW1lc3RhbXApOwoKICAgICAgICBQb29sS2V5IG1lbW9yeSBwb29sID0gUG9vbEtleSh7CiAgICAgICAgICAgIGN1cnJlbmN5MDogQ3VycmVuY3kodG9rZW4wKSwKICAgICAgICAgICAgY3VycmVuY3kxOiBDdXJyZW5jeSh0b2tlbjEpLAogICAgICAgICAgICBmZWU6IHN3YXBGZWUsCiAgICAgICAgICAgIHRpY2tTcGFjaW5nOiB0aWNrU3BhY2luZywKICAgICAgICAgICAgaG9va3M6IElIb29rcyhob29rKQogICAgICAgIH0pOwogICAgICAgIG1hbmFnZXIuaW5pdGlhbGl6ZShwb29sLCBzdGFydGluZ1ByaWNlLCBob29rRGF0YSk7CiAgICB9Cn0K",
    },
]

const html = `<ul>
<li>Create a Uniswap v4 Pool</li>
</ul>
<p>A single trading pair (<em>ETH/USDC</em>), can exist as an infinite number of pools in v4. Uniswap v4 does <strong>not</strong> restrict fee tiers to 1%, 0.30%, or 0.05%. The same trading pair can also have an infinite number of hooks.</p>
<p>Initializing a V3 Pair involved deploying a contract via the factory. In V4, pools are initialized and managed by a single contract: <code>PoolManager</code></p>
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

<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IHooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/interfaces/IHooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">CurrencyLibrary</span>, <span class="hljs-title">Currency</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/types/Currency.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">PoolInitialize</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

    <span class="hljs-comment">// set the pool manager address</span>
    IPoolManager manager <span class="hljs-operator">=</span> IPoolManager(<span class="hljs-number">0x01</span>);

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
            currency0: Currency(token0),
            currency1: Currency(token1),
            fee: swapFee,
            tickSpacing: tickSpacing,
            hooks: IHooks(hook)
        });
        manager.initialize(pool, sqrtPriceX96, hookData);
    }
}
</code></pre><h3>Examples of Initializing a V4 Pool</h3>
<p><em>Hooks are not mandatory, you can create a pool without a hook</em></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IHooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/interfaces/IHooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">CurrencyLibrary</span>, <span class="hljs-title">Currency</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/types/Currency.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">PoolInitializeExampleInputs</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

    <span class="hljs-comment">// set the pool manager address</span>
    IPoolManager manager <span class="hljs-operator">=</span> IPoolManager(<span class="hljs-number">0x01</span>);

    <span class="hljs-comment">/// @notice Initialize a hookless pool:</span>
    <span class="hljs-comment">///     0.05% swap fee</span>
    <span class="hljs-comment">///     tick spacing of 10</span>
    <span class="hljs-comment">///     starting price of 1:1</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exampleA</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> token0 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x11</span>);
        <span class="hljs-keyword">address</span> token1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x22</span>);
        <span class="hljs-keyword">uint24</span> swapFee <span class="hljs-operator">=</span> <span class="hljs-number">500</span>;
        <span class="hljs-keyword">int24</span> tickSpacing <span class="hljs-operator">=</span> <span class="hljs-number">10</span>;

        <span class="hljs-comment">// floor(sqrt(1) * 2^96)</span>
        <span class="hljs-keyword">uint160</span> startingPrice <span class="hljs-operator">=</span> <span class="hljs-number">79228162514264337593543950336</span>;

        <span class="hljs-comment">// hookless pool doesnt expect any initialization data</span>
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>(<span class="hljs-number">0</span>);

        PoolKey <span class="hljs-keyword">memory</span> pool <span class="hljs-operator">=</span> PoolKey({
            currency0: Currency(token0),
            currency1: Currency(token1),
            fee: swapFee,
            tickSpacing: tickSpacing,
            hooks: IHooks(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x0</span>))
        });
        manager.initialize(pool, startingPrice, hookData);
    }

    <span class="hljs-comment">/// @notice Initialize a pool with a custom hook:</span>
    <span class="hljs-comment">///     0.30% swap fee</span>
    <span class="hljs-comment">///     tick spacing of 60</span>
    <span class="hljs-comment">///     starting price of 1:1</span>
    <span class="hljs-comment">///     hook&#x27;s beforeInitialize() requires providing a timestamp</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exampleB</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> hook <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x80</span>); <span class="hljs-comment">// prefix indicates the hook only has a beforeInitialize() function</span>
        <span class="hljs-keyword">address</span> token0 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x11</span>);
        <span class="hljs-keyword">address</span> token1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x22</span>);
        <span class="hljs-keyword">uint24</span> swapFee <span class="hljs-operator">=</span> <span class="hljs-number">3000</span>;
        <span class="hljs-keyword">int24</span> tickSpacing <span class="hljs-operator">=</span> <span class="hljs-number">60</span>;

        <span class="hljs-comment">// floor(sqrt(1) * 2^96)</span>
        <span class="hljs-keyword">uint160</span> startingPrice <span class="hljs-operator">=</span> <span class="hljs-number">79228162514264337593543950336</span>;

        <span class="hljs-comment">// Assume the custom hook requires a timestamp when initializing it</span>
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);

        PoolKey <span class="hljs-keyword">memory</span> pool <span class="hljs-operator">=</span> PoolKey({
            currency0: Currency(token0),
            currency1: Currency(token1),
            fee: swapFee,
            tickSpacing: tickSpacing,
            hooks: IHooks(hook)
        });
        manager.initialize(pool, startingPrice, hookData);
    }
}
</code></pre>`

export default html
