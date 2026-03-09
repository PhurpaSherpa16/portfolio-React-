import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SideNavBarMenuList from "./SideNavBarMenuList"
import Switch from './themeHandler/Switch'

export default function SideNavBar({children}) {
    return (
        <SidebarProvider>
            <SideNavBarMenuList/>
            <main className="flex-1 relative h-screen overflow-y-auto">
                <div className="absolute top-0 right-0 p-4 z-20 flex items-center gap-2">
                    <SidebarTrigger/>
                    <Switch scale={'scale-30'}/>
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}