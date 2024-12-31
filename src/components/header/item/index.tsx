'use client'

import { cn } from '@/lib/utils'
import { usePathname, useRouter } from '@/navigation'

import { NavItemProps } from './types'

export function NavItem({ name, href, onCloseSheet }: NavItemProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isActive = pathname === href

  function handleClick() {
    onCloseSheet?.()
    router.push(href)
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className={cn(
          'relative cursor-pointer font-medium transition-colors',
          isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400',
          'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-blue-600 after:transition-transform dark:after:bg-blue-400',
          isActive && 'after:scale-x-100',
        )}
      >
        {name}
      </button>
    </li>
  )
}
