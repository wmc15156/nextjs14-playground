import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import AuthContext from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import ReactQueryProviders from '@/contexts/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <AuthContext>
        <body className={inter.className}>
          <ReactQueryProviders>
            <Navbar />
            {children}
          </ReactQueryProviders>
        </body>
      </AuthContext>
    </html>
  );
}
