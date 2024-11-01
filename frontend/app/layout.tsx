import './globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import {Providers} from "./theme-provider";

// ui components
import Header from '@/ui/header';
import Footer from '@/ui/footer';

// solid components
import BigGithubIcon from '@/components/big-github-icon';
import BTLogo from '@/components/bt-logo';
import RightsReserved from '@/components/rights-reserved';
import PoweredBy from '@/components/powered-by';
import ThemeToggle from '@/components/theme-toggle';



const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brandon Tupiti',
  description: 'Hi Brandon, a fullstack web developer skilled in django and nextjs.',
}

const colorScheme = "bg-[#f4f4f4] dark:bg-dark";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>

        <Providers>
            <Header colorScheme={colorScheme}>
              <BTLogo/>
              <BigGithubIcon />
              <ThemeToggle/>
            </Header>
          </Providers>

            {children}

          
      
        {/* <Header colorScheme={colorScheme}>
            <BTLogo/>
            <BigGithubIcon />
            <ThemeToggle/>
        </Header> */}

        {/* {children} */}

        {/* <Footer>
          <RightsReserved/>
          <PoweredBy/>
        </Footer> */}

      </body>
    </html>
  )
}
