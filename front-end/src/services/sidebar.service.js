import {LayoutDashboard,Airplay,ShoppingCart, ReceiptText,PackageOpen,Boxes,NotebookPen,ChartColumnBig,Container,Settings,LogOut} from "lucide-react"

export const sidebarService = [
    {
        id: 1,
        nameKey: "home",
        icon: LayoutDashboard,
        link:"dashboard"
    },
    {
        id: 2,
        nameKey: "cashier",
        icon: Airplay,
        link:"orders"
    },
    {
        id: 3,
        nameKey: "sales",
        icon: ReceiptText,
        link:"sales"
    },
    
    {
        id: 4,
        nameKey:"stocks",
        icon: PackageOpen,
        link:"stocks"
    },
    {
        id: 5,
        nameKey: "inventory",
        icon: Boxes,
        link:"inventory"
    },
    {
        id: 6,
        nameKey: "statistics",
        icon: ChartColumnBig,
        link:"statistics"
    },
    {
        id: 7,
        nameKey: "suppliers",
        icon: Container,
        link:"suppliers"
    },
     {
        id: 8,
        nameKey: "reports",
        icon: NotebookPen,
        link:"reports"
    },
    {
        id: 9,
        nameKey: "settings",
        icon: Settings,
        link:"settings"
    },
    {
        id: 10,
        nameKey: "logout",
        icon: LogOut,
        link:"logout"
    }
]