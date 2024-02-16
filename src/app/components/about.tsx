import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"

export function About() {
  return(
    <div>
      <div id="about" className="flex flex-col md:flex-row justify-between md:items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Olá, sou o Emanuel Tavecia</h1>
          <p className="text-lg">Estudante de desenvolvimento Front-End</p>
        </div>
        <img className="my-5 w-40 rounded-full" src="https://github.com/emanueltavecia.png" alt="Foto de perfil de Emanuel Tavecia" />
      </div>
      <div>
        <h2 className='text-xl font-semibold mb-3'>Techs</h2>
        <div className='flex gap-4'>
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