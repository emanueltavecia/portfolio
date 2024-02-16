import { Header } from "./components/header"
import { About } from "./components/about"
import { ProjectCard } from "./components/project-card"
import { CertificateCard } from "./components/certificate-card"
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 md:px-8">
      <Header />

      <main className="mt-8 flex flex-col gap-10">
        <About />

        <div className="pt-6" id="projects">
          <h2 className="text-2xl font-bold mb-5 text-center md:text-left">Projetos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard project={{
              name: 'Notes App',
              repo_name: 'nlw-notes',
              deploy: 'https://nlw-notes-psi.vercel.app/'
            }} />

            <ProjectCard project={{
              name: 'GitFav',
              repo_name: 'gitfav',
              deploy: 'emanueltavecia.github.io/gitfav'
            }} />

            <ProjectCard project={{
              name: 'FocusTimer v2.0',
              repo_name: 'focustimer-v2.0',
              deploy: 'emanueltavecia.github.io/focustimer-v2.0'
            }} />

            <ProjectCard project={{
              name: 'Time Capsule',
              repo_name: 'nlw-spacetime-explorer',
              deploy: 'emanueltavecia.github.io/nlw-spacetime-explorer'
            }} />
            
          </div>
        </div>

        <div id="certificates">
          <h2 className="text-2xl font-bold mb-5 text-center md:text-left">Certificações</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            <CertificateCard certificate={{
              name: 'Curso: Webmaster Front-End Completo',
              issuer: 'Danki Code',
              status: 'Conclusão: 11/2023',
              url: 'https://github.com/emanueltavecia/certificates/blob/main/DankiCode%20-%20Webmaster%20Front-End%20Completo.pdf'
            }} />
          </div>

          <div>
            <a className="flex gap-2 group" href="https://github.com/emanueltavecia/certificates" target="_blank">
              Ver todos <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
