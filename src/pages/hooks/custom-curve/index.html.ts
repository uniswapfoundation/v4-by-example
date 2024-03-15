// metadata
export const version = "0.8.20"
export const title = "Custom Curve"
export const description = "Replace v3 concentrated liquidity curve"

export const keywords = [
    "hook",
    "hooks",
    "noop",
    "no-op",
    "custom curve",
    "custom accounting",
]

export const codes = [
    {
        fileName: "CustomCurve.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCi8vIFRPRE86IHJlcGxhY2Ugd2l0aCB2NC1wZXJpcGhlcnkvQmFzZUhvb2suc29sIHdoZW4gY29tcGF0aWJpbGl0eSBpcyBmaXhlZAppbXBvcnQge0Jhc2VIb29rfSBmcm9tICJAdjQtYnktZXhhbXBsZS91dGlscy9CYXNlSG9vay5zb2wiOwoKaW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL3NyYy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtQb29sSWQsIFBvb2xJZExpYnJhcnl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL1Bvb2xJZC5zb2wiOwppbXBvcnQge0N1cnJlbmN5LCBDdXJyZW5jeUxpYnJhcnl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL0N1cnJlbmN5LnNvbCI7CgppbXBvcnQge0lFUkMyMH0gZnJvbSAiZm9yZ2Utc3RkL2ludGVyZmFjZXMvSUVSQzIwLnNvbCI7Cgpjb250cmFjdCBDdXN0b21DdXJ2ZSBpcyBCYXNlSG9vayB7CiAgICB1c2luZyBQb29sSWRMaWJyYXJ5IGZvciBQb29sS2V5OwogICAgdXNpbmcgQ3VycmVuY3lMaWJyYXJ5IGZvciBDdXJyZW5jeTsKCiAgICBjb25zdHJ1Y3RvcihJUG9vbE1hbmFnZXIgX3Bvb2xNYW5hZ2VyKSBCYXNlSG9vayhfcG9vbE1hbmFnZXIpIHt9CgogICAgZnVuY3Rpb24gZ2V0SG9va1Blcm1pc3Npb25zKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuUGVybWlzc2lvbnMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIEhvb2tzLlBlcm1pc3Npb25zKHsKICAgICAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZUFkZExpcXVpZGl0eTogdHJ1ZSwgLy8gLS0gZGlzYWJsZSB2NCBsaXF1aWRpdHkgd2l0aCBhIHJldmVydCAtLSAvLwogICAgICAgICAgICBiZWZvcmVSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwgLy8gLS0gTm8tb3AnaW5nIHRoZSBzd2FwIC0tICAvLwogICAgICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckRvbmF0ZTogZmFsc2UKICAgICAgICB9KTsKICAgIH0KCiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy8KICAgIC8vIExpcXVpZGl0eSBGdW5jdGlvbnMgKG5vdCBwcm9kdWN0aW9uIHJlYWR5KSAvLwogICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vCiAgICAvLy8gQG5vdGljZSBBZGQgbGlxdWlkaXR5IGZvciB0aGUgY3VzdG9tIGN1cnZlCiAgICAvLy8gQHBhcmFtIGtleSBQb29sS2V5IG9mIHRoZSBwb29sIHRvIGFkZCBsaXF1aWRpdHkgdG8KICAgIC8vLyBAcGFyYW0gbGlxdWlkaXR5RGVsdGEgQW1vdW50IG9mIGxpcXVpZGl0eSB0byBhZGQKICAgIGZ1bmN0aW9uIGFkZExpcXVpZGl0eShQb29sS2V5IGNhbGxkYXRhIGtleSwgdWludDI1NiBsaXF1aWRpdHlEZWx0YSkgZXh0ZXJuYWwgewogICAgICAgIC8vIEBkZXY6IFVwZGF0ZSB0aGlzCiAgICAgICAgLy8gR2l2ZW4gc3BvdCBwcmljZSBhbmQgdGhlIGN1c3RvbSBjdXJ2ZSwgY2FsY3VsYXRlIHRoZSByYXRpbyBvZiB0b2tlbnMgdG8gYWRkCiAgICAgICAgdWludDI1NiB0b2tlbjBJbjsKICAgICAgICB1aW50MjU2IHRva2VuMUluOwoKICAgICAgICAvLyB0cmFuc2ZlciB0b2tlbnMgdG8gaG9vaywgdG8gYWN0IGFzIGxpcXVpZGl0eSBmb3Igc3dhcHMKICAgICAgICBJRVJDMjAoQ3VycmVuY3kudW53cmFwKGtleS5jdXJyZW5jeTApKS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgdG9rZW4wSW4pOwogICAgICAgIElFUkMyMChDdXJyZW5jeS51bndyYXAoa2V5LmN1cnJlbmN5MSkpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCB0b2tlbjFJbik7CgogICAgICAgIC8vIFRPRE86IHByb2R1Y3Rpb24tcmVhZHkgcmVxdWlyZXMgbWludGluZyBhIHJlY2VpcHQgdG9rZW4gZXRjCiAgICB9CgogICAgLy8vIEBub3RpY2UgQ2FsY3VsYXRlIHRoZSBhbW91bnQgb2YgdG9rZW5zIHBhaWQgYnkgdGhlIHN3YXBwZXIKICAgIC8vLyBAcGFyYW0gcGFyYW1zIFN3YXBQYXJhbXMgcGFzc2VkIHRvIHRoZSBzd2FwIGZ1bmN0aW9uCiAgICAvLy8gQHJldHVybiBUaGUgYW1vdW50IG9mIHRva2VucyBwYWlkIGJ5IHRoZSBzd2FwcGVyCiAgICBmdW5jdGlvbiBnZXRUb2tlbkluQW1vdW50KElQb29sTWFuYWdlci5Td2FwUGFyYW1zIGNhbGxkYXRhIHBhcmFtcykgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiAxZTE4OwogICAgfQoKICAgIC8vLyBAbm90aWNlIENhbGN1bGF0ZSB0aGUgYW1vdW50IG9mIHRva2VucyBzZW50IHRvIHRoZSBzd2FwcGVyCiAgICAvLy8gQHBhcmFtIHBhcmFtcyBTd2FwUGFyYW1zIHBhc3NlZCB0byB0aGUgc3dhcCBmdW5jdGlvbgogICAgLy8vIEByZXR1cm4gVGhlIGFtb3VudCBvZiB0b2tlbnMgc2VudCB0byB0aGUgc3dhcHBlcgogICAgZnVuY3Rpb24gZ2V0VG9rZW5PdXRBbW91bnQoSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIDFlMTg7CiAgICB9CgogICAgZnVuY3Rpb24gYmVmb3JlU3dhcChhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhIGtleSwgSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgY2FsbGRhdGEgcGFyYW1zLCBieXRlcyBjYWxsZGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIG92ZXJyaWRlCiAgICAgICAgcmV0dXJucyAoYnl0ZXM0KQogICAgewogICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgYW1vdW50IG9mIHRva2VucywgYmFzZWQgb24gYSBjdXN0b20gY3VydmUKICAgICAgICB1aW50MjU2IHRva2VuSW5BbW91bnQgPSBnZXRUb2tlbkluQW1vdW50KHBhcmFtcyk7IC8vIGFtb3VudCBvZiB0b2tlbnMgcGFpZCBieSB0aGUgc3dhcHBlcgogICAgICAgIHVpbnQyNTYgdG9rZW5PdXRBbW91bnQgPSBnZXRUb2tlbk91dEFtb3VudChwYXJhbXMpOyAvLyBhbW91bnQgb2YgdG9rZW5zIHNlbnQgdG8gdGhlIHN3YXBwZXIKCiAgICAgICAgLy8gZGV0ZXJtaW5lIGluYm91bmQvb3V0Ym91bmQgdG9rZW4gYmFzZWQgb24gMC0+MSBvciAxLT4wIHN3YXAKICAgICAgICAoQ3VycmVuY3kgaW5ib3VuZCwgQ3VycmVuY3kgb3V0Ym91bmQpID0KICAgICAgICAgICAgcGFyYW1zLnplcm9Gb3JPbmUgPyAoa2V5LmN1cnJlbmN5MCwga2V5LmN1cnJlbmN5MSkgOiAoa2V5LmN1cnJlbmN5MSwga2V5LmN1cnJlbmN5MCk7CgogICAgICAgIC8vIGluYm91bmQgdG9rZW4gaXMgYWRkZWQgdG8gaG9vaydzIHJlc2VydmVzLCBkZWJ0IHBhaWQgYnkgdGhlIHN3YXBwZXIKICAgICAgICBwb29sTWFuYWdlci50YWtlKGluYm91bmQsIGFkZHJlc3ModGhpcyksIHRva2VuSW5BbW91bnQpOwoKICAgICAgICAvLyBvdXRib3VuZCB0b2tlbiBpcyByZW1vdmVkIGZyb20gaG9vaydzIHJlc2VydmVzLCBhbmQgc2VudCB0byB0aGUgc3dhcHBlcgogICAgICAgIG91dGJvdW5kLnRyYW5zZmVyKGFkZHJlc3MocG9vbE1hbmFnZXIpLCB0b2tlbk91dEFtb3VudCk7CiAgICAgICAgcG9vbE1hbmFnZXIuc2V0dGxlKG91dGJvdW5kKTsKCiAgICAgICAgLy8gcHJldmVudCBub3JtYWwgdjQgc3dhcCBsb2dpYyBmcm9tIGV4ZWN1dGluZwogICAgICAgIHJldHVybiBCYXNlSG9vay5iZWZvcmVTd2FwLnNlbGVjdG9yOwogICAgfQoKICAgIC8vLyBAbm90aWNlIE5vIGxpcXVpZGl0eSB3aWxsIGJlIG1hbmFnZWQgYnkgdjQgUG9vbE1hbmFnZXIKICAgIGZ1bmN0aW9uIGJlZm9yZUFkZExpcXVpZGl0eSgKICAgICAgICBhZGRyZXNzLAogICAgICAgIFBvb2xLZXkgY2FsbGRhdGEga2V5LAogICAgICAgIElQb29sTWFuYWdlci5Nb2RpZnlMaXF1aWRpdHlQYXJhbXMgY2FsbGRhdGEsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEKICAgICkgZXh0ZXJuYWwgb3ZlcnJpZGUgcmV0dXJucyAoYnl0ZXM0KSB7CiAgICAgICAgcmV2ZXJ0KCJObyB2NCBMaXF1aWRpdHkgYWxsb3dlZCIpOwogICAgfQp9Cg==",
    },
]

const html = `<h1>UNDER CONSTRUCTION</h1>
<h1>PROCEED IF YOU ARE BRAVE</h1>
<h2>requires using a <a href="https://github.com/Uniswap/v4-core/pull/482">bleeding edge PR</a></h2>
<p>...</p>
<p>Custom Curves:</p>
<ul>
<li>Replace the v3 concentrated liquidity curve with your own</li>
</ul>
<p>In v4, hooks can swap on any curve, formula, or arbitrary logic (offchain quoters). Custom curves may include:</p>
<ul>
<li><a href="https://github.com/saucepoint/v4-constant-sum">Constant-sum</a>: always swap tokens 1:1</li>
<li><a href="https://docs.curve.fi/pdf/stableswap-paper.pdf">StableSwap</a></li>
<li><a href="https://github.com/euler-mab/LAMMbert/blob/main/LAMMbert.pdf">LAMMbert</a></li>
</ul>
`

export default html
