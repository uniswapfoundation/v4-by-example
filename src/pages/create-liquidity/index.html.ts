// metadata
export const version = "0.8.20"
export const title = "Create Liquidity"
export const description = "Providing Liquidity to a Uniswap V4 Pool"

export const keywords = [
    "liquidity",
    "LP",
    "lp",
    "provide",
    "provision",
    "supply",
]

export const codes = [
    {
        fileName: "CreateLiquidity.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS90eXBlcy9Qb29sS2V5LnNvbCI7CmltcG9ydCB7UG9vbE1vZGlmeVBvc2l0aW9uVGVzdH0gZnJvbSAidjQtY29yZS90ZXN0L1Bvb2xNb2RpZnlQb3NpdGlvblRlc3Quc29sIjsKCmNvbnRyYWN0IENyZWF0ZUxpcXVpZGl0eSB7CiAgICAvLyBzZXQgdGhlIHJvdXRlciBhZGRyZXNzCiAgICBQb29sTW9kaWZ5UG9zaXRpb25UZXN0IGxwUm91dGVyID0gUG9vbE1vZGlmeVBvc2l0aW9uVGVzdChhZGRyZXNzKDB4MDEpKTsKCiAgICBmdW5jdGlvbiBjcmVhdGVMaXF1aWRpdHkoCiAgICAgICAgUG9vbEtleSBtZW1vcnkgcG9vbEtleSwKICAgICAgICBpbnQyNCB0aWNrTG93ZXIsCiAgICAgICAgaW50MjQgdGlja1VwcGVyLAogICAgICAgIGludDI1NiBsaXF1aWRpdHksCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgaG9va0RhdGEKICAgICkgZXh0ZXJuYWwgewogICAgICAgIC8vIGlmIDAgPCBsaXF1aWRpdHk6IGFkZCBsaXF1aWRpdHkgLS0gb3RoZXJ3aXNlIHJlbW92ZSBsaXF1aWRpdHkKICAgICAgICBscFJvdXRlci5tb2RpZnlQb3NpdGlvbigKICAgICAgICAgICAgcG9vbEtleSwKICAgICAgICAgICAgSVBvb2xNYW5hZ2VyLk1vZGlmeVBvc2l0aW9uUGFyYW1zKHt0aWNrTG93ZXI6IHRpY2tMb3dlciwgdGlja1VwcGVyOiB0aWNrVXBwZXIsIGxpcXVpZGl0eURlbHRhOiBsaXF1aWRpdHl9KSwKICAgICAgICAgICAgaG9va0RhdGEKICAgICAgICApOwogICAgfQp9Cg==",
    },
    {
        fileName: "CreateLiquidityExampleInputs.sol",
        code: "aW1wb3J0IHtQb29sTW9kaWZ5UG9zaXRpb25UZXN0fSBmcm9tICJ2NC1jb3JlL3Rlc3QvUG9vbE1vZGlmeVBvc2l0aW9uVGVzdC5zb2wiOwoKUG9vbE1vZGlmeVBvc2l0aW9uVGVzdCBscFJvdXRlciA9IFBvb2xNb2RpZnlQb3NpdGlvblRlc3QoMHgwMSk7CmFkZHJlc3MgdG9rZW4wID0gYWRkcmVzcygweDExKTsKYWRkcmVzcyB0b2tlbjEgPSBhZGRyZXNzKDB4MjIpOwphZGRyZXNzIGhvb2tBZGRyZXNzID0gYWRkcmVzcygweDgwKTsKCi8vIFBvb2wgdGhhdCB3aWxsIHJlY2VpZXZlIGxpcXVpZGl0eQpQb29sS2V5IG1lbW9yeSBwb29sID0gUG9vbEtleSh7CiAgICBjdXJyZW5jeTA6IEN1cnJlbmN5LndyYXAodG9rZW4wKSwKICAgIGN1cnJlbmN5MTogQ3VycmVuY3kud3JhcCh0b2tlbjEpLAogICAgZmVlOiAzMDAwLAogICAgdGlja1NwYWNpbmc6IDYwLAogICAgaG9va3M6IElIb29rcyhob29rQWRkcmVzcykKfSk7CgovLyBhcHByb3ZlIHRva2VucyB0byB0aGUgTFAgUm91dGVyCklFUkMyMCh0b2tlbjApLmFwcHJvdmUoYWRkcmVzcyhscFJvdXRlciksIHR5cGUodWludDI1NikubWF4KTsKSUVSQzIwKHRva2VuMSkuYXBwcm92ZShhZGRyZXNzKGxwUm91dGVyKSwgdHlwZSh1aW50MjU2KS5tYXgpOwoKLy8gUHJvdmlkZSAxMGUxOCB3b3J0aCBvZiBsaXF1aWRpdHkgb24gdGhlIHJhbmdlIG9mIFstNjAwLCA2MDBdCmludDI0IHRpY2tMb3dlciA9IC02MDA7CmludDI0IHRpY2tVcHBlciA9IDYwMDsKaW50MjU2IGxpcXVpZGl0eSA9IDEwZTE4OwpscFJvdXRlci5tb2RpZnlQb3NpdGlvbigKICAgIHBvb2xLZXksCiAgICBJUG9vbE1hbmFnZXIuTW9kaWZ5UG9zaXRpb25QYXJhbXMoe3RpY2tMb3dlcjogdGlja0xvd2VyLCB0aWNrVXBwZXI6IHRpY2tVcHBlciwgbGlxdWlkaXR5RGVsdGE6IGxpcXVpZGl0eX0pLAogICAgbmV3IGJ5dGVzKDApCik7Cg==",
    },
]

const html = `<ul>
<li>Provide Liquidity to a Uniswap v4 Pool</li>
</ul>
<p>Creating liquidity involves using periphery contracts. It is <strong>not</strong> recommended to directly provide liquidity with <code>poolManager.modifyPosition</code></p>
<hr>
<p>Using the provided <em>test</em> router, we can provide liquidity to a pool. These snippets should only be used for non-production, testing purposes</p>
<p>(⚠️ Using the test router in production <strong>will lead to a loss of funds</strong> ⚠️ )</p>
<hr>
<p>Providing liquidity involves 3 primary arguments:</p>
<ul>
<li>Which pool to LP on</li>
<li>The range of the the liquidity, i.e. the upper and lower bounds</li>
<li>A <code>liquidity</code> value that determines input token amounts</li>
</ul>
<p>Please see <a href="https://github.com/Uniswap/v4-periphery/blob/main/contracts/libraries/LiquidityAmounts.sol">LiquidityAmounts</a> for calculating the <code>liquidity</code> value</p>
<h4>Expect Uniswap Labs to release an official contract around launch</h4>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolModifyPositionTest</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/test/PoolModifyPositionTest.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CreateLiquidity</span> </span>{
    <span class="hljs-comment">// set the router address</span>
    PoolModifyPositionTest lpRouter <span class="hljs-operator">=</span> PoolModifyPositionTest(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x01</span>));

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
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> {<span class="hljs-title">PoolModifyPositionTest</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/test/PoolModifyPositionTest.sol"</span>;

PoolModifyPositionTest lpRouter <span class="hljs-operator">=</span> PoolModifyPositionTest(<span class="hljs-number">0x01</span>);
<span class="hljs-keyword">address</span> token0 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x11</span>);
<span class="hljs-keyword">address</span> token1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x22</span>);
<span class="hljs-keyword">address</span> hookAddress <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0x80</span>);

<span class="hljs-comment">// Pool that will receieve liquidity</span>
PoolKey <span class="hljs-keyword">memory</span> pool <span class="hljs-operator">=</span> PoolKey({
    currency0: Currency.<span class="hljs-built_in">wrap</span>(token0),
    currency1: Currency.<span class="hljs-built_in">wrap</span>(token1),
    fee: <span class="hljs-number">3000</span>,
    tickSpacing: <span class="hljs-number">60</span>,
    hooks: IHooks(hookAddress)
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
</code></pre>`

export default html
