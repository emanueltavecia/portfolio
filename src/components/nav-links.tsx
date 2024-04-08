import { twMerge } from 'tailwind-merge'
import { buttonVariants } from './ui/button'

export function NavLinks() {
  return (
    <>
      <a
        className={twMerge(
          buttonVariants({ variant: 'link' }),
          `text-zinc-50 text-base p-0`
        )}
        href="#experience"
      >
        Experiência
      </a>
      <a
        className={twMerge(
          buttonVariants({ variant: 'link' }),
          `text-zinc-50 text-base p-0`
        )}
        href="#projects"
      >
        Projetos
      </a>
      <a
        className={twMerge(
          buttonVariants({ variant: 'link' }),
          `text-zinc-50 text-base p-0`
        )}
        href="#education"
      >
        Educação
      </a>
      <a
        className={twMerge(
          buttonVariants({ variant: 'link' }),
          `text-zinc-50 text-base p-0`
        )}
        href="#certificates"
      >
        Certificações
      </a>
      <a
        className={twMerge(
          buttonVariants({ variant: 'link' }),
          `text-zinc-50 text-base p-0`
        )}
        href="#contact"
      >
        Contato
      </a>
    </>
  )
}
