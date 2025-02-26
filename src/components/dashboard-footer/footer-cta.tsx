import { Button } from '../ui/button'

export const FooterCta = () => {
  return (
    <div className="flex flex-col gap-1">
      <Button variant="destructive">Annuler</Button>
      <Button variant="secondary">Voir en détail</Button>
    </div>
  )
}
