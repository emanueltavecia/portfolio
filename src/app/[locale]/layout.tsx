import { ReactNode, Suspense } from 'react'

import localFont from 'next/font/local'
import { notFound } from 'next/navigation'

import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { routing } from '@/i18n/routing'
import { Locales } from '@/locales'

import './globals.css'
import { LocaleParams } from './types'

const mainFontFamily = localFont({
  src: '../assets/outfit.ttf',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: LocaleParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'RootMetadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: ['portfolio', 'front-end', 'React', 'TypeScript', 'React Native'],
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
} & LocaleParams) {
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
        <Suspense>
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
                {children}
              </div>
              <Footer />

              <Toaster />
            </ThemeProvider>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  )
}
