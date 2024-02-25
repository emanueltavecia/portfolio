import { Mail, Instagram, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa"

export function Contact() {
  return (
    <div id="contact" className='flex flex-col gap-4 pt-7'>
      <h2 className="text-2xl font-bold text-center md:text-left">Contato</h2>

      <div className='flex flex-col md:flex-row gap-7 md:gap-32'>
        <div>
          <p className='mb-3 text-lg font-bold'>Fale comigo:</p>
          <a className='flex gap-2 mb-2 group' href="mailto:emanueltavecia@hotmail.com" target='_blank'>
            <Mail className='w-6 h-6' /> emanueltavecia@hotmail.com
             <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
          </a>

          <a className='flex gap-2 group' href="https://wa.me/+5548991075741" target='_blank'>
            <FaWhatsapp className='w-6 h-6' /> (48) 99107-5741
             <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
          </a>
        </div>
        
        <div>
          <p className='mb-3 text-lg font-bold'>Acesse minhas redes sociais:</p>
          <a href="https://linkedin.com/in/emanueltavecia" className='flex gap-2 mb-2 group'  target='_blank'><Linkedin /> /emanueltavecia <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>
          <a href="https://github.com/emanueltavecia" className='flex gap-2 mb-2 group'  target='_blank'><Github /> /emanueltavecia <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>
          <a href="https://instagram.com/emanueltavecia" className='flex gap-2 group'  target='_blank'><Instagram /> @emanueltavecia <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>
        </div>
      </div>
    </div>
  )
}