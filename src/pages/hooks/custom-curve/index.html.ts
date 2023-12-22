// metadata
export const version = "0.8.20"
export const title = "Custom Curve"
export const description = "Replace v3 concentrated liquidity curve"

export const keywords = [
    "hook",
    "hooks",
    "noop",
    "no-op",
    "custom curve",
    "custom accounting",
]

export const codes = [
    {
        fileName: "CustomCurve.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCi8vIFRPRE86IHJlcGxhY2Ugd2l0aCB2NC1wZXJpcGhlcnkvQmFzZUhvb2suc29sIHdoZW4gY29tcGF0aWJpbGl0eSBpcyBmaXhlZAppbXBvcnQge0Jhc2VIb29rfSBmcm9tICJAdjQtYnktZXhhbXBsZS91dGlscy9CYXNlSG9vay5zb2wiOwoKaW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9saWJyYXJpZXMvSG9va3Muc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvaW50ZXJmYWNlcy9JUG9vbE1hbmFnZXIuc29sIjsKaW1wb3J0IHtQb29sS2V5fSBmcm9tICJ2NC1jb3JlL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtQb29sSWQsIFBvb2xJZExpYnJhcnl9IGZyb20gInY0LWNvcmUvdHlwZXMvUG9vbElkLnNvbCI7CmltcG9ydCB7Q3VycmVuY3ksIEN1cnJlbmN5TGlicmFyeX0gZnJvbSAidjQtY29yZS90eXBlcy9DdXJyZW5jeS5zb2wiOwoKaW1wb3J0IHtJRVJDMjB9IGZyb20gImZvcmdlLXN0ZC9pbnRlcmZhY2VzL0lFUkMyMC5zb2wiOwoKY29udHJhY3QgQ3VzdG9tQ3VydmUgaXMgQmFzZUhvb2sgewogICAgdXNpbmcgUG9vbElkTGlicmFyeSBmb3IgUG9vbEtleTsKICAgIHVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9wb29sTWFuYWdlcikgQmFzZUhvb2soX3Bvb2xNYW5hZ2VyKSB7fQoKICAgIGZ1bmN0aW9uIGdldEhvb2tQZXJtaXNzaW9ucygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlIHJldHVybnMgKEhvb2tzLlBlcm1pc3Npb25zIG1lbW9yeSkgewogICAgICAgIHJldHVybiBIb29rcy5QZXJtaXNzaW9ucyh7CiAgICAgICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVBZGRMaXF1aWRpdHk6IHRydWUsIC8vIC0tIGRpc2FibGUgdjQgbGlxdWlkaXR5IHdpdGggYSByZXZlcnQgLS0gLy8KICAgICAgICAgICAgYmVmb3JlUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJBZGRMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlclJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVN3YXA6IHRydWUsIC8vIC0tIE5vLW9wJ2luZyB0aGUgc3dhcCAtLSAgLy8KICAgICAgICAgICAgYWZ0ZXJTd2FwOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBub09wOiB0cnVlLCAvLyAtLSBFTkFCTEUgTk8tT1AgLS0gIC8vCiAgICAgICAgICAgIGFjY2Vzc0xvY2s6IHRydWUgLy8gLS0gRU5BQkxFIENVU1RPTSBDVVJWRVMgLS0gLy8KICAgICAgICB9KTsKICAgIH0KCiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy8KICAgIC8vIExpcXVpZGl0eSBGdW5jdGlvbnMgKG5vdCBwcm9kdWN0aW9uIHJlYWR5KSAvLwogICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vCiAgICAvLy8gQG5vdGljZSBBZGQgbGlxdWlkaXR5IGZvciB0aGUgY3VzdG9tIGN1cnZlCiAgICAvLy8gQHBhcmFtIGtleSBQb29sS2V5IG9mIHRoZSBwb29sIHRvIGFkZCBsaXF1aWRpdHkgdG8KICAgIC8vLyBAcGFyYW0gbGlxdWlkaXR5RGVsdGEgQW1vdW50IG9mIGxpcXVpZGl0eSB0byBhZGQKICAgIGZ1bmN0aW9uIGFkZExpcXVpZGl0eShQb29sS2V5IGNhbGxkYXRhIGtleSwgdWludDI1NiBsaXF1aWRpdHlEZWx0YSkgZXh0ZXJuYWwgewogICAgICAgIC8vIEBkZXY6IFVwZGF0ZSB0aGlzCiAgICAgICAgLy8gR2l2ZW4gc3BvdCBwcmljZSBhbmQgdGhlIGN1c3RvbSBjdXJ2ZSwgY2FsY3VsYXRlIHRoZSByYXRpbyBvZiB0b2tlbnMgdG8gYWRkCiAgICAgICAgdWludDI1NiB0b2tlbjBJbjsKICAgICAgICB1aW50MjU2IHRva2VuMUluOwoKICAgICAgICAvLyB0cmFuc2ZlciB0b2tlbnMgdG8gaG9vaywgdG8gYWN0IGFzIGxpcXVpZGl0eSBmb3Igc3dhcHMKICAgICAgICBJRVJDMjAoQ3VycmVuY3kudW53cmFwKGtleS5jdXJyZW5jeTApKS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgdG9rZW4wSW4pOwogICAgICAgIElFUkMyMChDdXJyZW5jeS51bndyYXAoa2V5LmN1cnJlbmN5MSkpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCB0b2tlbjFJbik7CgogICAgICAgIC8vIFRPRE86IHByb2R1Y3Rpb24tcmVhZHkgcmVxdWlyZXMgbWludGluZyBhIHJlY2VpcHQgdG9rZW4gZXRjCiAgICB9CgogICAgLy8vIEBub3RpY2UgQ2FsY3VsYXRlIHRoZSBhbW91bnQgb2YgdG9rZW5zIHBhaWQgYnkgdGhlIHN3YXBwZXIKICAgIC8vLyBAcGFyYW0gcGFyYW1zIFN3YXBQYXJhbXMgcGFzc2VkIHRvIHRoZSBzd2FwIGZ1bmN0aW9uCiAgICAvLy8gQHJldHVybiBUaGUgYW1vdW50IG9mIHRva2VucyBwYWlkIGJ5IHRoZSBzd2FwcGVyCiAgICBmdW5jdGlvbiBnZXRUb2tlbkluQW1vdW50KElQb29sTWFuYWdlci5Td2FwUGFyYW1zIGNhbGxkYXRhIHBhcmFtcykgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiAxZTE4OwogICAgfQoKICAgIC8vLyBAbm90aWNlIENhbGN1bGF0ZSB0aGUgYW1vdW50IG9mIHRva2VucyBzZW50IHRvIHRoZSBzd2FwcGVyCiAgICAvLy8gQHBhcmFtIHBhcmFtcyBTd2FwUGFyYW1zIHBhc3NlZCB0byB0aGUgc3dhcCBmdW5jdGlvbgogICAgLy8vIEByZXR1cm4gVGhlIGFtb3VudCBvZiB0b2tlbnMgc2VudCB0byB0aGUgc3dhcHBlcgogICAgZnVuY3Rpb24gZ2V0VG9rZW5PdXRBbW91bnQoSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIDFlMTg7CiAgICB9CgogICAgZnVuY3Rpb24gYmVmb3JlU3dhcChhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhIGtleSwgSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgY2FsbGRhdGEgcGFyYW1zLCBieXRlcyBjYWxsZGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIG92ZXJyaWRlCiAgICAgICAgcmV0dXJucyAoYnl0ZXM0KQogICAgewogICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgYW1vdW50IG9mIHRva2VucywgYmFzZWQgb24gYSBjdXN0b20gY3VydmUKICAgICAgICB1aW50MjU2IHRva2VuSW5BbW91bnQgPSBnZXRUb2tlbkluQW1vdW50KHBhcmFtcyk7IC8vIGFtb3VudCBvZiB0b2tlbnMgcGFpZCBieSB0aGUgc3dhcHBlcgogICAgICAgIHVpbnQyNTYgdG9rZW5PdXRBbW91bnQgPSBnZXRUb2tlbk91dEFtb3VudChwYXJhbXMpOyAvLyBhbW91bnQgb2YgdG9rZW5zIHNlbnQgdG8gdGhlIHN3YXBwZXIKCiAgICAgICAgLy8gZGV0ZXJtaW5lIGluYm91bmQvb3V0Ym91bmQgdG9rZW4gYmFzZWQgb24gMC0+MSBvciAxLT4wIHN3YXAKICAgICAgICAoQ3VycmVuY3kgaW5ib3VuZCwgQ3VycmVuY3kgb3V0Ym91bmQpID0KICAgICAgICAgICAgcGFyYW1zLnplcm9Gb3JPbmUgPyAoa2V5LmN1cnJlbmN5MCwga2V5LmN1cnJlbmN5MSkgOiAoa2V5LmN1cnJlbmN5MSwga2V5LmN1cnJlbmN5MCk7CgogICAgICAgIC8vIGluYm91bmQgdG9rZW4gaXMgYWRkZWQgdG8gaG9vaydzIHJlc2VydmVzLCBkZWJ0IHBhaWQgYnkgdGhlIHN3YXBwZXIKICAgICAgICBwb29sTWFuYWdlci50YWtlKGluYm91bmQsIGFkZHJlc3ModGhpcyksIHRva2VuSW5BbW91bnQpOwoKICAgICAgICAvLyBvdXRib3VuZCB0b2tlbiBpcyByZW1vdmVkIGZyb20gaG9vaydzIHJlc2VydmVzLCBhbmQgc2VudCB0byB0aGUgc3dhcHBlcgogICAgICAgIG91dGJvdW5kLnRyYW5zZmVyKGFkZHJlc3MocG9vbE1hbmFnZXIpLCB0b2tlbk91dEFtb3VudCk7CiAgICAgICAgcG9vbE1hbmFnZXIuc2V0dGxlKG91dGJvdW5kKTsKCiAgICAgICAgLy8gcHJldmVudCBub3JtYWwgdjQgc3dhcCBsb2dpYyBmcm9tIGV4ZWN1dGluZwogICAgICAgIHJldHVybiBIb29rcy5OT19PUF9TRUxFQ1RPUjsKICAgIH0KCiAgICAvLy8gQG5vdGljZSBObyBsaXF1aWRpdHkgd2lsbCBiZSBtYW5hZ2VkIGJ5IHY0IFBvb2xNYW5hZ2VyCiAgICBmdW5jdGlvbiBiZWZvcmVBZGRMaXF1aWRpdHkoCiAgICAgICAgYWRkcmVzcywKICAgICAgICBQb29sS2V5IGNhbGxkYXRhIGtleSwKICAgICAgICBJUG9vbE1hbmFnZXIuTW9kaWZ5TGlxdWlkaXR5UGFyYW1zIGNhbGxkYXRhLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhCiAgICApIGV4dGVybmFsIG92ZXJyaWRlIHJldHVybnMgKGJ5dGVzNCkgewogICAgICAgIHJldmVydCgiTm8gdjQgTGlxdWlkaXR5IGFsbG93ZWQiKTsKICAgIH0KfQo=",
    },
]

const html = `<ul>
<li>Replace the v3 concentrated liquidity curve with your own</li>
</ul>
<p>In v4, hooks can swap on any curve, formula, or arbitrary logic (offchain quoters). Custom curves may include:</p>
<ul>
<li><a href="https://github.com/saucepoint/v4-constant-sum">Constant-sum</a>: always swap tokens 1:1</li>
<li><a href="https://docs.curve.fi/pdf/stableswap-paper.pdf">StableSwap</a></li>
<li><a href="https://github.com/euler-mab/LAMMbert/blob/main/LAMMbert.pdf">LAMMbert</a></li>
</ul>
<p>Custom curves will require <a href="https://www.v4-by-example.org/hooks/no-op">NoOp</a> to <em>skip v3 swap math</em></p>
<p>By creating credits and debits through the <code>PoolManager</code>, the official Uniswap router can route through custom curves!</p>
<hr>
<h2>Custom Curve Template</h2>
<p>To get started with a custom curve, simply implement <code>getTokenIn()</code>, <code>getTokenOut()</code>, and <code>addLiquidity()</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> replace with v4-periphery/BaseHook.sol when compatibility is fixed</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolId.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Currency</span>, <span class="hljs-title">CurrencyLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/Currency.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">IERC20</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/interfaces/IERC20.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CustomCurve</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- disable v4 liquidity with a revert -- //</span>
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- No-op&#x27;ing the swap --  //</span>
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            noOp: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- ENABLE NO-OP --  //</span>
            accessLock: <span class="hljs-literal">true</span> <span class="hljs-comment">// -- ENABLE CUSTOM CURVES -- //</span>
        });
    }

    <span class="hljs-comment">// ------------------------------------------ //</span>
    <span class="hljs-comment">// Liquidity Functions (not production ready) //</span>
    <span class="hljs-comment">// ------------------------------------------ //</span>
    <span class="hljs-comment">/// @notice Add liquidity for the custom curve</span>
    <span class="hljs-comment">/// @param key PoolKey of the pool to add liquidity to</span>
    <span class="hljs-comment">/// @param liquidityDelta Amount of liquidity to add</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint256</span> liquidityDelta</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// @dev: Update this</span>
        <span class="hljs-comment">// Given spot price and the custom curve, calculate the ratio of tokens to add</span>
        <span class="hljs-keyword">uint256</span> token0In;
        <span class="hljs-keyword">uint256</span> token1In;

        <span class="hljs-comment">// transfer tokens to hook, to act as liquidity for swaps</span>
        IERC20(Currency.<span class="hljs-built_in">unwrap</span>(key.currency0)).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), token0In);
        IERC20(Currency.<span class="hljs-built_in">unwrap</span>(key.currency1)).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), token1In);

        <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> production-ready requires minting a receipt token etc</span>
    }

    <span class="hljs-comment">/// @notice Calculate the amount of tokens paid by the swapper</span>
    <span class="hljs-comment">/// @param params SwapParams passed to the swap function</span>
    <span class="hljs-comment">/// @return The amount of tokens paid by the swapper</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTokenInAmount</span>(<span class="hljs-params">IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-number">1e18</span>;
    }

    <span class="hljs-comment">/// @notice Calculate the amount of tokens sent to the swapper</span>
    <span class="hljs-comment">/// @param params SwapParams passed to the swap function</span>
    <span class="hljs-comment">/// @return The amount of tokens sent to the swapper</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTokenOutAmount</span>(<span class="hljs-params">IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-number">1e18</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        <span class="hljs-comment">// calculate the amount of tokens, based on a custom curve</span>
        <span class="hljs-keyword">uint256</span> tokenInAmount <span class="hljs-operator">=</span> getTokenInAmount(params); <span class="hljs-comment">// amount of tokens paid by the swapper</span>
        <span class="hljs-keyword">uint256</span> tokenOutAmount <span class="hljs-operator">=</span> getTokenOutAmount(params); <span class="hljs-comment">// amount of tokens sent to the swapper</span>

        <span class="hljs-comment">// determine inbound/outbound token based on 0-&gt;1 or 1-&gt;0 swap</span>
        (Currency inbound, Currency outbound) <span class="hljs-operator">=</span>
            params.zeroForOne ? (key.currency0, key.currency1) : (key.currency1, key.currency0);

        <span class="hljs-comment">// inbound token is added to hook&#x27;s reserves, debt paid by the swapper</span>
        poolManager.take(inbound, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), tokenInAmount);

        <span class="hljs-comment">// outbound token is removed from hook&#x27;s reserves, and sent to the swapper</span>
        outbound.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(poolManager), tokenOutAmount);
        poolManager.settle(outbound);

        <span class="hljs-comment">// prevent normal v4 swap logic from executing</span>
        <span class="hljs-keyword">return</span> Hooks.NO_OP_SELECTOR;
    }

    <span class="hljs-comment">/// @notice No liquidity will be managed by v4 PoolManager</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeAddLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span>,
        PoolKey <span class="hljs-keyword">calldata</span> key,
        IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span>,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span>
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">revert</span>(<span class="hljs-string">"No v4 Liquidity allowed"</span>);
    }
}
</code></pre><h3>A note on testing</h3>
<ul>
<li><p>Custom curves will require taking tokens from PoolManager. You should seed some liquidity on the hookless pool seen <a href="https://github.com/saucepoint/v4-constant-sum/blob/main/test/Counter.t.sol#L45-L52">here</a></p>
</li>
<li><p>Custom curves should support both exact-amount-in and exact-amount-out. You can see an example test <a href="https://github.com/saucepoint/v4-constant-sum/blob/main/test/Counter.t.sol#L88-L92">here</a></p>
</li>
</ul>
<p>For an end-to-end complete example of testing a custom curve, please see <a href="https://github.com/saucepoint/v4-constant-sum">constant-sum</a></p>
`

export default html
