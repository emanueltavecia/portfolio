import { StaticImageData } from 'next/image'

import controlleLogo from '@/app/assets/controlle-logo.svg'
import elevcodeLogo from '@/app/assets/elevcode-logo.png'
import { Locales } from '@/locales'

interface Timeline {
  position: string
  startDate: string
  endDate: string
  description?: string[] | string
}

interface Experience {
  id: number
  company: string
  logo: StaticImageData
  type: string
  location: string
  startDate: string
  endDate: string
  position: string
  description: string[] | string
  timeline?: Timeline[]
}

export const experiences: Record<Locales, Experience[]> = {
  [Locales.PT_BR]: [
    {
      id: 1,
      company: 'Controlle',
      logo: controlleLogo,
      type: 'Full Time',
      location: 'Remoto',
      startDate: 'Jun 2024',
      endDate: 'Atual',
      position: 'Desenvolvedor Full-stack',
      description: [
        'A Controlle é uma plataforma web completa voltada para a gestão financeira de pequenas e médias empresas. O sistema é projetado para simplificar o controle financeiro, oferecendo recursos como relatórios detalhados, integração bancária, emissão de notas fiscais e diversas automatizações que otimizam a rotina financeira das empresas.',
        'Ao longo da minha trajetória na empresa, transitei por diferentes áreas do desenvolvimento, atuando em front-end, mobile e back-end. Essa experiência multidisciplinar me proporcionou uma visão abrangente do produto e da arquitetura da plataforma.',
        'Meu trabalho na Controlle me permite evoluir tecnicamente enquanto contribuo diretamente para facilitar a gestão financeira de milhares de empreendedores em todo o Brasil.',
      ],
      timeline: [
        {
          position: 'Front-end Júnior',
          startDate: 'Jun 2024',
          endDate: 'Nov 2025',
          description: [
            'Atuei como desenvolvedor júnior na equipe de front-end e mobile. Minhas atividades incluíam o desenvolvimento e a manutenção de interfaces de usuário modernas, funcionais e intuitivas, sempre buscando proporcionar a melhor experiência possível aos clientes.',
            'Participei ativamente da implementação de novas funcionalidades, aprimoramento de recursos existentes e resolução de bugs, garantindo que a aplicação entregue alto desempenho e qualidade, utilizando tecnologias como TypeScript, React, React Native, Next.js e Styled Components.',
          ],
        },
        {
          position: 'Full-stack Pleno',
          startDate: 'Dez 2025',
          endDate: 'Atual',
          description: [
            'Atuo como desenvolvedor full-stack pleno com ênfase em back-end, sendo responsável pelo desenvolvimento e manutenção de microsserviços críticos da plataforma. Minhas atividades incluem a criação de novas funcionalidades, otimização de processos existentes e correção de bugs.',
            'Trabalho diariamente com tecnologias como Node.js, NestJS, TypeScript, Express e PostgreSQL, aplicando boas práticas de desenvolvimento como Clean Code e padrões de arquitetura de microsserviços.',
          ],
        },
      ],
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
      position: 'Full-stack Developer',
      description: [
        'Controlle is a comprehensive web platform designed for the financial management of small and medium-sized businesses. The system is built to simplify financial control, offering features such as detailed reports, bank integration, invoice issuance, and various automations that optimize the financial routines of companies.',
        'Throughout my journey at the company, I have transitioned through different areas of development, working in front-end, mobile, and back-end. This multidisciplinary experience has provided me with a comprehensive understanding of the product and the platform architecture.',
        'My work at Controlle allows me to grow technically while contributing directly to simplifying financial management for thousands of entrepreneurs across Brazil.',
      ],
      timeline: [
        {
          position: 'Junior Front-end',
          startDate: 'Jun 2024',
          endDate: 'Nov 2025',
          description: [
            'I worked as a junior developer on the front-end and mobile team. My activities included developing and maintaining modern, functional, and intuitive user interfaces, always striving to provide the best possible experience for clients.',
            'I actively participated in implementing new features, improving existing functionalities, and fixing bugs, ensuring the application delivers high performance and quality, using technologies such as TypeScript, React, React Native, Next.js, and Styled Components.',
          ],
        },
        {
          position: 'Mid-level Full-stack',
          startDate: 'Dec 2025',
          endDate: 'Present',
          description: [
            'I work as a mid-level full-stack developer with emphasis on back-end, being responsible for the development and maintenance of critical platform microservices. My activities include creating new features, optimizing existing processes, and fixing bugs.',
            'I work daily with technologies such as Node.js, NestJS, TypeScript, Express, and PostgreSQL, applying development best practices such as Clean Code and microservices architecture patterns.',
          ],
        },
      ],
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
