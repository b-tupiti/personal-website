import type { Metadata } from 'next'
import { MonteCarlo, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Logo from '@/components/logo'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brandon Tupiti',
  description: 'Hi Brandon, a fullstack web developer skilled in django and nextjs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        
        <Header>
          <Logo/>
          <Navbar />
        </Header>

        {children}
        <Footer />
      </body>
    </html>
  )
}
