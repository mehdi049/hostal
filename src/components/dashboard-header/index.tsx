'use client'

import React from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { SidebarTrigger } from '../ui/sidebar'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { useState } from 'react'

export const DashboardHeader = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const previousDay = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() - 1)
    setSelectedDate(newDate)
  }

  const nextDay = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + 1)
    setSelectedDate(newDate)
  }

  return (
    <div className="flex min-w-[750px] items-center justify-between gap-2 border-b-2 border-b-gray-200 px-4 py-6">
      <div className="flex items-center gap-1">
        <SidebarTrigger />
        <span className="border-l border-sidebar pl-2 font-medium">
          Planning de régulation
        </span>
      </div>

      <div className="flex items-end justify-center gap-2 xl:gap-4">
        <Button variant="outline" size="icon" onClick={previousDay}>
          <ChevronLeft />
        </Button>
        <span className="text-lg font-bold xl:text-2xl">
          {format(selectedDate, 'EEEE dd MMMM yyyy', { locale: fr })}
        </span>
        <Button variant="outline" size="icon" onClick={nextDay}>
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
