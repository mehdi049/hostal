type VehiculeType = 'car' | 'ambulance'

type Vehicle = {
  matricule: string
  type: VehiculeType
}

export type Planning = {
  e: string
  t: string
  patient: string
  dep: string
  pec: string
  dep_lieu: string
  rdv: string
  rdv_lieu: string
  vehicule: Vehicle
  ch: string
  eq: string
  raison: string
}
