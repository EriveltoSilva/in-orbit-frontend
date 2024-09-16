import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"], // Subconjuntos da fonte que você quer carregar
  variable: "--font-inter", // Variável CSS para usar na aplicação
});

export const metadata: Metadata = {
  title: "in-orbit",
  description: "Gerenciador de Metas",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-ao">
      <body className={`${inter.className} h-screen bg-zinc-950 text-zinc-300 antialiased`}>{children}</body>
    </html>
  );
}
