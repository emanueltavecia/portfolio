'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { techStack } from '@/data/tech-stack'

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <main className="relative mt-10 flex flex-col items-center gap-20 md:mt-20">
      <div className="flex w-full max-w-xl flex-col items-center justify-between gap-10 px-5 md:max-w-full md:flex-row md:items-start">
        <div className="relative flex max-w-3xl flex-col items-center gap-6 md:items-start">
          <div className="flex flex-col gap-2">
            <p className="text-center font-medium text-blue-600 dark:text-blue-400 md:text-left">
              Desenvolvedor Front-end e Mobile
            </p>
            <h1 className="flex flex-wrap justify-center gap-x-2 text-center text-4xl font-bold tracking-tight md:block md:text-left lg:text-5xl">
              <span>Olá, sou o</span>{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Emanuel Tavecia
              </span>
            </h1>
          </div>

          <p className="text-center text-lg text-gray-600 dark:text-gray-400 md:text-justify">
            Desenvolvedor front-end e mobile apaixonado por tecnologia. Tenho
            cerca de 1 ano e meio de experiência com desenvolvimento web e
            mobile com React e React Native, e estou sempre em busca de novos
            desafios e aprendizados.
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
                <span className="font-semibold">Soft Skills:</span> Comunicação,
                Trabalho em equipe, Resolução de problemas, Adaptabilidade,
                Proatividade
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
            alt="Foto de Emanuel Tavecia"
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
          <h2 className="mb-1 text-2xl font-bold tracking-tight md:-mb-3">
            Projetos em destaque
          </h2>
          <div className="flex items-end justify-between gap-6">
            <p className="max-w-64 text-sm text-gray-600 dark:text-gray-400 md:max-w-none">
              Deslize para ver alguns dos meus trabalhos recentes
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
              ver todos
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
            {projects
              .filter((project) => project.isFeatured)
              .map((project) => (
                <CarouselItem
                  key={project.id}
                  className="group ml-0 basis-10/12 p-0 md:basis-2/3"
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="relative mx-2 block overflow-hidden rounded-lg"
                  >
                    <Image
                      className="w-full"
                      src={`https://github.com/emanueltavecia/${project.repo_name}/blob/main/.github/screenshot.png?raw=true`}
                      alt={`Capa do projeto ${project.name}`}
                      priority
                      fetchPriority="high"
                      width={1500}
                      height={400}
                    />
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  )
}
