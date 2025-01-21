import { ReactNode } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { LocaleParams } from '@/app/[locale]/types'
import { projects } from '@/data/projects'
import { routing } from '@/i18n/routing'
import { Locales } from '@/locales'

export async function generateStaticParams() {
  const locales = routing.locales.map((locale) => ({ locale }))

  const projectIds = projects[Locales.PT_BR].map((project) => project.id)

  return locales.flatMap(({ locale }) =>
    projectIds.map((id) => ({
      locale,
      id: String(id),
    })),
  )
}

export default function ProjectDetailsLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
} & LocaleParams) {
  setRequestLocale(locale)

  return children
}
