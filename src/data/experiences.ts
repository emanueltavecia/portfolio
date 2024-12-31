import controlleLogo from '@/app/assets/controlle-logo.svg'
import elevcodeLogo from '@/app/assets/elevcode-logo.png'
import { Locales } from '@/locales'

export const experiences = {
  [Locales.PT_BR]: [
    {
      id: 1,
      company: 'Controlle',
      logo: controlleLogo,
      type: 'Full Time',
      location: 'Remoto',
      startDate: 'Jun 2024',
      endDate: 'Atual',
      position: 'Desenvolvedor Front-end e Mobile',
      description:
        'Atuo como desenvolvedor júnior na equipe de front-end e mobile, contribuindo para o desenvolvimento e manutenção de interfaces de usuário modernas e intuitivas. Minhas responsabilidades incluem a implementação de novas funcionalidades e melhorias, além da resolução de bugs, utilizando tecnologias como TypeScript, React, React Native, Next.js, Styled Components, entre outras ferramentas essenciais para a criação de aplicações de alto desempenho e qualidade.',
    },
    {
      id: 2,
      company: 'Elevcode',
      logo: elevcodeLogo,
      type: 'Estágio',
      location: 'Remoto',
      startDate: 'Mar 2024',
      endDate: 'Jun 2024',
      position: 'Desenvolvedor Front-end',
      description:
        'Atuei como desenvolvedor front-end principal nessa startup, liderando uma squad individualmente e sendo responsável pela criação e manutenção de soluções front-end. Utilizei tecnologias como JavaScript, TypeScript, React, Next.js e TailwindCSS para desenvolver aplicações modernas e intuitivas.',
    },
  ],

  [Locales.EN_US]: [
    {
      id: 1,
      company: 'Controlle',
      logo: controlleLogo,
      type: 'Full Time',
      location: 'Remote',
      startDate: 'Jun 2024',
      endDate: 'Present',
      position: 'Front-end and Mobile Developer',
      description:
        'I work as a junior developer in the front-end and mobile team, contributing to the development and maintenance of modern and intuitive user interfaces. My responsibilities include implementing new features and improvements, as well as resolving bugs, using technologies such as TypeScript, React, React Native, Next.js, Styled Components, among other essential tools for creating high-performance and quality applications.',
    },
    {
      id: 2,
      company: 'Elevcode',
      logo: elevcodeLogo,
      type: 'Internship',
      location: 'Remote',
      startDate: 'Mar 2024',
      endDate: 'Jun 2024',
      position: 'Front-end Developer',
      description:
        'I worked as the main front-end developer at this startup, leading a squad individually and being responsible for creating and maintaining front-end solutions. I used technologies such as JavaScript, TypeScript, React, Next.js and TailwindCSS to develop modern and intuitive applications.',
    },
  ],
}
