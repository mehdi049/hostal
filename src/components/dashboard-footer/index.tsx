import { FooterCta } from './footer-cta'
import { FooterProfileInfo } from './footer-profile-info'
import { TripInfo } from './footer-trip-info'

export const DashboardFooter = () => {
  const profile = {
    prefix: 'Mme',
    name: 'Haidara THIERNO',
    birthdate: '10/11/1987',
    age: 34,
    address: '10 Rue Faston-Paymai - 92110 Clichy',
    buildingCode: '58BA4 - 2ème étage à droite',
  }

  const trip = {
    departure: {
      location: 'Domicile',
      address: '10 Rue Faston-Paymai - 92110 Clichy',
      buildingCode: '58BA4 - 2ème étage à droite',
    },
    arrival: {
      location: 'Maison de retraite des 3 fontaines',
      address: '10 Rue Faston-Paymai - 92120 Montrouge',
      buildingCode: 'Digicode bâtiment: 58BA4 - 2ème étage à droite',
    },
    env: '10h34',
    ac: '10h34',
    deb: '10h34',
    pec: '10h34',
    dep: '10h34',
    fin: '10h34',
  }

  return (
    <div className="min-w-[1050px] border-t-2 border-t-gray-200 px-4 py-2">
      <div className="flex justify-between gap-2">
        <FooterProfileInfo profile={profile} />

        <TripInfo trip={trip} />

        <FooterCta />
      </div>
    </div>
  )
}
