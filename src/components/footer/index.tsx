'use client'

import { ArrowUp } from 'lucide-react'
import { Button } from '../ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-slate-200 dark:bg-gray-900 p-8 flex flex-col gap-2 items-center">
      <p>Desenvolvido com Next.js</p>
      <p>By Emanuel Tavecia &copy; {new Date().getFullYear()}</p>

      <Button
        onClick={scrollToTop}
        variant="secondary"
        className="text-lg p-3 dark:bg-slate-950 hover:bg-slate-300"
      >
        <ArrowUp />
      </Button>
    </footer>
  )
}
