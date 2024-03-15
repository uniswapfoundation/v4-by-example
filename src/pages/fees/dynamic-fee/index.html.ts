// metadata
export const version = "0.8.20"
export const title = "Dynamic Fees"
export const description = "Design a v4 pool with a dynamic fee"

export const keywords = [
    "fee",
    "fees",
    "dynamic fee",
    "dynamic",
    "poke",
]

export const codes = [
    {
        fileName: "AutoDynamicFee.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gIkB2NC1ieS1leGFtcGxlL3V0aWxzL0Jhc2VIb29rLnNvbCI7CgppbXBvcnQge0hvb2tzfSBmcm9tICJ2NC1jb3JlL3NyYy9saWJyYXJpZXMvSG9va3Muc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvc3JjL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvUG9vbEtleS5zb2wiOwoKLy8vIEBub3RpY2UgQSB0aW1lLWRlY2F5aW5nIGR5bmFtaWNhbGx5IGZlZSwgdXBkYXRlZCBhdXRvbWF0aWNhbGx5IHdpdGggYmVmb3JlU3dhcCgpCmNvbnRyYWN0IEF1dG9EeW5hbWljRmVlIGlzIEJhc2VIb29rIHsKICAgIHVpbnQyNTYgcHVibGljIGltbXV0YWJsZSBzdGFydFRpbWVzdGFtcDsKCiAgICAvLyBTdGFydCBhdCA1JSBmZWUsIGRlY2F5aW5nIGF0IHJhdGUgb2YgMC4wMDAwMSUgcGVyIHNlY29uZAogICAgLy8gYWZ0ZXIgNDk1LDAwMCBzZWNvbmRzICg1LjcyIGRheXMpLCBmZWUgd2lsbCBiZSBhIG1pbmltdW0gb2YgMC4wNSUKICAgIC8vIE5PVEU6IGJlY2F1c2UgZmVlcyBhcmUgdWludDI0LCB3ZSB3aWxsIGxvc2Ugc29tZSBwcmVjaXNpb24KICAgIHVpbnQxMjggcHVibGljIGNvbnN0YW50IFNUQVJUX0ZFRSA9IDUwMDAwMDsgLy8gcmVwcmVzZW50cyA1JQogICAgdWludDEyOCBwdWJsaWMgY29uc3RhbnQgTUlOX0ZFRSA9IDUwMDsgLy8gbWluaW11bSBmZWUgb2YgMC4wNSUKCiAgICB1aW50MTI4IHB1YmxpYyBjb25zdGFudCBkZWNheVJhdGUgPSAxOyAvLyAwLjAwMDAxJSBwZXIgc2Vjb25kCgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9wb29sTWFuYWdlcikgQmFzZUhvb2soX3Bvb2xNYW5hZ2VyKSB7CiAgICAgICAgc3RhcnRUaW1lc3RhbXAgPSBibG9jay50aW1lc3RhbXA7CiAgICB9CgogICAgLy8vIEBkZXYgRGV0ZXJlbWluZXMgYSBQb29sJ3Mgc3dhcCBmZWUKICAgIGZ1bmN0aW9uIHNldEZlZShQb29sS2V5IGNhbGxkYXRhIGtleSkgcHVibGljIHsKICAgICAgICAvLyBMaW5lYXJseSBkZWNheWluZyBmZWUsIHkgPSBteCArIGIKICAgICAgICAvLyBBZnRlciA0OTUsMDAwIHNlY29uZHMgKDUuNzIgZGF5cyksIGZlZSB3aWxsIGJlIGEgbWluaW11bSBvZiAwLjA1JQogICAgICAgIHVpbnQyNCBfY3VycmVudEZlZTsKICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICB1aW50MjU2IHRpbWVFbGFwc2VkID0gYmxvY2sudGltZXN0YW1wIC0gc3RhcnRUaW1lc3RhbXA7CiAgICAgICAgICAgIF9jdXJyZW50RmVlID0gdGltZUVsYXBzZWQgPiA0OTUwMDAgPyB1aW50MjQoTUlOX0ZFRSkgOiB1aW50MjQoKFNUQVJUX0ZFRSAtICh0aW1lRWxhcHNlZCAqIGRlY2F5UmF0ZSkpIC8gMTApOwogICAgICAgIH0KICAgICAgICBwb29sTWFuYWdlci51cGRhdGVEeW5hbWljU3dhcEZlZShrZXksIF9jdXJyZW50RmVlKTsKICAgIH0KCiAgICAvLy8gQGRldiB0aGlzIGV4YW1wbGUgaG9vayBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgYW55IGhvb2tzCiAgICBmdW5jdGlvbiBnZXRIb29rUGVybWlzc2lvbnMoKSBwdWJsaWMgcHVyZSBvdmVycmlkZSByZXR1cm5zIChIb29rcy5QZXJtaXNzaW9ucyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4gSG9va3MuUGVybWlzc2lvbnMoewogICAgICAgICAgICBiZWZvcmVJbml0aWFsaXplOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJJbml0aWFsaXplOiB0cnVlLAogICAgICAgICAgICBiZWZvcmVBZGRMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwKICAgICAgICAgICAgYWZ0ZXJTd2FwOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJEb25hdGU6IGZhbHNlCiAgICAgICAgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gYmVmb3JlU3dhcChhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhIGtleSwgSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgY2FsbGRhdGEsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zIChieXRlczQpCiAgICB7CiAgICAgICAgLy8gdXBkYXRlIHRoZSBmZWUgb24gZXZlcnkgc3dhcAogICAgICAgIC8vIG9wdGltaXphdGlvbjogb25seSBjYWxsIGZvciB0b3Atb2YtYmxvY2sgc3dhcAogICAgICAgIHNldEZlZShrZXkpOwogICAgICAgIHJldHVybiBCYXNlSG9vay5iZWZvcmVTd2FwLnNlbGVjdG9yOwogICAgfQoKICAgIGZ1bmN0aW9uIGFmdGVySW5pdGlhbGl6ZShhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhIGtleSwgdWludDE2MCwgaW50MjQsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zIChieXRlczQpCiAgICB7CiAgICAgICAgc2V0RmVlKGtleSk7CiAgICAgICAgcmV0dXJuIEJhc2VIb29rLmFmdGVySW5pdGlhbGl6ZS5zZWxlY3RvcjsKICAgIH0KfQo=",
    },
    {
        fileName: "ManualDynamicFee.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gIkB2NC1ieS1leGFtcGxlL3V0aWxzL0Jhc2VIb29rLnNvbCI7CgppbXBvcnQge0hvb2tzfSBmcm9tICJ2NC1jb3JlL3NyYy9saWJyYXJpZXMvSG9va3Muc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvc3JjL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvUG9vbEtleS5zb2wiOwoKLy8vIEBub3RpY2UgQSB0aW1lLWRlY2F5aW5nIGR5bmFtaWNhbGx5IGZlZSwgdXBkYXRlZCBtYW51YWxseSB3aXRoIGV4dGVybmFsIFBvb2xNYW5hZ2VyLnVwZGF0ZUR5bmFtaWNTd2FwRmVlKCkgY2FsbHMKY29udHJhY3QgTWFudWFsRHluYW1pY0ZlZSBpcyBCYXNlSG9vayB7CiAgICB1aW50MjU2IHB1YmxpYyBpbW11dGFibGUgc3RhcnRUaW1lc3RhbXA7CgogICAgLy8gU3RhcnQgYXQgNSUgZmVlLCBkZWNheWluZyBhdCByYXRlIG9mIDAuMDAwMDElIHBlciBzZWNvbmQKICAgIC8vIGFmdGVyIDQ5NSwwMDAgc2Vjb25kcyAoNS43MiBkYXlzKSwgZmVlIHdpbGwgYmUgYSBtaW5pbXVtIG9mIDAuMDUlCiAgICAvLyBOT1RFOiBiZWNhdXNlIGZlZXMgYXJlIHVpbnQyNCwgd2Ugd2lsbCBsb3NlIHNvbWUgcHJlY2lzaW9uCiAgICB1aW50MTI4IHB1YmxpYyBjb25zdGFudCBTVEFSVF9GRUUgPSA1MDAwMDA7IC8vIHJlcHJlc2VudHMgNSUKICAgIHVpbnQxMjggcHVibGljIGNvbnN0YW50IE1JTl9GRUUgPSA1MDA7IC8vIG1pbmltdW0gZmVlIG9mIDAuMDUlCgogICAgdWludDEyOCBwdWJsaWMgY29uc3RhbnQgZGVjYXlSYXRlID0gMTsgLy8gMC4wMDAwMSUgcGVyIHNlY29uZAoKICAgIGNvbnN0cnVjdG9yKElQb29sTWFuYWdlciBfcG9vbE1hbmFnZXIpIEJhc2VIb29rKF9wb29sTWFuYWdlcikgewogICAgICAgIHN0YXJ0VGltZXN0YW1wID0gYmxvY2sudGltZXN0YW1wOwogICAgfQoKICAgIC8vLyBAZGV2IERldGVyZW1pbmVzIGEgUG9vbCdzIHN3YXAgZmVlCiAgICBmdW5jdGlvbiBzZXRGZWUoUG9vbEtleSBjYWxsZGF0YSBrZXkpIHB1YmxpYyB7CiAgICAgICAgLy8gTGluZWFybHkgZGVjYXlpbmcgZmVlLCB5ID0gbXggKyBiCiAgICAgICAgLy8gQWZ0ZXIgNDk1LDAwMCBzZWNvbmRzICg1LjcyIGRheXMpLCBmZWUgd2lsbCBiZSBhIG1pbmltdW0gb2YgMC4wNSUKICAgICAgICB1aW50MjQgX2N1cnJlbnRGZWU7CiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgdWludDI1NiB0aW1lRWxhcHNlZCA9IGJsb2NrLnRpbWVzdGFtcCAtIHN0YXJ0VGltZXN0YW1wOwogICAgICAgICAgICBfY3VycmVudEZlZSA9IHRpbWVFbGFwc2VkID4gNDk1MDAwID8gdWludDI0KE1JTl9GRUUpIDogdWludDI0KChTVEFSVF9GRUUgLSAodGltZUVsYXBzZWQgKiBkZWNheVJhdGUpKSAvIDEwKTsKICAgICAgICB9CiAgICAgICAgcG9vbE1hbmFnZXIudXBkYXRlRHluYW1pY1N3YXBGZWUoa2V5LCBfY3VycmVudEZlZSk7CiAgICB9CgogICAgZnVuY3Rpb24gYWZ0ZXJJbml0aWFsaXplKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCB1aW50MTYwLCBpbnQyNCwgYnl0ZXMgY2FsbGRhdGEpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBvdmVycmlkZQogICAgICAgIHJldHVybnMgKGJ5dGVzNCkKICAgIHsKICAgICAgICBzZXRGZWUoa2V5KTsKICAgICAgICByZXR1cm4gQmFzZUhvb2suYWZ0ZXJJbml0aWFsaXplLnNlbGVjdG9yOwogICAgfQoKICAgIC8vLyBAZGV2IHRoaXMgZXhhbXBsZSBob29rIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCBhbnkgaG9va3MKICAgIGZ1bmN0aW9uIGdldEhvb2tQZXJtaXNzaW9ucygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlIHJldHVybnMgKEhvb2tzLlBlcm1pc3Npb25zIG1lbW9yeSkgewogICAgICAgIHJldHVybiBIb29rcy5QZXJtaXNzaW9ucyh7CiAgICAgICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckluaXRpYWxpemU6IHRydWUsCiAgICAgICAgICAgIGJlZm9yZUFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyQWRkTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVTd2FwOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJTd2FwOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJEb25hdGU6IGZhbHNlCiAgICAgICAgfSk7CiAgICB9Cn0K",
    },
]

const html = `<ul>
<li>Design a v4 pool with a dynamic fee</li>
</ul>
<p>Uniswap v4 pools can support dynamic swap fees, and do not need to adhere to a static fee (0.05% / 0.30% / 1.0%). The hook needs to use <code>SwapFeeLibrary.DYNAMIC_FEE_FLAG</code> in its <code>PoolKey.fee</code>.</p>
<p>Despite its name, the fee is <em>cached</em> by the <code>PoolManager</code> and <em>the hook</em> must call <code>PoolManager.updateDynamicSwapFee()</code> to change the swap fee.</p>
<p><strong>Note: dynamic fees can be computed every swap, but incurs a gas overhead</strong></p>
<hr>
<h3>Initialize a Dynamic Fee Pool</h3>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> {<span class="hljs-title">SwapFeeLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/SwapFeeLibrary.sol"</span>;


poolKey <span class="hljs-operator">=</span> PoolKey(
    currency0,
    currency1,
    SwapFeeLibrary.DYNAMIC_FEE_FLAG, <span class="hljs-comment">// signal that the pool has a dynamic fee</span>
    <span class="hljs-number">60</span>,
    IHooks(hook)
);
manager.initialize(poolKey, startingPrice, hookData);
</code></pre><h2>Example: Manual Dynamic Fee</h2>
<p><em>Implements a time-decaying dynamic fee</em></p>
<ul>
<li>The swap fee starts at 5.0% </li>
<li>The fee decays 0.00001% every second</li>
<li>After 495,000 seconds, the minimum fee is set to 0.05%</li>
</ul>
<ol start="2">
<li>Implement <code>setFee()</code></li>
<li>Poke <code>hook.setFee()</code> to change the fee</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;

<span class="hljs-comment">/// @notice A time-decaying dynamically fee, updated manually with external PoolManager.updateDynamicSwapFee() calls</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ManualDynamicFee</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> startTimestamp;

    <span class="hljs-comment">// Start at 5% fee, decaying at rate of 0.00001% per second</span>
    <span class="hljs-comment">// after 495,000 seconds (5.72 days), fee will be a minimum of 0.05%</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> because fees are uint24, we will lose some precision</span>
    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> START_FEE <span class="hljs-operator">=</span> <span class="hljs-number">500000</span>; <span class="hljs-comment">// represents 5%</span>
    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MIN_FEE <span class="hljs-operator">=</span> <span class="hljs-number">500</span>; <span class="hljs-comment">// minimum fee of 0.05%</span>

    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> decayRate <span class="hljs-operator">=</span> <span class="hljs-number">1</span>; <span class="hljs-comment">// 0.00001% per second</span>

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{
        startTimestamp <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;
    }

    <span class="hljs-comment">/// @dev Deteremines a Pool&#x27;s swap fee</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setFee</span>(<span class="hljs-params">PoolKey <span class="hljs-keyword">calldata</span> key</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Linearly decaying fee, y = mx + b</span>
        <span class="hljs-comment">// After 495,000 seconds (5.72 days), fee will be a minimum of 0.05%</span>
        <span class="hljs-keyword">uint24</span> _currentFee;
        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">uint256</span> timeElapsed <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">-</span> startTimestamp;
            _currentFee <span class="hljs-operator">=</span> timeElapsed <span class="hljs-operator">&gt;</span> <span class="hljs-number">495000</span> ? <span class="hljs-keyword">uint24</span>(MIN_FEE) : <span class="hljs-keyword">uint24</span>((START_FEE <span class="hljs-operator">-</span> (timeElapsed <span class="hljs-operator">*</span> decayRate)) <span class="hljs-operator">/</span> <span class="hljs-number">10</span>);
        }
        poolManager.updateDynamicSwapFee(key, _currentFee);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterInitialize</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint160</span>, <span class="hljs-keyword">int24</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        setFee(key);
        <span class="hljs-keyword">return</span> BaseHook.afterInitialize.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-comment">/// @dev this example hook contract does not implement any hooks</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">true</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">false</span>,
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>
        });
    }
}
</code></pre><h2>Example: Automatic Dynamic Fee</h2>
<p><em>Implements an automatically-updated, time-decaying dynamic fee</em></p>
<p>The hook uses <code>beforeSwap</code> to automatically call the PoolManager, ensuring the fee is always up-to-date</p>
<p><em>incurs +23,000 gas overhead</em></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;

<span class="hljs-comment">/// @notice A time-decaying dynamically fee, updated automatically with beforeSwap()</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AutoDynamicFee</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> startTimestamp;

    <span class="hljs-comment">// Start at 5% fee, decaying at rate of 0.00001% per second</span>
    <span class="hljs-comment">// after 495,000 seconds (5.72 days), fee will be a minimum of 0.05%</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> because fees are uint24, we will lose some precision</span>
    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> START_FEE <span class="hljs-operator">=</span> <span class="hljs-number">500000</span>; <span class="hljs-comment">// represents 5%</span>
    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MIN_FEE <span class="hljs-operator">=</span> <span class="hljs-number">500</span>; <span class="hljs-comment">// minimum fee of 0.05%</span>

    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> decayRate <span class="hljs-operator">=</span> <span class="hljs-number">1</span>; <span class="hljs-comment">// 0.00001% per second</span>

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{
        startTimestamp <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;
    }

    <span class="hljs-comment">/// @dev Deteremines a Pool&#x27;s swap fee</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setFee</span>(<span class="hljs-params">PoolKey <span class="hljs-keyword">calldata</span> key</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Linearly decaying fee, y = mx + b</span>
        <span class="hljs-comment">// After 495,000 seconds (5.72 days), fee will be a minimum of 0.05%</span>
        <span class="hljs-keyword">uint24</span> _currentFee;
        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">uint256</span> timeElapsed <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">-</span> startTimestamp;
            _currentFee <span class="hljs-operator">=</span> timeElapsed <span class="hljs-operator">&gt;</span> <span class="hljs-number">495000</span> ? <span class="hljs-keyword">uint24</span>(MIN_FEE) : <span class="hljs-keyword">uint24</span>((START_FEE <span class="hljs-operator">-</span> (timeElapsed <span class="hljs-operator">*</span> decayRate)) <span class="hljs-operator">/</span> <span class="hljs-number">10</span>);
        }
        poolManager.updateDynamicSwapFee(key, _currentFee);
    }

    <span class="hljs-comment">/// @dev this example hook contract does not implement any hooks</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">true</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>,
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>
        });
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        <span class="hljs-comment">// update the fee on every swap</span>
        <span class="hljs-comment">// optimization: only call for top-of-block swap</span>
        setFee(key);
        <span class="hljs-keyword">return</span> BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterInitialize</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint160</span>, <span class="hljs-keyword">int24</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        setFee(key);
        <span class="hljs-keyword">return</span> BaseHook.afterInitialize.<span class="hljs-built_in">selector</span>;
    }
}
</code></pre>`

export default html
