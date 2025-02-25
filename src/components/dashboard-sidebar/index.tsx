import {
  Settings,
  MailOpen,
  MapPinned,
  Users,
  Ambulance,
  FileText,
  Heart,
  Cross,
} from "lucide-react";
import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  Sidebar,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Logo } from "../icons/logo";

export const AppSidebar = () => {
  const items = [
    {
      title: "Accueil",
      url: "#",
      icon: MailOpen,
    },
    {
      title: "Geolocalisation",
      url: "#",
      icon: MapPinned,
    },
    {
      title: "Régulation",
      url: "#",
      icon: Cross,
    },
    {
      title: "Patients",
      url: "#",
      icon: Users,
    },
    {
      title: "Véhicules & Salariés",
      url: "#",
      icon: Ambulance,
    },
    {
      title: "Factures",
      url: "#",
      icon: FileText,
    },
    {
      title: "Paramètres",
      url: "#",
      icon: Settings,
    },
    {
      title: "NOUVEAU TRANSPORT",
      url: "#",
      icon: Heart,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              <SidebarMenuItem>
                <Logo />
              </SidebarMenuItem>
              <div>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title} className="h-11">
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="opacity-80">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
