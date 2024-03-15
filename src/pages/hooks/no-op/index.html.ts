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
        code: "aW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CgpmdW5jdGlvbiBnZXRIb29rc0NhbGxzKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuQ2FsbHMgbWVtb3J5KSB7CiAgICByZXR1cm4gSG9va3MuQ2FsbHMoewogICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgYmVmb3JlTW9kaWZ5UG9zaXRpb246IGZhbHNlLAogICAgICAgIGFmdGVyTW9kaWZ5UG9zaXRpb246IGZhbHNlLAogICAgICAgIGJlZm9yZVN3YXA6IHRydWUsCiAgICAgICAgYWZ0ZXJTd2FwOiBmYWxzZSwKICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgIGFmdGVyRG9uYXRlOiBmYWxzZSwKICAgICAgICBub09wOiB0cnVlIC8vIC0tIEVOQUJMRSBOTy1PUCAtLSAgLy8KICAgIH0pOwp9",
    },
    {
        fileName: "NoOpSwap.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gIkB2NC1ieS1leGFtcGxlL3V0aWxzL0Jhc2VIb29rLnNvbCI7CgppbXBvcnQge0hvb2tzfSBmcm9tICJ2NC1jb3JlL3NyYy9saWJyYXJpZXMvSG9va3Muc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvc3JjL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvUG9vbEtleS5zb2wiOwppbXBvcnQge1Bvb2xJZCwgUG9vbElkTGlicmFyeX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvUG9vbElkLnNvbCI7Cgpjb250cmFjdCBOb09wU3dhcCBpcyBCYXNlSG9vayB7CiAgICB1c2luZyBQb29sSWRMaWJyYXJ5IGZvciBQb29sS2V5OwoKICAgIG1hcHBpbmcoUG9vbElkID0+IHVpbnQyNTYgY291bnQpIHB1YmxpYyBiZWZvcmVTd2FwQ291bnQ7CgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9wb29sTWFuYWdlcikgQmFzZUhvb2soX3Bvb2xNYW5hZ2VyKSB7fQoKICAgIGZ1bmN0aW9uIGdldEhvb2tQZXJtaXNzaW9ucygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlIHJldHVybnMgKEhvb2tzLlBlcm1pc3Npb25zIG1lbW9yeSkgewogICAgICAgIHJldHVybiBIb29rcy5QZXJtaXNzaW9ucyh7CiAgICAgICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVBZGRMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwgLy8gLS0gTm8tb3AnaW5nIHRoZSBzd2FwIC0tICAvLwogICAgICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckRvbmF0ZTogZmFsc2UKICAgICAgICB9KTsKICAgIH0KCiAgICBmdW5jdGlvbiBiZWZvcmVTd2FwKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zIChieXRlczQpCiAgICB7CiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvLwogICAgICAgIC8vIEV4YW1wbGUgTm9PcDogaWYgc3dhcCBhbW91bnQgaXMgNjllMTgsIHRoZW4gdGhlIHN3YXAgd2lsbCBiZSBza2lwcGVkICAgICAgICAgICAgLy8KICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vCiAgICAgICAgLy8gVE9ETzogdXBkYXRlCiAgICAgICAgaWYgKHBhcmFtcy5hbW91bnRTcGVjaWZpZWQgPT0gNjllMTgpIHJldHVybiBCYXNlSG9vay5iZWZvcmVTd2FwLnNlbGVjdG9yOwoKICAgICAgICBiZWZvcmVTd2FwQ291bnRba2V5LnRvSWQoKV0rKzsKICAgICAgICByZXR1cm4gQmFzZUhvb2suYmVmb3JlU3dhcC5zZWxlY3RvcjsKICAgIH0KfQo=",
    },
    {
        fileName: "SetNoOpPermission.sol",
        code: "Ly8gSG9vayBjYW4gbm8tb3AgdGhlIHN3YXAKdWludDE2MCBmbGFncyA9IHVpbnQxNjAoSG9va3MuQkVGT1JFX1NXQVBfRkxBRyB8IEhvb2tzLk5PX09QX0ZMQUcpOwoKKGFkZHJlc3MgaG9va0FkZHJlc3MsIGJ5dGVzMzIgc2FsdCkgPQogICAgSG9va01pbmVyLmZpbmQoYWRkcmVzcyh0aGlzKSwgZmxhZ3MsIHR5cGUoTm9PcFN3YXApLmNyZWF0aW9uQ29kZSwgYWJpLmVuY29kZShhZGRyZXNzKG1hbmFnZXIpKSk7Cgpob29rID0gbmV3IE5vT3BTd2Fwe3NhbHQ6IHNhbHR9KElQb29sTWFuYWdlcihhZGRyZXNzKG1hbmFnZXIpKSk7Cg==",
    },
]

const html = `<h1>UNDER CONSTRUCTION</h1>
<h1>PROCEED IF YOU ARE BRAVE</h1>
<h2>requires using a <a href="https://github.com/Uniswap/v4-core/pull/482">bleeding edge PR</a></h2>
<p>NoOp:</p>
<ul>
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
<li>Combine <code>NoOp</code> + custom accounting to facilitate swaps with external liquidity</li>
</ul>
<hr>
`

export default html
