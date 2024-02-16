import { Rocket, Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    name: string
    repo_name: string
    deploy: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between gap-4 bg-gray-950 rounded-md p-5 transition-all duration-200 hover:scale-105">
      <p className="text-lg font-semibold text-center">{project.name}</p>
      <img src={`https://github.com/emanueltavecia/${project.repo_name}/blob/main/.github/screenshot.png?raw=true`} alt="" />
      <div className="flex justify-between">
        <a href={project.deploy} target="_blank" className="flex items-center gap-2">
          <Rocket />
          <p>Deploy</p>
        </a>
        <a href={`https://github.com/emanueltavecia/${project.repo_name}`} target="_blank" className="flex items-center gap-2">
          <Github />
          <p>Repositório</p>
        </a>
      </div>
    </div>
  )
}