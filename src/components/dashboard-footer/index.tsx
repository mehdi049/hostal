import { ArrowRight, ArrowRightCircle, Clock5, Home, User } from 'lucide-react'
import { Button } from '../ui/button'
import { Circle } from '../ui/circle'

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

        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 rounded-md bg-secondary/10 px-2">
              <Clock5 size="15px" className="text-secondary" />
              <p>
                <span className="font-bold text-primary">Env.</span>{' '}
                <span className="font-semibold text-[#A32FFF]">10h34</span>
              </p>
              <ArrowRight className="text-secondary" />
              <p>
                <span className="font-bold text-primary">Env.</span>{' '}
                <span className="font-semibold text-[#A32FFF]">10h34</span>
              </p>
              <ArrowRight className="text-secondary" />
              <p>
                <span className="font-bold text-primary">Deb.</span>{' '}
                <span className="font-semibold text-destructive">10h34</span>
              </p>
              <ArrowRight className="text-secondary" />
              <p>
                <span className="font-bold text-primary">Pec.</span>{' '}
                <span className="font-semibold text-destructive">10h34</span>
              </p>
              <ArrowRight className="text-secondary" />
              <p>
                <span className="font-bold text-primary">Dep.</span>{' '}
                <span className="text-success font-semibold">10h34</span>
              </p>
              <ArrowRight className="text-secondary" />
              <p>
                <span className="font-bold text-primary">Fin.</span>{' '}
                <span className="text-success font-semibold">10h34</span>
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <div className="flex items-center gap-2">
                  <Home size="22px" />
                  <span className="font-bold text-secondary">Domicile</span>
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

              <div className="flex items-center">
                <p className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-medium text-secondary">
                    Depart
                  </span>

                  <Circle />
                </p>
                <div className="pt-7">
                  <span className="block h-1 w-8 bg-destructive"></span>
                  <ArrowRightCircle
                    size="14px"
                    className="-mt-2 ml-2 bg-white"
                  />
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
                    Maison de retraite des 3 fontaines
                  </span>

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                    H
                  </span>
                </div>
                <div>
                  <p className="text-xs opacity-80">
                    10 Rue Faston-Paymai - 92120 Montrouge
                  </p>
                  <p className="text-xs text-destructive">
                    Digicode bâtiment: 58BA4 - 2ème étage à droite
                  </p>
                </div>
              </div>
            </div>
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
