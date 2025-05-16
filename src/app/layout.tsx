import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/cursor.css';
import Navbar from '@/components/layout/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bonafide Friends Forever',
  description: 'Building Future Together',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomCursor />
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <main className="relative mt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
