import component_create_liquidity from "./pages/create-liquidity"
import component_hooks_no_op from "./pages/hooks/no-op"
import component_initialize from "./pages/initialize"
import component_swap from "./pages/swap"
import component_ from "./pages"

interface Path {
  title: string
  path: string
}

interface Paths {
  prev: Path | null
  next: Path | null
}

interface Route {
  path: string
  component: React.FC<Paths>
  breakingChanges?: boolean
}

const routes: Route[] = [
    {
        path: "/create-liquidity",
        component: component_create_liquidity
    },
    {
        path: "/hooks/no-op",
        component: component_hooks_no_op
    },
    {
        path: "/initialize",
        component: component_initialize
    },
    {
        path: "/swap",
        component: component_swap
    },
    {
        path: "",
        component: component_
    },
]

export default routes