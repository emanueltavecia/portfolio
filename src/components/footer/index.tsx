'use client'

import { ArrowUp } from 'lucide-react'
import { Button } from '../ui/button'
import { scrollToTop } from '@/utils/scroll-to-top'

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 bg-slate-200 p-8 dark:bg-gray-900">
      <p>Desenvolvido com Next.js</p>
      <p>By Emanuel Tavecia &copy; {new Date().getFullYear()}</p>

      <Button
        onClick={() => scrollToTop('smooth')}
        variant="secondary"
        className="p-3 text-lg hover:bg-slate-300 dark:bg-slate-950"
      >
        <ArrowUp />
      </Button>
    </footer>
  )
}
