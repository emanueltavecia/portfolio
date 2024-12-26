'use client'

import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { NavItemProps } from './types'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function NavItem({ name, href, onCloseSheet }: NavItemProps) {
  const pathname = usePathname()

  return (
    <li>
      <Link
        href={href}
        onClick={onCloseSheet}
        className={cn(
          buttonVariants({ variant: 'link' }),
          'p-0 text-base',
          pathname === href ? 'underline' : 'opacity-70',
        )}
      >
        {name}
      </Link>
    </li>
  )
}
