'use client'

import { Heart } from 'lucide-react'
import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  Sidebar,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '../ui/sidebar'
import { Logo } from '../icons/logo'

import { Button } from '../ui/button'

import { LogoIcon } from '../icons/logo-icon'
import { Menu } from './menu'
import { CompanySelection } from './company-selection'

export const AppSidebar = () => {
  const { state } = useSidebar()
  const isMenuCollapsed = state === 'collapsed'

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              <SidebarMenuItem>
                {isMenuCollapsed ? <LogoIcon /> : <Logo size={40} />}
              </SidebarMenuItem>

              <CompanySelection isCollapsed={isMenuCollapsed} />

              <Menu />

              <Button
                variant="outlineDestructive"
                className="w-full rounded-md font-bold"
              >
                <Heart />
                {!isMenuCollapsed && <>NOUVEAU TRANSPORT</>}
              </Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
