import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/dashboard-sidebar'
import { DashboardHeader } from '@/components/dashboard-header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hostal',
  description: 'Hostal is a dashboard for managing patient transportation.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-sidebar font-[family-name:var(--font-inter)] text-sm antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="m-4 w-full rounded-xl bg-background">
            <DashboardHeader />
            <div className="p-4">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
