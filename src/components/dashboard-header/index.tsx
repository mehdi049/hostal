import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { SidebarTrigger } from '../ui/sidebar'

export const DashboardHeader = () => {
  return (
    <div className="flex min-w-[750px] items-center justify-between gap-2 border-b-2 border-b-gray-200 px-4 py-6">
      <div className="flex items-center gap-1">
        <SidebarTrigger />
        <span className="border-l border-sidebar pl-2 font-medium">
          Planning de régulation
        </span>
      </div>

      <div className="flex items-end justify-center gap-2 xl:gap-4">
        <Button variant="outline" size="icon">
          <ChevronLeft />
        </Button>
        <span className="text-lg font-bold xl:text-2xl">
          Samedi 23 Novembre 2024
        </span>
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
