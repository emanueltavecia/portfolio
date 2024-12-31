import { ThemeSwitcher } from '@/components/theme-switcher'
import { NavItem } from '../item'
import { HeaderNavProps } from './types'
import { cn } from '@/lib/utils'
import { LocaleSwitcher } from '@/components/locale-switcher'
import { useTranslations } from 'next-intl'

export function HeaderNav({ isMobile, handleCloseSheet }: HeaderNavProps) {
  const t = useTranslations('Header')

  return (
    <>
      <ul
        className={cn(
          'flex',
          isMobile ? 'flex-col gap-3.5' : 'flex-row items-center gap-6',
        )}
      >
        <NavItem
          name={t('homeLink')}
          href="/"
          onCloseSheet={handleCloseSheet}
        />
        <NavItem
          name={t('experienceLink')}
          href="/experience"
          onCloseSheet={handleCloseSheet}
        />
        <NavItem
          name={t('projectsLink')}
          href="/projects"
          onCloseSheet={handleCloseSheet}
        />
        <NavItem
          name={t('educationLink')}
          href="/education"
          onCloseSheet={handleCloseSheet}
        />
        <NavItem
          name={t('certificatesLink')}
          href="/certificates"
          onCloseSheet={handleCloseSheet}
        />
        <NavItem
          name={t('contactLink')}
          href="/contact"
          onCloseSheet={handleCloseSheet}
        />
      </ul>
      <div className={cn('flex gap-2', isMobile && 'flex-col')}>
        <LocaleSwitcher isMobile={isMobile} />
        <ThemeSwitcher isMobile={isMobile} />
      </div>
    </>
  )
}
