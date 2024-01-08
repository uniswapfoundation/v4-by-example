// metadata
export const version = "0.8.20"
export const title = "Quoter"
export const description = "Offchain Quoter, to fetch input/output amounts"

export const keywords = [
    "quoter",
    "quoting",
    "exact input",
    "exact output",
    "single",
    "multi",
    "multihop",
]

export const codes = [
    {
        fileName: "Quoter.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0IHtJSG9va3N9IGZyb20gInY0LWNvcmUvaW50ZXJmYWNlcy9JSG9va3Muc29sIjsKaW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9saWJyYXJpZXMvSG9va3Muc29sIjsKaW1wb3J0IHtUaWNrTWF0aH0gZnJvbSAidjQtY29yZS9saWJyYXJpZXMvVGlja01hdGguc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvaW50ZXJmYWNlcy9JUG9vbE1hbmFnZXIuc29sIjsKaW1wb3J0IHtQb29sS2V5fSBmcm9tICJ2NC1jb3JlL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtCYWxhbmNlRGVsdGF9IGZyb20gInY0LWNvcmUvdHlwZXMvQmFsYW5jZURlbHRhLnNvbCI7CmltcG9ydCB7UG9vbElkLCBQb29sSWRMaWJyYXJ5fSBmcm9tICJ2NC1jb3JlL3R5cGVzL1Bvb2xJZC5zb2wiOwppbXBvcnQge0NvbnN0YW50c30gZnJvbSAidjQtY29yZS8uLi90ZXN0L3V0aWxzL0NvbnN0YW50cy5zb2wiOwppbXBvcnQge0N1cnJlbmN5TGlicmFyeSwgQ3VycmVuY3l9IGZyb20gInY0LWNvcmUvdHlwZXMvQ3VycmVuY3kuc29sIjsKaW1wb3J0IHtIb29rVGVzdH0gZnJvbSAiQHY0LWJ5LWV4YW1wbGUvdXRpbHMvSG9va1Rlc3Quc29sIjsKaW1wb3J0IHtJUXVvdGVyfSBmcm9tICJ2NC1wZXJpcGhlcnkvaW50ZXJmYWNlcy9JUXVvdGVyLnNvbCI7CmltcG9ydCB7UXVvdGVyfSBmcm9tICJ2NC1wZXJpcGhlcnkvbGVucy9RdW90ZXIuc29sIjsKCmNvbnRyYWN0IFF1b3RlclRlc3QgaXMgSG9va1Rlc3QgewogICAgdXNpbmcgUG9vbElkTGlicmFyeSBmb3IgUG9vbEtleTsKICAgIHVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CgogICAgUG9vbEtleSBwb29sS2V5OwogICAgUG9vbElkIHBvb2xJZDsKICAgIFF1b3RlciBxdW90ZXI7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIC8vIGNyZWF0ZXMgdGhlIHBvb2wgbWFuYWdlciwgdGVzdCB0b2tlbnMsIGFuZCBvdGhlciB1dGlsaXR5IHJvdXRlcnMKICAgICAgICBIb29rVGVzdC5pbml0SG9va1Rlc3RFbnYoKTsKICAgICAgICBxdW90ZXIgPSBuZXcgUXVvdGVyKGFkZHJlc3MobWFuYWdlcikpOwoKICAgICAgICAvLyBDcmVhdGUgdGhlIHBvb2wKICAgICAgICBwb29sS2V5ID0KICAgICAgICAgICAgUG9vbEtleShDdXJyZW5jeS53cmFwKGFkZHJlc3ModG9rZW4wKSksIEN1cnJlbmN5LndyYXAoYWRkcmVzcyh0b2tlbjEpKSwgMzAwMCwgNjAsIElIb29rcyhhZGRyZXNzKDB4MCkpKTsKICAgICAgICBwb29sSWQgPSBwb29sS2V5LnRvSWQoKTsKICAgICAgICBpbml0aWFsaXplUm91dGVyLmluaXRpYWxpemUocG9vbEtleSwgQ29uc3RhbnRzLlNRUlRfUkFUSU9fMV8xLCBaRVJPX0JZVEVTKTsKCiAgICAgICAgLy8gUHJvdmlkZSBsaXF1aWRpdHkgdG8gdGhlIHBvb2wKICAgICAgICBtb2RpZnlQb3NpdGlvblJvdXRlci5tb2RpZnlMaXF1aWRpdHkoCiAgICAgICAgICAgIHBvb2xLZXksCiAgICAgICAgICAgIElQb29sTWFuYWdlci5Nb2RpZnlMaXF1aWRpdHlQYXJhbXMoVGlja01hdGgubWluVXNhYmxlVGljayg2MCksIFRpY2tNYXRoLm1heFVzYWJsZVRpY2soNjApLCAxMDAwIGV0aGVyKSwKICAgICAgICAgICAgWkVST19CWVRFUwogICAgICAgICk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdFF1b3Rlcl9vdXRwdXQoKSBwdWJsaWMgewogICAgICAgIHVpbnQxMjggYW1vdW50SW4gPSAxZTE4OwogICAgICAgIGJvb2wgemVyb0Zvck9uZSA9IHRydWU7CiAgICAgICAgdWludDE2MCBNQVhfU0xJUFBBR0UgPSB6ZXJvRm9yT25lID8gTUlOX1BSSUNFX0xJTUlUIDogTUFYX1BSSUNFX0xJTUlUOwoKICAgICAgICAvLyBnZXQgdGhlIHF1b3RlCiAgICAgICAgUG9vbEtleSBtZW1vcnkga2V5ID0gcG9vbEtleTsKICAgICAgICAoaW50MTI4W10gbWVtb3J5IGRlbHRhQW1vdW50cywgdWludDE2MCBzcXJ0UHJpY2VYOTZBZnRlciwpID0gcXVvdGVyLnF1b3RlRXhhY3RJbnB1dFNpbmdsZSgKICAgICAgICAgICAgSVF1b3Rlci5RdW90ZUV4YWN0U2luZ2xlUGFyYW1zKGtleSwgemVyb0Zvck9uZSwgYWRkcmVzcyh0aGlzKSwgYW1vdW50SW4sIE1BWF9TTElQUEFHRSwgWkVST19CWVRFUykKICAgICAgICApOwoKICAgICAgICAvLyBvdXRwdXQgaXMgYW1vdW50IDEKICAgICAgICBpbnQxMjggb3V0cHV0QW1vdW50ID0gZGVsdGFBbW91bnRzWzFdOwogICAgICAgIGNvbnNvbGUyLmxvZygiUXVvdGVkIG91dHB1dCBhbW91bnQ6ICIsIGludDI1NihvdXRwdXRBbW91bnQpKTsKCiAgICAgICAgLy8gUGVyZm9ybSBhIHRlc3Qgc3dhcAogICAgICAgIEJhbGFuY2VEZWx0YSBzd2FwRGVsdGEgPSBzd2FwKHBvb2xLZXksIGludDI1Nih1aW50MjU2KGFtb3VudEluKSksIHplcm9Gb3JPbmUsIFpFUk9fQllURVMpOwoKICAgICAgICAvLyBxdW90ZSBhZ3JlZXMgd2l0aCB0aGUgYWN0dWFsIHN3YXAKICAgICAgICBhc3NlcnRFcShvdXRwdXRBbW91bnQsIHN3YXBEZWx0YS5hbW91bnQxKCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RRdW90ZXJfaW5wdXQoKSBwdWJsaWMgewogICAgICAgIHVpbnQxMjggYW1vdW50T3V0ID0gMWUxODsKICAgICAgICBib29sIHplcm9Gb3JPbmUgPSB0cnVlOwogICAgICAgIHVpbnQxNjAgTUFYX1NMSVBQQUdFID0gemVyb0Zvck9uZSA/IE1JTl9QUklDRV9MSU1JVCA6IE1BWF9QUklDRV9MSU1JVDsKCiAgICAgICAgLy8gZ2V0IHRoZSBxdW90ZQogICAgICAgIFBvb2xLZXkgbWVtb3J5IGtleSA9IHBvb2xLZXk7CiAgICAgICAgKGludDEyOFtdIG1lbW9yeSBkZWx0YUFtb3VudHMsIHVpbnQxNjAgc3FydFByaWNlWDk2QWZ0ZXIsKSA9IHF1b3Rlci5xdW90ZUV4YWN0T3V0cHV0U2luZ2xlKAogICAgICAgICAgICBJUXVvdGVyLlF1b3RlRXhhY3RTaW5nbGVQYXJhbXMoa2V5LCB6ZXJvRm9yT25lLCBhZGRyZXNzKHRoaXMpLCBhbW91bnRPdXQsIE1BWF9TTElQUEFHRSwgWkVST19CWVRFUykKICAgICAgICApOwoKICAgICAgICAvLyBpbnB1dCAocXVvdGVkKSBpcyBhbW91bnQgMAogICAgICAgIGludDEyOCBpbnB1dEFtb3VudCA9IGRlbHRhQW1vdW50c1swXTsKICAgICAgICBjb25zb2xlMi5sb2coIlF1b3RlZCBpbnB1dCBhbW91bnQ6ICIsIGludDI1NihpbnB1dEFtb3VudCkpOwoKICAgICAgICAvLyBQZXJmb3JtIGEgZXhhY3Qtb3V0cHV0IHN3YXAKICAgICAgICBCYWxhbmNlRGVsdGEgc3dhcERlbHRhID0gc3dhcChwb29sS2V5LCAtaW50MjU2KHVpbnQyNTYoYW1vdW50T3V0KSksIHplcm9Gb3JPbmUsIFpFUk9fQllURVMpOwogICAgICAgIGFzc2VydEVxKGlucHV0QW1vdW50LCBzd2FwRGVsdGEuYW1vdW50MCgpKTsKICAgICAgICAodWludDE2MCBzcXJ0UHJpY2VYOTYsLCkgPSBtYW5hZ2VyLmdldFNsb3QwKHBvb2xJZCk7CiAgICAgICAgYXNzZXJ0RXEoc3FydFByaWNlWDk2QWZ0ZXIsIHNxcnRQcmljZVg5Nik7CiAgICB9Cn0K",
    },
    {
        fileName: "QuoterSnippet.sol",
        code: "aW1wb3J0IHtJUXVvdGVyfSBmcm9tICJ2NC1wZXJpcGhlcnkvaW50ZXJmYWNlcy9JUXVvdGVyLnNvbCI7CgpQb29sS2V5IG1lbW9yeSBrZXk7CnVpbnQxMjggYW1vdW50SW4gPSAxZTE4Owpib29sIHplcm9Gb3JPbmUgPSB0cnVlOwp1aW50MTYwIE1BWF9TTElQUEFHRSA9IHplcm9Gb3JPbmUgPyBNSU5fUFJJQ0VfTElNSVQgOiBNQVhfUFJJQ0VfTElNSVQ7CmJ5dGVzIG1lbW9yeSBob29rRGF0YTsKCi8vIGV4YWN0IGlucHV0IHdpbGwgcXVvdGUgZGVsdGFBbW91bnRzWzFdIChvdXRwdXQpCi8vIGV4YWN0IG91dHB1dCB3aWxsIHF1b3RlIGRlbHRhQW1vdW50c1swXSAoaW5wdXQpCihpbnQxMjhbXSBtZW1vcnkgZGVsdGFBbW91bnRzLCB1aW50MTYwIHNxcnRQcmljZVg5NkFmdGVyLCkgPSBxdW90ZXIucXVvdGVFeGFjdElucHV0U2luZ2xlKAogICAgSVF1b3Rlci5RdW90ZUV4YWN0U2luZ2xlUGFyYW1zKGtleSwgemVyb0Zvck9uZSwgYWRkcmVzcyh0aGlzKSwgYW1vdW50SW4sIE1BWF9TTElQUEFHRSwgaG9va0RhdGEpCik7Cg==",
    },
]

const html = `<ul>
<li><p>Quoting swaps -- for <strong>offchain purposes</strong></p>
</li>
<li><p>Quoter performs a swap and reverts, this very <em>expensive</em> and should not be used onchain</p>
</li>
</ul>
<p>The <code>Quoter</code> contract provides helper functions for quoting different types of swaps:</p>
<pre><code>|             | Exact Input           | Exact Output           |
|-------------|-----------------------|------------------------|
| Single Pool | quoteExactInputSingle | quoteExactOutputSingle |
| Multi-hop   | quoteExactInput       | quoteExactOutput       |
</code></pre><p><code>Exact Input</code>: Given the <code>input</code> amount, how many <em>output</em> tokens can I expect</p>
<p><code>Exact Output</code>: Given the desired <code>output</code> amount, how many <em>input</em> tokens should I provide</p>
<hr>
<h2>Quoter snippet</h2>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> {<span class="hljs-title">IQuoter</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/interfaces/IQuoter.sol"</span>;

PoolKey <span class="hljs-keyword">memory</span> key;
<span class="hljs-keyword">uint128</span> amountIn <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
<span class="hljs-keyword">uint160</span> MAX_SLIPPAGE <span class="hljs-operator">=</span> zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT;
<span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData;

<span class="hljs-comment">// exact input will quote deltaAmounts[1] (output)</span>
<span class="hljs-comment">// exact output will quote deltaAmounts[0] (input)</span>
(<span class="hljs-keyword">int128</span>[] <span class="hljs-keyword">memory</span> deltaAmounts, <span class="hljs-keyword">uint160</span> sqrtPriceX96After,) <span class="hljs-operator">=</span> quoter.quoteExactInputSingle(
    IQuoter.QuoteExactSingleParams(key, zeroForOne, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn, MAX_SLIPPAGE, hookData)
);
</code></pre><h2>Example: Single Pool</h2>
<p>Please see <code>testQuoter_output()</code> and <code>testQuoter_input()</code> for example usage and validation</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IHooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IHooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">TickMath</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/libraries/TickMath.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BalanceDelta</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/BalanceDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolId.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Constants</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/../test/utils/Constants.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">CurrencyLibrary</span>, <span class="hljs-title">Currency</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/Currency.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">HookTest</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@v4-by-example/utils/HookTest.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IQuoter</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/interfaces/IQuoter.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Quoter</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/lens/Quoter.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">QuoterTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">HookTest</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

    PoolKey poolKey;
    PoolId poolId;
    Quoter quoter;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// creates the pool manager, test tokens, and other utility routers</span>
        HookTest.initHookTestEnv();
        quoter <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Quoter(<span class="hljs-keyword">address</span>(manager));

        <span class="hljs-comment">// Create the pool</span>
        poolKey <span class="hljs-operator">=</span>
            PoolKey(Currency.<span class="hljs-built_in">wrap</span>(<span class="hljs-keyword">address</span>(token0)), Currency.<span class="hljs-built_in">wrap</span>(<span class="hljs-keyword">address</span>(token1)), <span class="hljs-number">3000</span>, <span class="hljs-number">60</span>, IHooks(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x0</span>)));
        poolId <span class="hljs-operator">=</span> poolKey.toId();
        initializeRouter.initialize(poolKey, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        <span class="hljs-comment">// Provide liquidity to the pool</span>
        modifyPositionRouter.modifyLiquidity(
            poolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(<span class="hljs-number">60</span>), TickMath.maxUsableTick(<span class="hljs-number">60</span>), <span class="hljs-number">1000</span> <span class="hljs-literal">ether</span>),
            ZERO_BYTES
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testQuoter_output</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint128</span> amountIn <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">uint160</span> MAX_SLIPPAGE <span class="hljs-operator">=</span> zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT;

        <span class="hljs-comment">// get the quote</span>
        PoolKey <span class="hljs-keyword">memory</span> key <span class="hljs-operator">=</span> poolKey;
        (<span class="hljs-keyword">int128</span>[] <span class="hljs-keyword">memory</span> deltaAmounts, <span class="hljs-keyword">uint160</span> sqrtPriceX96After,) <span class="hljs-operator">=</span> quoter.quoteExactInputSingle(
            IQuoter.QuoteExactSingleParams(key, zeroForOne, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn, MAX_SLIPPAGE, ZERO_BYTES)
        );

        <span class="hljs-comment">// output is amount 1</span>
        <span class="hljs-keyword">int128</span> outputAmount <span class="hljs-operator">=</span> deltaAmounts[<span class="hljs-number">1</span>];
        console2.log(<span class="hljs-string">"Quoted output amount: "</span>, <span class="hljs-keyword">int256</span>(outputAmount));

        <span class="hljs-comment">// Perform a test swap</span>
        BalanceDelta swapDelta <span class="hljs-operator">=</span> swap(poolKey, <span class="hljs-keyword">int256</span>(<span class="hljs-keyword">uint256</span>(amountIn)), zeroForOne, ZERO_BYTES);

        <span class="hljs-comment">// quote agrees with the actual swap</span>
        assertEq(outputAmount, swapDelta.amount1());
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testQuoter_input</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint128</span> amountOut <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">uint160</span> MAX_SLIPPAGE <span class="hljs-operator">=</span> zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT;

        <span class="hljs-comment">// get the quote</span>
        PoolKey <span class="hljs-keyword">memory</span> key <span class="hljs-operator">=</span> poolKey;
        (<span class="hljs-keyword">int128</span>[] <span class="hljs-keyword">memory</span> deltaAmounts, <span class="hljs-keyword">uint160</span> sqrtPriceX96After,) <span class="hljs-operator">=</span> quoter.quoteExactOutputSingle(
            IQuoter.QuoteExactSingleParams(key, zeroForOne, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountOut, MAX_SLIPPAGE, ZERO_BYTES)
        );

        <span class="hljs-comment">// input (quoted) is amount 0</span>
        <span class="hljs-keyword">int128</span> inputAmount <span class="hljs-operator">=</span> deltaAmounts[<span class="hljs-number">0</span>];
        console2.log(<span class="hljs-string">"Quoted input amount: "</span>, <span class="hljs-keyword">int256</span>(inputAmount));

        <span class="hljs-comment">// Perform a exact-output swap</span>
        BalanceDelta swapDelta <span class="hljs-operator">=</span> swap(poolKey, <span class="hljs-operator">-</span><span class="hljs-keyword">int256</span>(<span class="hljs-keyword">uint256</span>(amountOut)), zeroForOne, ZERO_BYTES);
        assertEq(inputAmount, swapDelta.amount0());
        (<span class="hljs-keyword">uint160</span> sqrtPriceX96,,) <span class="hljs-operator">=</span> manager.getSlot0(poolId);
        assertEq(sqrtPriceX96After, sqrtPriceX96);
    }
}
</code></pre>`

export default html
