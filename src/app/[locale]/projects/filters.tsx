import { useCallback, useMemo } from 'react'

import { useSearchParams } from 'next/navigation'

import { Eraser } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { Select } from 'select-shadcn-v2'

import { Button } from '@/components/ui/button'
import { Locales } from '@/locales'
import { usePathname, useRouter } from '@/navigation'

import { filtersOptions } from './rules'
import { FilterState } from './types'

export function Filters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const locale = useLocale() as Locales
  const t = useTranslations('Projects')

  const filtersFromUrl = useMemo(() => {
    const parsedFilters: Partial<FilterState> = {}
    searchParams.forEach((value, key) => {
      parsedFilters[key as keyof FilterState] = JSON.parse(value)
    })
    return parsedFilters
  }, [searchParams])

  const handleFilterChange = useCallback(
    (name: string, value: string[]) => {
      const newSearchParams = new URLSearchParams(searchParams)
      if (value.length > 0) {
        newSearchParams.set(name, JSON.stringify(value))
      } else {
        newSearchParams.delete(name)
      }
      router.replace(`${pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      })
    },
    [pathname, router, searchParams],
  )

  const handleClearFilters = () => {
    router.replace(pathname, {
      scroll: false,
    })
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg font-medium">{t('filtersTitle')}</p>
        <Button
          variant="link"
          className="p-0 text-slate-700 dark:text-slate-300"
          onClick={handleClearFilters}
        >
          <Eraser />
          {t('clearFiltersButtonText')}
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
        {filtersOptions[locale].map((filter) => (
          <Select
            key={filter.id}
            {...filter}
            selected={filtersFromUrl[filter.id]}
            onSelect={(value) => handleFilterChange(filter.id, value)}
            placeholder={filter.placeholder}
            useClear
            useAll
            multiple
            triggerDescriptionLastSeparator={t(
              'selectTriggerDescriptionLastSeparator',
            )}
          />
        ))}
      </div>
    </div>
  )
}
