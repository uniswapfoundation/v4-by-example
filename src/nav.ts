export interface Route {
  path: string
  title: string
}

export interface Translation {
  lang: string
  url: string
}

export const TRANSLATIONS: Translation[] = []

export const SOL_ROUTES: Route[] = [
  {
    path: "initialize",
    title: "Initialize Pool",
  },
  {
    path: "create-liquidity",
    title: "Create Liquidity",
  },
  {
    path: "swap",
    title: "Swap",
  },
  {
    path: "quoter",
    title: "Quoter"
  }
]

export const HOOK_ROUTES: Route[] = [
  {
    path: "no-op",
    title: "No Op"
  },
  {
    path: "custom-curve",
    title: "Custom Curve"
  },
  {
    path: "msg-sender",
    title: "Access msg.sender"
  }
]

const FEE_ROUTES: Route[] = [
  {
    path: "swap-fee",
    title: "Swap Fee"
  },
  {
    path: "fixed-hook-fee",
    title: "Static Hook Fee"
  },
  {
    path: "dynamic-fee",
    title: "Dynamic Swap Fee"
  }
]

export const TEST_ROUTES: Route[] = []

export const DEFI_ROUTES = []

export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: SOL_ROUTES.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  {
    title: "Hooks",
    routes: HOOK_ROUTES.map((route) => ({
      ...route,
      path: `/hooks/${route.path}`,
    })),
  },
  {
    title: "Fees",
    routes: FEE_ROUTES.map((route) => ({
      ...route,
      path: `/fees/${route.path}`,
    })),
  },
  // {
  //   title: "Tests",
  //   routes: TEST_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/tests/${route.path}`,
  //   })),
  // },
  // {
  //   title: "DeFi",
  //   routes: DEFI_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/defi/${route.path}`,
  //   })),
  // },
]

export const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()
export const ROUTE_INDEX_BY_PATH = ROUTES.reduce((map, route: Route, i) => {
  // @ts-ignore
  map[route.path] = i
  return map
}, {})

export function getPrevNextPaths(path: string): {
  prev: Route | null
  next: Route | null
} {
  // @ts-ignore
  const index = ROUTE_INDEX_BY_PATH[path]
  if (index >= 0) {
    const prev = ROUTES[index - 1] || null
    const next = ROUTES[index + 1] || null
    return { prev, next }
  }
  return {
    prev: null,
    next: null,
  }
}
