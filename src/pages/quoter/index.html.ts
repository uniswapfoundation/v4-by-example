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
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0IHtJSG9va3N9IGZyb20gInY0LWNvcmUvc3JjL2ludGVyZmFjZXMvSUhvb2tzLnNvbCI7CmltcG9ydCB7SG9va3N9IGZyb20gInY0LWNvcmUvc3JjL2xpYnJhcmllcy9Ib29rcy5zb2wiOwppbXBvcnQge1RpY2tNYXRofSBmcm9tICJ2NC1jb3JlL3NyYy9saWJyYXJpZXMvVGlja01hdGguc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvc3JjL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvUG9vbEtleS5zb2wiOwppbXBvcnQge0JhbGFuY2VEZWx0YX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvQmFsYW5jZURlbHRhLnNvbCI7CmltcG9ydCB7UG9vbElkLCBQb29sSWRMaWJyYXJ5fSBmcm9tICJ2NC1jb3JlL3NyYy90eXBlcy9Qb29sSWQuc29sIjsKaW1wb3J0IHtDb25zdGFudHN9IGZyb20gInY0LWNvcmUvc3JjLy4uL3Rlc3QvdXRpbHMvQ29uc3RhbnRzLnNvbCI7CmltcG9ydCB7Q3VycmVuY3lMaWJyYXJ5LCBDdXJyZW5jeX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvQ3VycmVuY3kuc29sIjsKaW1wb3J0IHtEZXBsb3llcnN9IGZyb20gInY0LWNvcmUvc3JjLy4uL3Rlc3QvdXRpbHMvRGVwbG95ZXJzLnNvbCI7CmltcG9ydCB7SVF1b3Rlcn0gZnJvbSAidjQtcGVyaXBoZXJ5L2ludGVyZmFjZXMvSVF1b3Rlci5zb2wiOwppbXBvcnQge1F1b3Rlcn0gZnJvbSAidjQtcGVyaXBoZXJ5L2xlbnMvUXVvdGVyLnNvbCI7Cgpjb250cmFjdCBRdW90ZXJUZXN0IGlzIFRlc3QsIERlcGxveWVycyB7CiAgICB1c2luZyBQb29sSWRMaWJyYXJ5IGZvciBQb29sS2V5OwogICAgdXNpbmcgQ3VycmVuY3lMaWJyYXJ5IGZvciBDdXJyZW5jeTsKCiAgICBQb29sS2V5IHBvb2xLZXk7CiAgICBQb29sSWQgcG9vbElkOwogICAgUXVvdGVyIHF1b3RlcjsKCiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7CiAgICAgICAgLy8gY3JlYXRlcyB0aGUgcG9vbCBtYW5hZ2VyLCB0ZXN0IHRva2VucywgYW5kIG90aGVyIHV0aWxpdHkgcm91dGVycwogICAgICAgIERlcGxveWVycy5kZXBsb3lGcmVzaE1hbmFnZXJBbmRSb3V0ZXJzKCk7CiAgICAgICAgRGVwbG95ZXJzLmRlcGxveU1pbnRBbmRBcHByb3ZlMkN1cnJlbmNpZXMoKTsKICAgICAgICBxdW90ZXIgPSBuZXcgUXVvdGVyKGFkZHJlc3MobWFuYWdlcikpOwoKICAgICAgICAvLyBDcmVhdGUgdGhlIHBvb2wKICAgICAgICBwb29sS2V5ID0gUG9vbEtleShjdXJyZW5jeTAsIGN1cnJlbmN5MSwgMzAwMCwgNjAsIElIb29rcyhhZGRyZXNzKDB4MCkpKTsKICAgICAgICBwb29sSWQgPSBwb29sS2V5LnRvSWQoKTsKICAgICAgICBtYW5hZ2VyLmluaXRpYWxpemUocG9vbEtleSwgQ29uc3RhbnRzLlNRUlRfUkFUSU9fMV8xLCBaRVJPX0JZVEVTKTsKCiAgICAgICAgLy8gUHJvdmlkZSBsaXF1aWRpdHkgdG8gdGhlIHBvb2wKICAgICAgICBtb2RpZnlMaXF1aWRpdHlSb3V0ZXIubW9kaWZ5TGlxdWlkaXR5KAogICAgICAgICAgICBwb29sS2V5LAogICAgICAgICAgICBJUG9vbE1hbmFnZXIuTW9kaWZ5TGlxdWlkaXR5UGFyYW1zKFRpY2tNYXRoLm1pblVzYWJsZVRpY2soNjApLCBUaWNrTWF0aC5tYXhVc2FibGVUaWNrKDYwKSwgMTAwMCBldGhlciksCiAgICAgICAgICAgIFpFUk9fQllURVMKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RRdW90ZXJfb3V0cHV0KCkgcHVibGljIHsKICAgICAgICB1aW50MTI4IGFtb3VudEluID0gMWUxODsKICAgICAgICBib29sIHplcm9Gb3JPbmUgPSB0cnVlOwogICAgICAgIHVpbnQxNjAgTUFYX1NMSVBQQUdFID0gemVyb0Zvck9uZSA/IE1JTl9QUklDRV9MSU1JVCA6IE1BWF9QUklDRV9MSU1JVDsKCiAgICAgICAgLy8gZ2V0IHRoZSBxdW90ZQogICAgICAgIFBvb2xLZXkgbWVtb3J5IGtleSA9IHBvb2xLZXk7CiAgICAgICAgKGludDEyOFtdIG1lbW9yeSBkZWx0YUFtb3VudHMsIHVpbnQxNjAgc3FydFByaWNlWDk2QWZ0ZXIsKSA9IHF1b3Rlci5xdW90ZUV4YWN0SW5wdXRTaW5nbGUoCiAgICAgICAgICAgIElRdW90ZXIuUXVvdGVFeGFjdFNpbmdsZVBhcmFtcyhrZXksIHplcm9Gb3JPbmUsIGFkZHJlc3ModGhpcyksIGFtb3VudEluLCBNQVhfU0xJUFBBR0UsIFpFUk9fQllURVMpCiAgICAgICAgKTsKCiAgICAgICAgLy8gb3V0cHV0IGlzIGFtb3VudCAxCiAgICAgICAgaW50MTI4IG91dHB1dEFtb3VudCA9IGRlbHRhQW1vdW50c1sxXTsKICAgICAgICBjb25zb2xlMi5sb2coIlF1b3RlZCBvdXRwdXQgYW1vdW50OiAiLCBpbnQyNTYob3V0cHV0QW1vdW50KSk7CgogICAgICAgIC8vIFBlcmZvcm0gYSB0ZXN0IHN3YXAKICAgICAgICBCYWxhbmNlRGVsdGEgc3dhcERlbHRhID0gc3dhcChwb29sS2V5LCBpbnQyNTYodWludDI1NihhbW91bnRJbikpLCB6ZXJvRm9yT25lLCBaRVJPX0JZVEVTKTsKCiAgICAgICAgLy8gcXVvdGUgYWdyZWVzIHdpdGggdGhlIGFjdHVhbCBzd2FwCiAgICAgICAgYXNzZXJ0RXEob3V0cHV0QW1vdW50LCBzd2FwRGVsdGEuYW1vdW50MSgpKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0UXVvdGVyX2lucHV0KCkgcHVibGljIHsKICAgICAgICB1aW50MTI4IGFtb3VudE91dCA9IDFlMTg7CiAgICAgICAgYm9vbCB6ZXJvRm9yT25lID0gdHJ1ZTsKICAgICAgICB1aW50MTYwIE1BWF9TTElQUEFHRSA9IHplcm9Gb3JPbmUgPyBNSU5fUFJJQ0VfTElNSVQgOiBNQVhfUFJJQ0VfTElNSVQ7CgogICAgICAgIC8vIGdldCB0aGUgcXVvdGUKICAgICAgICBQb29sS2V5IG1lbW9yeSBrZXkgPSBwb29sS2V5OwogICAgICAgIChpbnQxMjhbXSBtZW1vcnkgZGVsdGFBbW91bnRzLCB1aW50MTYwIHNxcnRQcmljZVg5NkFmdGVyLCkgPSBxdW90ZXIucXVvdGVFeGFjdE91dHB1dFNpbmdsZSgKICAgICAgICAgICAgSVF1b3Rlci5RdW90ZUV4YWN0U2luZ2xlUGFyYW1zKGtleSwgemVyb0Zvck9uZSwgYWRkcmVzcyh0aGlzKSwgYW1vdW50T3V0LCBNQVhfU0xJUFBBR0UsIFpFUk9fQllURVMpCiAgICAgICAgKTsKCiAgICAgICAgLy8gaW5wdXQgKHF1b3RlZCkgaXMgYW1vdW50IDAKICAgICAgICBpbnQxMjggaW5wdXRBbW91bnQgPSBkZWx0YUFtb3VudHNbMF07CiAgICAgICAgY29uc29sZTIubG9nKCJRdW90ZWQgaW5wdXQgYW1vdW50OiAiLCBpbnQyNTYoaW5wdXRBbW91bnQpKTsKCiAgICAgICAgLy8gUGVyZm9ybSBhIGV4YWN0LW91dHB1dCBzd2FwCiAgICAgICAgQmFsYW5jZURlbHRhIHN3YXBEZWx0YSA9IHN3YXAocG9vbEtleSwgLWludDI1Nih1aW50MjU2KGFtb3VudE91dCkpLCB6ZXJvRm9yT25lLCBaRVJPX0JZVEVTKTsKICAgICAgICBhc3NlcnRFcShpbnB1dEFtb3VudCwgc3dhcERlbHRhLmFtb3VudDAoKSk7CiAgICAgICAgKHVpbnQxNjAgc3FydFByaWNlWDk2LCwpID0gbWFuYWdlci5nZXRTbG90MChwb29sSWQpOwogICAgICAgIGFzc2VydEVxKHNxcnRQcmljZVg5NkFmdGVyLCBzcXJ0UHJpY2VYOTYpOwogICAgfQp9Cg==",
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
<span class="hljs-keyword">import</span> {<span class="hljs-title">IHooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IHooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">TickMath</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/TickMath.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BalanceDelta</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/BalanceDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolId.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Constants</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/../test/utils/Constants.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">CurrencyLibrary</span>, <span class="hljs-title">Currency</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/Currency.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Deployers</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/../test/utils/Deployers.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IQuoter</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/interfaces/IQuoter.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Quoter</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/lens/Quoter.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">QuoterTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span>, <span class="hljs-title">Deployers</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

    PoolKey poolKey;
    PoolId poolId;
    Quoter quoter;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// creates the pool manager, test tokens, and other utility routers</span>
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();
        quoter <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Quoter(<span class="hljs-keyword">address</span>(manager));

        <span class="hljs-comment">// Create the pool</span>
        poolKey <span class="hljs-operator">=</span> PoolKey(currency0, currency1, <span class="hljs-number">3000</span>, <span class="hljs-number">60</span>, IHooks(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x0</span>)));
        poolId <span class="hljs-operator">=</span> poolKey.toId();
        manager.initialize(poolKey, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        <span class="hljs-comment">// Provide liquidity to the pool</span>
        modifyLiquidityRouter.modifyLiquidity(
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
