import type { Metadata } from 'next';
import './globals.css';

import { Roboto } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';

import Footer from './components/Footer';
import NavDrawer from './components/NavDrawer/NavDrawer';

export const metadata: Metadata = {
  title: 'William Dunn',
  description: 'Portfolio',
  icons: {
    icon: '/skateboard.svg',
  },
};

const roboto = Roboto({
  weight: ['100', '300'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <GoogleAnalytics gaId='G-QLYGZFERTY' />
      <body>
        <NavDrawer />
        <div
          className={`flex px-[10%] xl:px-[20%] xl:pt-[5%] justify-center bg-base-300 dark:[data-theme=dim] ${roboto.className}`}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
