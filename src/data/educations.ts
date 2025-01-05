import { Locales } from '@/locales'

import { Certificate, certificates, CourseType } from './certificates'

import unescLogo from '../app/assets/unesc-logo.png'

export const educations: Record<Locales, Partial<Certificate>[]> = {
  [Locales.PT_BR]: [
    {
      institution: 'UNESC',
      course: 'Ciência da Computação',
      courseType: CourseType[Locales.PT_BR].BACHELOR,
      workload: 3200,
      date: {
        start: 'Mar 2024',
        end: 'Atual',
      },
      logo: unescLogo,
    },
    ...certificates[Locales.PT_BR].filter(
      (certificate) => certificate.isEducation,
    ),
  ],
  [Locales.EN_US]: [
    {
      institution: 'UNESC',
      course: 'Computer Science',
      courseType: CourseType[Locales.EN_US].BACHELOR,
      workload: 3200,
      date: {
        start: 'Mar 2024',
        end: 'Present',
      },
      logo: unescLogo,
    },
    ...certificates[Locales.EN_US].filter(
      (certificate) => certificate.isEducation,
    ),
  ],
}
