'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { HeaderNav } from './nav'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-10 border-b border-blue-100/20 bg-white/80 backdrop-blur-lg dark:border-blue-950/20 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Emanuel Tavecia
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <HeaderNav isMobile={false} />
        </nav>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-50 dark:hover:bg-blue-900/20 md:hidden"
              onClick={() => setIsSheetOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 border-blue-100 bg-white/95 backdrop-blur-lg dark:border-blue-950/20 dark:bg-gray-950/95">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left font-bold tracking-tight text-blue-600 dark:text-blue-400">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-3">
              <HeaderNav
                isMobile
                handleCloseSheet={() => setIsSheetOpen(false)}
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
