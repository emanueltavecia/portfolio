import ifscLogo from '../app/assets/ifsc-logo.png'
import rocketseatLogo from '../app/assets/rocketseat-logo.svg'
import unescLogo from '../app/assets/unesc-logo.png'

export const education = [
  {
    institution: 'UNESC',
    course: 'Ciência da Computação',
    courseType: 'Bacharel',
    date: {
      start: 'Mar 2024',
      end: 'Atual',
    },
    logo: {
      src: unescLogo,
      width: 84,
    },
  },
  {
    institution: 'Rocketseat',
    course: 'Explorer',
    courseType: 'Curso',
    date: {
      start: 'Nov 2023',
      end: 'Atual',
    },
    logo: {
      src: rocketseatLogo,
      width: 150,
    },
  },
  {
    institution: 'IFSC',
    course: 'Eletromecânica',
    courseType: 'Curso Técnico',
    date: {
      start: 'Fev 2021',
      end: 'Dez 2023',
    },
    logo: {
      src: ifscLogo,
      width: 99,
    },
    certificate:
      'https://github.com/emanueltavecia/certificates/blob/main/Diploma%20T%C3%A9cnico%20em%20Eletromec%C3%A2nica.pdf',
  },
]
