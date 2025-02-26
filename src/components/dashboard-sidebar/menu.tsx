import {
  MailOpen,
  MapPinned,
  Cross,
  Users,
  Ambulance,
  FileText,
  Settings,
} from 'lucide-react'
import { SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'

export const Menu = () => {
  const menu = [
    {
      title: 'Accueil',
      url: '#',
      icon: MailOpen,
    },
    {
      title: 'Geolocalisation',
      url: '#',
      icon: MapPinned,
    },
    {
      title: 'Régulation',
      url: '#',
      icon: Cross,
    },
    {
      title: 'Patients',
      url: '#',
      icon: Users,
    },
    {
      title: 'Véhicules & Salariés',
      url: '#',
      icon: Ambulance,
    },
    {
      title: 'Factures',
      url: '#',
      icon: FileText,
    },
    {
      title: 'Paramètres',
      url: '#',
      icon: Settings,
    },
  ]

  return (
    <div>
      {menu.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url} className="opacity-80">
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </div>
  )
}
