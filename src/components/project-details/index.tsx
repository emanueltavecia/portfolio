'use client'

import Image from 'next/image'
import { notFound } from 'next/navigation'

import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Box,
  Code2,
  Info,
  Video,
  Workflow,
  Tag,
  Lock,
  BarChart3,
  Smartphone,
  LaptopMinimal,
  Layout,
  Server,
} from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import { Locales } from '@/locales'
import { useRouter } from '@/navigation'
import { getRepoName } from '@/utils/get-repo-name'

import { ProjectDetailsProps } from './types'

import {
  getComplexityLabel,
  getSourceLabel,
  getVisibilityLabel,
} from '../../app/[locale]/projects/rules'
import {
  ProjectComplexity,
  ProjectListItem,
  ProjectType,
} from '../../app/[locale]/projects/types'
import { DialogTitle } from '../ui/dialog'

export function Details({ id, isModal }: ProjectDetailsProps) {
  const router = useRouter()

  const locale = useLocale() as Locales
  const t = useTranslations('ProjectDetails')

  const project = projects[locale].find((p) => p.id === Number(id))

  if (!project) {
    notFound()
  }

  const list = (listItems: (string | ProjectListItem)[]) => {
    return (
      <ul className="flex flex-col gap-1.5 pl-6">
        {listItems.map((item, index) =>
          typeof item === 'string' ? (
            <li
              key={index}
              className="list-disc text-gray-600 dark:text-gray-300"
            >
              {item}
            </li>
          ) : (
            <ul key={index} className="flex flex-col gap-1.5">
              {item.title && (
                <li className="list-disc text-gray-700 dark:text-gray-200">
                  {item.title}
                </li>
              )}
              {item.content && list(item.content)}
            </ul>
          ),
        )}
      </ul>
    )
  }

  const getComplexityColor = (complexity: ProjectComplexity): string => {
    switch (complexity) {
      case ProjectComplexity.LOW:
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
      case ProjectComplexity.MEDIUM:
        return 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800'
      case ProjectComplexity.HIGH:
        return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
    }
  }

  const getTypeIcon = (type: ProjectType) => {
    switch (type) {
      case ProjectType.MOBILE:
        return <Smartphone />
      case ProjectType.FRONTEND:
        return <Layout />
      case ProjectType.BACKEND:
        return <Server />
      case ProjectType.DESKTOP:
        return <LaptopMinimal />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-7 flex flex-col gap-10 px-5 md:my-10"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              {!isModal && (
                <Button
                  variant="ghost"
                  className="-ml-2.5 shrink-0 [&_svg]:size-5 sm:[&_svg]:size-6"
                  size="icon"
                  onClick={() => router.push('/projects')}
                >
                  <ArrowLeft />
                </Button>
              )}
              {isModal ? (
                <DialogTitle className="text-3xl font-bold tracking-tight md:text-4xl">
                  {project.name}
                </DialogTitle>
              ) : (
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {project.name}
                </h1>
              )}
            </div>
            {project.isFeatured && (
              <Badge
                variant="secondary"
                className="w-fit bg-blue-100/70 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {t('isFeaturedDescription')}
              </Badge>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Box className="size-4 shrink-0 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {t('typesTitle')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.type.map((type) => (
                <Badge
                  key={type}
                  variant="secondary"
                  className="gap-1.5 bg-gray-200/60 text-gray-700 dark:bg-gray-800 dark:text-gray-300 [&_svg]:size-3.5"
                >
                  {getTypeIcon(type)}
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Code2 className="size-4 shrink-0 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {t('technologiesTitle')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-blue-200 font-medium text-blue-700 dark:border-blue-800/60 dark:text-blue-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 [&_a]:w-full sm:[&_a]:w-auto">
          {project.deploy && (
            <Button
              className="gap-2 shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/30 dark:shadow-blue-500/20"
              asChild
            >
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4 shrink-0" />
                {t('viewProjectOnline')}
              </a>
            </Button>
          )}

          {project.repo_name &&
            typeof project.repo_name !== 'string' &&
            project.repo_name.backend && (
              <Button className="gap-2" asChild variant="outline">
                <a
                  href={`https://github.com/emanueltavecia/${getRepoName(project.repo_name.backend)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  {t('accessBackendRepository')}
                </a>
              </Button>
            )}
          {project.repo_name &&
            (typeof project.repo_name === 'string' ||
              project.repo_name.frontend) && (
              <Button className="gap-2" asChild variant="outline">
                <a
                  href={`https://github.com/emanueltavecia/${getRepoName(project.repo_name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  {typeof project.repo_name === 'string'
                    ? t('accessRepository')
                    : t('accessFrontendRepository')}
                </a>
              </Button>
            )}
        </div>

        {(project.screenshot || project.repo_name) && (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="absolute inset-0 bg-slate-950/10 transition-opacity duration-300 hover:opacity-0" />
            <Image
              src={
                project.screenshot ||
                `https://github.com/emanueltavecia/${getRepoName(project.repo_name)}/blob/main/.github/screenshot.png?raw=true`
              }
              alt={t('projectImageAlt', {
                projectName: project.name,
              })}
              className="object-cover object-top"
              fill
              priority
            />
          </div>
        )}

        <div className="grid gap-5 lg:grid-cols-3">
          <Card className="border-blue-100 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-900/10 lg:col-span-2">
            <CardContent className="flex flex-col gap-8 p-6">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Info className="size-5 shrink-0" />
                  <h2 className="text-2xl font-semibold">
                    {t('aboutProjectTitle')}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {project.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className={cn(
                        'text-gray-600 dark:text-gray-300',
                        index === 0 && 'font-medium',
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {project.videoOverview && (
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Video className="size-5 shrink-0" />
                    <h2 className="text-2xl font-semibold">
                      {t('videoOverviewTitle')}
                    </h2>
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
                    <video controls className="h-full w-full">
                      <source
                        src={`https://github.com/emanueltavecia/${getRepoName(project.repo_name)}/blob/main/.github/${project.videoOverview}?raw=true`}
                        type="video/mp4"
                      ></source>
                    </video>
                  </div>
                </div>
              )}

              {project.listItems && (
                <div>
                  <div className="flex flex-col gap-4">
                    {project.listItems.map((item, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        {item.title && (
                          <h3 className="text-lg font-medium">{item.title}</h3>
                        )}
                        {list(item.content)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card
            className={cn(
              'sticky h-fit border-blue-100 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-900/10',
              isModal ? 'top-5' : 'top-[100px]',
            )}
          >
            <CardContent className="flex flex-col gap-5 p-6">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Workflow className="size-5 shrink-0" />
                  <h2 className="text-2xl font-semibold">{t('infoTitle')}</h2>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Tag className="size-4 shrink-0 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {t('sourceTitle')}
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit border-blue-200 bg-blue-50 font-medium text-blue-700 dark:border-blue-800/70 dark:bg-blue-900/20 dark:text-blue-300"
                    >
                      {getSourceLabel(project.source, locale)}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Lock className="size-4 shrink-0 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {t('visibilityTitle')}
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit border-blue-200 bg-blue-50 font-medium text-blue-700 dark:border-blue-800/70 dark:bg-blue-900/20 dark:text-blue-300"
                    >
                      {getVisibilityLabel(project.visibility, locale)}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="size-4 shrink-0 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {t('complexityTitle')}
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`w-fit font-medium ${getComplexityColor(
                        project.complexity,
                      )}`}
                    >
                      {getComplexityLabel(project.complexity, locale)}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
