import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "in-orbit",
  description: "Gerenciador de Metas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-ao">
      <body className={`h-screen bg-zinc-950 text-zinc-300 antialiased`}>{children}</body>
    </html>
  );
}
