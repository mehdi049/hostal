import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { SidebarTrigger } from '../ui/sidebar'

export const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between gap-2 border-b-2 border-sidebar border-b-gray-200 px-4 py-6">
      <div className="flex items-center gap-1">
        <SidebarTrigger />
        <span className="border-l border-sidebar pl-2 font-medium">
          Planning de régulation
        </span>
      </div>

      <div className="flex items-end justify-center gap-4">
        <Button variant="outline" size="icon">
          <ChevronLeft />
        </Button>
        <span className="text-2xl font-bold">Samedi 23 Novembre 2024</span>
        <Button variant="outline" size="icon">
          <ChevronRight />
        </Button>
      </div>

      <Button>
        <Plus />
        Nouveau transport
      </Button>
    </div>
  )
}
