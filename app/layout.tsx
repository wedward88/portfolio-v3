import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';

import NavDrawer from './components/NavDrawer/NavDrawer';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'William Dunn',
  description: 'Portfolio',
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
    <html data-theme='nord' lang='en'>
      <body>
        <NavDrawer />
        <div
          className={`px-[10%] lg:px-[20%] lg:pt-[5%] justify-items-center bg-base-300 ${roboto.className}`}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
