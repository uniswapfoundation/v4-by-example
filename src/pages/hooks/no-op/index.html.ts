// metadata
export const version = "0.8.20"
export const title = "No Op"
export const description = "Elect to skip an operation without reverting"

export const keywords = [
    "hook",
    "hooks",
    "noop",
    "no-op",
    "skip",
    "swap",
    "skip swap",
]

export const codes = [
    {
        fileName: "EnableNoOp.sol",
        code: "aW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9saWJyYXJpZXMvSG9va3Muc29sIjsKCmZ1bmN0aW9uIGdldEhvb2tzQ2FsbHMoKSBwdWJsaWMgcHVyZSBvdmVycmlkZSByZXR1cm5zIChIb29rcy5DYWxscyBtZW1vcnkpIHsKICAgIHJldHVybiBIb29rcy5DYWxscyh7CiAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgYWZ0ZXJJbml0aWFsaXplOiBmYWxzZSwKICAgICAgICBiZWZvcmVNb2RpZnlQb3NpdGlvbjogZmFsc2UsCiAgICAgICAgYWZ0ZXJNb2RpZnlQb3NpdGlvbjogZmFsc2UsCiAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwKICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgIGJlZm9yZURvbmF0ZTogZmFsc2UsCiAgICAgICAgYWZ0ZXJEb25hdGU6IGZhbHNlLAogICAgICAgIG5vT3A6IHRydWUgLy8gLS0gRU5BQkxFIE5PLU9QIC0tICAvLwogICAgfSk7Cn0=",
    },
    {
        fileName: "NoOpSwap.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gIkB2NC1ieS1leGFtcGxlL3V0aWxzL0Jhc2VIb29rLnNvbCI7CgppbXBvcnQge0hvb2tzfSBmcm9tICJ2NC1jb3JlL2xpYnJhcmllcy9Ib29rcy5zb2wiOwppbXBvcnQge0lQb29sTWFuYWdlcn0gZnJvbSAidjQtY29yZS9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gInY0LWNvcmUvdHlwZXMvUG9vbEtleS5zb2wiOwppbXBvcnQge1Bvb2xJZCwgUG9vbElkTGlicmFyeX0gZnJvbSAidjQtY29yZS90eXBlcy9Qb29sSWQuc29sIjsKCmNvbnRyYWN0IE5vT3BTd2FwIGlzIEJhc2VIb29rIHsKICAgIHVzaW5nIFBvb2xJZExpYnJhcnkgZm9yIFBvb2xLZXk7CgogICAgbWFwcGluZyhQb29sSWQgPT4gdWludDI1NiBjb3VudCkgcHVibGljIGJlZm9yZVN3YXBDb3VudDsKCiAgICBjb25zdHJ1Y3RvcihJUG9vbE1hbmFnZXIgX3Bvb2xNYW5hZ2VyKSBCYXNlSG9vayhfcG9vbE1hbmFnZXIpIHt9CgogICAgZnVuY3Rpb24gZ2V0SG9va1Blcm1pc3Npb25zKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuUGVybWlzc2lvbnMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIEhvb2tzLlBlcm1pc3Npb25zKHsKICAgICAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZU1vZGlmeVBvc2l0aW9uOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJNb2RpZnlQb3NpdGlvbjogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVN3YXA6IHRydWUsIC8vIC0tIE5vLW9wJ2luZyB0aGUgc3dhcCAtLSAgLy8KICAgICAgICAgICAgYWZ0ZXJTd2FwOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBub09wOiB0cnVlLCAvLyAtLSBFTkFCTEUgTk8tT1AgLS0gIC8vCiAgICAgICAgICAgIGFjY2Vzc0xvY2s6IGZhbHNlCiAgICAgICAgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gYmVmb3JlU3dhcChhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhIGtleSwgSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgY2FsbGRhdGEgcGFyYW1zLCBieXRlcyBjYWxsZGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIG92ZXJyaWRlCiAgICAgICAgcmV0dXJucyAoYnl0ZXM0KQogICAgewogICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy8KICAgICAgICAvLyBFeGFtcGxlIE5vT3A6IGlmIHN3YXAgYW1vdW50IGlzIDY5ZTE4LCB0aGVuIHRoZSBzd2FwIHdpbGwgYmUgc2tpcHBlZCAgICAgICAgICAgIC8vCiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvLwogICAgICAgIGlmIChwYXJhbXMuYW1vdW50U3BlY2lmaWVkID09IDY5ZTE4KSByZXR1cm4gSG9va3MuTk9fT1BfU0VMRUNUT1I7CgogICAgICAgIGJlZm9yZVN3YXBDb3VudFtrZXkudG9JZCgpXSsrOwogICAgICAgIHJldHVybiBCYXNlSG9vay5iZWZvcmVTd2FwLnNlbGVjdG9yOwogICAgfQp9Cg==",
    },
    {
        fileName: "SetNoOpPermission.sol",
        code: "Ly8gSG9vayBjYW4gbm8tb3AgdGhlIHN3YXAKdWludDE2MCBmbGFncyA9IHVpbnQxNjAoSG9va3MuQkVGT1JFX1NXQVBfRkxBRyB8IEhvb2tzLk5PX09QX0ZMQUcpOwoKKGFkZHJlc3MgaG9va0FkZHJlc3MsIGJ5dGVzMzIgc2FsdCkgPQogICAgSG9va01pbmVyLmZpbmQoYWRkcmVzcyh0aGlzKSwgZmxhZ3MsIHR5cGUoTm9PcFN3YXApLmNyZWF0aW9uQ29kZSwgYWJpLmVuY29kZShhZGRyZXNzKG1hbmFnZXIpKSk7Cgpob29rID0gbmV3IE5vT3BTd2Fwe3NhbHQ6IHNhbHR9KElQb29sTWFuYWdlcihhZGRyZXNzKG1hbmFnZXIpKSk7Cg==",
    },
]

const html = `<ul>
<li>Elect to skip an operation (swap, modify position, or donate) without reverting</li>
</ul>
<p>When a <code>before</code> hook returns <code>Hooks.NO_OP_SELECTOR</code>, the subsequent operation is <em>skipped</em></p>
<blockquote>
<p>NoOp will <em>only</em> work on <code>beforeSwap</code>, <code>beforeModifyPosition</code>, and <code>beforeDonate</code></p>
</blockquote>
<p>The hooks will <strong>not revert</strong></p>
<hr>
<p>Use-cases:</p>
<ul>
<li>Asynchronous swap fulfillment. Reorder and fulfill swaps at a later point in the time</li>
<li>Combine <code>NoOp</code> + custom accounting to faciliate swaps with external liquidity</li>
</ul>
<hr>
<h2>Example NoOp Hook</h2>
<p>If the swap amount equals <code>69e18</code>, <em>do not swap</em> (and do not revert)</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolId.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">NoOpSwap</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;

    <span class="hljs-keyword">mapping</span>(PoolId <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span> count) <span class="hljs-keyword">public</span> beforeSwapCount;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeModifyPosition: <span class="hljs-literal">false</span>,
            afterModifyPosition: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- No-op&#x27;ing the swap --  //</span>
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            noOp: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- ENABLE NO-OP --  //</span>
            accessLock: <span class="hljs-literal">false</span>
        });
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        <span class="hljs-comment">// ------------------------------------------------------------------------------- //</span>
        <span class="hljs-comment">// Example NoOp: if swap amount is 69e18, then the swap will be skipped            //</span>
        <span class="hljs-comment">// ------------------------------------------------------------------------------- //</span>
        <span class="hljs-keyword">if</span> (params.amountSpecified <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">69e18</span>) <span class="hljs-keyword">return</span> Hooks.NO_OP_SELECTOR;

        beforeSwapCount[key.toId()]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        <span class="hljs-keyword">return</span> BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>;
    }
}
</code></pre><h3>Enabling NoOp</h3>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHooksCalls</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Calls <span class="hljs-keyword">memory</span></span>) </span>{
    <span class="hljs-keyword">return</span> Hooks.Calls({
        beforeInitialize: <span class="hljs-literal">false</span>,
        afterInitialize: <span class="hljs-literal">false</span>,
        beforeModifyPosition: <span class="hljs-literal">false</span>,
        afterModifyPosition: <span class="hljs-literal">false</span>,
        beforeSwap: <span class="hljs-literal">true</span>,
        afterSwap: <span class="hljs-literal">false</span>,
        beforeDonate: <span class="hljs-literal">false</span>,
        afterDonate: <span class="hljs-literal">false</span>,
        noOp: <span class="hljs-literal">true</span> <span class="hljs-comment">// -- ENABLE NO-OP --  //</span>
    });
}
</code></pre><p>Example permissions during hook deployment:</p>
<pre><code class="language-solidity"><span class="hljs-comment">// Hook can no-op the swap</span>
<span class="hljs-keyword">uint160</span> flags <span class="hljs-operator">=</span> <span class="hljs-keyword">uint160</span>(Hooks.BEFORE_SWAP_FLAG <span class="hljs-operator">|</span> Hooks.NO_OP_FLAG);

(<span class="hljs-keyword">address</span> hookAddress, <span class="hljs-keyword">bytes32</span> salt) <span class="hljs-operator">=</span>
    HookMiner.find(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), flags, <span class="hljs-keyword">type</span>(NoOpSwap).<span class="hljs-built_in">creationCode</span>, <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(<span class="hljs-keyword">address</span>(manager)));

hook <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> NoOpSwap{<span class="hljs-built_in">salt</span>: salt}(IPoolManager(<span class="hljs-keyword">address</span>(manager)));
</code></pre>`

export default html
