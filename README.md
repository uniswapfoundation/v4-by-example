# [v4-by-example](https://v4-by-example.org)

Solidity snippets for all things Uniswap v4

*largely inspired by [solidity-by-example](https://solidity-by-example.org)*

---

### License

[MIT License](LICENSE)

---

# Contributing Guide

The project is welcoming all contributions. Please limit PRs to:

1. Minimal examples showcasing v4 features
2. Syncing existing snippets with the latest v4 changes

## Setup

Requires [node 18](https://nodejs.org/en/download)

```bash
git clone git@github.com:uniswapfoundation/v4-by-example.git

npm i
npm start
```

## Creating a new page

```
npm i
```

### Development

```shell
npm i
npm start
```

### Production

```shell
npm run build
# Preview produciton
npm run preview
# Deploy
npm run deploy
```

```shell
# --------------- #
# Utility Scripts #
# --------------- #

## Deploy ##
# For an markdown file, generate it's react page
# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/array

# md to react all pages
find src/pages -type d -not -path "*/__snapshots__" -exec npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts {} \;

# Rebuild routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts

# Rebuild search index
npx ts-node --project ./scripts/tsconfig.json scripts/build-search-index.ts

## Compile Solidity ##
solc-select install 0.8.20
solc-select use 0.8.20

# compile single file
solc src/pages/hello-world/HelloWorld.sol

# find and compile sol
find src/pages/hacks -name "*.sol" solc {} \;
find src/pages -type f -name "*.sol" -exec sh -c 'solc "$0"' {} \;

## Mics ##
# rename files
find . -type f -name "index.test.js" -exec sh -c 'mv "$0" "${0%.test.js}.test.tsx"' {} \;
```
