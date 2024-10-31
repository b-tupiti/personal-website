import './globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

// ui components
import Header from '@/ui/header';
import Footer from '@/ui/footer';

// solid components
import BigGithubIcon from '@/components/big-github-icon';
import BTLogo from '@/components/bt-logo';
import RightsReserved from '@/components/rights-reserved';
import PoweredBy from '@/components/powered-by';
import FlexBox from '@/ui/flexbox';
import Container from '@/ui/container';


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
    <html lang="en">
      <body className={montserrat.className}>
        
        <Header colorScheme={colorScheme}>
          <Container>
            <FlexBox twstyle="flex justify-between items-center p-8 lg:px-16"> 
              <BTLogo/>
              <BigGithubIcon />
            </FlexBox>
          </Container>
        </Header>

        {children}

        {/* <Footer>
          <RightsReserved/>
          <PoweredBy/>
        </Footer> */}

      </body>
    </html>
  )
}
