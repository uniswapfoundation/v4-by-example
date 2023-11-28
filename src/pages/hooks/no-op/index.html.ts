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
        code: "aW1wb3J0IHtIb29rc30gZnJvbSAiQHVuaXN3YXAvdjQtY29yZS9jb250cmFjdHMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CgpmdW5jdGlvbiBnZXRIb29rc0NhbGxzKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuQ2FsbHMgbWVtb3J5KSB7CiAgICByZXR1cm4gSG9va3MuQ2FsbHMoewogICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgYmVmb3JlTW9kaWZ5UG9zaXRpb246IGZhbHNlLAogICAgICAgIGFmdGVyTW9kaWZ5UG9zaXRpb246IGZhbHNlLAogICAgICAgIGJlZm9yZVN3YXA6IHRydWUsCiAgICAgICAgYWZ0ZXJTd2FwOiBmYWxzZSwKICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgIGFmdGVyRG9uYXRlOiBmYWxzZSwKICAgICAgICBub09wOiB0cnVlIC8vIC0tIEVOQUJMRSBOTy1PUCAtLSAgLy8KICAgIH0pOwp9",
    },
    {
        fileName: "NoOpSwap.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gInY0LXBlcmlwaGVyeS9CYXNlSG9vay5zb2wiOwoKaW1wb3J0IHtIb29rc30gZnJvbSAiQHVuaXN3YXAvdjQtY29yZS9jb250cmFjdHMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJAdW5pc3dhcC92NC1jb3JlL2NvbnRyYWN0cy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gIkB1bmlzd2FwL3Y0LWNvcmUvY29udHJhY3RzL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtQb29sSWQsIFBvb2xJZExpYnJhcnl9IGZyb20gIkB1bmlzd2FwL3Y0LWNvcmUvY29udHJhY3RzL3R5cGVzL1Bvb2xJZC5zb2wiOwoKY29udHJhY3QgTm9PcFN3YXAgaXMgQmFzZUhvb2sgewogICAgdXNpbmcgUG9vbElkTGlicmFyeSBmb3IgUG9vbEtleTsKICAgIG1hcHBpbmcoUG9vbElkID0+IHVpbnQyNTYgY291bnQpIHB1YmxpYyBiZWZvcmVTd2FwQ291bnQ7CiAgICBtYXBwaW5nKFBvb2xJZCA9PiB1aW50MjU2IGNvdW50KSBwdWJsaWMgYWZ0ZXJTd2FwQ291bnQ7CgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9wb29sTWFuYWdlcikgQmFzZUhvb2soX3Bvb2xNYW5hZ2VyKSB7fQoKICAgIGZ1bmN0aW9uIGdldEhvb2tzQ2FsbHMoKSBwdWJsaWMgcHVyZSBvdmVycmlkZSByZXR1cm5zIChIb29rcy5DYWxscyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4gSG9va3MuQ2FsbHMoewogICAgICAgICAgICBiZWZvcmVJbml0aWFsaXplOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJJbml0aWFsaXplOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlTW9kaWZ5UG9zaXRpb246IGZhbHNlLAogICAgICAgICAgICBhZnRlck1vZGlmeVBvc2l0aW9uOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwgLy8gLS0gTm8tb3AnaW5nIHRoZSBzd2FwIC0tICAvLwogICAgICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckRvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIG5vT3A6IHRydWUgLy8gLS0gRU5BQkxFIE5PLU9QIC0tICAvLwogICAgICAgIH0pOwogICAgfQoKICAgIGZ1bmN0aW9uIGJlZm9yZVN3YXAoYWRkcmVzcywgUG9vbEtleSBjYWxsZGF0YSBrZXksIElQb29sTWFuYWdlci5Td2FwUGFyYW1zIGNhbGxkYXRhIHBhcmFtcywgYnl0ZXMgY2FsbGRhdGEpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBvdmVycmlkZQogICAgICAgIHJldHVybnMgKGJ5dGVzNCkKICAgIHsKICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vCiAgICAgICAgLy8gRXhhbXBsZSBOb09wOiBpZiBzd2FwIGFtb3VudCBpcyA2OWUxOCwgdGhlbiB0aGUgc3dhcCB3aWxsIGJlIHNraXBwZWQgICAgICAgICAgICAvLwogICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy8KICAgICAgICBpZiAocGFyYW1zLmFtb3VudFNwZWNpZmllZCA9PSA2OWUxOCkgcmV0dXJuIEhvb2tzLk5PX09QX1NFTEVDVE9SOwoKICAgICAgICBiZWZvcmVTd2FwQ291bnRba2V5LnRvSWQoKV0rKzsKICAgICAgICByZXR1cm4gQmFzZUhvb2suYmVmb3JlU3dhcC5zZWxlY3RvcjsKICAgIH0KfQo=",
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

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/types/PoolId.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">NoOpSwap</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;
    <span class="hljs-keyword">mapping</span>(PoolId <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span> count) <span class="hljs-keyword">public</span> beforeSwapCount;
    <span class="hljs-keyword">mapping</span>(PoolId <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span> count) <span class="hljs-keyword">public</span> afterSwapCount;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHooksCalls</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Calls <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Calls({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeModifyPosition: <span class="hljs-literal">false</span>,
            afterModifyPosition: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- No-op&#x27;ing the swap --  //</span>
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            noOp: <span class="hljs-literal">true</span> <span class="hljs-comment">// -- ENABLE NO-OP --  //</span>
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
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/libraries/Hooks.sol"</span>;

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
