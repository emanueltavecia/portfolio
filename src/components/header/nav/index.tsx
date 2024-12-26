import { ThemeToggle } from '@/components/theme-toggle'
import { NavItem } from '../item'
import { HeaderNavProps } from './types'
import { cn } from '@/lib/utils'

export function HeaderNav({ isMobile, handleCloseSheet }: HeaderNavProps) {
  return (
    <>
      <ul
        className={cn(
          'flex',
          isMobile ? 'gap-1 flex-col' : 'items-center flex-row gap-4'
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
      <ThemeToggle isMobile={isMobile} />
    </>
  )
}
