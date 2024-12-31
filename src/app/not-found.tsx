'use client'

// eslint-disable-next-line no-restricted-imports
import { redirect } from 'next/navigation'

import Cookies from 'js-cookie'

import { Locales } from '@/locales'

export default function NotFound() {
  const locale = Cookies.get('NEXT_LOCALE')

  redirect(`/${locale || Locales.PT_BR}/not-found`)
}
