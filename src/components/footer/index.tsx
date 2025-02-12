'use client'

import { ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Separator } from '@/components/ui/separator'
import { usePathname, Link } from '@/navigation'
import { scrollToTop } from '@/utils/scroll-to-top'

import { Button } from '../ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/emanueltavecia',
    icon: Github,
    description: '@emanueltavecia',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/emanueltavecia',
    icon: Linkedin,
    description: '@emanueltavecia',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/emanueltavecia',
    icon: Instagram,
    description: '@emanueltavecia',
  },
  {
    name: 'Email',
    href: 'mailto:emanueltavecia@hotmail.com',
    icon: Mail,
    description: 'emanueltavecia@hotmail.com',
  },
]

export function Footer() {
  const pathname = usePathname()

  const t = useTranslations('Footer')

  return (
    <footer className="w-full border-t border-blue-200/20 bg-slate-100 pb-6 pt-12 dark:border-blue-950/30 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-6 sm:items-start sm:gap-10">
        <div className="grid w-full justify-center gap-6 sm:grid-cols-2 sm:justify-between sm:gap-10 lg:w-2/3">
          <div className="flex flex-col gap-4">
            {pathname !== '/' ? (
              <Link
                href="/"
                className="text-center text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-left"
              >
                Emanuel Tavecia
              </Link>
            ) : (
              <p
                className="cursor-pointer text-center text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-left"
                onClick={() => scrollToTop('smooth')}
              >
                Emanuel Tavecia
              </p>
            )}
            <p className="max-w-64 text-center text-sm text-gray-600 dark:text-gray-400 sm:text-left">
              {t('description')}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <h3 className="font-semibold">{t('socialMediaTitle')}</h3>

            <ul className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <TooltipProvider>
                    <Tooltip disableHoverableContent>
                      <TooltipTrigger asChild>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-fit items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                        >
                          <link.icon className="size-4" />
                          {link.name}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent
                        align="center"
                        sideOffset={12}
                        side="right"
                      >
                        <p>{link.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-300/40 dark:bg-blue-950/30" />

        <div className="flex w-full flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 sm:text-left">
            &copy; {new Date().getFullYear()} Emanuel Tavecia. {t('copyright')}
          </p>

          <Button
            onClick={() => scrollToTop('smooth')}
            variant="outline"
            size="icon"
          >
            <ArrowUp className="size-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
