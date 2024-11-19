import './globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

import Header from '@/components/header/header';
import Footer from '@/components/footer';

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
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
