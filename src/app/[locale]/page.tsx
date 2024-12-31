'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { techStack } from '@/data/tech-stack'
import { motion } from 'framer-motion'
import { Locales } from '@/locales'
import { ProjectDetailsModal } from '@/components/project-details/modal'
import { useRouter, usePathname } from '@/navigation'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const locale = useLocale() as Locales
  const t = useTranslations('Home')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

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
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-6 mt-10 flex flex-col items-center gap-20 md:mt-24"
    >
      <div className="flex w-full max-w-xl flex-col items-center justify-between gap-10 px-5 md:max-w-full md:flex-row md:items-start">
        <div className="relative flex max-w-3xl flex-col items-center gap-6 md:items-start">
          <div className="flex flex-col gap-2">
            <p className="text-center font-medium text-blue-600 dark:text-blue-400 md:text-left">
              {t('subtitle')}
            </p>
            <h1 className="flex flex-wrap justify-center gap-x-2 text-center text-4xl font-bold tracking-tight md:block md:text-left lg:text-5xl">
              {t.rich('title', {
                span: (chunks) => <span>{chunks}</span>,
                name: (chunks) => (
                  <span className="text-blue-600 dark:text-blue-400">
                    {chunks}
                  </span>
                ),
              })}
            </h1>
          </div>

          <p className="text-center text-lg text-gray-600 dark:text-gray-400 md:text-justify">
            {t('description')}
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Card className="w-full border-blue-100 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-900/10">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Soft Skills:</span>{' '}
                {t('softSkills')}
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button className="gap-2 hover:bg-blue-500">
              <Download className="size-4" />
              Download CV
            </Button>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute -right-4 -top-4 h-60 w-60 animate-pulse rounded-full bg-blue-500/10 blur-3xl filter dark:bg-blue-500/5" />
          <Image
            src="https://github.com/emanueltavecia.png"
            alt={t('imageAlt')}
            priority
            fetchPriority="high"
            className="relative size-52 rounded-full border-4 border-blue-50 object-cover shadow-lg dark:border-blue-900/30"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col px-5">
          <h2 className="mb-1 text-2xl font-bold tracking-tight sm:-mb-3">
            {t('featuredProjectsTitle')}
          </h2>
          <div className="flex items-end justify-between gap-6">
            <p
              className={cn(
                'text-sm text-gray-600 dark:text-gray-400 sm:max-w-none',
                locale === Locales.PT_BR ? 'max-w-64' : 'max-w-40',
              )}
            >
              {t('featuredProjectsSubtitle')}
            </p>
            <Link
              href="/projects"
              className={cn(
                buttonVariants({
                  variant: 'link',
                }),
                'group gap-2 p-0 text-base font-medium',
              )}
            >
              {t('featuredProjectsSeeAllButtonText')}
              <ArrowRight className="size-4 transition-all duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full overflow-hidden 2xl:rounded-lg"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="mx-3">
            {projects[locale]
              .filter((project) => project.isFeatured)
              .map((project) => (
                <CarouselItem
                  key={project.id}
                  className="group ml-0 basis-10/12 p-0 md:basis-2/3"
                >
                  <div
                    onClick={() => handleOpenProjectDetails(project.id)}
                    className="relative mx-2 block cursor-pointer overflow-hidden rounded-lg"
                  >
                    <Image
                      className="w-full"
                      src={`https://github.com/emanueltavecia/${project.repo_name}/blob/main/.github/screenshot.png?raw=true`}
                      alt={t('featuredProjectsImageAlt', {
                        projectName: project.name,
                      })}
                      priority
                      fetchPriority="high"
                      width={1500}
                      height={400}
                    />
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>

      <ProjectDetailsModal />
    </motion.main>
  )
}
