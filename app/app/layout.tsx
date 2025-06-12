
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VLU Tequesquitengo - Estrategia de Comunicación y Medios',
  description: 'Transformamos la comunicación de VLU Tequesquitengo con estrategias innovadoras que aumentan la ocupación del 45% al 65% y mejoran la experiencia del huésped.',
  keywords: 'VLU Tequesquitengo, comunicación, medios, marketing hotelero, estrategia digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
