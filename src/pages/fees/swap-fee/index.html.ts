// metadata
export const version = "0.8.20"
export const title = "Swap Fees"
export const description = "Swap Fees in v4"

export const keywords = [
    "fees",
    "swap",
    "swap fee",
    "lp fee",
    "fee tier",
]

export const codes = [
    {
        fileName: "SetSwapFee.sol",
        code: "dWludDI0IHN3YXBGZWUgPSA1MDA7IC8vIDAuMDUlIHN3YXAgZmVlLCAzMDAwID0gMC4zMCUKCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vCgpQb29sS2V5IG1lbW9yeSBwb29sID0gUG9vbEtleSh7CiAgICBjdXJyZW5jeTA6IEN1cnJlbmN5LndyYXAodG9rZW4wKSwKICAgIGN1cnJlbmN5MTogQ3VycmVuY3kud3JhcCh0b2tlbjEpLAogICAgZmVlOiBzd2FwRmVlLCAgICAgICAgICAgICAgICAgICAgIC8vIDwtLSBTZXR0aW5nIHRoZSBTd2FwIEZlZSAtLSAvLwogICAgdGlja1NwYWNpbmc6IHRpY2tTcGFjaW5nLAogICAgaG9va3M6IElIb29rcyhhZGRyZXNzKDB4MCkpCn0pOwptYW5hZ2VyLmluaXRpYWxpemUocG9vbCwgLi4uKTsK",
    },
]

const html = `<p>Swap fees are accrued to liquidity providers and paid by swappers. The core logic and accrual design is exactly the same as v3.</p>
<p>In v3, there were four fixed fee-tiers <code>0.01%, 0.05%, 0.30%, and 1.0%</code>. In v4, fee-tiers are continuous</p>
<h3>Fee Charging</h3>
<p>Swap fees are charged on the "open" side of a trade</p>
<ul>
<li>exact-input: fees are taken from the output token</li>
<li>exact-output: fees are taken on the input token</li>
</ul>
<p>Example:</p>
<ul>
<li><strong>Exact Input</strong>: User is swapping exactly 100 USDC into ETH: fee is taken from the <strong>ETH output</strong></li>
<li><strong>Exact Output</strong>: User is willing to pay USDC for 0.01 ETH: fee is taken from the <strong>USDC input</strong></li>
</ul>
<h3>Note on Protocol Fee</h3>
<p>The protocol fee is <strong>not</strong> currently enabled. However, it is expressed as a percentage of the swap fee and <em>taken</em> from the swap fee</p>
<p>Example:</p>
<ul>
<li>swap fee 0.30%, protocol fee 0.10%</li>
<li>A swapper pays 1e18 in fees (0.30% of their swap size)</li>
<li>0.001e18 token (0.10% of 1e18) is taken for the protocol</li>
<li>0.999e18 token (99.9% of 1e18) is given the liquidity providers</li>
</ul>
<hr>
<h2>Example: Setting a Swap Fee</h2>
<p>The swap fee is set during pool creation, as defined in its <code>PoolKey</code></p>
<pre><code class="language-solidity"><span class="hljs-keyword">uint24</span> swapFee <span class="hljs-operator">=</span> <span class="hljs-number">500</span>; <span class="hljs-comment">// 0.05% swap fee, 3000 = 0.30%</span>

<span class="hljs-comment">// ----------------------------------------------- //</span>

PoolKey <span class="hljs-keyword">memory</span> pool <span class="hljs-operator">=</span> PoolKey({
    currency0: Currency.<span class="hljs-built_in">wrap</span>(token0),
    currency1: Currency.<span class="hljs-built_in">wrap</span>(token1),
    fee: swapFee,                     <span class="hljs-comment">// &lt;-- Setting the Swap Fee -- //</span>
    tickSpacing: tickSpacing,
    hooks: IHooks(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x0</span>))
});
manager.initialize(pool, ...);
</code></pre>`

export default html
