import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si"

export function About() {
  return(
    <div>
      <div id="about" className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2 text-center md:text-left">Olá, sou o Emanuel Tavecia</h1>
          <p className="text-lg text-center md:text-left">Estudante de desenvolvimento Front-End</p>
        </div>
        <img className="my-5 w-40 rounded-full" src="https://github.com/emanueltavecia.png" alt="Foto de perfil de Emanuel Tavecia" />
      </div>
      <div id='techs'>
        <h2 className='text-xl font-semibold mb-3 text-center md:text-left'>Techs</h2>
        <div className='flex gap-4 items-center justify-center md:justify-start'>
          <SiJavascript className='w-7 h-7' />
          <SiTypescript className='w-7 h-7' />
          <FaNodeJs className='w-7 h-7' />
          <FaReact className='w-7 h-7' />
          <SiTailwindcss className='w-7 h-7' />
        </div>
      </div>
    </div>
  )
}