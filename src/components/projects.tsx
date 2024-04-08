import { projects } from '@/data/projects'
import { ProjectCard } from './project-card'

export function Projects() {
  return (
    <div id="projects" className="pt-7">
      <h2 className="text-2xl font-bold mb-5 text-center md:text-left">
        Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
