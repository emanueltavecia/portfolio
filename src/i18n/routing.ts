import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

import { Locales, locales } from '../locales'

export const routing = defineRouting({
  locales,
  defaultLocale: Locales.PT_BR,
})

export const {
  Link,
  getPathname,
  permanentRedirect,
  redirect,
  usePathname,
  useRouter,
} = createNavigation(routing)
