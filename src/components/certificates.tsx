import { certificates } from '@/data/certificates'
import { ArrowUpRight } from 'lucide-react'
import { CertificateCard } from './certificate-card'

export function Certificates() {
  return (
    <div id="certificates" className="pt-7">
      <h2 className="text-2xl font-bold text-center md:text-left">
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
  )
}
