import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMC | Carreaux Modernes du Centre - Fabricant de Carrelage à Rouiba",
  description:
    "CMC SARL, fabricant industriel de carreaux et dalles en ciment et grès. Basé à Rouiba, Alger - plus de 16 000 clients satisfaits.",
  keywords: ["carrelage", "carreaux ciment", "carreaux grès", "Rouiba", "Alger", "CMC"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
