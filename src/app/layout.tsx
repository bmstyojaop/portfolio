import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'タス | Home',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      {/* <body className={`h-screen ${inter.className}`}>{children}</body> */}
      <body className={` ${inter.className}`}>{children}</body>
    </html>
  );
}
