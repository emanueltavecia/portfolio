import { Header } from "./components/header"
import { About } from "./components/about"
import { ProjectCard } from "./components/project-card"
import { CertificateCard } from "./components/certificate-card"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <div id="top" className="text-slate-100">
      <Header />

      <main className="max-w-5xl w-full mx-auto px-5 md:px-8 mt-8 flex flex-col gap-10">
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
              deploy: 'https://emanueltavecia.github.io/gitfav'
            }} />

            <ProjectCard project={{
              name: 'FocusTimer v2.0',
              repo_name: 'focustimer-v2.0',
              deploy: 'https://emanueltavecia.github.io/focustimer-v2.0'
            }} />

            <ProjectCard project={{
              name: 'Time Capsule',
              repo_name: 'nlw-spacetime-explorer',
              deploy: 'https://emanueltavecia.github.io/nlw-spacetime-explorer'
            }} />
            
          </div>
        </div>

        <div id="certificates">
          <h2 className="pt-6 text-2xl font-bold text-center md:text-left">Certificações</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            <CertificateCard certificate={{
              name: 'Curso: Explorer',
              issuer: 'Rocketseat',
              status: 'Em andamento',
              url: 'https://github.com/emanueltavecia/certificates/blob/main/Diploma%20T%C3%A9cnico%20em%20Eletromec%C3%A2nica.pdf'
            }} />
            
            <CertificateCard certificate={{
              name: 'Curso: Técnico em Eletromecânica Integrado ao Ensino Médio',
              issuer: 'Instituto Federal de Santa Catarina',
              status: 'Conclusão: 12/2023',
              url: 'https://github.com/emanueltavecia/certificates/blob/main/Diploma%20T%C3%A9cnico%20em%20Eletromec%C3%A2nica.pdf'
            }} />

            <CertificateCard certificate={{
              name: 'Evento: NLW Expert React',
              issuer: 'Rocketseat',
              status: 'Conclusão: 02/2024',
              url: 'https://github.com/emanueltavecia/certificates/blob/main/NLW%20Expert%20React%20-%20Rocketseat.pdf'
            }} />

            <CertificateCard certificate={{
              name: 'Curso: Discover Especializar',
              issuer: 'Rocketseat',
              status: 'Conclusão: 08/2023',
              url: 'https://github.com/emanueltavecia/certificates/blob/main/Discover%20Especializar%20-%20Rocketseat.pdf'
            }} />

            <CertificateCard certificate={{
              name: 'Curso: Webmaster Front-End Completo',
              issuer: 'Danki Code',
              status: 'Conclusão: 11/2023',
              url: 'https://github.com/emanueltavecia/certificates/blob/main/DankiCode%20-%20Webmaster%20Front-End%20Completo.pdf'
            }} />
          </div>

          <div>
            <a className="flex gap-2 group w-fit" href="https://github.com/emanueltavecia/certificates" target="_blank">
              Ver todos <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </a>
          </div>
        </div>

        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
