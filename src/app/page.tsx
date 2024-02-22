import { ArrowUpRight } from 'lucide-react'
import { About } from '../components/about'
import { CertificateCard } from '../components/certificate-card'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { ProjectCard } from '../components/project-card'

const projects = [
  {
    name: 'Notes App',
    repo_name: 'nlw-notes',
    deploy: 'https://notes-nlw-app.vercel.app/',
    id: 4,
  },
  {
    name: 'GitFav',
    repo_name: 'gitfav',
    deploy: 'https://emanueltavecia.github.io/gitfav',
    id: 3,
  },
  {
    name: 'FocusTimer v2.0',
    repo_name: 'focustimer-v2.0',
    deploy: 'https://emanueltavecia.github.io/focustimer-v2.0',
    id: 2,
  },
  {
    name: 'Time Capsule',
    repo_name: 'nlw-spacetime-explorer',
    deploy: 'https://emanueltavecia.github.io/nlw-spacetime-explorer',
    id: 1,
  },
]

const certificates = [
  {
    name: 'Curso: Explorer',
    issuer: 'Rocketseat',
    status: 'Em andamento',
    id: 5,
  },
  {
    name: 'Curso: Técnico em Eletromecânica Integrado ao Ensino Médio',
    issuer: 'Instituto Federal de Santa Catarina',
    status: 'Conclusão: 12/2023',
    url: 'https://github.com/emanueltavecia/certificates/blob/main/Diploma%20T%C3%A9cnico%20em%20Eletromec%C3%A2nica.pdf',
    id: 4,
  },
  {
    name: 'Evento: NLW Expert React',
    issuer: 'Rocketseat',
    status: 'Conclusão: 02/2024',
    url: 'https://github.com/emanueltavecia/certificates/blob/main/NLW%20Expert%20React%20-%20Rocketseat.pdf',
    id: 3,
  },
  {
    name: 'Curso: Discover Especializar',
    issuer: 'Rocketseat',
    status: 'Conclusão: 08/2023',
    url: 'https://github.com/emanueltavecia/certificates/blob/main/Discover%20Especializar%20-%20Rocketseat.pdf',
    id: 2,
  },
  {
    name: 'Curso: Webmaster Front-End Completo',
    issuer: 'Danki Code',
    status: 'Conclusão: 11/2023',
    url: 'https://github.com/emanueltavecia/certificates/blob/main/DankiCode%20-%20Webmaster%20Front-End%20Completo.pdf',
    id: 1,
  },
]

export default function Home() {
  return (
    <div id="top" className="text-slate-100">
      <Header />

      <main className="max-w-5xl w-full mx-auto px-5 md:px-8 pt-36 md:pt-32 flex flex-col">
        <About />

        <div className="pt-16">
          <h2 className="text-2xl font-bold mb-5 text-center md:text-left">
            Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div id="certificates">
          <h2 className="pt-16 text-2xl font-bold text-center md:text-left">
            Certificações
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>

          <div>
            <a
              className="flex gap-2 group w-fit"
              href="https://github.com/emanueltavecia/certificates"
              target="_blank"
            >
              Ver todos{' '}
              <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  )
}
