import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ReactNode } from 'react'

const mainFontFamily = Outfit({ subsets: ['latin'], variable: '--font-main' })

export const metadata: Metadata = {
  title: 'Emanuel Tavecia',
  description: 'Portfólio de Emanuel Tavecia',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode
  modal: ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${mainFontFamily.className} flex min-h-screen flex-col justify-between antialiased dark:bg-zinc-950 dark:text-slate-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="mx-auto mt-20 w-full max-w-screen-xl">{children}</div>
          {modal}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
