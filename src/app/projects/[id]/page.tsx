'use client'

import { useScrollToTopOnPageLoad } from '@/utils/scroll-to-top'
import { useParams } from 'next/navigation'

export default function ProjectDetails() {
  const { id } = useParams()
  useScrollToTopOnPageLoad()

  return <p>Project Details Page | ID {id}</p>
}
