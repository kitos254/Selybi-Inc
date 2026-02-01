import {
  BarChart3,
  FolderOpen,
  Users,
  Users2,
  FileText,
  Settings,
  Home,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Clients",
    url: "/clients", 
    icon: Users,
  },
  {
    title: "Team",
    url: "/team",
    icon: Users2,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar
      className={cn(
        "transition-all duration-300 ease-in-out border-r border-border/50 bg-gradient-card",
        collapsed ? "w-16" : "w-64"
      )}
      collapsible="icon"
    >
      <SidebarContent className="p-4">
        {/* Header with Toggle */}
        <div className="flex items-center justify-between mb-6">
          {!collapsed && (
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-foreground">Navigation</span>
            </div>
          )}
          <SidebarTrigger className="ml-auto hover:bg-secondary/50 transition-colors" />
        </div>

        {/* Navigation Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className={cn(
            "text-muted-foreground text-xs uppercase tracking-wider mb-2",
            collapsed && "sr-only"
          )}>
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                          "hover:bg-secondary/50 hover:shadow-elegant",
                          active 
                            ? "bg-primary/10 text-primary shadow-glow border border-primary/20" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <item.icon 
                          className={cn(
                            "h-5 w-5 transition-all duration-200",
                            active 
                              ? "text-primary drop-shadow-sm" 
                              : "text-muted-foreground group-hover:text-foreground"
                          )} 
                        />
                        {!collapsed && (
                          <span className={cn(
                            "font-medium transition-all duration-200 animate-fade-in",
                            active ? "text-primary" : ""
                          )}>
                            {item.title}
                          </span>
                        )}
                        {!collapsed && active && (
                          <ChevronRight className="h-4 w-4 ml-auto text-primary animate-fade-in" />
                        )}
                        {active && (
                          <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-lg" />
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer Info */}
        {!collapsed && (
          <div className="mt-auto pt-6 animate-fade-in">
            <div className="bg-secondary/30 rounded-lg p-3 border border-border/30">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">System Status</span>
              </div>
              <p className="text-xs text-foreground">All systems operational</p>
              <p className="text-xs text-muted-foreground">v2.1.0</p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}