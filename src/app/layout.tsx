import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ReactNode, Suspense } from 'react'

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

          <div className="relative mx-auto mt-24 w-full max-w-screen-xl">
            <div className="pointer-events-none absolute -left-[15%] top-0 h-96 w-full max-w-96 animate-pulse rounded-full bg-blue-500/15 blur-3xl filter dark:bg-blue-500/5" />
            <Suspense>{children}</Suspense>
          </div>
          {modal}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
