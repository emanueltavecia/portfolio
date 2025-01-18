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
        'Atuo como desenvolvedor júnior na equipe de front-end e mobile da Controlle, uma plataforma web completa voltada para a gestão financeira de pequenas e médias empresas. O sistema é projetado para simplificar o controle financeiro, oferecendo recursos como relatórios detalhados, integração bancária, emissão de notas fiscais e diversas automatizações que otimizam a rotina dos usuários. Minhas atividades incluem o desenvolvimento e a manutenção de interfaces de usuário modernas, funcionais e intuitivas, sempre buscando proporcionar a melhor experiência possível aos clientes. Participo ativamente da implementação de novas funcionalidades, aprimoramento de recursos existentes e resolução de bugs, garantindo que a aplicação entregue alto desempenho e qualidade. No dia a dia, utilizo tecnologias como TypeScript, React, React Native, Next.js e Styled Components. Meu trabalho na Controlle me permite não apenas evoluir tecnicamente, mas também contribuir diretamente para facilitar a gestão financeira de milhares de empreendedores.',
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
        "I work as a junior developer on the front-end and mobile team at Controlle, a comprehensive web platform designed for the financial management of small and medium-sized businesses. The system is built to simplify financial control, offering features such as detailed reports, bank integration, invoice issuance, and various automations that optimize users' workflows. My responsibilities include developing and maintaining modern, functional, and intuitive user interfaces, always striving to provide the best possible user experience. I actively participate in implementing new features, enhancing existing functionalities, and fixing bugs, ensuring the application delivers high performance and quality. In my daily work, I use technologies such as TypeScript, React, React Native, Next.js, and Styled Components. My role at Controlle allows me to grow technically while contributing directly to simplifying financial management for thousands of entrepreneurs.",
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
