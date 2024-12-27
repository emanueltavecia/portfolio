'use client'

import { useScrollToTopOnPageLoad } from '@/utils/scroll-to-top'
import Link from 'next/link'

export default function Projects() {
  useScrollToTopOnPageLoad()

  return (
    <div>
      <p>Projects Page</p>
      <Link href="/projects/5">Detalhes do projeto</Link>
    </div>
  )
}
