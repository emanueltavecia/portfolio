import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emanuel Tavecia",
  description: "Portfólio de Emanuel Tavecia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth scroll-pt-24 md:scroll-pt-20" lang="pt-br">
      <body className={`${inter.className} bg-neutral-950`}>{children}</body>
    </html>
  );
}
