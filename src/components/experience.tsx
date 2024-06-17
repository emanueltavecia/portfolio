import Image from 'next/image'
import elevcodeLogo from '../app/assets/elevcode-logo.png'
import controlleLogo from '../app/assets/controlle-logo.svg'

export function Experience() {
  return (
    <div id="experience" className="pt-7">
      <h2 className="mb-5 text-2xl font-bold text-center md:text-left">
        Experiência Profissional
      </h2>

      <div className='flex flex-col gap-4'>
      <div className="bg-slate-900 p-5 rounded-md flex flex-col gap-4">
        <div className="flex items-center md:justify-between flex-col md:flex-row gap-2">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Image src={controlleLogo} alt="Controlle" />

            <svg
              className="w-1 h-6"
              width="2"
              height="14"
              viewBox="0 0 2 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1C0 0.447716 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V13C2 13.5523 1.55228 14 1 14C0.447715 14 0 13.5523 0 13V1Z"
                fill="#E6EEF5"
              />
            </svg>
            <p className="text-lg">Full Time</p>
          </div>
          <p className="text-slate-200">Jun 2024 - Atual</p>
        </div>
        <div className="flex gap-2">
          <ul>
            <li className="text-slate-200 list-disc ml-5">
              Atuo como desenvolvedor júnior na equipe de front-end, onde sou responsável por criar e manter interfaces de usuário e novas features utilizando tecnologias como TypeScript, React, Styled Components etc.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-900 p-5 rounded-md flex flex-col gap-4">
        <div className="flex items-center md:justify-between flex-col md:flex-row gap-2">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Image src={elevcodeLogo} alt="Elevcode" />

            <svg
              className="w-1 h-6"
              width="2"
              height="14"
              viewBox="0 0 2 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1C0 0.447716 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V13C2 13.5523 1.55228 14 1 14C0.447715 14 0 13.5523 0 13V1Z"
                fill="#E6EEF5"
              />
            </svg>
            <p className="text-lg">Estágio</p>
          </div>
          <p className="text-slate-200">Mar 2024 - Jun 2024</p>
        </div>
        <div className="flex gap-2">
          <ul>
            <li className="text-slate-200 list-disc ml-5">
              Atuei utilizando tecnologias como JavaScript, TypeScript, React,
              TailwindCSS, entre outras, para a criação e manutenção de soluções
              front-end.
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
