// metadata
export const version = "0.8.20"
export const title = "Static Hook Fee"
export const description = "Charge a static hook fee"

export const keywords = [
    "hook",
    "hooks",
    "fee",
    "static fee",
    "hook fee",
]

export const codes = [
    {
        fileName: "EnableAccessLock.sol",
        code: "aW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9saWJyYXJpZXMvSG9va3Muc29sIjsKCmZ1bmN0aW9uIGdldEhvb2tQZXJtaXNzaW9ucygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlIHJldHVybnMgKEhvb2tzLlBlcm1pc3Npb25zIG1lbW9yeSkgewogICAgcmV0dXJuIEhvb2tzLlBlcm1pc3Npb25zKHsKICAgICAgICBiZWZvcmVJbml0aWFsaXplOiBmYWxzZSwKICAgICAgICBhZnRlckluaXRpYWxpemU6IGZhbHNlLAogICAgICAgIGJlZm9yZU1vZGlmeVBvc2l0aW9uOiBmYWxzZSwKICAgICAgICBhZnRlck1vZGlmeVBvc2l0aW9uOiBmYWxzZSwKICAgICAgICBiZWZvcmVTd2FwOiB0cnVlLAogICAgICAgIGFmdGVyU3dhcDogZmFsc2UsCiAgICAgICAgYmVmb3JlRG9uYXRlOiBmYWxzZSwKICAgICAgICBhZnRlckRvbmF0ZTogZmFsc2UsCiAgICAgICAgbm9PcDogZmFsc2UsCiAgICAgICAgYWNjZXNzTG9jazogdHJ1ZSAvLyAtLSBFTkFCTEUgQUNDRVNTIExPQ0sgLS0gIC8vCiAgICB9KTsKfQ==",
    },
    {
        fileName: "FixedHookFee.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCi8vIFRPRE86IHVwZGF0ZSB0byB2NC1wZXJpcGhlcnkvQmFzZUhvb2suc29sIHdoZW4gaXRzIGNvbXBhdGlibGUKaW1wb3J0IHtCYXNlSG9va30gZnJvbSAiQHY0LWJ5LWV4YW1wbGUvdXRpbHMvQmFzZUhvb2suc29sIjsKCmltcG9ydCB7SG9va3N9IGZyb20gInY0LWNvcmUvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS90eXBlcy9Qb29sS2V5LnNvbCI7CmltcG9ydCB7UG9vbElkLCBQb29sSWRMaWJyYXJ5fSBmcm9tICJ2NC1jb3JlL3R5cGVzL1Bvb2xJZC5zb2wiOwppbXBvcnQge0JhbGFuY2VEZWx0YX0gZnJvbSAidjQtY29yZS90eXBlcy9CYWxhbmNlRGVsdGEuc29sIjsKaW1wb3J0IHtDdXJyZW5jeSwgQ3VycmVuY3lMaWJyYXJ5fSBmcm9tICJ2NC1jb3JlL3R5cGVzL0N1cnJlbmN5LnNvbCI7Cgpjb250cmFjdCBGaXhlZEhvb2tGZWUgaXMgQmFzZUhvb2sgewogICAgdXNpbmcgUG9vbElkTGlicmFyeSBmb3IgUG9vbEtleTsKICAgIHVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CgogICAgdWludDI1NiBwdWJsaWMgY29uc3RhbnQgRklYRURfSE9PS19GRUUgPSAwLjAwMDFlMTg7CgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9wb29sTWFuYWdlcikgQmFzZUhvb2soX3Bvb2xNYW5hZ2VyKSB7fQoKICAgIGZ1bmN0aW9uIGdldEhvb2tQZXJtaXNzaW9ucygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlIHJldHVybnMgKEhvb2tzLlBlcm1pc3Npb25zIG1lbW9yeSkgewogICAgICAgIHJldHVybiBIb29rcy5QZXJtaXNzaW9ucyh7CiAgICAgICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVNb2RpZnlQb3NpdGlvbjogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyTW9kaWZ5UG9zaXRpb246IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVTd2FwOiB0cnVlLAogICAgICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckRvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIG5vT3A6IGZhbHNlLAogICAgICAgICAgICBhY2Nlc3NMb2NrOiB0cnVlIC8vIC0tIFJlcXVpcmVkIHRvIHRha2UgYSBmZWUgLS0gLy8KICAgICAgICB9KTsKICAgIH0KCiAgICBmdW5jdGlvbiBiZWZvcmVTd2FwKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zIChieXRlczQpCiAgICB7CiAgICAgICAgLy8gdGFrZSBhIGZpeGVkIGZlZSBvZiAwLjAwMDEgb2YgdGhlIGlucHV0IHRva2VuCiAgICAgICAgcGFyYW1zLnplcm9Gb3JPbmUKICAgICAgICAgICAgPyBwb29sTWFuYWdlci5taW50KGtleS5jdXJyZW5jeTAsIGFkZHJlc3ModGhpcyksIEZJWEVEX0hPT0tfRkVFKQogICAgICAgICAgICA6IHBvb2xNYW5hZ2VyLm1pbnQoa2V5LmN1cnJlbmN5MSwgYWRkcmVzcyh0aGlzKSwgRklYRURfSE9PS19GRUUpOwoKICAgICAgICByZXR1cm4gQmFzZUhvb2suYmVmb3JlU3dhcC5zZWxlY3RvcjsKICAgIH0KCiAgICAvLy8gQGRldiBIb29rIGZlZXMgYXJlIGtlcHQgYXMgUG9vbE1hbmFnZXIgY2xhaW1zLCBzbyBjb2xsZWN0aW5nIEVSQzIwcyB3aWxsIHJlcXVpcmUgbG9ja2luZwogICAgZnVuY3Rpb24gY29sbGVjdEZlZShhZGRyZXNzIHJlY2lwaWVudCwgQ3VycmVuY3kgY3VycmVuY3kpIGV4dGVybmFsIHJldHVybnMgKHVpbnQyNTYgYW1vdW50KSB7CiAgICAgICAgYW1vdW50ID0gYWJpLmRlY29kZSgKICAgICAgICAgICAgcG9vbE1hbmFnZXIubG9jayhhZGRyZXNzKHRoaXMpLCBhYmkuZW5jb2RlQ2FsbCh0aGlzLmhhbmRsZUNvbGxlY3RGZWUsIChyZWNpcGllbnQsIGN1cnJlbmN5KSkpLCAodWludDI1NikKICAgICAgICApOwogICAgfQoKICAgIC8vLyBAZGV2IHJlcXVpcmVzIHRoZSBsb2NrIHBhdHRlcm4gaW4gb3JkZXIgdG8gY2FsbCBwb29sTWFuYWdlci5idXJuCiAgICBmdW5jdGlvbiBoYW5kbGVDb2xsZWN0RmVlKGFkZHJlc3MgcmVjaXBpZW50LCBDdXJyZW5jeSBjdXJyZW5jeSkgZXh0ZXJuYWwgcmV0dXJucyAodWludDI1NiBhbW91bnQpIHsKICAgICAgICAvLyBjb252ZXJ0IHRoZSBmZWUgKENsYWltcykgaW50byBFUkMyMCB0b2tlbnMKICAgICAgICBhbW91bnQgPSBwb29sTWFuYWdlci5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSwgY3VycmVuY3kpOwogICAgICAgIHBvb2xNYW5hZ2VyLmJ1cm4oY3VycmVuY3ksIGFtb3VudCk7CgogICAgICAgIC8vIGRpcmVjdCBjbGFpbXMgKHRoZSB0b2tlbnMpIHRvIHRoZSByZWNpcGllbnQKICAgICAgICBwb29sTWFuYWdlci50YWtlKGN1cnJlbmN5LCByZWNpcGllbnQsIGFtb3VudCk7CiAgICB9Cn0K",
    },
    {
        fileName: "SetAccessLockPermission.sol",
        code: "Ly8gSG9vayBjYW4gdGFrZSBhIGZlZSB2aWEgQUNDRVNTX0xPQ0sKdWludDE2MCBmbGFncyA9IHVpbnQxNjAoSG9va3MuQkVGT1JFX1NXQVBfRkxBRyB8IEhvb2tzLkFDQ0VTU19MT0NLX0ZMQUcpOwoKKGFkZHJlc3MgaG9va0FkZHJlc3MsIGJ5dGVzMzIgc2FsdCkgPQogICAgSG9va01pbmVyLmZpbmQoYWRkcmVzcyh0aGlzKSwgZmxhZ3MsIHR5cGUoRml4ZWRIb29rRmVlKS5jcmVhdGlvbkNvZGUsIGFiaS5lbmNvZGUoYWRkcmVzcyhtYW5hZ2VyKSkpOwoKaG9vayA9IG5ldyBGaXhlZEhvb2tGZWV7c2FsdDogc2FsdH0oSVBvb2xNYW5hZ2VyKGFkZHJlc3MobWFuYWdlcikpKTsK",
    },
]

const html = `<ul>
<li>Charge a static hook fee</li>
</ul>
<p>Optional hook fees are taken (from swappers) via the Access Lock. Hook fees can be dynamically calculated, or simply set to a fixed amount.</p>
<p>This example showcases a static fee amount</p>
<hr>
<h2>Example Static Hook Fee</h2>
<p><code>FIXED_HOOK_FEE = 0.0001e18</code></p>
<p>The hook fee is on the <em>input</em> token. If <code>swapAmount = 1e18</code>, the swapper pays <code>1.0001e18</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> update to v4-periphery/BaseHook.sol when its compatible</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolId.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BalanceDelta</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/BalanceDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Currency</span>, <span class="hljs-title">CurrencyLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/Currency.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FixedHookFee</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> FIXED_HOOK_FEE <span class="hljs-operator">=</span> <span class="hljs-number">0</span><span class="hljs-number">.0001e18</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeModifyPosition: <span class="hljs-literal">false</span>,
            afterModifyPosition: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>,
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            noOp: <span class="hljs-literal">false</span>,
            accessLock: <span class="hljs-literal">true</span> <span class="hljs-comment">// -- Required to take a fee -- //</span>
        });
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        <span class="hljs-comment">// take a fixed fee of 0.0001 of the input token</span>
        params.zeroForOne
            ? poolManager.mint(key.currency0, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), FIXED_HOOK_FEE)
            : poolManager.mint(key.currency1, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), FIXED_HOOK_FEE);

        <span class="hljs-keyword">return</span> BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-comment">/// @dev Hook fees are kept as PoolManager claims, so collecting ERC20s will require locking</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">collectFee</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, Currency currency</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) </span>{
        amount <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(
            poolManager.lock(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(<span class="hljs-built_in">this</span>.handleCollectFee, (recipient, currency))), (<span class="hljs-keyword">uint256</span>)
        );
    }

    <span class="hljs-comment">/// @dev requires the lock pattern in order to call poolManager.burn</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleCollectFee</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, Currency currency</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) </span>{
        <span class="hljs-comment">// convert the fee (Claims) into ERC20 tokens</span>
        amount <span class="hljs-operator">=</span> poolManager.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), currency);
        poolManager.burn(currency, amount);

        <span class="hljs-comment">// direct claims (the tokens) to the recipient</span>
        poolManager.take(currency, recipient, amount);
    }
}
</code></pre><p>Collecting the fee, to recipient <code>alice</code></p>
<pre><code class="language-solidity">hook.collectFee(<span class="hljs-keyword">address</span>(alice), Currency.<span class="hljs-built_in">wrap</span>(<span class="hljs-keyword">address</span>(TOKEN)));
</code></pre><h4>Enabling Access Lock</h4>
<p>To allow a hook to call <code>poolManager.mint</code> (fee taking), without a lock, you need to enable the <code>ACCESS_LOCK</code> permission</p>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
    <span class="hljs-keyword">return</span> Hooks.Permissions({
        beforeInitialize: <span class="hljs-literal">false</span>,
        afterInitialize: <span class="hljs-literal">false</span>,
        beforeModifyPosition: <span class="hljs-literal">false</span>,
        afterModifyPosition: <span class="hljs-literal">false</span>,
        beforeSwap: <span class="hljs-literal">true</span>,
        afterSwap: <span class="hljs-literal">false</span>,
        beforeDonate: <span class="hljs-literal">false</span>,
        afterDonate: <span class="hljs-literal">false</span>,
        noOp: <span class="hljs-literal">false</span>,
        accessLock: <span class="hljs-literal">true</span> <span class="hljs-comment">// -- ENABLE ACCESS LOCK --  //</span>
    });
}
</code></pre><p>Example permissions during hook deployment:</p>
<pre><code class="language-solidity"><span class="hljs-comment">// Hook can take a fee via ACCESS_LOCK</span>
<span class="hljs-keyword">uint160</span> flags <span class="hljs-operator">=</span> <span class="hljs-keyword">uint160</span>(Hooks.BEFORE_SWAP_FLAG <span class="hljs-operator">|</span> Hooks.ACCESS_LOCK_FLAG);

(<span class="hljs-keyword">address</span> hookAddress, <span class="hljs-keyword">bytes32</span> salt) <span class="hljs-operator">=</span>
    HookMiner.find(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), flags, <span class="hljs-keyword">type</span>(FixedHookFee).<span class="hljs-built_in">creationCode</span>, <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(<span class="hljs-keyword">address</span>(manager)));

hook <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> FixedHookFee{<span class="hljs-built_in">salt</span>: salt}(IPoolManager(<span class="hljs-keyword">address</span>(manager)));
</code></pre>`

export default html
