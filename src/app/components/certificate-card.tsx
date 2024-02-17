import { ArrowUpRight } from 'lucide-react'

interface CertificateCardProps {
  certificate: {
    name: string
    issuer: string
    status: string
    url: string
  }
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="bg-zinc-900 rounded-md p-5">
      <p className="font-bold">{certificate.name}</p>
      <p>{certificate.issuer}</p>
      <p>{certificate.status}</p>
      {certificate.status !== 'Em andamento' ? (
        <a className="flex gap-2 group mt-3" href={certificate.url} target="_blank">
          Acessar certificado <ArrowUpRight className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
        </a>
      ) : (<a></a>)}
        
      
    </div>
  )
}