'use client'

import {
  Settings,
  MailOpen,
  MapPinned,
  Users,
  Ambulance,
  FileText,
  Heart,
  Cross,
  ChevronsUpDown,
  Check,
} from 'lucide-react'
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
} from '../ui/sidebar'
import { Logo } from '../icons/logo'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { useState } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const AppSidebar = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('HADJAL')
  const frameworks = [
    {
      value: 'HADJAL',
      label: (
        <div className="flex items-center justify-between gap-2">
          <div className="w-10">
            <Image
              src="/logo-ambulance.svg"
              width={40}
              height={40}
              alt="HADJAL IDIR"
              className="rounded-full"
            />
          </div>
          <div className="space-y-1">
            <span className="block text-left text-xs font-medium uppercase">
              HADJAL IDIR
            </span>
            <span className="block text-left text-xs text-white/80">
              Prince Ambulances SAS
            </span>
          </div>
        </div>
      ),
    },
    {
      value: 'HADJAL2',
      label: (
        <div className="flex items-center justify-between gap-2">
          <div className="w-10">
            <Image
              src="/logo-ambulance.svg"
              width={40}
              height={40}
              alt="HADJAL IDIR"
              className="rounded-full"
            />
          </div>
          <div className="space-y-1">
            <span className="block text-left text-xs font-medium uppercase">
              HADJAL IDIR
            </span>
            <span className="block text-left text-xs text-white/80">
              Prince Ambulances SAS
            </span>
          </div>
        </div>
      ),
    },
  ]

  const items = [
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
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              <SidebarMenuItem>
                <Logo />
              </SidebarMenuItem>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    role="combobox"
                    aria-expanded={open}
                    className="h-14 justify-between rounded-xl border border-transparent hover:border-white/50 hover:bg-sidebar-accent/20 hover:text-sidebar-accent-foreground"
                  >
                    {value
                      ? frameworks.find(
                          (framework) => framework.value === value
                        )?.label
                      : 'Select framework...'}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-2">
                  <Command>
                    <CommandInput
                      placeholder="Search framework..."
                      className="h-9"
                      value=""
                    />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? '' : currentValue
                              )
                              setOpen(false)
                            }}
                            className="mb-2 px-0"
                          >
                            {framework.label}
                            <Check
                              className={cn(
                                'ml-auto',
                                value === framework.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <div>
                {items.map((item) => (
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

              <Button
                variant="outlineDestructive"
                className="w-full rounded-md font-bold"
              >
                <Heart />
                NOUVEAU TRANSPORT
              </Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
