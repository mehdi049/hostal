import { Point } from '@/components/ui/point'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { Ambulance, ArrowRightCircle, Car } from 'lucide-react'
import { Filters } from './_components/filters'

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
        type: 'ambulance',
      },
      ch: '112',
      eq: '25',
      raison: 'CS',
    },
  ]

  return (
    <div className="space-y-4">
      <Filters />

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
              <TableCell>
                <div className="flex items-center gap-1">
                  {item.vehicule.type === 'car' && (
                    <Car className="text-secondary" />
                  )}
                  {item.vehicule.type === 'ambulance' && (
                    <Ambulance className="text-secondary" />
                  )}
                  {item.vehicule.matricule}
                </div>
              </TableCell>
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
