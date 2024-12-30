import { ThemeSwitcher } from '@/components/theme-switcher'
import { NavItem } from '../item'
import { HeaderNavProps } from './types'
import { cn } from '@/lib/utils'
import { LocaleSwitcher } from '@/components/locale-switcher'

export function HeaderNav({ isMobile, handleCloseSheet }: HeaderNavProps) {
  return (
    <>
      <ul
        className={cn(
          'flex',
          isMobile ? 'flex-col gap-3.5' : 'flex-row items-center gap-6',
        )}
      >
        <NavItem name="Home" href="/" onCloseSheet={handleCloseSheet} />
        <NavItem
          name="Experiência"
          href="/experience"
          onCloseSheet={handleCloseSheet}
        />
        <NavItem
          name="Projetos"
          href="/projects"
          onCloseSheet={handleCloseSheet}
        />
        <NavItem
          name="Educação"
          href="/education"
          onCloseSheet={handleCloseSheet}
        />
        <NavItem
          name="Certificações"
          href="/certificates"
          onCloseSheet={handleCloseSheet}
        />
        <NavItem
          name="Contato"
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
