'use client'

import Cookies from 'js-cookie'
import { Locales } from '@/locales'
// eslint-disable-next-line no-restricted-imports
import { redirect } from 'next/navigation'

export default function NotFound() {
  const locale = Cookies.get('NEXT_LOCALE')

  redirect(`/${locale || Locales.PT_BR}/not-found`)
}