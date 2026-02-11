import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arquiteto Moderno | Transformando Espacos em Arte",
  description:
    "Portfolio de arquitetura de luxo com design minimalista e sofisticado.",
};

export const viewport: Viewport = {
  themeColor: "#f8f7f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${publicSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
