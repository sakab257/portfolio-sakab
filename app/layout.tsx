import type { Metadata } from "next";
import { Chivo } from 'next/font/google'
import "./globals.css";
import GridBackground from "@/components/ui/grid-bg";
import Header from "@/components/header/header";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Sakab",
  description: "Portfolio de Salim Bouskine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${chivo.variable} antialiased bg-[#FFD7BF] h-full `}
      >
        <GridBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
