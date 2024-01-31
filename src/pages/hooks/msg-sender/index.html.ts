// metadata
export const version = "0.8.20"
export const title = "Access msg.sender within a Hook"
export const description = "Access msg.sender within a hook"

export const keywords = [
    "hook",
    "hooks",
    "msg.sender",
    "msgsender",
    "sender",
]

export const codes = [
    {
        fileName: "GetCurrentLockCaller.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCi8vIFRPRE86IHVwZGF0ZSB0byB2NC1wZXJpcGhlcnkvQmFzZUhvb2suc29sIHdoZW4gaXRzIGNvbXBhdGlibGUKaW1wb3J0IHtCYXNlSG9va30gZnJvbSAiQHY0LWJ5LWV4YW1wbGUvdXRpbHMvQmFzZUhvb2suc29sIjsKCmltcG9ydCB7Y29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9jb25zb2xlMi5zb2wiOwppbXBvcnQge0hvb2tzfSBmcm9tICJ2NC1jb3JlL2xpYnJhcmllcy9Ib29rcy5zb2wiOwppbXBvcnQge0lQb29sTWFuYWdlcn0gZnJvbSAidjQtY29yZS9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gInY0LWNvcmUvdHlwZXMvUG9vbEtleS5zb2wiOwppbXBvcnQge0JhbGFuY2VEZWx0YX0gZnJvbSAidjQtY29yZS90eXBlcy9CYWxhbmNlRGVsdGEuc29sIjsKaW1wb3J0IHtMb2NrZXJzfSBmcm9tICJ2NC1jb3JlL2xpYnJhcmllcy9Mb2NrZXJzLnNvbCI7Cgpjb250cmFjdCBHZXRDdXJyZW50TG9ja0NhbGxlciBpcyBCYXNlSG9vayB7CiAgICBtYXBwaW5nKGFkZHJlc3MgdXNlciA9PiBib29sIGFsbG93ZWQpIHB1YmxpYyBhbGxvd2VkVXNlcnM7CgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9wb29sTWFuYWdlcikgQmFzZUhvb2soX3Bvb2xNYW5hZ2VyKSB7fQoKICAgIGZ1bmN0aW9uIGJlZm9yZVN3YXAoYWRkcmVzcywgUG9vbEtleSBjYWxsZGF0YSBrZXksIElQb29sTWFuYWdlci5Td2FwUGFyYW1zIGNhbGxkYXRhLCBieXRlcyBjYWxsZGF0YSBob29rRGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIG92ZXJyaWRlCiAgICAgICAgcmV0dXJucyAoYnl0ZXM0KQogICAgewogICAgICAgIC8vIC0tLSBSZWFkIHRoZSB1c2VyJ3MgYWRkcmVzcyAtLS0gLy8KICAgICAgICAoLCBhZGRyZXNzIHVzZXIpID0gcG9vbE1hbmFnZXIuZ2V0TG9jaygxKTsKICAgICAgICByZXF1aXJlKGFsbG93ZWRVc2Vyc1t1c2VyXSwgIkdldEN1cnJlbnRMb2NrQ2FsbGVyOiBVc2VyIG5vdCBhbGxvd2VkIik7CiAgICAgICAgcmV0dXJuIEJhc2VIb29rLmJlZm9yZVN3YXAuc2VsZWN0b3I7CiAgICB9CgogICAgLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBkZW1vbnN0cmF0aW9uCiAgICBmdW5jdGlvbiBzZXRBbGxvd2VkVXNlcihhZGRyZXNzIHVzZXIsIGJvb2wgYWxsb3dlZCkgZXh0ZXJuYWwgewogICAgICAgIGFsbG93ZWRVc2Vyc1t1c2VyXSA9IGFsbG93ZWQ7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0SG9va1Blcm1pc3Npb25zKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuUGVybWlzc2lvbnMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIEhvb2tzLlBlcm1pc3Npb25zKHsKICAgICAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZUFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyQWRkTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVTd2FwOiB0cnVlLAogICAgICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckRvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIG5vT3A6IGZhbHNlLAogICAgICAgICAgICBhY2Nlc3NMb2NrOiBmYWxzZQogICAgICAgIH0pOwogICAgfQp9Cg==",
    },
    {
        fileName: "MsgSenderHookData.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCi8vIFRPRE86IHVwZGF0ZSB0byB2NC1wZXJpcGhlcnkvQmFzZUhvb2suc29sIHdoZW4gaXRzIGNvbXBhdGlibGUKaW1wb3J0IHtCYXNlSG9va30gZnJvbSAiQHY0LWJ5LWV4YW1wbGUvdXRpbHMvQmFzZUhvb2suc29sIjsKCmltcG9ydCB7SG9va3N9IGZyb20gInY0LWNvcmUvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS90eXBlcy9Qb29sS2V5LnNvbCI7CmltcG9ydCB7UG9vbElkLCBQb29sSWRMaWJyYXJ5fSBmcm9tICJ2NC1jb3JlL3R5cGVzL1Bvb2xJZC5zb2wiOwppbXBvcnQge0JhbGFuY2VEZWx0YX0gZnJvbSAidjQtY29yZS90eXBlcy9CYWxhbmNlRGVsdGEuc29sIjsKCmNvbnRyYWN0IE1zZ1NlbmRlckhvb2tEYXRhIGlzIEJhc2VIb29rIHsKICAgIHVzaW5nIFBvb2xJZExpYnJhcnkgZm9yIFBvb2xLZXk7CgogICAgbWFwcGluZyhhZGRyZXNzIHVzZXIgPT4gYm9vbCBhbGxvd2VkKSBwdWJsaWMgYWxsb3dlZFVzZXJzOwoKICAgIGNvbnN0cnVjdG9yKElQb29sTWFuYWdlciBfcG9vbE1hbmFnZXIpIEJhc2VIb29rKF9wb29sTWFuYWdlcikge30KCiAgICBmdW5jdGlvbiBiZWZvcmVTd2FwKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSwgYnl0ZXMgY2FsbGRhdGEgaG9va0RhdGEpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBvdmVycmlkZQogICAgICAgIHJldHVybnMgKGJ5dGVzNCkKICAgIHsKICAgICAgICAvLyAtLS0gUmVhZCB0aGUgdXNlcidzIGFkZHJlc3MgLS0tIC8vCiAgICAgICAgYWRkcmVzcyB1c2VyID0gYWJpLmRlY29kZShob29rRGF0YSwgKGFkZHJlc3MpKTsKICAgICAgICByZXF1aXJlKGFsbG93ZWRVc2Vyc1t1c2VyXSwgIk1zZ1NlbmRlckhvb2tEYXRhOiBVc2VyIG5vdCBhbGxvd2VkIik7CiAgICAgICAgcmV0dXJuIEJhc2VIb29rLmJlZm9yZVN3YXAuc2VsZWN0b3I7CiAgICB9CgogICAgLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBkZW1vbnN0cmF0aW9uCiAgICBmdW5jdGlvbiBzZXRBbGxvd2VkVXNlcihhZGRyZXNzIHVzZXIsIGJvb2wgYWxsb3dlZCkgZXh0ZXJuYWwgewogICAgICAgIGFsbG93ZWRVc2Vyc1t1c2VyXSA9IGFsbG93ZWQ7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0SG9va1Blcm1pc3Npb25zKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuUGVybWlzc2lvbnMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIEhvb2tzLlBlcm1pc3Npb25zKHsKICAgICAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZUFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyQWRkTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVTd2FwOiB0cnVlLAogICAgICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckRvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIG5vT3A6IGZhbHNlLAogICAgICAgICAgICBhY2Nlc3NMb2NrOiBmYWxzZQogICAgICAgIH0pOwogICAgfQp9Cg==",
    },
    {
        fileName: "PoolManagerLock.sol",
        code: "Ly8gVXNlciBkaXJlY3RseSBsb2NrcyBvbiB0aGUgUG9vbE1hbmFnZXIKLy8gLSBwb29sTWFuYWdlci5nZXRMb2NrKDEpIHJldHVybnMgYWxpY2UncyBhZGRyZXNzCnZtLnByYW5rKGFsaWNlKTsKbWFuYWdlci5sb2NrKAogICAgYWRkcmVzcyhzd2FwUm91dGVyKSwKICAgIGFiaS5lbmNvZGUoUG9vbFN3YXBUZXN0LkNhbGxiYWNrRGF0YShhZGRyZXNzKHRoaXMpLCB0ZXN0U2V0dGluZ3MsIGtleSwgcGFyYW1zLCBob29rRGF0YSkpCik7",
    },
    {
        fileName: "PoolSwapTestHookData.sol",
        code: "SVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgbWVtb3J5IHBhcmFtcyA9IC4uLjsKClBvb2xTd2FwVGVzdC5UZXN0U2V0dGluZ3MgbWVtb3J5IHRlc3RTZXR0aW5ncyA9IC4uLjsKCi8vIHByb3ZpZGUgdGhlIHVzZXIncyBhZGRyZXNzIGFzIGhvb2tEYXRhIHRvIGJlIGF2YWlsYWJsZSBpbnNpZGUgdGhlIGhvb2sgZnVuY3Rpb24KYnl0ZXMgbWVtb3J5IGhvb2tEYXRhID0gYWJpLmVuY29kZShhZGRyZXNzKFVTRVJfQUREUkVTUykpOwpzd2FwUm91dGVyLnN3YXAoa2V5LCBwYXJhbXMsIHRlc3RTZXR0aW5ncywgaG9va0RhdGEpOw==",
    },
]

const html = `<p>Please note there are multiple solutions -- each includes different tradeoffs</p>
<h3>Use-cases</h3>
<p>Accessing the user&#39;s address inside a hook provides a lot of expressivity such as:</p>
<ul>
<li>Volume-based discounts</li>
<li>Permissioned / compliant access</li>
</ul>
<h3>Using <code>hookData</code></h3>
<p>Callers (EOAs / contracts / multisigs) of periphery contracts (<code>PoolSwapTest</code>) can provide the user&#39;s address as the <code>hookData</code> argument</p>
<ul>
<li>Tradeoff: Routing, quoters, and user interfaces will need to be aware of this non-standard parameter. <code>hookData</code> breaks generic/conventional paths</li>
</ul>
<h3>Get Lock Caller</h3>
<p>Callers directly use <code>PoolManager.lock</code> to invoke a periphery router. The lock caller (i.e. EOA) is saved in transient storage and can be accessed within a hook</p>
<ul>
<li>Tradeoff: the transaction entrypoint is <code>poolManager.lock</code> and not <code>PoolSwapTest.swap</code>, leading to unconventional UX</li>
</ul>
<hr>
<h2><code>bytes memory hookData</code></h2>
<p>Provide the user&#39;s address to the <code>PoolSwapTest</code></p>
<pre><code class="language-solidity">IPoolManager.SwapParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ...;

PoolSwapTest.TestSettings <span class="hljs-keyword">memory</span> testSettings <span class="hljs-operator">=</span> ...;

<span class="hljs-comment">// provide the user&#x27;s address as hookData to be available inside the hook function</span>
<span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(<span class="hljs-keyword">address</span>(USER_ADDRESS));
swapRouter.swap(key, params, testSettings, hookData);
</code></pre><p>Decode the <code>hookData</code> into an <code>address</code> type</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> update to v4-periphery/BaseHook.sol when its compatible</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolId.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BalanceDelta</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/BalanceDelta.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MsgSenderHookData</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> user <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span> allowed) <span class="hljs-keyword">public</span> allowedUsers;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        <span class="hljs-comment">// --- Read the user&#x27;s address --- //</span>
        <span class="hljs-keyword">address</span> user <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(hookData, (<span class="hljs-keyword">address</span>));
        <span class="hljs-built_in">require</span>(allowedUsers[user], <span class="hljs-string">"MsgSenderHookData: User not allowed"</span>);
        <span class="hljs-keyword">return</span> BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-comment">// Helper function for demonstration</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setAllowedUser</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> user, <span class="hljs-keyword">bool</span> allowed</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        allowedUsers[user] <span class="hljs-operator">=</span> allowed;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>,
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            noOp: <span class="hljs-literal">false</span>,
            accessLock: <span class="hljs-literal">false</span>
        });
    }
}
</code></pre><h2>Get Lock Caller</h2>
<p>Invoke <code>poolManager.lock</code> with the user, and specify the <code>PoolSwapTest</code> router</p>
<pre><code class="language-solidity"><span class="hljs-comment">// User directly locks on the PoolManager</span>
<span class="hljs-comment">// - poolManager.getLock(1) returns alice&#x27;s address</span>
vm.prank(alice);
manager.lock(
    <span class="hljs-keyword">address</span>(swapRouter),
    <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(PoolSwapTest.CallbackData(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), testSettings, key, params, hookData))
);
</code></pre><p>Access the Lock Caller via <code>poolManager.getLock()</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> update to v4-periphery/BaseHook.sol when its compatible</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/console2.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BalanceDelta</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/BalanceDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Lockers</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Lockers.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GetCurrentLockCaller</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> user <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span> allowed) <span class="hljs-keyword">public</span> allowedUsers;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        <span class="hljs-comment">// --- Read the user&#x27;s address --- //</span>
        (, <span class="hljs-keyword">address</span> user) <span class="hljs-operator">=</span> poolManager.getLock(<span class="hljs-number">1</span>);
        <span class="hljs-built_in">require</span>(allowedUsers[user], <span class="hljs-string">"GetCurrentLockCaller: User not allowed"</span>);
        <span class="hljs-keyword">return</span> BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-comment">// Helper function for demonstration</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setAllowedUser</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> user, <span class="hljs-keyword">bool</span> allowed</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        allowedUsers[user] <span class="hljs-operator">=</span> allowed;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>,
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            noOp: <span class="hljs-literal">false</span>,
            accessLock: <span class="hljs-literal">false</span>
        });
    }
}
</code></pre>`

export default html
