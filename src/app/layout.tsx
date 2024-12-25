import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const mainFontFamily = Outfit({ subsets: ['latin'], variable: '--font-main' })

export const metadata: Metadata = {
  title: 'Emanuel Tavecia',
  description: 'Portfólio de Emanuel Tavecia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${mainFontFamily.className} antialiased bg-zinc-950`}>
        {children}
      </body>
    </html>
  )
}
