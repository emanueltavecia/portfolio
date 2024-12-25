'use client'

import { useParams } from 'next/navigation'

export default function ProjectDetails() {
  const { id } = useParams()
  return <p>Project Details Page | ID {id}</p>
}
