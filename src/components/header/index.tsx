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
    <header className="fixed left-0 right-0 top-0 z-10 flex items-center justify-center border-b border-zinc-100/70 bg-slate-200/60 py-4 shadow backdrop-blur-md dark:border-slate-900 dark:bg-[#0d152480]">
      <div className="flex w-full max-w-screen-xl items-center justify-between gap-4 px-5">
        <h1>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: 'link' }), 'p-0 text-xl')}
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
              className="-mr-3 flex p-3 md:hidden"
              onClick={() => setIsSheetOpen(true)}
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="max-w-72 dark:border-zinc-900">
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
