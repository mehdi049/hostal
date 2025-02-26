import { Point } from '@/components/ui/point'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select'
import { Car, Ambulance, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { FilterItem } from './filter-item'

export const Filters = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 sm:px-4 xl:px-8">
      <FilterItem>
        <span>Tous</span> <span>(43)</span>
      </FilterItem>
      <FilterItem className="text-secondary">
        <Point backgroundColor="bg-secondary" />A Réguler
      </FilterItem>
      <FilterItem className="text-destructive">
        <Point backgroundColor="bg-destructive" />
        Annulé
      </FilterItem>
      <FilterItem className="text-[#FFBBC2]">
        <Point backgroundColor="bg-[#FFBBC2]" />
        En cours
      </FilterItem>
      <FilterItem className="text-success">
        <Point backgroundColor="bg-success" />
        Terminé
      </FilterItem>
      <FilterItem className="text-[#A32FFF]">
        <Point backgroundColor="bg-[#A32FFF]" />
        Attribué
      </FilterItem>
      <FilterItem className="text-[#FEAD34]">
        <Point backgroundColor="bg-[#FEAD34]" />
        Bourse
      </FilterItem>
      <FilterItem className="text-[#4951FF]">
        <Point backgroundColor="bg-[#4951FF]" />
        Nouveau
      </FilterItem>
      <FilterItem>
        <Car className="text-secondary" />
        <span className="text-[#FEAD34]">VSL</span>
      </FilterItem>
      <FilterItem>
        <Ambulance className="text-secondary" />
        <span className="text-[#4951FF]">AMB</span>
      </FilterItem>
      <Select>
        <SelectTrigger className="w-[118px]">
          <SelectValue placeholder="Type" className="text-muted-foreground" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Type 1</SelectLabel>
            <SelectItem value="apple">Type 2</SelectItem>
            <SelectItem value="banana">Type 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex items-center">
        <div className="flex h-9 items-center justify-center rounded-md rounded-r-none border border-r-0 bg-background p-2 text-muted-foreground">
          <Search size="14px" />
        </div>
        <Input
          placeholder="Rechercher"
          className="w-[118px] rounded-l-none text-muted-foreground"
        />
      </div>
    </div>
  )
}
