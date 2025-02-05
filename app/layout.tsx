import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const bebasNeue = localFont({
  src: [{ path: '/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--bebas-neue',
});

export const metadata: Metadata = {
  title: 'E-shop',
  description: 'E-shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

