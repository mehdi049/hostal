import { ArrowRight, ArrowRightCircle, Clock5, Home } from 'lucide-react'
import { Circle } from '../ui/circle'
import { Trip } from '@/types/trip.types'

interface TripInfoProps {
  trip: Trip
}
export const TripInfo = ({ trip }: TripInfoProps) => {
  return (
    <div className="space-y-2 border-x-2 border-gray-200 px-4">
      <div className="flex items-center justify-between gap-2 rounded-md bg-secondary/10 px-2">
        <Clock5 size="15px" className="text-secondary" />
        <p>
          <span className="font-bold text-primary">Env.</span>{' '}
          <span className="font-semibold text-[#A32FFF]">{trip.env}</span>
        </p>
        <ArrowRight className="text-secondary" />
        <p>
          <span className="font-bold text-primary">Ac.</span>{' '}
          <span className="font-semibold text-[#A32FFF]">{trip.ac}</span>
        </p>
        <ArrowRight className="text-secondary" />
        <p>
          <span className="font-bold text-primary">Deb.</span>{' '}
          <span className="font-semibold text-destructive">{trip.deb}</span>
        </p>
        <ArrowRight className="text-secondary" />
        <p>
          <span className="font-bold text-primary">Pec.</span>{' '}
          <span className="font-semibold text-destructive">{trip.pec}</span>
        </p>
        <ArrowRight className="text-secondary" />
        <p>
          <span className="font-bold text-primary">Dep.</span>{' '}
          <span className="text-success font-semibold">{trip.dep}</span>
        </p>
        <ArrowRight className="text-secondary" />
        <p>
          <span className="font-bold text-primary">Fin.</span>{' '}
          <span className="text-success font-semibold">{trip.fin}</span>
        </p>
      </div>
      <div className="flex items-center gap-8">
        <div>
          <div className="flex items-center gap-2">
            <Home size="22px" />
            <span className="font-bold text-secondary">
              {trip.departure.location}
            </span>
          </div>
          <div>
            <p className="text-xs opacity-80">{trip.departure.address}</p>
            <p className="text-xs text-destructive">
              {trip.departure.buildingCode}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <p className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-medium text-secondary">
              Depart
            </span>

            <Circle />
          </p>
          <div className="pt-7">
            <span className="block h-1 w-8 bg-destructive"></span>
            <ArrowRightCircle size="14px" className="-mt-2 ml-2 bg-white" />
          </div>
          <p className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-medium text-secondary">
              Arrivée
            </span>

            <Circle />
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-secondary">
              {trip.arrival.location}
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
              H
            </span>
          </div>
          <div>
            <p className="text-xs opacity-80">{trip.arrival.address}</p>
            <p className="text-xs text-destructive">
              {trip.arrival.buildingCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
