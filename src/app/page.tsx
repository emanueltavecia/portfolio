'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  return (
    <main className="mt-12 flex flex-col items-center gap-12 md:mt-20 md:items-start md:gap-20">
      <div className="flex w-full flex-col items-center justify-between gap-5 px-5 md:flex-row md:items-start">
        <div className="flex max-w-3xl flex-col items-center gap-3 md:mt-4 md:items-start">
          <h2 className="flex flex-wrap justify-center gap-x-2 text-center text-4xl font-semibold md:block md:text-left">
            <span>Olá, sou o</span> <span>Emanuel Tavecia</span>
          </h2>
          <p className="text-center text-xl text-gray-900 dark:text-gray-300 md:text-left">
            Desenvolvedor Front-end
          </p>
          <p className="text-center text-base text-gray-800 dark:text-gray-400 md:text-left">
            Desenvolvedor front-end apaixonado por tecnologia. Estou iniciando
            minha jornada como programador, com foco no ecossistema JavaScript.
          </p>
          <p className="text-center text-base text-gray-800 dark:text-gray-400 md:text-left">
            <span className="font-semibold">Soft Skills:</span> Comunicação,
            Trabalho em equipe, Resolução de problemas, Adaptabilidade,
            Proatividade
          </p>
        </div>
        <Image
          src="https://github.com/emanueltavecia.png"
          alt="Foto de Emanuel Tavecia"
          priority
          fetchPriority="high"
          className="size-52 rounded-full"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-10 px-5">
          <h3 className="text-2xl font-medium">Confira meus projetos</h3>
          <Link
            href="/projects"
            className={cn(
              buttonVariants({
                variant: 'link',
              }),
              'group p-0 text-base font-normal',
            )}
          >
            ver todos
            <ArrowRight className="transition-all duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="group ml-0 basis-10/12 p-0 md:basis-2/3"
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="mx-2 flex group-first:ml-6 group-last:mr-5"
                >
                  <Image
                    className="w-full rounded-md"
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
