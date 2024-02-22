import { Eye, Github } from 'lucide-react'

interface ProjectCardProps {
  project: {
    name: string
    repo_name: string
    deploy: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between gap-4 bg-slate-900 rounded-md p-5 transition-all duration-200 hover:scale-105">
      <p className="text-lg font-semibold text-center">{project.name}</p>

      <a target='_blank' href={project.deploy}>
        <img
          className="rounded-md"
          src={`https://github.com/emanueltavecia/${project.repo_name}/blob/main/.github/screenshot.png?raw=true`}
          alt={`Capa do projeto ${project.name}`}
        />
      </a>

      <div className="flex justify-between">
        <a
          href={project.deploy}
          target="_blank"
          className="flex items-center gap-2"
        >
          <Eye />
          <p>Preview</p>
        </a>
        <a
          href={`https://github.com/emanueltavecia/${project.repo_name}`}
          target="_blank"
          className="flex items-center gap-2"
        >
          <Github />
          <p>Repositório</p>
        </a>
      </div>
    </div>
  )
}
