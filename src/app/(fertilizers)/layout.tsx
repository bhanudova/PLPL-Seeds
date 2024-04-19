import Footer from '@/components/Footer';
import HomeHeader from "@/components/home/HomeHeader";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import './../globals.css';
import { headerInfo } from '@/constraints/global';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PLPL Seeds',
  description: 'By TSSS Infotech',
}

const headerList = [
  { id: 1, home: 'Home', fertilizers: 'Fertilizers', seeds: 'Seeds', food: 'Food', tissueCulture: 'Tissue-Culture' }
]
const headerLogo = [{ id: 1, logo: '/images/PLPL_logo.png' }];

const headerDropdown = [
  { id: 1, defaultColor: 'Default', defaultValue: '', black: 'Black', blackValue: 'black', white: 'White', whiteValue: 'white', dark: 'Dark', darkValue: 'dark' }
]

export default async function FERootLayout({ children, params }: { children: React.ReactNode, params: any }) {
  const cookieStore = cookies();
  const mode = cookieStore.get('mode')?.value;
  const theme = (mode==='dark')?'night':'acid'

  return (
    <html lang="en" data-theme={theme}>
      <body className={inter.className}>
        <HomeHeader  mode={mode} headerList={headerInfo} headerLogo={headerLogo} headerDropdown={headerDropdown} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
