import { useCallback, useEffect, useMemo, useState } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { redirect, usePathname, useRouter } from '@/navigation'
import { useSearchParams } from 'next/navigation'
import { Locales } from '@/locales'
import { useLocale } from 'next-intl'
import { Details } from '@/components/project-details'

export function ProjectDetailsModal() {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const locale = useLocale() as Locales

  const projectDetailsId = useMemo(() => {
    const id = Number(searchParams.get('id'))

    if (id) {
      setDetailsModalOpen(true)
      return id
    } else {
      setDetailsModalOpen(false)
      return undefined
    }
  }, [searchParams])

  useEffect(() => {
    if (projectDetailsId) {
      redirect({ href: { pathname: `/projects/${projectDetailsId}` }, locale })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale])

  const handleCloseProjectDetails = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.delete('id')
    setDetailsModalOpen(false)
    setTimeout(
      () =>
        router.push(`${pathname}?${newSearchParams.toString()}`, {
          scroll: false,
        }),
      200,
    )
  }, [pathname, router, searchParams])

  return (
    <Dialog open={detailsModalOpen} onOpenChange={handleCloseProjectDetails}>
      <DialogContent className="px-2 py-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        {projectDetailsId && <Details isModal id={projectDetailsId} />}
      </DialogContent>
    </Dialog>
  )
}
