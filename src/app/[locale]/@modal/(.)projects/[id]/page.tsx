'use client'

import { Details } from '@/app/[locale]/projects/[id]/details'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useRouter } from '@/navigation'
import { useState } from 'react'

export default function ProjectDetailsModal() {
  const [open, setOpen] = useState(true)

  const router = useRouter()

  function handleClose() {
    setOpen(false)
    setTimeout(() => router.back(), 200)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="px-2 py-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <Details isModal />
      </DialogContent>
    </Dialog>
  )
}
