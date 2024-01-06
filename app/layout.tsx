import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'

import './globals.css'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const font = Exo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
          <Footer />
        </body>
    </html>
  )
}
