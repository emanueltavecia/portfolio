import { ArrowUpRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface EducationCardProps {
  education: {
    institution: string
    course: string
    courseType: string
    date: {
      start: string
      end: string
    }
    logo: {
      src: string | StaticImageData
      width: number
    }
    certificate?: string
  }
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="bg-slate-900 p-5 rounded-md flex flex-col gap-4">
      <div className="flex items-center md:justify-between flex-col md:flex-row gap-4">
        <Image
          width={education.logo.width}
          src={education.logo.src}
          alt={education.institution}
          className="h-6"
        />
        <p className="text-slate-200">
          <span>{education.date.start}</span> -{' '}
          <span>{education.date.end}</span>
        </p>
      </div>
      <p className="text-lg font-medium md:text-left text-center">
        <span>{education.courseType}</span> | <span>{education.course}</span>
      </p>
      {education.certificate ? (
        <a
          className="flex gap-2 group md:justify-start justify-center"
          href={education.certificate}
          target="_blank"
        >
          Acessar certificado{' '}
          <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        <span className='md:text-left text-center text-slate-300'>Em andamento</span>
      )}
    </div>
  )
}
