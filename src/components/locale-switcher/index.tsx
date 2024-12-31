'use client'

import { Languages, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LocaleSwitcherProps } from './types'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from '@/navigation'
import { useParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { Locales } from '@/locales'
import { useTranslations } from 'next-intl'

export function LocaleSwitcher({ isMobile }: LocaleSwitcherProps) {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const [, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const t = useTranslations('Header')

  function handleLocaleChange(locale: Locales) {
    setOpen(false)

    if (params.locale !== locale) {
      startTransition(() => {
        if (params.id) {
          window.location.replace(`/${locale}${pathname}`)
        } else {
          router.replace(
            // @ts-expect-error params is correct
            { pathname, params },
            { locale },
          )
        }
      })
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Languages className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <span
            className={cn(
              'text-gray-800 dark:text-gray-300',
              !isMobile && 'sr-only',
            )}
          >
            {t('changeLanguage')}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? 'start' : 'end'}
        className="w-[200px]"
        sideOffset={8}
      >
        <DropdownMenuItem
          onClick={() => handleLocaleChange(Locales.PT_BR)}
          className="justify-between gap-3"
        >
          <span className="flex items-center gap-3">
            <span>🇧🇷</span>
            <span>Português (Brasil)</span>
          </span>

          {params.locale === Locales.PT_BR && (
            <Check className="h-4 w-4 shrink-0" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLocaleChange(Locales.EN_US)}
          className="justify-between gap-3"
        >
          <span className="flex items-center gap-3">
            <span>🇺🇸</span>
            <span>English (US)</span>
          </span>
          {params.locale === Locales.EN_US && (
            <Check className="h-4 w-4 shrink-0" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
