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
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="h-11">
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-medium">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
