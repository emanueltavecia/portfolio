import { Certificates } from '@/components/certificates'
import { Projects } from '@/components/projects'
import { FileText } from 'lucide-react'
import { About } from '../components/about'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'

export default function Home() {
  return (
    <div id="top" className="text-slate-100">
      <Header />

      <main className="max-w-5xl w-full mx-auto px-5 md:px-8 pt-36 md:pt-32 flex flex-col gap-7">
        <About />

        <a
          href="https://drive.google.com/file/d/1gwnR2KPxXG2QulLa4P8B2bb2f4YUkjXu/view?usp=sharing"
          target="_blank"
          className="w-fit md:ml-0 mx-auto flex items-center justify-center gap-4 px-4 py-2 font-medium ring-2 ring-slate-300 text-slate-50 rounded-md hover:rounded-3xl hover:bg-slate-100 hover:text-slate-800 hover:ring-slate-600 transition-all duration-300 outline-none focus:bg-slate-100 focus:text-slate-800 focus:ring-slate-600"
        >
          <FileText />
          Acessar CV
        </a>

        <Experience />

        <Projects />
        
        <Education />

        <Certificates />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}
