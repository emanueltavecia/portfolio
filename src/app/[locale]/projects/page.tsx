'use client'

import { useCallback, useMemo } from 'react'
import { useScrollToTopOnPageLoad } from '@/utils/scroll-to-top'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { EmptyState } from './empty-state'
import { Filters } from './filters'
import { useSearchParams } from 'next/navigation'
import { usePathname, useRouter } from '@/navigation'
import { FilterState } from './types'
import { useLocale, useTranslations } from 'next-intl'
import { Locales } from '@/locales'
import { ProjectDetailsModal } from '@/components/project-details/modal'

export default function Projects() {
  useScrollToTopOnPageLoad()

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const locale = useLocale() as Locales
  const t = useTranslations('Projects')

  const filters = useMemo(() => {
    const parsedFilters: Partial<FilterState> = {}
    searchParams.forEach((value, key) => {
      parsedFilters[key as keyof FilterState] = JSON.parse(value)
    })
    return parsedFilters
  }, [searchParams])

  const filteredProjects = useMemo(() => {
    return projects[locale].filter((project) => {
      const typeMatch =
        !filters.type ||
        project.type.some((type) => filters.type?.includes(type))
      const sourceMatch =
        !filters.source || filters.source.includes(project.source)
      const visibilityMatch =
        !filters.visibility || filters.visibility.includes(project.visibility)
      const complexityMatch =
        !filters.complexity || filters.complexity.includes(project.complexity)

      return typeMatch && sourceMatch && visibilityMatch && complexityMatch
    })
  }, [filters, locale])

  const handleOpenProjectDetails = useCallback(
    (id: number) => {
      if (id) {
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set('id', String(id))
        router.push(`${pathname}?${newSearchParams.toString()}`, {
          scroll: false,
        })
      }
    },
    [pathname, router, searchParams],
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-10 flex min-h-[75vh] flex-col gap-10 px-5"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
          {t('title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
      </div>

      <Filters />

      {filteredProjects.length ? (
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.4 },
                  layout: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.6,
                  },
                }}
              >
                <Card
                  className="group relative h-full cursor-pointer overflow-hidden bg-slate-50/40 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 dark:bg-gray-950/40 dark:hover:bg-gray-950"
                  onClick={() => handleOpenProjectDetails(project.id)}
                >
                  <CardContent className="flex h-full flex-col justify-between p-0">
                    {(project.screenshot || project.repo_name) && (
                      <Image
                        src={
                          project.screenshot ||
                          `https://github.com/emanueltavecia/${project.repo_name}/blob/main/.github/screenshot.png?raw=true`
                        }
                        alt={t('projectImageAlt', {
                          projectName: project.name,
                        })}
                        className="aspect-video w-full rounded-xl object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        fill
                        style={{ position: '' as never }}
                        priority
                      />
                    )}

                    <div className="flex flex-col gap-4 py-5">
                      <div className="flex flex-col gap-3 px-5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">
                            {project.name}
                          </h3>
                          {project.isFeatured && (
                            <Badge
                              variant="secondary"
                              className="border-blue-300/60 bg-blue-50 text-blue-700 dark:border-blue-300/40 dark:bg-blue-900/20 dark:text-blue-300"
                            >
                              {t('isFeaturedDescription')}
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.type.map((type) => (
                            <Badge
                              key={type}
                              variant="secondary"
                              className="border-slate-300/60 bg-gray-100 text-gray-700 dark:border-slate-700/80 dark:bg-gray-800 dark:text-gray-300"
                            >
                              {type}
                            </Badge>
                          ))}
                        </div>

                        <p className="w-full overflow-hidden text-ellipsis text-nowrap text-gray-600 dark:text-gray-400">
                          {project.description[0]}
                        </p>

                        <div className="flex items-center gap-1.5 text-sm font-medium text-blue-700 transition-all duration-200 group-hover:gap-2.5 dark:text-blue-400">
                          <span>{t('seeDetails')}</span>
                          <ArrowRight className="size-4" />
                        </div>
                      </div>

                      <div className="flex gap-2 overflow-auto px-5">
                        {project.techs.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-nowrap border-blue-200 font-medium text-blue-700 dark:border-blue-800/70 dark:text-blue-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <EmptyState onClearFilters={() => router.push(pathname)} />
      )}

      <ProjectDetailsModal />
    </motion.div>
  )
}
