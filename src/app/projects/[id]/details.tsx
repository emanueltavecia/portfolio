'use client'

import { useParams, useRouter } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
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
import { projects } from '@/data/projects'
import { ProjectDetailsProps } from './types'
import { ProjectComplexity, ProjectListItem, ProjectType } from '../types'
import {
  getComplexityLabel,
  getSourceLabel,
  getVisibilityLabel,
} from '../rules'
import { cn } from '@/lib/utils'

export function Details({ isModal }: ProjectDetailsProps) {
  const { id } = useParams()
  const router = useRouter()

  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    router.push('/404')
    return null
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
          <div className="mb-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              {!isModal && (
                <Button
                  variant="ghost"
                  className="[&_svg]:size-5 sm:[&_svg]:size-6"
                  size="icon"
                  onClick={() => router.push('/projects')}
                >
                  <ArrowLeft />
                </Button>
              )}
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {project.name}
              </h1>
            </div>
            {project.isFeatured && (
              <Badge
                variant="secondary"
                className="hidden w-fit border-blue-300/60 bg-blue-50 text-blue-700 dark:border-blue-300/40 dark:bg-blue-900/20 dark:text-blue-300 sm:flex"
              >
                Destaque
              </Badge>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Box className="size-4 shrink-0 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Tipos
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.type.map((type) => (
                <Badge
                  key={type}
                  variant="secondary"
                  className="gap-1.5 border-slate-300/60 bg-gray-100 text-gray-700 dark:border-slate-700/80 dark:bg-gray-800 dark:text-gray-300 [&_svg]:size-3.5"
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
                Tecnologias
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-blue-200 font-medium text-blue-700 dark:border-blue-800/70 dark:text-blue-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.repo_name && (
            <Button className="gap-2" asChild>
              <a
                href={`https://github.com/emanueltavecia/${project.repo_name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                Ver código
              </a>
            </Button>
          )}

          {project.deploy && (
            <Button className="gap-2" asChild>
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4 shrink-0" />
                Ver projeto online
              </a>
            </Button>
          )}
        </div>

        {(project.screenshot || project.repo_name) && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
            <div className="absolute inset-0 bg-slate-950/10 transition-opacity duration-300 hover:opacity-0" />
            <Image
              src={
                project.screenshot ||
                `https://github.com/emanueltavecia/${project.repo_name}/blob/main/.github/screenshot.png?raw=true`
              }
              alt={`Capa do projeto ${project.name}`}
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
                  <h2 className="text-2xl font-semibold">Sobre o projeto</h2>
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

              {project.overviewVideo && (
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Video className="size-5 shrink-0" />
                    <h2 className="text-2xl font-semibold">
                      Visão geral em vídeo
                    </h2>
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
                    <video controls className="h-full w-full">
                      <source
                        src={`https://github.com/emanueltavecia/${project.repo_name}/blob/main/.github/${project.overviewVideo}?raw=true`}
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
                  <h2 className="text-2xl font-semibold">Informações</h2>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Tag className="size-4 shrink-0 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Origem
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit border-blue-200 bg-blue-50 font-medium text-blue-700 dark:border-blue-800/70 dark:bg-blue-900/20 dark:text-blue-300"
                    >
                      {getSourceLabel(project.source)}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Lock className="size-4 shrink-0 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Visibilidade
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit border-blue-200 bg-blue-50 font-medium text-blue-700 dark:border-blue-800/70 dark:bg-blue-900/20 dark:text-blue-300"
                    >
                      {getVisibilityLabel(project.visibility)}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="size-4 shrink-0 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Complexidade
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`w-fit font-medium ${getComplexityColor(
                        project.complexity,
                      )}`}
                    >
                      {getComplexityLabel(project.complexity)}
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
