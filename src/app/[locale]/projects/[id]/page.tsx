'use client'

import { notFound, useParams } from 'next/navigation'

import { Details } from '@/components/project-details'

export default function ProjectDetails() {
  const { id } = useParams()
  if (!id) {
    notFound()
  }
  return <Details id={Number(id)} />
}
