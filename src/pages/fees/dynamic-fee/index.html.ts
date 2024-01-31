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
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCi8vIFRPRE86IHVwZGF0ZSB0byB2NC1wZXJpcGhlcnkvQmFzZUhvb2suc29sIHdoZW4gaXRzIGNvbXBhdGlibGUKaW1wb3J0IHtCYXNlSG9va30gZnJvbSAiQHY0LWJ5LWV4YW1wbGUvdXRpbHMvQmFzZUhvb2suc29sIjsKCmltcG9ydCB7SG9va3N9IGZyb20gInY0LWNvcmUvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS90eXBlcy9Qb29sS2V5LnNvbCI7CmltcG9ydCB7SUR5bmFtaWNGZWVNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSUR5bmFtaWNGZWVNYW5hZ2VyLnNvbCI7CgovLy8gQG5vdGljZSBBIHRpbWUtZGVjYXlpbmcgZHluYW1pY2FsbHkgZmVlLCB1cGRhdGVkIGF1dG9tYXRpY2FsbHkgd2l0aCBiZWZvcmVTd2FwKCkKY29udHJhY3QgQXV0b0R5bmFtaWNGZWUgaXMgQmFzZUhvb2ssIElEeW5hbWljRmVlTWFuYWdlciB7CiAgICB1aW50MjU2IHB1YmxpYyBpbW11dGFibGUgc3RhcnRUaW1lc3RhbXA7CgogICAgLy8gU3RhcnQgYXQgNSUgZmVlLCBkZWNheWluZyBhdCByYXRlIG9mIDAuMDAwMDElIHBlciBzZWNvbmQKICAgIC8vIGFmdGVyIDQ5NSwwMDAgc2Vjb25kcyAoNS43MiBkYXlzKSwgZmVlIHdpbGwgYmUgYSBtaW5pbXVtIG9mIDAuMDUlCiAgICAvLyBOT1RFOiBiZWNhdXNlIGZlZXMgYXJlIHVpbnQyNCwgd2Ugd2lsbCBsb3NlIHNvbWUgcHJlY2lzaW9uCiAgICB1aW50MTI4IHB1YmxpYyBjb25zdGFudCBTVEFSVF9GRUUgPSA1MDAwMDA7IC8vIHJlcHJlc2VudHMgNSUKICAgIHVpbnQxMjggcHVibGljIGNvbnN0YW50IE1JTl9GRUUgPSA1MDA7IC8vIG1pbmltdW0gZmVlIG9mIDAuMDUlCgogICAgdWludDEyOCBwdWJsaWMgY29uc3RhbnQgZGVjYXlSYXRlID0gMTsgLy8gMC4wMDAwMSUgcGVyIHNlY29uZAoKICAgIGNvbnN0cnVjdG9yKElQb29sTWFuYWdlciBfcG9vbE1hbmFnZXIpIEJhc2VIb29rKF9wb29sTWFuYWdlcikgewogICAgICAgIHN0YXJ0VGltZXN0YW1wID0gYmxvY2sudGltZXN0YW1wOwogICAgfQoKICAgIC8vLyBAaW5oZXJpdGRvYyBJRHluYW1pY0ZlZU1hbmFnZXIKICAgIGZ1bmN0aW9uIGdldEZlZShhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhKSBleHRlcm5hbCB2aWV3IG92ZXJyaWRlIHJldHVybnMgKHVpbnQyNCBfY3VycmVudEZlZSkgewogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIHVpbnQyNTYgdGltZUVsYXBzZWQgPSBibG9jay50aW1lc3RhbXAgLSBzdGFydFRpbWVzdGFtcDsKICAgICAgICAgICAgX2N1cnJlbnRGZWUgPSB0aW1lRWxhcHNlZCA+IDQ5NTAwMCA/IHVpbnQyNChNSU5fRkVFKSA6IHVpbnQyNCgoU1RBUlRfRkVFIC0gKHRpbWVFbGFwc2VkICogZGVjYXlSYXRlKSkgLyAxMCk7CiAgICAgICAgfQogICAgfQoKICAgIC8vLyBAZGV2IHRoaXMgZXhhbXBsZSBob29rIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCBhbnkgaG9va3MKICAgIGZ1bmN0aW9uIGdldEhvb2tQZXJtaXNzaW9ucygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlIHJldHVybnMgKEhvb2tzLlBlcm1pc3Npb25zIG1lbW9yeSkgewogICAgICAgIHJldHVybiBIb29rcy5QZXJtaXNzaW9ucyh7CiAgICAgICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVBZGRMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwKICAgICAgICAgICAgYWZ0ZXJTd2FwOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBub09wOiBmYWxzZSwKICAgICAgICAgICAgYWNjZXNzTG9jazogZmFsc2UKICAgICAgICB9KTsKICAgIH0KCiAgICBmdW5jdGlvbiBiZWZvcmVTd2FwKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSwgYnl0ZXMgY2FsbGRhdGEpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBvdmVycmlkZQogICAgICAgIHJldHVybnMgKGJ5dGVzNCkKICAgIHsKICAgICAgICAvLyBwb2tlIHRoZSBwb29sbWFuYWdlciB0byB1cGRhdGUgdGhlIGZlZSBmb3IgZXZlcnkgc3dhcAogICAgICAgIHBvb2xNYW5hZ2VyLnVwZGF0ZUR5bmFtaWNTd2FwRmVlKGtleSk7CiAgICAgICAgcmV0dXJuIEJhc2VIb29rLmJlZm9yZVN3YXAuc2VsZWN0b3I7CiAgICB9Cn0K",
    },
    {
        fileName: "ManualDynamicFee.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCi8vIFRPRE86IHVwZGF0ZSB0byB2NC1wZXJpcGhlcnkvQmFzZUhvb2suc29sIHdoZW4gaXRzIGNvbXBhdGlibGUKaW1wb3J0IHtCYXNlSG9va30gZnJvbSAiQHY0LWJ5LWV4YW1wbGUvdXRpbHMvQmFzZUhvb2suc29sIjsKCmltcG9ydCB7SG9va3N9IGZyb20gInY0LWNvcmUvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS90eXBlcy9Qb29sS2V5LnNvbCI7CmltcG9ydCB7SUR5bmFtaWNGZWVNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSUR5bmFtaWNGZWVNYW5hZ2VyLnNvbCI7CgovLy8gQG5vdGljZSBBIHRpbWUtZGVjYXlpbmcgZHluYW1pY2FsbHkgZmVlLCB1cGRhdGVkIG1hbnVhbGx5IHdpdGggZXh0ZXJuYWwgUG9vbE1hbmFnZXIudXBkYXRlRHluYW1pY1N3YXBGZWUoKSBjYWxscwpjb250cmFjdCBNYW51YWxEeW5hbWljRmVlIGlzIEJhc2VIb29rLCBJRHluYW1pY0ZlZU1hbmFnZXIgewogICAgdWludDI1NiBwdWJsaWMgaW1tdXRhYmxlIHN0YXJ0VGltZXN0YW1wOwoKICAgIC8vIFN0YXJ0IGF0IDUlIGZlZSwgZGVjYXlpbmcgYXQgcmF0ZSBvZiAwLjAwMDAxJSBwZXIgc2Vjb25kCiAgICAvLyBhZnRlciA0OTUsMDAwIHNlY29uZHMgKDUuNzIgZGF5cyksIGZlZSB3aWxsIGJlIGEgbWluaW11bSBvZiAwLjA1JQogICAgLy8gTk9URTogYmVjYXVzZSBmZWVzIGFyZSB1aW50MjQsIHdlIHdpbGwgbG9zZSBzb21lIHByZWNpc2lvbgogICAgdWludDEyOCBwdWJsaWMgY29uc3RhbnQgU1RBUlRfRkVFID0gNTAwMDAwOyAvLyByZXByZXNlbnRzIDUlCiAgICB1aW50MTI4IHB1YmxpYyBjb25zdGFudCBNSU5fRkVFID0gNTAwOyAvLyBtaW5pbXVtIGZlZSBvZiAwLjA1JQoKICAgIHVpbnQxMjggcHVibGljIGNvbnN0YW50IGRlY2F5UmF0ZSA9IDE7IC8vIDAuMDAwMDElIHBlciBzZWNvbmQKCiAgICBjb25zdHJ1Y3RvcihJUG9vbE1hbmFnZXIgX3Bvb2xNYW5hZ2VyKSBCYXNlSG9vayhfcG9vbE1hbmFnZXIpIHsKICAgICAgICBzdGFydFRpbWVzdGFtcCA9IGJsb2NrLnRpbWVzdGFtcDsKICAgIH0KCiAgICAvLy8gQGRldiBEZXRlcmVtaW5lcyBhIFBvb2wncyBzd2FwIGZlZS4gQ2FsbGVkIGFuZCBjYWNoZWQgYnkgUG9vbE1hbmFnZXIudXBkYXRlRHluYW1pY0ZlZSgpCiAgICBmdW5jdGlvbiBnZXRGZWUoYWRkcmVzcywgUG9vbEtleSBjYWxsZGF0YSkgZXh0ZXJuYWwgdmlldyBvdmVycmlkZSByZXR1cm5zICh1aW50MjQgX2N1cnJlbnRGZWUpIHsKICAgICAgICAvLyBMaW5lYXJseSBkZWNheWluZyBmZWUsIHkgPSBteCArIGIKICAgICAgICAvLyBBZnRlciA0OTUsMDAwIHNlY29uZHMgKDUuNzIgZGF5cyksIGZlZSB3aWxsIGJlIGEgbWluaW11bSBvZiAwLjA1JQogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIHVpbnQyNTYgdGltZUVsYXBzZWQgPSBibG9jay50aW1lc3RhbXAgLSBzdGFydFRpbWVzdGFtcDsKICAgICAgICAgICAgX2N1cnJlbnRGZWUgPSB0aW1lRWxhcHNlZCA+IDQ5NTAwMCA/IHVpbnQyNChNSU5fRkVFKSA6IHVpbnQyNCgoU1RBUlRfRkVFIC0gKHRpbWVFbGFwc2VkICogZGVjYXlSYXRlKSkgLyAxMCk7CiAgICAgICAgfQogICAgfQoKICAgIC8vLyBAZGV2IHRoaXMgZXhhbXBsZSBob29rIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCBhbnkgaG9va3MKICAgIGZ1bmN0aW9uIGdldEhvb2tQZXJtaXNzaW9ucygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlIHJldHVybnMgKEhvb2tzLlBlcm1pc3Npb25zIG1lbW9yeSkgewogICAgICAgIHJldHVybiBIb29rcy5QZXJtaXNzaW9ucyh7CiAgICAgICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVBZGRMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyU3dhcDogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZURvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgbm9PcDogZmFsc2UsCiAgICAgICAgICAgIGFjY2Vzc0xvY2s6IGZhbHNlCiAgICAgICAgfSk7CiAgICB9Cn0K",
    },
    {
        fileName: "UpdateDynamicFee.sol",
        code: "aW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvaW50ZXJmYWNlcy9JUG9vbE1hbmFnZXIuc29sIjsKaW1wb3J0IHtQb29sS2V5fSBmcm9tICJ2NC1jb3JlL3R5cGVzL1Bvb2xLZXkuc29sIjsKCi8vIHBva2UgdGhlIHBvb2xtYW5hZ2VyIHRvIHVwZGF0ZSB0aGUgImR5bmFtaWMgZmVlIgpQb29sS2V5IG1lbW9yeSBrZXkgPSBQb29sS2V5KC4uLik7CnBvb2xNYW5hZ2VyLnVwZGF0ZUR5bmFtaWNTd2FwRmVlKGtleSk7Cg==",
    },
]

const html = `<ul>
<li>Design a v4 pool with a dynamic fee</li>
</ul>
<p>Uniswap v4 pools can support dynamic swap fees, and do not need to adhere to a static fee (0.05% / 0.30% / 1.0%). The hook needs to inherit <code>IDynamicFeeManager</code> and use <code>FeeLibrary.DYNAMIC_FEE_FLAG</code> in its <code>PoolKey.fee</code>.</p>
<p>Despite its name, the fee is <em>cached</em> by the <code>PoolManager</code> and an external call <code>PoolManager.updateDynamicFee()</code> is required to change the swap fee.</p>
<p><strong>Note: dynamic fees can be computed every swap, but incurs a gas overhead</strong></p>
<hr>
<h3>Initialize a Dynamic Fee Pool</h3>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> {<span class="hljs-title">FeeLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/FeeLibrary.sol"</span>;


poolKey <span class="hljs-operator">=</span> PoolKey(
    Currency.<span class="hljs-built_in">wrap</span>(<span class="hljs-keyword">address</span>(token0)),
    Currency.<span class="hljs-built_in">wrap</span>(<span class="hljs-keyword">address</span>(token1)),
    FeeLibrary.DYNAMIC_FEE_FLAG, <span class="hljs-comment">// signal that the pool has a dynamic fee</span>
    <span class="hljs-number">60</span>,
    IHooks(hook)
);
initializeRouter.initialize(poolKey, startingPrice, hookData);
</code></pre><h2>Example: Manual Dynamic Fee</h2>
<p><em>Implements a time-decaying dynamic fee</em></p>
<ul>
<li>The swap fee starts at 5.0% </li>
<li>The fee decays 0.00001% every second</li>
<li>After 495,000 seconds, the minimum fee is set to 0.05%</li>
</ul>
<ol>
<li>Inherit <code>IDynamicFeeManager</code></li>
<li>Implement <code>getFee()</code></li>
<li>Poke <code>PoolManager.updateDynamicFee()</code> to change the fee</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> update to v4-periphery/BaseHook.sol when its compatible</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IDynamicFeeManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IDynamicFeeManager.sol"</span>;

<span class="hljs-comment">/// @notice A time-decaying dynamically fee, updated manually with external PoolManager.updateDynamicSwapFee() calls</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ManualDynamicFee</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span>, <span class="hljs-title">IDynamicFeeManager</span> </span>{
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

    <span class="hljs-comment">/// @dev Deteremines a Pool&#x27;s swap fee. Called and cached by PoolManager.updateDynamicFee()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFee</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint24</span> _currentFee</span>) </span>{
        <span class="hljs-comment">// Linearly decaying fee, y = mx + b</span>
        <span class="hljs-comment">// After 495,000 seconds (5.72 days), fee will be a minimum of 0.05%</span>
        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">uint256</span> timeElapsed <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">-</span> startTimestamp;
            _currentFee <span class="hljs-operator">=</span> timeElapsed <span class="hljs-operator">&gt;</span> <span class="hljs-number">495000</span> ? <span class="hljs-keyword">uint24</span>(MIN_FEE) : <span class="hljs-keyword">uint24</span>((START_FEE <span class="hljs-operator">-</span> (timeElapsed <span class="hljs-operator">*</span> decayRate)) <span class="hljs-operator">/</span> <span class="hljs-number">10</span>);
        }
    }

    <span class="hljs-comment">/// @dev this example hook contract does not implement any hooks</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">false</span>,
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            noOp: <span class="hljs-literal">false</span>,
            accessLock: <span class="hljs-literal">false</span>
        });
    }
}
</code></pre><h2>Example: Automatic Dynamic Fee</h2>
<p><em>Implements an automatically-updated, time-decaying dynamic fee</em></p>
<p>The hook uses <code>beforeSwap</code> to automatically poke the PoolManager, ensuring the fee is always up-to-date</p>
<p><em>incurs +23,000 gas overhead</em></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> update to v4-periphery/BaseHook.sol when its compatible</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IDynamicFeeManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IDynamicFeeManager.sol"</span>;

<span class="hljs-comment">/// @notice A time-decaying dynamically fee, updated automatically with beforeSwap()</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AutoDynamicFee</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span>, <span class="hljs-title">IDynamicFeeManager</span> </span>{
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

    <span class="hljs-comment">/// @inheritdoc IDynamicFeeManager</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFee</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint24</span> _currentFee</span>) </span>{
        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">uint256</span> timeElapsed <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">-</span> startTimestamp;
            _currentFee <span class="hljs-operator">=</span> timeElapsed <span class="hljs-operator">&gt;</span> <span class="hljs-number">495000</span> ? <span class="hljs-keyword">uint24</span>(MIN_FEE) : <span class="hljs-keyword">uint24</span>((START_FEE <span class="hljs-operator">-</span> (timeElapsed <span class="hljs-operator">*</span> decayRate)) <span class="hljs-operator">/</span> <span class="hljs-number">10</span>);
        }
    }

    <span class="hljs-comment">/// @dev this example hook contract does not implement any hooks</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>,
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            noOp: <span class="hljs-literal">false</span>,
            accessLock: <span class="hljs-literal">false</span>
        });
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        <span class="hljs-comment">// poke the poolmanager to update the fee for every swap</span>
        poolManager.updateDynamicSwapFee(key);
        <span class="hljs-keyword">return</span> BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>;
    }
}
</code></pre>`

export default html
