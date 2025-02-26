import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { Ambulance, ArrowRightCircle, Car } from 'lucide-react'

export default function Home() {
  const data = [
    {
      e: 'green',
      t: 'right',
      patient: 'HAIDARA THIERNO',
      dep: '09:45',
      pec: '10:00',
      dep_lieu: 'MONTROUGE',
      rdv: '10:30',
      rdv_lieu: 'MONTROUGE',
      vehicule: {
        matricule: 'VS-123-DZ',
        type: 'car',
      },
      ch: '112',
      eq: '25',
      raison: 'CS',
    },
    {
      e: 'green',
      t: 'right',
      patient: 'HAIDARA THIERNO',
      dep: '09:45',
      pec: '10:00',
      dep_lieu: 'MONTROUGE',
      rdv: '10:30',
      rdv_lieu: 'MONTROUGE',
      vehicule: {
        matricule: 'VS-123-DZ',
        type: 'car',
      },
      ch: '112',
      eq: '25',
      raison: 'CS',
    },
    {
      e: 'red',
      t: 'right',
      patient: 'HAIDARA THIERNO',
      dep: '09:45',
      pec: '10:00',
      dep_lieu: 'MONTROUGE',
      rdv: '10:30',
      rdv_lieu: 'MONTROUGE',
      vehicule: {
        matricule: 'VS-123-DZ',
        type: 'car',
      },
      ch: '112',
      eq: '25',
      raison: 'CS',
    },
    {
      e: 'blue',
      t: 'right',
      patient: 'HAIDARA THIERNO',
      dep: '09:45',
      pec: '10:00',
      dep_lieu: 'MONTROUGE',
      rdv: '10:30',
      rdv_lieu: 'MONTROUGE',
      vehicule: {
        matricule: 'VS-123-DZ',
        type: 'car',
      },
      ch: '112',
      eq: '25',
      raison: 'CS',
    },
  ]

  return (
    <div className="space-y-4">
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
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="Rechercher" className="w-[118px]" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>E.</TableHead>
            <TableHead>T.</TableHead>
            <TableHead>PATIENT</TableHead>
            <TableHead>DEP</TableHead>
            <TableHead>PEC</TableHead>
            <TableHead>Lieu prise en charge</TableHead>
            <TableHead>RDV</TableHead>
            <TableHead>Lieu prise en charge</TableHead>
            <TableHead>Véhicule</TableHead>
            <TableHead>CH</TableHead>
            <TableHead>EQ</TableHead>
            <TableHead>RAISON</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, key) => (
            <TableRow key={key}>
              <TableCell>
                {item.e.toLowerCase() === 'green' && (
                  <Point backgroundColor="bg-success" />
                )}
                {item.e.toLowerCase() === 'red' && (
                  <Point backgroundColor="bg-destructive" />
                )}
                {item.e.toLowerCase() === 'blue' && (
                  <Point backgroundColor="bg-secondary" />
                )}
              </TableCell>
              <TableCell>
                <ArrowRightCircle size="14px" className="text-secondary" />
              </TableCell>
              <TableCell>{item.patient}</TableCell>
              <TableCell>{item.dep}</TableCell>
              <TableCell>{item.pec}</TableCell>
              <TableCell>{item.dep_lieu}</TableCell>
              <TableCell>{item.rdv}</TableCell>
              <TableCell>{item.rdv_lieu}</TableCell>
              <TableCell>{item.vehicule.matricule}</TableCell>
              <TableCell>{item.ch}</TableCell>
              <TableCell className="text-destructive">{item.eq}</TableCell>
              <TableCell>{item.raison}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

interface FilterItemProps {
  className?: string
  children?: React.ReactNode
}
export const FilterItem = ({ className, children }: FilterItemProps) => {
  return (
    <div
      className={`flex w-full max-w-20 flex-col items-center justify-center gap-1 rounded-xl border-2 border-[#DEE0F3] p-1 text-xs font-bold ${className}`}
    >
      {children}
    </div>
  )
}

interface PointProps {
  className?: string
  backgroundColor?: string
}
export const Point = ({ className, backgroundColor }: PointProps) => {
  return (
    <span
      className={`inline-block h-3 w-3 rounded-full ${backgroundColor} ${className}`}
    ></span>
  )
}
