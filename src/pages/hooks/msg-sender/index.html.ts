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
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCi8vIFRPRE86IHJlcGxhY2Ugd2l0aCB2NC1wZXJpcGhlcnkvQmFzZUhvb2suc29sIHdoZW4gY29tcGF0aWJpbGl0eSBpcyBmaXhlZAppbXBvcnQge0Jhc2VIb29rfSBmcm9tICJAdjQtYnktZXhhbXBsZS91dGlscy9CYXNlSG9vay5zb2wiOwoKaW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9saWJyYXJpZXMvSG9va3Muc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvaW50ZXJmYWNlcy9JUG9vbE1hbmFnZXIuc29sIjsKaW1wb3J0IHtQb29sS2V5fSBmcm9tICJ2NC1jb3JlL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtQb29sSWQsIFBvb2xJZExpYnJhcnl9IGZyb20gInY0LWNvcmUvdHlwZXMvUG9vbElkLnNvbCI7CmltcG9ydCB7Q3VycmVuY3ksIEN1cnJlbmN5TGlicmFyeX0gZnJvbSAidjQtY29yZS90eXBlcy9DdXJyZW5jeS5zb2wiOwoKaW1wb3J0IHtJRVJDMjB9IGZyb20gImZvcmdlLXN0ZC9pbnRlcmZhY2VzL0lFUkMyMC5zb2wiOwoKY29udHJhY3QgQ3VzdG9tQ3VydmUgaXMgQmFzZUhvb2sgewogICAgdXNpbmcgUG9vbElkTGlicmFyeSBmb3IgUG9vbEtleTsKICAgIHVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9wb29sTWFuYWdlcikgQmFzZUhvb2soX3Bvb2xNYW5hZ2VyKSB7fQoKICAgIGZ1bmN0aW9uIGdldEhvb2tQZXJtaXNzaW9ucygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlIHJldHVybnMgKEhvb2tzLlBlcm1pc3Npb25zIG1lbW9yeSkgewogICAgICAgIHJldHVybiBIb29rcy5QZXJtaXNzaW9ucyh7CiAgICAgICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVNb2RpZnlQb3NpdGlvbjogdHJ1ZSwgLy8gLS0gZGlzYWJsZSB2NCBsaXF1aWRpdHkgd2l0aCBhIHJldmVydCAtLSAvLwogICAgICAgICAgICBhZnRlck1vZGlmeVBvc2l0aW9uOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwgLy8gLS0gTm8tb3AnaW5nIHRoZSBzd2FwIC0tICAvLwogICAgICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckRvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIG5vT3A6IHRydWUsIC8vIC0tIEVOQUJMRSBOTy1PUCAtLSAgLy8KICAgICAgICAgICAgYWNjZXNzTG9jazogdHJ1ZSAvLyAtLSBFTkFCTEUgQ1VTVE9NIENVUlZFUyAtLSAvLwogICAgICAgIH0pOwogICAgfQoKICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvLwogICAgLy8gTGlxdWlkaXR5IEZ1bmN0aW9ucyAobm90IHByb2R1Y3Rpb24gcmVhZHkpIC8vCiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy8KICAgIC8vLyBAbm90aWNlIEFkZCBsaXF1aWRpdHkgZm9yIHRoZSBjdXN0b20gY3VydmUKICAgIC8vLyBAcGFyYW0ga2V5IFBvb2xLZXkgb2YgdGhlIHBvb2wgdG8gYWRkIGxpcXVpZGl0eSB0bwogICAgLy8vIEBwYXJhbSBsaXF1aWRpdHlEZWx0YSBBbW91bnQgb2YgbGlxdWlkaXR5IHRvIGFkZAogICAgZnVuY3Rpb24gYWRkTGlxdWlkaXR5KFBvb2xLZXkgY2FsbGRhdGEga2V5LCB1aW50MjU2IGxpcXVpZGl0eURlbHRhKSBleHRlcm5hbCB7CiAgICAgICAgLy8gQGRldjogVXBkYXRlIHRoaXMKICAgICAgICAvLyBHaXZlbiBzcG90IHByaWNlIGFuZCB0aGUgY3VzdG9tIGN1cnZlLCBjYWxjdWxhdGUgdGhlIHJhdGlvIG9mIHRva2VucyB0byBhZGQKICAgICAgICB1aW50MjU2IHRva2VuMEluOwogICAgICAgIHVpbnQyNTYgdG9rZW4xSW47CgogICAgICAgIC8vIHRyYW5zZmVyIHRva2VucyB0byBob29rLCB0byBhY3QgYXMgbGlxdWlkaXR5IGZvciBzd2FwcwogICAgICAgIElFUkMyMChDdXJyZW5jeS51bndyYXAoa2V5LmN1cnJlbmN5MCkpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCB0b2tlbjBJbik7CiAgICAgICAgSUVSQzIwKEN1cnJlbmN5LnVud3JhcChrZXkuY3VycmVuY3kxKSkudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIHRva2VuMUluKTsKCiAgICAgICAgLy8gVE9ETzogcHJvZHVjdGlvbi1yZWFkeSByZXF1aXJlcyBtaW50aW5nIGEgcmVjZWlwdCB0b2tlbiBldGMKICAgIH0KCiAgICAvLy8gQG5vdGljZSBDYWxjdWxhdGUgdGhlIGFtb3VudCBvZiB0b2tlbnMgcGFpZCBieSB0aGUgc3dhcHBlcgogICAgLy8vIEBwYXJhbSBwYXJhbXMgU3dhcFBhcmFtcyBwYXNzZWQgdG8gdGhlIHN3YXAgZnVuY3Rpb24KICAgIC8vLyBAcmV0dXJuIFRoZSBhbW91bnQgb2YgdG9rZW5zIHBhaWQgYnkgdGhlIHN3YXBwZXIKICAgIGZ1bmN0aW9uIGdldFRva2VuSW5BbW91bnQoSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIDFlMTg7CiAgICB9CgogICAgLy8vIEBub3RpY2UgQ2FsY3VsYXRlIHRoZSBhbW91bnQgb2YgdG9rZW5zIHNlbnQgdG8gdGhlIHN3YXBwZXIKICAgIC8vLyBAcGFyYW0gcGFyYW1zIFN3YXBQYXJhbXMgcGFzc2VkIHRvIHRoZSBzd2FwIGZ1bmN0aW9uCiAgICAvLy8gQHJldHVybiBUaGUgYW1vdW50IG9mIHRva2VucyBzZW50IHRvIHRoZSBzd2FwcGVyCiAgICBmdW5jdGlvbiBnZXRUb2tlbk91dEFtb3VudChJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4gMWUxODsKICAgIH0KCiAgICBmdW5jdGlvbiBiZWZvcmVTd2FwKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zIChieXRlczQpCiAgICB7CiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBhbW91bnQgb2YgdG9rZW5zLCBiYXNlZCBvbiBhIGN1c3RvbSBjdXJ2ZQogICAgICAgIHVpbnQyNTYgdG9rZW5JbkFtb3VudCA9IGdldFRva2VuSW5BbW91bnQocGFyYW1zKTsgLy8gYW1vdW50IG9mIHRva2VucyBwYWlkIGJ5IHRoZSBzd2FwcGVyCiAgICAgICAgdWludDI1NiB0b2tlbk91dEFtb3VudCA9IGdldFRva2VuT3V0QW1vdW50KHBhcmFtcyk7IC8vIGFtb3VudCBvZiB0b2tlbnMgc2VudCB0byB0aGUgc3dhcHBlcgoKICAgICAgICAvLyBkZXRlcm1pbmUgaW5ib3VuZC9vdXRib3VuZCB0b2tlbiBiYXNlZCBvbiAwLT4xIG9yIDEtPjAgc3dhcAogICAgICAgIChDdXJyZW5jeSBpbmJvdW5kLCBDdXJyZW5jeSBvdXRib3VuZCkgPQogICAgICAgICAgICBwYXJhbXMuemVyb0Zvck9uZSA/IChrZXkuY3VycmVuY3kwLCBrZXkuY3VycmVuY3kxKSA6IChrZXkuY3VycmVuY3kxLCBrZXkuY3VycmVuY3kwKTsKCiAgICAgICAgLy8gaW5ib3VuZCB0b2tlbiBpcyBhZGRlZCB0byBob29rJ3MgcmVzZXJ2ZXMsIGRlYnQgcGFpZCBieSB0aGUgc3dhcHBlcgogICAgICAgIHBvb2xNYW5hZ2VyLnRha2UoaW5ib3VuZCwgYWRkcmVzcyh0aGlzKSwgdG9rZW5JbkFtb3VudCk7CgogICAgICAgIC8vIG91dGJvdW5kIHRva2VuIGlzIHJlbW92ZWQgZnJvbSBob29rJ3MgcmVzZXJ2ZXMsIGFuZCBzZW50IHRvIHRoZSBzd2FwcGVyCiAgICAgICAgb3V0Ym91bmQudHJhbnNmZXIoYWRkcmVzcyhwb29sTWFuYWdlciksIHRva2VuT3V0QW1vdW50KTsKICAgICAgICBwb29sTWFuYWdlci5zZXR0bGUob3V0Ym91bmQpOwoKICAgICAgICAvLyBwcmV2ZW50IG5vcm1hbCB2NCBzd2FwIGxvZ2ljIGZyb20gZXhlY3V0aW5nCiAgICAgICAgcmV0dXJuIEhvb2tzLk5PX09QX1NFTEVDVE9SOwogICAgfQoKICAgIC8vLyBAbm90aWNlIE5vIGxpcXVpZGl0eSB3aWxsIGJlIG1hbmFnZWQgYnkgdjQgUG9vbE1hbmFnZXIKICAgIGZ1bmN0aW9uIGJlZm9yZU1vZGlmeVBvc2l0aW9uKAogICAgICAgIGFkZHJlc3MsCiAgICAgICAgUG9vbEtleSBjYWxsZGF0YSBrZXksCiAgICAgICAgSVBvb2xNYW5hZ2VyLk1vZGlmeVBvc2l0aW9uUGFyYW1zIGNhbGxkYXRhLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhCiAgICApIGV4dGVybmFsIG92ZXJyaWRlIHJldHVybnMgKGJ5dGVzNCkgewogICAgICAgIHJldmVydCgiTm8gdjQgTGlxdWlkaXR5IGFsbG93ZWQiKTsKICAgIH0KfQo=",
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
            beforeModifyPosition: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- disable v4 liquidity with a revert -- //</span>
            afterModifyPosition: <span class="hljs-literal">false</span>,
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeModifyPosition</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span>,
        PoolKey <span class="hljs-keyword">calldata</span> key,
        IPoolManager.ModifyPositionParams <span class="hljs-keyword">calldata</span>,
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
