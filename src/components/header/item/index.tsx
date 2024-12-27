'use client'

import Link from 'next/link'
import { NavItemProps } from './types'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function NavItem({ name, href, onCloseSheet }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <Link
        href={href}
        onClick={onCloseSheet}
        className={cn(
          'relative font-medium transition-colors',
          isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400',
          'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-blue-600 after:transition-transform dark:after:bg-blue-400',
          isActive && 'after:scale-x-100',
        )}
      >
        {name}
      </Link>
    </li>
  )
}
