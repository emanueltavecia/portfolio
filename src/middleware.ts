import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export const config = {
  matcher: ['/', `/(pt-BR|en-US)/:path`],
}

export default createMiddleware(routing)
