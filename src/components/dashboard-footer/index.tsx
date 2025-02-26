import { User } from 'lucide-react'
import { Button } from '../ui/button'

export const DashboardFooter = () => {
  return (
    <div className="border-t-2 border-t-gray-200 px-4 py-2">
      <div className="flex justify-between gap-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User />
            <div>
              <p className="font-bold">
                <span className="text-destructive">Mme</span> Haidara THIERNO
              </p>
              <p className="text-xs italic">Né le 10/11/1987 (34ans)</p>
            </div>
          </div>
          <div>
            <p className="text-xs opacity-80">
              10 Rue Faston-Paymai - 92110 Clichy
            </p>
            <p className="text-xs text-destructive">
              Digicode bâtiment: 58BA4 - 2ème étage à droite
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Button variant="destructive">Annuler</Button>
          <Button variant="secondary">Voir en détail</Button>
        </div>
      </div>
    </div>
  )
}
