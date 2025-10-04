import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';
import Navbar from '@/components/navigation/navbar';
import {roboto} from '@/lib/fonts';

export const metadata: Metadata = {
  title: "Portfolio - Sakab",
  description: "Mon portfolio personnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`min-h-screen w-full bg-[#000319] text-white ${roboto.className} p-6 antialiased`}
      >
        <Image src="/vfx/spotlight.png" alt="Spotlight" fill className='object-cover object-center absolute pointer-events-none' />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
