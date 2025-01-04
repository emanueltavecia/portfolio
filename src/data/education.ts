import { StaticImageData } from 'next/image'

import { Locales } from '@/locales'

import ifscLogo from '../app/assets/ifsc-logo.png'
import rocketseatLogo from '../app/assets/rocketseat-logo.svg'
import unescLogo from '../app/assets/unesc-logo.png'

export interface Education {
  institution: string
  course: string
  courseType: string
  workload: number
  date: {
    start: string
    end: string
  }
  logo: StaticImageData
  certificate?: {
    pdfUrl: string
    verifierUrl: string
    issueDate: string
    verificationCode: string
    registrationNumber?: string
  }
}

export const education: Record<Locales, Education[]> = {
  [Locales.PT_BR]: [
    {
      institution: 'UNESC',
      course: 'Ciência da Computação',
      courseType: 'Bacharel',
      workload: 3200,
      date: {
        start: 'Mar 2024',
        end: 'Atual',
      },
      logo: unescLogo,
    },
    {
      institution: 'Rocketseat',
      course: 'Explorer',
      courseType: 'Curso',
      workload: 100,
      date: {
        start: 'Nov 2023',
        end: 'Jul 2024',
      },
      logo: rocketseatLogo,
      certificate: {
        pdfUrl:
          'https://raw.githubusercontent.com/emanueltavecia/certificates/main/Explorer%20-%20Rocketseat%20-%20pt-BR.pdf',
        verifierUrl:
          'https://app.rocketseat.com.br/certificates/d2bb9e84-a302-4467-8068-ae5cbb4a51c7',
        issueDate: '16 de julho de 2024',
        verificationCode: 'd2bb9e84-a302-4467-8068-ae5cbb4a51c7',
      },
    },
    {
      institution: 'IFSC',
      course: 'Eletromecânica',
      courseType: 'Curso Técnico',
      workload: 3360,
      date: {
        start: 'Fev 2021',
        end: 'Dez 2023',
      },
      logo: ifscLogo,
      certificate: {
        pdfUrl:
          'https://raw.githubusercontent.com/emanueltavecia/certificates/main/Diploma%20T%C3%A9cnico%20em%20Eletromec%C3%A2nica.pdf',
        verifierUrl:
          'https://sigaa.ifsc.edu.br/sigaa/public/autenticidade/tipo_documento.jsf',
        issueDate: '01 de fevereiro de 2024',
        verificationCode: '7baeca3f6a',
        registrationNumber: '20009342',
      },
    },
  ],
  [Locales.EN_US]: [
    {
      institution: 'UNESC',
      course: 'Computer Science',
      courseType: 'Bachelor',
      workload: 3200,
      date: {
        start: 'Mar 2024',
        end: 'Present',
      },
      logo: unescLogo,
    },
    {
      institution: 'Rocketseat',
      course: 'Explorer',
      courseType: 'Course',
      workload: 100,
      date: {
        start: 'Nov 2023',
        end: 'Jul 2024',
      },
      logo: rocketseatLogo,
      certificate: {
        pdfUrl:
          'https://raw.githubusercontent.com/emanueltavecia/certificates/main/Explorer%20-%20Rocketseat%20-%20en-US.pdf',
        verifierUrl:
          'https://app.rocketseat.com.br/certificates/d2bb9e84-a302-4467-8068-ae5cbb4a51c7',
        issueDate: 'July 16, 2024',
        verificationCode: 'd2bb9e84-a302-4467-8068-ae5cbb4a51c7',
      },
    },
    {
      institution: 'IFSC',
      course: 'Electromechanics',
      courseType: 'Technical Course',
      workload: 3360,
      date: {
        start: 'Feb 2021',
        end: 'Dec 2023',
      },
      logo: ifscLogo,
      certificate: {
        pdfUrl:
          'https://raw.githubusercontent.com/emanueltavecia/certificates/main/Diploma%20T%C3%A9cnico%20em%20Eletromec%C3%A2nica.pdf',
        verifierUrl:
          'https://sigaa.ifsc.edu.br/sigaa/public/autenticidade/tipo_documento.jsf',
        issueDate: 'February 1, 2024',
        verificationCode: '7baeca3f6a',
        registrationNumber: '20009342',
      },
    },
  ],
}
