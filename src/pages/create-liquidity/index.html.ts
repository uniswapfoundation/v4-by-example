// metadata
export const version = "0.8.20"
export const title = "Create Liquidity"
export const description = "Providing Liquidity to a Uniswap V4 Pool"

export const keywords = [
    "liquidity",
    "LP",
    "provision",
    "supply",
]

export const codes = [
    {
        fileName: "CreateLiquidity.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJAdW5pc3dhcC92NC1jb3JlL2NvbnRyYWN0cy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gIkB1bmlzd2FwL3Y0LWNvcmUvY29udHJhY3RzL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtQb29sTW9kaWZ5UG9zaXRpb25UZXN0fSBmcm9tICJAdW5pc3dhcC92NC1jb3JlL2NvbnRyYWN0cy90ZXN0L1Bvb2xNb2RpZnlQb3NpdGlvblRlc3Quc29sIjsKCmNvbnRyYWN0IENyZWF0ZUxpcXVpZGl0eSB7CiAgICAvLyBzZXQgdGhlIHJvdXRlciBhZGRyZXNzCiAgICBQb29sTW9kaWZ5UG9zaXRpb25UZXN0IGxwUm91dGVyID0gUG9vbE1vZGlmeVBvc2l0aW9uVGVzdCgweDAxKTsKCiAgICBmdW5jdGlvbiBjcmVhdGVMaXF1aWRpdHkoCiAgICAgICAgUG9vbEtleSBtZW1vcnkgcG9vbEtleSwKICAgICAgICBpbnQyNCB0aWNrTG93ZXIsCiAgICAgICAgaW50MjQgdGlja1VwcGVyLAogICAgICAgIGludDI1NiBsaXF1aWRpdHksCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgaG9va0RhdGEKICAgICkgZXh0ZXJuYWwgewogICAgICAgIC8vIGlmIDAgPCBsaXF1aWRpdHk6IGFkZCBsaXF1aWRpdHkgLS0gb3RoZXJ3aXNlIHJlbW92ZSBsaXF1aWRpdHkKICAgICAgICBscFJvdXRlci5tb2RpZnlQb3NpdGlvbigKICAgICAgICAgICAgcG9vbEtleSwKICAgICAgICAgICAgSVBvb2xNYW5hZ2VyLk1vZGlmeVBvc2l0aW9uUGFyYW1zKHt0aWNrTG93ZXI6IHRpY2tMb3dlciwgdGlja1VwcGVyOiB0aWNrVXBwZXIsIGxpcXVpZGl0eURlbHRhOiBsaXF1aWRpdHl9KSwKICAgICAgICAgICAgaG9va0RhdGEKICAgICAgICApOwogICAgfQp9Cg==",
    },
    {
        fileName: "CreateLiquidityExampleInputs.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7SUVSQzIwfSBmcm9tICJmb3JnZS1zdGQvaW50ZXJmYWNlcy9JRVJDMjAuc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gIkB1bmlzd2FwL3Y0LWNvcmUvY29udHJhY3RzL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAiQHVuaXN3YXAvdjQtY29yZS9jb250cmFjdHMvdHlwZXMvUG9vbEtleS5zb2wiOwppbXBvcnQge1Bvb2xNb2RpZnlQb3NpdGlvblRlc3R9IGZyb20gIkB1bmlzd2FwL3Y0LWNvcmUvY29udHJhY3RzL3Rlc3QvUG9vbE1vZGlmeVBvc2l0aW9uVGVzdC5zb2wiOwppbXBvcnQge0N1cnJlbmN5TGlicmFyeSwgQ3VycmVuY3l9IGZyb20gIkB1bmlzd2FwL3Y0LWNvcmUvY29udHJhY3RzL3R5cGVzL0N1cnJlbmN5LnNvbCI7Cgpjb250cmFjdCBDcmVhdGVMaXF1aWRpdHlFeGFtcGxlSW5wdXRzIHsKICAgIHVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CgogICAgLy8gc2V0IHRoZSByb3V0ZXIgYWRkcmVzcwogICAgUG9vbE1vZGlmeVBvc2l0aW9uVGVzdCBscFJvdXRlciA9IFBvb2xNb2RpZnlQb3NpdGlvblRlc3QoMHgwMSk7CgogICAgZnVuY3Rpb24gZXhhbXBsZUEoKSBleHRlcm5hbCB7CiAgICAgICAgYWRkcmVzcyB0b2tlbjAgPSBhZGRyZXNzKDB4MTEpOwogICAgICAgIGFkZHJlc3MgdG9rZW4xID0gYWRkcmVzcygweDIyKTsKCiAgICAgICAgLy8gVXNpbmcgYSBob29rbGVzcyBwb29sCiAgICAgICAgUG9vbEtleSBtZW1vcnkgcG9vbCA9IFBvb2xLZXkoewogICAgICAgICAgICBjdXJyZW5jeTA6IEN1cnJlbmN5KHRva2VuMCksCiAgICAgICAgICAgIGN1cnJlbmN5MTogQ3VycmVuY3kodG9rZW4xKSwKICAgICAgICAgICAgZmVlOiAzMDAwLAogICAgICAgICAgICB0aWNrU3BhY2luZzogNjAsCiAgICAgICAgICAgIGhvb2tzOiBJSG9va3MoYWRkcmVzcygweDApKQogICAgICAgIH0pOwoKICAgICAgICAvLyBhcHByb3ZlIHRva2VucyB0byB0aGUgTFAgUm91dGVyCiAgICAgICAgSUVSQzIwKHRva2VuMCkuYXBwcm92ZShhZGRyZXNzKGxwUm91dGVyKSwgdHlwZSh1aW50MjU2KS5tYXgpOwogICAgICAgIElFUkMyMCh0b2tlbjEpLmFwcHJvdmUoYWRkcmVzcyhscFJvdXRlciksIHR5cGUodWludDI1NikubWF4KTsKCiAgICAgICAgLy8gUHJvdmlkZSAxMGUxOCB3b3J0aCBvZiBsaXF1aWRpdHkgb24gdGhlIHJhbmdlIG9mIFstNjAwLCA2MDBdCiAgICAgICAgaW50MjQgdGlja0xvd2VyID0gLTYwMDsKICAgICAgICBpbnQyNCB0aWNrVXBwZXIgPSA2MDA7CiAgICAgICAgaW50MjU2IGxpcXVpZGl0eSA9IDEwZTE4OwogICAgICAgIGxwUm91dGVyLm1vZGlmeVBvc2l0aW9uKAogICAgICAgICAgICBwb29sS2V5LAogICAgICAgICAgICBJUG9vbE1hbmFnZXIuTW9kaWZ5UG9zaXRpb25QYXJhbXMoe3RpY2tMb3dlcjogdGlja0xvd2VyLCB0aWNrVXBwZXI6IHRpY2tVcHBlciwgbGlxdWlkaXR5RGVsdGE6IGxpcXVpZGl0eX0pLAogICAgICAgICAgICBuZXcgYnl0ZXMoMCkKICAgICAgICApOwogICAgfQp9Cg==",
    },
]

const html = `<blockquote>
<p>Expect Uniswap Labs to release an official contract around launch</p>
</blockquote>
<blockquote>
<p>⚠️ Using the test router in production will lead to a loss of funds ⚠️ </p>
</blockquote>
<p>Using the <code>v4-core</code> provided <em>test</em> router, we can provide liquidity to a pool. This should only be used for non-production testing purposes</p>
<p>Creating liquidity involves using periphery contracts. It is <strong>not</strong> recommended to directly provide liquidity with <code>poolManager.modifyPosition</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolModifyPositionTest</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/test/PoolModifyPositionTest.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CreateLiquidity</span> </span>{
    <span class="hljs-comment">// set the router address</span>
    PoolModifyPositionTest lpRouter <span class="hljs-operator">=</span> PoolModifyPositionTest(<span class="hljs-number">0x01</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createLiquidity</span>(<span class="hljs-params">
        PoolKey <span class="hljs-keyword">memory</span> poolKey,
        <span class="hljs-keyword">int24</span> tickLower,
        <span class="hljs-keyword">int24</span> tickUpper,
        <span class="hljs-keyword">int256</span> liquidity,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// if 0 &lt; liquidity: add liquidity -- otherwise remove liquidity</span>
        lpRouter.modifyPosition(
            poolKey,
            IPoolManager.ModifyPositionParams({tickLower: tickLower, tickUpper: tickUpper, liquidityDelta: liquidity}),
            hookData
        );
    }
}
</code></pre><h3>Examples of Providing Liquidity to a V4 Pool</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">IERC20</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/interfaces/IERC20.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolModifyPositionTest</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/test/PoolModifyPositionTest.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">CurrencyLibrary</span>, <span class="hljs-title">Currency</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"@uniswap/v4-core/contracts/types/Currency.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CreateLiquidityExampleInputs</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

    <span class="hljs-comment">// set the router address</span>
    PoolModifyPositionTest lpRouter <span class="hljs-operator">=</span> PoolModifyPositionTest(<span class="hljs-number">0x01</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exampleA</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> token0 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x11</span>);
        <span class="hljs-keyword">address</span> token1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x22</span>);

        <span class="hljs-comment">// Using a hookless pool</span>
        PoolKey <span class="hljs-keyword">memory</span> pool <span class="hljs-operator">=</span> PoolKey({
            currency0: Currency(token0),
            currency1: Currency(token1),
            fee: <span class="hljs-number">3000</span>,
            tickSpacing: <span class="hljs-number">60</span>,
            hooks: IHooks(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x0</span>))
        });

        <span class="hljs-comment">// approve tokens to the LP Router</span>
        IERC20(token0).approve(<span class="hljs-keyword">address</span>(lpRouter), <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);
        IERC20(token1).approve(<span class="hljs-keyword">address</span>(lpRouter), <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);

        <span class="hljs-comment">// Provide 10e18 worth of liquidity on the range of [-600, 600]</span>
        <span class="hljs-keyword">int24</span> tickLower <span class="hljs-operator">=</span> <span class="hljs-number">-600</span>;
        <span class="hljs-keyword">int24</span> tickUpper <span class="hljs-operator">=</span> <span class="hljs-number">600</span>;
        <span class="hljs-keyword">int256</span> liquidity <span class="hljs-operator">=</span> <span class="hljs-number">10e18</span>;
        lpRouter.modifyPosition(
            poolKey,
            IPoolManager.ModifyPositionParams({tickLower: tickLower, tickUpper: tickUpper, liquidityDelta: liquidity}),
            <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>(<span class="hljs-number">0</span>)
        );
    }
}
</code></pre>`

export default html
