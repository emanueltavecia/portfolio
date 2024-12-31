'use client'

import { Check, Moon, Settings, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

import { Themes, ThemeSwitcherProps } from './types'

export function ThemeSwitcher({ isMobile }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()

  const t = useTranslations('Header')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <span
            className={cn(
              'text-gray-800 dark:text-gray-300',
              !isMobile && 'sr-only',
            )}
          >
            {t('changeTheme')}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? 'start' : 'end'}
        className="w-32"
        sideOffset={8}
      >
        <DropdownMenuItem
          onClick={() => setTheme(Themes.LIGHT)}
          className="justify-between gap-3"
        >
          <span className="flex items-center gap-3">
            <Sun className="h-4 w-4 shrink-0" />
            <span>{t('lightLabel')}</span>
          </span>

          {theme === Themes.LIGHT && <Check className="h-4 w-4 shrink-0" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme(Themes.DARK)}
          className="justify-between gap-3"
        >
          <span className="flex items-center gap-3">
            <Moon className="h-4 w-4 shrink-0" />
            <span>{t('darkLabel')}</span>
          </span>

          {theme === Themes.DARK && <Check className="h-4 w-4 shrink-0" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme(Themes.SYSTEM)}
          className="justify-between gap-3"
        >
          <span className="flex items-center gap-3">
            <Settings className="h-4 w-4 shrink-0" />
            <span>{t('systemLabel')}</span>
          </span>

          {theme === Themes.SYSTEM && <Check className="h-4 w-4 shrink-0" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
