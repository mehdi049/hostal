import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-[family-name:var(--font-inter)] bg-sidebar text-sm`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="bg-background m-4 w-full rounded-xl">
            <DashboardHeader />
            <div className="p-4">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
