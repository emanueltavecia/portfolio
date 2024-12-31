'use client'

import { Details } from '@/components/project-details'
import { notFound, useParams } from 'next/navigation'

export default function ProjectDetails() {
  const { id } = useParams()
  if (!id) {
    notFound()
  }
  return <Details id={Number(id)} />
}
