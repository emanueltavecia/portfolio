'use client'

import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
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
    <header className="flex items-center justify-center py-4 border-b border-zinc-100/70 dark:border-slate-900 bg-slate-200/60 dark:bg-[#0d152480] fixed left-0 right-0 top-0 backdrop-blur-md shadow z-10">
      <div className="flex items-center gap-4 justify-between w-full max-w-screen-xl px-5">
        <h1>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: 'link' }), 'text-xl p-0')}
          >
            Emanuel Tavecia
          </Link>
        </h1>
        <nav className="hidden items-center gap-6 md:flex">
          <HeaderNav isMobile={false} />
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="flex md:hidden p-3 -mr-3"
              onClick={() => setIsSheetOpen(true)}
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="dark:border-zinc-900 max-w-72">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-left">Menu</SheetTitle>
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
