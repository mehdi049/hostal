import { useEffect, useState } from 'react'
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
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Check, ChevronsUpDown } from 'lucide-react'

interface CompanySelectionProps {
  isCollapsed: boolean
}
export const CompanySelection = ({ isCollapsed }: CompanySelectionProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('HADJAL')
  const [companies, setCompanies] = useState([
    {
      value: 'HADJAL',
      label: (
        <div className="flex items-center justify-between gap-2">
          <div className="w-10">
            <Image
              src="/logo-ambulance.svg"
              width={isCollapsed ? 30 : 40}
              height={isCollapsed ? 30 : 40}
              alt="HADJAL IDIR"
              className="rounded-full"
            />
          </div>
          {!isCollapsed && (
            <div className="space-y-1">
              <span className="block text-left text-xs font-medium uppercase">
                HADJAL IDIR
              </span>
              <span className="block text-left text-xs text-white/80">
                Prince Ambulances SAS
              </span>
            </div>
          )}
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
              width={isCollapsed ? 30 : 40}
              height={isCollapsed ? 30 : 40}
              alt="HADJAL IDIR"
              className="rounded-full"
            />
          </div>
          {!isCollapsed && (
            <div className="space-y-1">
              <span className="block text-left text-xs font-medium uppercase">
                HADJAL IDIR
              </span>
              <span className="block text-left text-xs text-white/80">
                Prince Ambulances SAS
              </span>
            </div>
          )}
        </div>
      ),
    },
  ])

  useEffect(() => {
    setCompanies([
      {
        value: 'HADJAL',
        label: (
          <div className="flex items-center justify-between gap-2">
            <div className="w-10">
              <Image
                src="/logo-ambulance.svg"
                width={isCollapsed ? 30 : 40}
                height={isCollapsed ? 30 : 40}
                alt="HADJAL IDIR"
                className="rounded-full"
              />
            </div>
            {!isCollapsed && (
              <div className="space-y-1">
                <span className="block text-left text-xs font-medium uppercase">
                  HADJAL IDIR
                </span>
                <span className="block text-left text-xs">
                  Prince Ambulances SAS
                </span>
              </div>
            )}
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
                width={isCollapsed ? 30 : 40}
                height={isCollapsed ? 30 : 40}
                alt="HADJAL IDIR"
                className="rounded-full"
              />
            </div>
            {!isCollapsed && (
              <div className="space-y-1">
                <span className="block text-left text-xs font-medium uppercase">
                  HADJAL IDIR
                </span>
                <span className="block text-left text-xs">
                  Prince Ambulances SAS
                </span>
              </div>
            )}
          </div>
        ),
      },
    ])
  }, [isCollapsed])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          aria-expanded={open}
          className={
            'flex h-14 items-center justify-between rounded-xl border border-transparent p-2 hover:border-white/50 hover:bg-sidebar-accent/20 hover:text-sidebar-accent-foreground'
          }
        >
          {value
            ? companies.find((company) => company.value === value)?.label
            : 'Choisissez une ambulance...'}
          <ChevronsUpDown className="opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className={`p-2 ${isCollapsed ? 'w-20' : 'w-72'}`}>
        <Command>
          <CommandInput
            placeholder="Choisissez une ambulance..."
            className="h-9"
            value=""
          />
          <CommandList>
            <CommandEmpty>Aucune ambulance trouvée.</CommandEmpty>
            <CommandGroup>
              {companies.map((company) => (
                <CommandItem
                  key={company.value}
                  value={company.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                  className="mb-2 px-0"
                >
                  {company.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === company.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
