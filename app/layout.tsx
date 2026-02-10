import React from 'react';
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Arquiteto Moderno | Transformando Espaços em Arte",
  description: "A luxury architecture portfolio featuring parallax scrolling, motion blur animations, and a sophisticated minimalist design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${publicSans.className} antialiased bg-background-light text-slate-800 selection:bg-primary selection:text-white`}>
        {children}
      </body>
    </html>
  );
}