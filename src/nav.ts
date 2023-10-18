export interface Route {
  path: string
  title: string
}

export interface Translation {
  lang: string
  url: string
}

export const TRANSLATIONS: Translation[] = [

]

export const SOL_ROUTES: Route[] = [
  {
    path: "initialize",
    title: "Initialize Pool"
  },
  {
    path: "create-liquidity",
    title: "Create Liquidity"
  },
  {
    path: "swap",
    title: "Swap"
  },
]

export const APP_ROUTES: Route[] = [
]

const HACK_ROUTES: Route[] = [
]

export const TEST_ROUTES: Route[] = [
]

export const DEFI_ROUTES = [
]

export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: SOL_ROUTES.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  // {
  //   title: "Applications",
  //   routes: APP_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/app/${route.path}`,
  //   })),
  // },
  // {
  //   title: "Hacks",
  //   routes: HACK_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/hacks/${route.path}`,
  //   })),
  // },
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
