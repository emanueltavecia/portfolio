import { Locales } from '@/locales'

export interface PrivacyPolicySection {
  id: string
  title: string
  content: (string | { subtitle?: string; content: string[] })[]
}

export interface PrivacyPolicyData {
  title: string
  effectiveDate: string
  introduction: string[]
  sections: PrivacyPolicySection[]
  contact: {
    email: string
    appName: string
  }
}

export const cinekeepPrivacyPolicy: Record<Locales, PrivacyPolicyData> = {
  [Locales.PT_BR]: {
    title: 'Política de Privacidade',
    effectiveDate: '2 de agosto de 2025',
    introduction: [
      'Bem-vindo ao **Cinekeep**! Sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você usa os aplicativos móvel e web do Cinekeep (referidos como "App", "Cinekeep", "nós" ou "nosso").',
      'Ao criar uma conta e usar o Cinekeep, você concorda com as práticas descritas nesta Política de Privacidade.',
    ],
    sections: [
      {
        id: 'what-is-cinekeep',
        title: '1. O que é o Cinekeep?',
        content: [
          'O Cinekeep é um aplicativo que permite aos usuários salvar filmes e séries de TV que assistiram, escrever resenhas, avaliar títulos e organizar seu histórico pessoal de visualização. O Cinekeep usa a **API do The Movie Database (TMDB)** para recuperar dados de filmes e séries, mas não permite streaming ou download de nenhum conteúdo.',
        ],
      },
      {
        id: 'information-collected',
        title: '2. Informações que Coletamos',
        content: [
          'Quando você usa o Cinekeep, podemos coletar os seguintes tipos de informações pessoais:',
          {
            subtitle: '2.1. Informações da Conta',
            content: [
              'Nome (opcional)',
              'Endereço de e-mail (obrigatório)',
              'Senha (criptografada)',
              'Timestamps de criação e login da conta',
            ],
          },
          {
            subtitle: '2.2. Atividade do Usuário',
            content: [
              'Títulos salvos em sua lista de desejos ou histórico',
              'Avaliações e resenhas que você fornece',
              'Data/hora das ações dentro do app (ex: marcar um filme como assistido)',
            ],
          },
          {
            subtitle: '2.3. Informações do Dispositivo',
            content: [
              'Tipo de dispositivo e SO (ex: Android, iOS)',
              'Endereço IP',
              'Versão do app',
            ],
          },
          'Nós **não** coletamos dados financeiros ou dados de localização além do seu endereço IP (usado para análises gerais e segurança).',
        ],
      },
      {
        id: 'how-we-use',
        title: '3. Como Usamos suas Informações',
        content: [
          'Usamos seus dados para:',
          {
            content: [
              'Criar e gerenciar sua conta do Cinekeep',
              'Exibir sua lista de desejos, histórico, avaliações e resenhas',
              'Melhorar o desempenho do app e a experiência do usuário',
              'Monitorar padrões de uso e análises do app',
              'Responder a solicitações de suporte ou problemas',
            ],
          },
        ],
      },
      {
        id: 'tmdb-api',
        title: '4. Uso da API do TMDB',
        content: [
          'O Cinekeep usa a **API do TMDB** para fornecer informações sobre filmes e séries de TV. Nós **não** compartilhamos suas informações pessoais com o TMDB. O uso do serviço deles é regido pelos [Termos de Uso da API do TMDB](https://www.themoviedb.org/documentation/api/terms-of-use).',
          'O Cinekeep **não é endossado ou certificado** pelo TMDB.',
        ],
      },
      {
        id: 'data-storage',
        title: '5. Armazenamento e Segurança dos Dados',
        content: [
          'Todos os dados pessoais são armazenados com segurança em nosso banco de dados na nuvem e são protegidos usando criptografia e práticas de segurança padrão da indústria. As senhas são criptografadas e nunca armazenadas em texto simples.',
          'Tomamos medidas razoáveis para proteger suas informações pessoais de acesso, uso ou divulgação não autorizados.',
        ],
      },
      {
        id: 'data-sharing',
        title: '6. Compartilhamento de Dados',
        content: [
          'Nós **não vendemos**, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.',
          'Podemos compartilhar seus dados:',
          {
            content: [
              'Se exigido por lei (ex: solicitações legais, aplicação da lei)',
              'Com prestadores de serviços que usamos para hospedagem e análises (que estão vinculados por acordos rigorosos de confidencialidade)',
            ],
          },
        ],
      },
      {
        id: 'user-rights',
        title: '7. Direitos do Usuário',
        content: [
          'Você tem o direito de:',
          {
            content: [
              'Acessar e visualizar seus dados pessoais',
              'Editar ou excluir sua conta e todos os dados associados',
              'Solicitar exportação de dados em formato legível',
              'Retirar seu consentimento a qualquer momento (excluindo sua conta)',
            ],
          },
        ],
      },
      {
        id: 'children-privacy',
        title: '8. Privacidade de Crianças',
        content: [
          'O Cinekeep não é destinado ao uso por crianças menores de 13 anos. Não coletamos conscientemente dados de crianças. Se você acredita que uma criança se registrou, entre em contato conosco para que a conta seja removida.',
        ],
      },
      {
        id: 'policy-changes',
        title: '9. Alterações nesta Política',
        content: [
          'Podemos atualizar esta Política de Privacidade de tempos em tempos. Se houver alterações, notificaremos os usuários por e-mail ou notificação no app. O uso contínuo do Cinekeep após as alterações implica aceitação dos novos termos.',
        ],
      },
      {
        id: 'contact',
        title: '10. Entre em Contato Conosco',
        content: [
          'Se você tiver alguma dúvida sobre esta Política de Privacidade ou como lidamos com seus dados, entre em contato:',
        ],
      },
    ],
    contact: {
      email: 'emanueltavecia@hotmail.com',
      appName: 'Cinekeep',
    },
  },
  [Locales.EN_US]: {
    title: 'Privacy Policy',
    effectiveDate: 'August 2, 2025',
    introduction: [
      'Welcome to **Cinekeep**! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use the Cinekeep mobile and web applications (referred to as "App", "Cinekeep", "we", "us", or "our").',
      'By creating an account and using Cinekeep, you agree to the practices described in this Privacy Policy.',
    ],
    sections: [
      {
        id: 'what-is-cinekeep',
        title: '1. What is Cinekeep?',
        content: [
          "Cinekeep is an application that allows users to save movies and TV shows they've watched, write reviews, rate titles, and organize their personal watch history. Cinekeep uses **The Movie Database (TMDB) API** to retrieve movie and series data, but it does not allow streaming or downloading of any content.",
        ],
      },
      {
        id: 'information-collected',
        title: '2. Information We Collect',
        content: [
          'When you use Cinekeep, we may collect the following types of personal information:',
          {
            subtitle: '2.1. Account Information',
            content: [
              'Name (optional)',
              'Email address (required)',
              'Password (encrypted)',
              'Account creation and login timestamps',
            ],
          },
          {
            subtitle: '2.2. User Activity',
            content: [
              'Titles saved to your watchlist or history',
              'Ratings and reviews you provide',
              'Date/time of actions within the app (e.g., marking a movie as watched)',
            ],
          },
          {
            subtitle: '2.3. Device Information',
            content: [
              'Device type and OS (e.g., Android, iOS)',
              'IP address',
              'App version',
            ],
          },
          'We do **not** collect any financial data or location data beyond your IP address (used for general analytics and security).',
        ],
      },
      {
        id: 'how-we-use',
        title: '3. How We Use Your Information',
        content: [
          'We use your data to:',
          {
            content: [
              'Create and manage your Cinekeep account',
              'Display your watchlist, history, ratings, and reviews',
              'Improve app performance and user experience',
              'Monitor usage patterns and app analytics',
              'Respond to support requests or issues',
            ],
          },
        ],
      },
      {
        id: 'tmdb-api',
        title: '4. TMDB API Usage',
        content: [
          'Cinekeep uses the **TMDB API** to provide information about movies and TV shows. We do **not** share your personal information with TMDB. Usage of their service is governed by the [TMDB API Terms of Use](https://www.themoviedb.org/documentation/api/terms-of-use).',
          'Cinekeep is **not endorsed or certified** by TMDB.',
        ],
      },
      {
        id: 'data-storage',
        title: '5. Data Storage and Security',
        content: [
          'All personal data is securely stored in our cloud database and is protected using industry-standard encryption and security practices. Passwords are hashed and never stored in plain text.',
          'We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure.',
        ],
      },
      {
        id: 'data-sharing',
        title: '6. Data Sharing',
        content: [
          'We do **not sell**, rent, or share your personal data with third parties for marketing purposes.',
          'We may share your data:',
          {
            content: [
              'If required by law (e.g., legal requests, law enforcement)',
              'With service providers we use for hosting and analytics (who are bound by strict confidentiality agreements)',
            ],
          },
        ],
      },
      {
        id: 'user-rights',
        title: '7. User Rights',
        content: [
          'You have the right to:',
          {
            content: [
              'Access and view your personal data',
              'Edit or delete your account and all associated data',
              'Request data export in a readable format',
              'Withdraw your consent at any time (by deleting your account)',
            ],
          },
        ],
      },
      {
        id: 'children-privacy',
        title: "8. Children's Privacy",
        content: [
          'Cinekeep is not intended for use by children under the age of 13. We do not knowingly collect data from children. If you believe a child has registered, please contact us to have the account removed.',
        ],
      },
      {
        id: 'policy-changes',
        title: '9. Changes to This Policy',
        content: [
          'We may update this Privacy Policy from time to time. If changes are made, we will notify users via email or an in-app notification. Continued use of Cinekeep after changes implies acceptance of the new terms.',
        ],
      },
      {
        id: 'contact',
        title: '10. Contact Us',
        content: [
          'If you have any questions about this Privacy Policy or how we handle your data, please contact:',
        ],
      },
    ],
    contact: {
      email: 'emanueltavecia@hotmail.com',
      appName: 'Cinekeep',
    },
  },
}
