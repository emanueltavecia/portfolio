import { buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { twMerge } from 'tailwind-merge'
import { NavLinks } from './nav-links'

export function Header() {
  return (
    <div className="bg-zinc-900/70 backdrop-blur-md rounded-b-lg fixed top-0 left-0 right-0">
      <header className="max-w-5xl w-full mx-auto px-5 py-7 md:px-8 flex gap-4 items-center justify-between">
        <span className="font-bold text-xl md:font-lg">Emanuel Tavecia</span>
        <nav className="md:flex gap-7 font-medium hidden">
          <NavLinks />
        </nav>
        <Sheet>
          <SheetTrigger
            className={twMerge(
              buttonVariants({ variant: 'ghost' }),
              'p-2 md:hidden'
            )}
          >
            <HamburgerMenuIcon className="size-6" />
          </SheetTrigger>
          <SheetContent className="bg-slate-950 border-slate-500 text-slate-50">
            <SheetHeader>
              <SheetTitle className="text-slate-50 text-center text-xl">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-7 flex flex-col gap-3 font-medium">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  )
}
