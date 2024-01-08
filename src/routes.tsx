import component_create_liquidity from "./pages/create-liquidity"
import component_fees_fixed_hook_fee from "./pages/fees/fixed-hook-fee"
import component_hooks_custom_curve from "./pages/hooks/custom-curve"
import component_hooks_no_op from "./pages/hooks/no-op"
import component_initialize from "./pages/initialize"
import component_quoter from "./pages/quoter"
import component_swap from "./pages/swap"
import component_template from "./pages/template"
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
        path: "/fees/fixed-hook-fee",
        component: component_fees_fixed_hook_fee
    },
    {
        path: "/hooks/custom-curve",
        component: component_hooks_custom_curve
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
        path: "/quoter",
        component: component_quoter
    },
    {
        path: "/swap",
        component: component_swap
    },
    {
        path: "/template",
        component: component_template
    },
    {
        path: "",
        component: component_
    },
]

export default routes