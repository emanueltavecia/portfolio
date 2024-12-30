import { ReactNode, Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Locales } from '@/locales'

import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const mainFontFamily = localFont({
  src: '../assets/outfit.ttf',
})

export const metadata: Metadata = {
  title: 'Emanuel Tavecia',
  description: 'Portfólio de Emanuel Tavecia',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  modal,
  params: { locale },
}: {
  children: ReactNode
  modal: ReactNode
  params: { locale: string }
}) {
  if (!routing.locales.includes(locale as Locales)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${mainFontFamily.className} flex min-h-screen flex-col justify-between antialiased dark:bg-zinc-950 dark:text-slate-50`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            <div className="relative mx-auto mt-24 min-h-[calc(100vh-96px)] w-full max-w-screen-xl">
              <div className="pointer-events-none absolute -left-[15%] top-0 h-96 w-full max-w-96 animate-pulse rounded-full bg-blue-500/15 blur-3xl filter dark:bg-blue-500/5" />
              <Suspense>{children}</Suspense>
            </div>
            {modal}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
