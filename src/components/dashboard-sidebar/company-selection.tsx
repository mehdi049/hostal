import { JSX, useEffect, useState } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { CompanyLabel } from './company-label'

type SelectOption = {
  value: string
  label: JSX.Element
}

interface CompanySelectionProps {
  isCollapsed: boolean
}
export const CompanySelection = ({ isCollapsed }: CompanySelectionProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string | undefined>('HADJAL')
  const [companies, setCompanies] = useState<SelectOption[] | undefined>(
    undefined
  )

  useEffect(() => {
    setCompanies([
      {
        value: 'HADJAL',
        label: (
          <CompanyLabel
            name={'HADJAL IDIR'}
            description={'Prince Ambulances SAS'}
            isCollapsed={isCollapsed}
          />
        ),
      },
      {
        value: 'HADJAL2',
        label: (
          <CompanyLabel
            name={'HADJAL IDIR'}
            description={'Prince Ambulances SAS'}
            isCollapsed={isCollapsed}
          />
        ),
      },
    ])
  }, [isCollapsed])

  if (!companies) return null

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
