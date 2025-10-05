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
        className={`min-h-screen w-full bg-[#000319] text-white ${roboto.className} antialiased`}
      >
        <Image src="/vfx/spotlight.png" alt="Spotlight" width={1280} height={720} className='w-full h-full xl:w-[1280px] xl:h-[720px] object-cover object-center absolute top-0 xl:right-0 pointer-events-none xl:animate-pulse' />
        <Image src="/vfx/spotlight.png" alt="Spotlight" width={1280} height={720} className='object-cover object-center hidden xl:block absolute xl:top-0 xl:left-0 pointer-events-none scale-x-[-1] xl:animate-pulse' />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
