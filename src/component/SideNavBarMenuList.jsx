import { menuList } from "../assets/data/Site";
import {Sidebar,SidebarContent,
    SidebarFooter,SidebarGroup,SidebarHeader,
    SidebarGroupLabel,SidebarGroupContent,SidebarMenu,
    SidebarMenuButton,SidebarMenuItem, useSidebar,} from "@/components/ui/sidebar"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, useLocation } from "react-router-dom";
import p1 from '../assets/images/p1.jpg'
import Footer from "./Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function SideNavBarMenuList() {
    const { state, toggleSidebar, isMobile } = useSidebar();
    const isCollapsed = state === "collapsed";
    const location = useLocation()

    return (
        <Sidebar collapsible="icon" className="relative border-r" style={{ borderColor: 'var(--NavHeroSplit)'}}>
            <div className="h-full w-full absolute bg-(--secondaryBackgroundColor)" />
            <SidebarHeader className="relative z-20 py-6 transition-all duration-300 bg-transparent">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className={`flex items-center ${isCollapsed ? 'justify-center p-4' : 'gap-3 p-4'} transition-all duration-300`}>
                            <div className="relative group">
                                <Avatar className={`h-10 w-10 border-2 border-[var(--CTAbuttonColor1)]/20 shadow-md transform transition-all duration-500 rounded-lg group-hover:rotate-6 shrink-0`}>
                                    <AvatarImage src={p1} alt="Phurpa Sherpa" className="object-cover" />
                                    <AvatarFallback className="bg-[var(--primaryHoverHelper)] font-bold text-[var(--CTAbuttonColor1)]">PS</AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-emerald-500 rounded-full border-2 border-[var(--secondaryBackgroundColor)] shadow-sm shadow-emerald-500/50">
                                    <div className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-75" />
                                </div>
                            </div>

                            {!isCollapsed && (
                                <div className="flex flex-col min-w-0 animate-in fade-in slide-in-from-left-2 duration-500">
                                    <span className="text-sm font-black uppercase tracking-tight text-[var(--primaryTextColor)] truncate leading-none mb-1">
                                        Phurpa Sherpa
                                    </span>
                                    <span className="text-[10px] font-bold text-[var(--secondaryText)] uppercase tracking-widest opacity-80 truncate">
                                        Web Developer
                                    </span>
                                </div>
                            )}
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className={`${isCollapsed ? "px-0" : "px-2"} relative z-20 transition-all bg-transparent`}>
                <SidebarGroup>
                    <SidebarGroupLabel className="px-4 text-[10px] uppercase tracking-[0.2em] font-black text-[var(--secondaryText)] opacity-60 mb-2">
                        {!isCollapsed ? "Navigation" : ""}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-2">
                            {menuList.map((item, index) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <SidebarMenuItem key={index} className="overflow-hidden w-full"
                                    onClick={()=>{if(isMobile){toggleSidebar()}}}>
                                        <SidebarMenuButton asChild tooltip={item.label} className={`h-11 transition-all duration-300 rounded-xl ${isActive
                                            ? "bg-[var(--CTAbuttonColor1)]/10 text-[var(--CTAbuttonColor1)] font-bold shadow-sm"
                                            : "text-[var(--secondaryText)] hover:bg-[var(--primaryHoverHelper)] hover:text-[var(--primaryTextColor)]"
                                            }`}>
                                            <Link to={item.path} className={`flex items-center w-full transition-all duration-300 
                                                ${isCollapsed ? 'justify-center px-0' : 'gap-3 px-4'}`}>
                                                <span className={`shrink-0 transition-all duration-300 ${isActive ? "scale-110" : "scale-100 hover:scale-110"}`}>
                                                    {item.icon}
                                                </span>
                                                {!isCollapsed && (
                                                    <div className="flex items-center flex-1 min-w-0 animate-in fade-in slide-in-from-left-2 duration-300">
                                                        <span className="flex-1 text-sm tracking-wide truncate">{item.label}</span>
                                                        <MdKeyboardArrowRight className={`size-4 opacity-40 transition-transform duration-300 ${isActive ? "translate-x-1 opacity-100" : ""}`} />
                                                    </div>
                                                )}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="relative z-20 p-4 border-t border-[var(--NavHeroSplit)] bg-transparent backdrop-blur-sm transition-all duration-300">
                <Footer isCollapsed={isCollapsed} />
            </SidebarFooter>
        </Sidebar>
    );
}