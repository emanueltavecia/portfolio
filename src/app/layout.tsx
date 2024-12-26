import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'

const mainFontFamily = Outfit({ subsets: ['latin'], variable: '--font-main' })

export const metadata: Metadata = {
  title: 'Emanuel Tavecia',
  description: 'Portfólio de Emanuel Tavecia',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${mainFontFamily.className} antialiased dark:bg-zinc-950 dark:text-slate-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="mt-20 max-w-screen-xl mx-auto px-5">{children}</div>
          {modal}
        </ThemeProvider>
      </body>
    </html>
  )
}
