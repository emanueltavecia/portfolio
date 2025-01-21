import { StaticImageData } from 'next/image'

import { Locales } from '@/locales'

import ifscLogo from '../app/assets/ifsc-logo.png'
import rocketseatLogo from '../app/assets/rocketseat-logo.svg'

export const CourseType = {
  [Locales.PT_BR]: {
    COURSE: 'Curso',
    BACHELOR: 'Bacharel',
    TECHNICAL_COURSE: 'Curso Técnico',
    EVENT: 'Evento',
  },
  [Locales.EN_US]: {
    COURSE: 'Course',
    BACHELOR: 'Bachelor',
    TECHNICAL_COURSE: 'Technical Course',
    EVENT: 'Event',
  },
}

export interface Certificate {
  id: number
  institution: string
  course: string
  courseType: string
  workload: number
  date: {
    start?: string
    end: string
  }
  logo?: StaticImageData
  pdfUrl: string
  verifierUrl: string
  issueDate: string
  verificationCode: string
  registrationNumber?: string
  isEducation?: boolean
}

export const certificates: Record<Locales, Certificate[]> = {
  [Locales.PT_BR]: [
    {
      id: 7,
      institution: 'Rocketseat',
      course: 'Explorer',
      courseType: CourseType[Locales.PT_BR].COURSE,
      workload: 100,
      date: {
        start: 'Nov 2023',
        end: 'Jul 2024',
      },
      logo: rocketseatLogo,
      pdfUrl:
        'https://drive.google.com/file/d/1nL_V8C8cfiL4F_EEEGzKEhbVIzdi26_9/preview',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/d2bb9e84-a302-4467-8068-ae5cbb4a51c7',
      issueDate: '16 de julho de 2024',
      verificationCode: 'd2bb9e84-a302-4467-8068-ae5cbb4a51c7',
      isEducation: true,
    },
    {
      id: 6,
      institution: 'IFSC',
      course: 'Eletromecânica',
      courseType: CourseType[Locales.PT_BR].TECHNICAL_COURSE,
      workload: 3360,
      date: {
        start: 'Fev 2021',
        end: 'Dez 2023',
      },
      logo: ifscLogo,
      pdfUrl:
        'https://drive.google.com/file/d/1sbz0bP9kTrZKSgnBiJ5EausuTCd6A9iL/preview',
      verifierUrl:
        'https://sigaa.ifsc.edu.br/sigaa/public/autenticidade/tipo_documento.jsf',
      issueDate: '01 de fevereiro de 2024',
      verificationCode: '7baeca3f6a',
      registrationNumber: '20009342',
      isEducation: true,
    },
    {
      id: 5,
      institution: 'Rocketseat',
      course: 'NLW Pocket: Mobile - React Native',
      courseType: CourseType[Locales.PT_BR].EVENT,
      workload: 5,
      date: {
        end: 'Dez 2024',
      },
      issueDate: '13 de dezembro de 2024',
      pdfUrl:
        'https://drive.google.com/file/d/1e1c5X3BBZx4XtoB52F8dM9LQ9ZMj5XFr/preview',
      verificationCode: 'd48419e3-0f98-48fa-aa34-593df95b6f6c',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/d48419e3-0f98-48fa-aa34-593df95b6f6c',
    },
    {
      id: 4,
      institution: 'Rocketseat',
      course: 'NLW Journey - React Native',
      courseType: CourseType[Locales.PT_BR].EVENT,
      workload: 7,
      date: {
        end: 'Jul 2024',
      },
      issueDate: '12 de julho de 2024',
      pdfUrl:
        'https://drive.google.com/file/d/1J2TVF7dt0BIPguNzmaXYNMI6fbGTukhZ/preview',
      verificationCode: 'e4274575-d0c8-48ff-8a30-570f9197e694',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/e4274575-d0c8-48ff-8a30-570f9197e694',
    },
    {
      id: 3,
      institution: 'Rocketseat',
      course: 'NLW Expert React',
      courseType: CourseType[Locales.PT_BR].EVENT,
      workload: 5,
      date: {
        end: 'Fev 2024',
      },
      issueDate: '09 de fevereiro de 2024',
      pdfUrl:
        'https://drive.google.com/file/d/12TOeYnaNIhhHt84VugUk7sNJ-NgvIviu/preview',
      verificationCode: '023b9e8d-867a-4c1a-9905-29f390f879d1',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/023b9e8d-867a-4c1a-9905-29f390f879d1',
    },
    {
      id: 2,
      institution: 'Rocketseat',
      course: 'Discover Especializar',
      courseType: CourseType[Locales.PT_BR].COURSE,
      workload: 11,
      date: {
        end: 'Ago 2023',
      },
      issueDate: '30 de agosto de 2023',
      pdfUrl:
        'https://drive.google.com/file/d/1orLEnt5zoMZDPULNrvrmgbeBJRZBFJMz/preview',
      verificationCode: '84b0f178-829c-406f-bf71-4eb2248c4065',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/84b0f178-829c-406f-bf71-4eb2248c4065',
    },
    {
      id: 1,
      institution: 'Danki Code',
      course: 'Webmaster Front-End Completo',
      courseType: CourseType[Locales.PT_BR].COURSE,
      workload: 82,
      date: {
        end: 'Nov 2023',
      },
      issueDate: '26 de novembro de 2023',
      pdfUrl:
        'https://drive.google.com/file/d/1aHdBIeNSoQ8tLhWlIsXb59Cb3aFKk9DJ/preview',
      verificationCode: 'de0700f6-b0d9-4a7d-857e-0045cedb8fe1',
      verifierUrl: 'https://cursos.dankicode.com/validate-certificate',
    },
  ],
  [Locales.EN_US]: [
    {
      id: 7,
      institution: 'Rocketseat',
      course: 'Explorer',
      courseType: CourseType[Locales.EN_US].COURSE,
      workload: 100,
      date: {
        start: 'Nov 2023',
        end: 'Jul 2024',
      },
      logo: rocketseatLogo,
      pdfUrl:
        'https://drive.google.com/file/d/1nL_V8C8cfiL4F_EEEGzKEhbVIzdi26_9/preview',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/d2bb9e84-a302-4467-8068-ae5cbb4a51c7',
      issueDate: 'July 16, 2024',
      verificationCode: 'd2bb9e84-a302-4467-8068-ae5cbb4a51c7',
      isEducation: true,
    },
    {
      id: 6,
      institution: 'IFSC',
      course: 'Electromechanics',
      courseType: CourseType[Locales.EN_US].TECHNICAL_COURSE,
      workload: 3360,
      date: {
        start: 'Feb 2021',
        end: 'Dec 2023',
      },
      logo: ifscLogo,
      pdfUrl:
        'https://drive.google.com/file/d/1sbz0bP9kTrZKSgnBiJ5EausuTCd6A9iL/preview',
      verifierUrl:
        'https://sigaa.ifsc.edu.br/sigaa/public/autenticidade/tipo_documento.jsf',
      issueDate: 'February 1, 2024',
      verificationCode: '7baeca3f6a',
      registrationNumber: '20009342',
      isEducation: true,
    },
    {
      id: 5,
      institution: 'Rocketseat',
      course: 'NLW Pocket: Mobile - React Native',
      courseType: CourseType[Locales.EN_US].EVENT,
      workload: 5,
      date: {
        end: 'Dec 2024',
      },
      issueDate: 'December 13, 2024',
      pdfUrl:
        'https://drive.google.com/file/d/1e1c5X3BBZx4XtoB52F8dM9LQ9ZMj5XFr/preview',
      verificationCode: 'd48419e3-0f98-48fa-aa34-593df95b6f6c',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/d48419e3-0f98-48fa-aa34-593df95b6f6c',
    },
    {
      id: 4,
      institution: 'Rocketseat',
      course: 'NLW Journey - React Native',
      courseType: CourseType[Locales.EN_US].EVENT,
      workload: 7,
      date: {
        end: 'Jul 2024',
      },
      issueDate: 'July 12, 2024',
      pdfUrl:
        'https://drive.google.com/file/d/1J2TVF7dt0BIPguNzmaXYNMI6fbGTukhZ/preview',
      verificationCode: 'e4274575-d0c8-48ff-8a30-570f9197e694',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/e4274575-d0c8-48ff-8a30-570f9197e694',
    },
    {
      id: 3,
      institution: 'Rocketseat',
      course: 'NLW Expert React',
      courseType: CourseType[Locales.EN_US].EVENT,
      workload: 5,
      date: {
        end: 'Feb 2024',
      },
      issueDate: 'February 9, 2024',
      pdfUrl:
        'https://drive.google.com/file/d/12TOeYnaNIhhHt84VugUk7sNJ-NgvIviu/preview',
      verificationCode: '023b9e8d-867a-4c1a-9905-29f390f879d1',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/023b9e8d-867a-4c1a-9905-29f390f879d1',
    },
    {
      id: 2,
      institution: 'Rocketseat',
      course: 'Discover Specialization',
      courseType: CourseType[Locales.EN_US].COURSE,
      workload: 11,
      date: {
        end: 'Aug 2023',
      },
      issueDate: 'August 30, 2023',
      pdfUrl:
        'https://drive.google.com/file/d/1orLEnt5zoMZDPULNrvrmgbeBJRZBFJMz/preview',
      verificationCode: '84b0f178-829c-406f-bf71-4eb2248c4065',
      verifierUrl:
        'https://app.rocketseat.com.br/certificates/84b0f178-829c-406f-bf71-4eb2248c4065',
    },
    {
      id: 1,
      institution: 'Danki Code',
      course: 'Webmaster Complete Front-End',
      courseType: CourseType[Locales.EN_US].COURSE,
      workload: 82,
      date: {
        end: 'Nov 2023',
      },
      issueDate: 'November 26, 2023',
      pdfUrl:
        'https://drive.google.com/file/d/1aHdBIeNSoQ8tLhWlIsXb59Cb3aFKk9DJ/preview',
      verificationCode: 'de0700f6-b0d9-4a7d-857e-0045cedb8fe1',
      verifierUrl: 'https://cursos.dankicode.com/validate-certificate',
    },
  ],
}
