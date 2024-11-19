import './globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import {Providers} from "./theme-provider";

// ui components
import Header from '@/components/header';

// solid components
import Footer from '@/components/footer';
import BTLogo from '@/components/bt-logo';
import ThemeToggle from '@/components/theme-toggle';
import HandlesAndResume from '@/components/handles-n-resume';



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

        
        <Header>
          <BTLogo/>
          <HandlesAndResume/>  
          <Providers>
          <ThemeToggle/>
          </Providers>
        </Header>
        
        {children}

        <Footer/>

      </body>
    </html>
  )
}
