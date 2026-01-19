import {
  Project,
  ProjectComplexity,
  ProjectSource,
  ProjectType,
  ProjectVisibility,
} from '@/app/[locale]/projects/types'
import project10Screenshot from '@/app/assets/project-10-screenshot.png'
import { Locales } from '@/locales'

import { Techs } from './tech-stack'

const featuresPtBrTitle = 'Funcionalidades'
const featuresEnUsTitle = 'Features'
const conceptsDevelopedPtBrTitle = 'Conceitos desenvolvidos'
const conceptsDevelopedEnUsTitle = 'Concepts developed'

export const projects: Record<Locales, Project[]> = {
  [Locales.PT_BR]: [
    {
      name: 'Central de Compras',
      id: 13,
      repo_name: {
        frontend: 'central-de-compras-frontend',
        backend: 'central-de-compras-backend',
      },
      deploy: 'https://central-de-compras-frontend.vercel.app/',
      type: [ProjectType.BACKEND, ProjectType.FRONTEND],
      source: ProjectSource.UNIVERSITY,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Plataforma completa de Central de Compras desenvolvida como MVP para o projeto interdisciplinar da 4ª fase do curso de Ciência da Computação na UNESC.',
        'Sistema full-stack que permite gerenciar organizações (lojas e fornecedores), usuários, produtos, campanhas promocionais, pedidos, cashback e condições comerciais, com três níveis de permissão: Administrador, Loja e Fornecedor.',
      ],
      techs: [
        Techs.TYPESCRIPT,
        Techs.NEXT_JS,
        Techs.REACT,
        Techs.TAILWIND_CSS,
        Techs.NODEJS,
        Techs.EXPRESS,
        Techs.POSTGRESQL,
        Techs.DOCKER,
        Techs.ZOD,
      ],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            {
              title: 'Dashboard',
              content: ['Visão geral com estatísticas'],
            },
            {
              title: 'Gerenciamento de Organizações',
              content: [
                'Cadastro e gestão de lojas',
                'Cadastro e gestão de fornecedores',
                'Gerenciamento de endereços',
                'Gerenciamento de contatos',
              ],
            },
            {
              title: 'Catálogo de Produtos',
              content: [
                'CRUD completo de produtos',
                'Organização por categorias',
                'Filtros e busca avançada',
              ],
            },
            {
              title: 'Sistema de Pedidos',
              content: [
                'Criação e rastreamento de pedidos',
                'Gerenciamento de cotações',
                'Aprovação de pedidos',
                'Histórico de pedidos',
              ],
            },
            {
              title: 'Campanhas Promocionais',
              content: [
                'Criação e gestão de campanhas',
                'Definição de períodos de vigência',
                'Associação de produtos às campanhas',
              ],
            },
            {
              title: 'Programa de Cashback',
              content: [
                'Sistema de carteira de cashback',
                'Rastreamento de transações',
                'Gerenciamento de saldo',
              ],
            },
            {
              title: 'Condições Comerciais',
              content: [
                'Configuração de condições de pagamento',
                'Gerenciamento de condições por estado do fornecedor',
                'Definição de prazos e formas de pagamento',
              ],
            },
            {
              title: 'Gestão de Usuários',
              content: [
                'Sistema de autenticação com JWT',
                'Três níveis de permissão (Admin, Loja, Fornecedor)',
                'Gerenciamento de perfil',
                'Upload de foto de perfil',
              ],
            },
          ],
        },
        {
          title: 'Arquitetura Backend',
          content: [
            {
              title: 'API RESTful',
              content: [
                'Framework Express 5 com TypeScript',
                'Documentação completa com Swagger',
                'Validação de dados com class-validator e class-transformer',
                'Decorators com routing-controllers',
                'Rotas tipadas e organizadas por módulos',
              ],
            },
            {
              title: 'Banco de Dados',
              content: [
                'PostgreSQL 16 para persistência',
                'Schema completo com relacionamentos complexos',
                'Containerização com Docker Compose',
              ],
            },
            {
              title: 'Segurança',
              content: [
                'Autenticação JWT com tokens seguros',
                'Hash de senhas com bcryptjs',
                'Helmet para proteção HTTP',
                'CORS configurado',
                'Validação rigorosa de entrada',
                'Queries parametrizadas contra SQL Injection',
              ],
            },
            {
              title: 'Upload de Arquivos',
              content: [
                'Sistema de upload com Multer',
                'Armazenamento de imagens de perfil',
                'Otimização de arquivos',
              ],
            },
          ],
        },
        {
          title: 'Arquitetura Frontend',
          content: [
            {
              title: 'Next.js 16 App Router',
              content: [
                'Roteamento moderno com App Router',
                'Server e Client Components',
                'Rotas protegidas e públicas',
                'Middleware para autenticação',
              ],
            },
            {
              title: 'Interface e Componentes',
              content: [
                'Biblioteca Mantine v8 para UI',
                'Tailwind CSS v4 para estilização',
                'Componentes reutilizáveis',
                'Design responsivo',
                'Ícones Tabler Icons e Lucide React',
              ],
            },
            {
              title: 'Gerenciamento de Estado e Formulários',
              content: [
                'React Hook Form para formulários complexos',
                'Validação com Zod',
                'Axios para requisições HTTP',
                'Day.js para manipulação de datas',
              ],
            },
            {
              title: 'Sistema de Paleta de Cores',
              content: [
                'Variáveis CSS customizadas',
                'Cores semânticas (primary, secondary, success, warning, error)',
              ],
            },
          ],
        },
        {
          title: 'Permissões e Funcionalidades por Tipo de Usuário',
          content: [
            {
              title: 'Administrador',
              content: [
                {
                  title: 'Gerenciamento de organizações (lojas e fornecedores)',
                  content: [
                    'Gerenciamento de contatos',
                    'Gerenciamento de endereços',
                  ],
                },
                'Gerenciamento de usuários',
              ],
            },
            {
              title: 'Loja',
              content: [
                'Visualização de fornecedores',
                'Criação de pedidos',
                'Visualização dos próprios pedidos',
                'Acesso ao programa de cashback',
              ],
            },
            {
              title: 'Fornecedor',
              content: [
                'Gerenciamento de produtos',
                'Visualização e gestão de pedidos recebidos',
                'Gerenciamento de campanhas promocionais',
                'Configuração de condições comerciais',
                'Configuração de condições por estado',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Arquitetura em camadas (Controllers → Services → Repositories → Database)',
            'Padrões Repository e DTO',
            'Dependency Injection com decorators',
            'Middleware Pattern para autenticação e validação',
            'Containerização de aplicações com Docker',
            'Deploy de aplicações full-stack na Vercel',
            'Documentação de API com Swagger/OpenAPI',
            'Type-safety completo do banco de dados até a UI',
            'Gerenciamento de permissões e autorização',
            'Sistema de upload e armazenamento de arquivos',
            'Validação de dados em múltiplas camadas',
            'Separação clara entre frontend e backend',
            'Utilização de variáveis de ambiente',
            'Práticas de segurança web (JWT, hash, proteção HTTP)',
            'Desenvolvimento colaborativo em equipe',
          ],
        },
      ],
    },
    {
      name: 'Let me ask',
      id: 12,
      repo_name: {
        frontend: 'letmeask-ai-web',
        backend: 'letmeask-ai-server',
      },
      deploy: 'https://letmeask-ai-web.vercel.app/',
      type: [ProjectType.BACKEND, ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Plataforma de perguntas e respostas em tempo real potencializada por IA, que permite criar salas de discussão onde áudios são transcritos e utilizados como contexto para respostas automáticas e precisas via Google Gemini.',
        'O backend implementa busca semântica vetorial com PostgreSQL e embeddings, garantindo respostas contextualmente relevantes baseadas no conteúdo transcrito.',
      ],
      techs: [
        Techs.TYPESCRIPT,
        Techs.NODEJS,
        Techs.FASTIFY,
        Techs.POSTGRESQL,
        Techs.DOCKER,
        Techs.DRIZZLE_ORM,
        Techs.ZOD,
        Techs.GOOGLE_GEMINI,
        Techs.VITE,
        Techs.TAILWIND_CSS,
        Techs.REACT,
      ],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Upload e transcrição automática de áudio com Google Gemini 2.5 Flash',
            'Busca semântica com embeddings e PostgreSQL pgvector para contexto preciso',
            'Geração de respostas por IA baseadas em similaridade de conteúdo',
            'Criação e gerenciamento de salas de perguntas',
            'Interface responsiva para gravação e envio de áudio',
            'Validação robusta de dados com Zod em todas as rotas',
          ],
        },
        {
          title: 'Arquitetura Backend',
          content: [
            {
              title: 'API RESTful',
              content: [
                'Framework Fastify com type-safety completo via fastify-type-provider-zod',
                'Validação rigorosa de payloads com Zod',
                'Suporte a multipart/form-data para upload de áudio',
                'Rotas tipadas end-to-end',
              ],
            },
            {
              title: 'Banco de Dados',
              content: [
                'PostgreSQL 17 com extensão pgvector para armazenamento vetorial',
                'Drizzle ORM para migrations e queries type-safe',
                'Schema relacional com relacionamentos entre rooms, questions e audio_chunks',
                'Suporte nativo a operações de similaridade de vetores (<=> operator)',
              ],
            },
            {
              title: 'Inteligência Artificial',
              content: [
                'Transcrição de áudio via Google Gemini 2.5 Flash',
                'Geração de embeddings com modelo text-embedding-004',
                'RAG (Retrieval-Augmented Generation) para respostas contextuais',
                'Busca por similaridade semântica com threshold de 0.7',
                'Seleção dos 3 chunks mais relevantes para contexto da resposta',
              ],
            },
            {
              title: 'Infraestrutura',
              content: [
                'Docker Compose para ambiente de desenvolvimento isolado',
                'Migrations versionadas com Drizzle Kit',
                'Sistema de seed para dados de teste',
                'Scripts de build com correção automática de imports',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Implementação de sistema RAG com busca vetorial',
            'Integração com Google Generative AI para processamento multimodal',
            'Modelagem de dados para aplicações com IA generativa',
            'Vector similarity search com operador de distância cosseno',
            'Type-safety completo do banco de dados até a API',
            'Arquitetura de microserviços com separação frontend/backend',
            'Pipeline de processamento: áudio → transcrição → embeddings → busca → geração',
            'Containerização de ambiente PostgreSQL com extensões customizadas',
          ],
        },
      ],
    },
    {
      name: 'Sistema Ponto de Caixa',
      id: 11,
      screenshot: project10Screenshot,
      type: [ProjectType.DESKTOP],
      source: ProjectSource.FREELANCE,
      visibility: ProjectVisibility.PRIVATE,
      complexity: ProjectComplexity.HIGH,
      isFeatured: false,
      description: [
        'Sistema full-stack de gerenciamento de eventos para desktop com registro de produtos, impressão de tickets, calculadora de caixa e relatório final de vendas. Minha responsabilidade nesse projeto freelancer foi o front-end.',
      ],
      techs: [
        Techs.ELECTRON,
        Techs.REACT,
        Techs.TYPESCRIPT,
        Techs.NEXT_JS,
        Techs.TAILWIND_CSS,
      ],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Listagem de produtos',
            'Cadastro de produto, com nome e preço',
            'Edição do produto',
            'Exclusão de produto',
            {
              title: 'Vendas',
              content: [
                'Clicando em "Iniciar vendas", abre uma modal para definir o nome do evento e o troco inicial',
                'Na página de vendas, é listado os produtos, para selecionar a quantidade que será comprada de cada item',
                'O total da compra é calculado automaticamente e exibido para o usuário',
                'Ao clicar no botão "Imprimir ticket", é finalizado a venda e impresso o ticket',
                'As vendas só encerram ao clicar no botão "Finalizar" no header, que leva o usuário para a página de resumo de vendas, com o total geral e quantidade comprada de cada produto',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Criação de app desktop com o Electron, utilizando tecnologias da web',
            'Utilização do React Query para gerenciamento das requisições',
            'Utilização da biblioteca Sonner para exibição de toasts',
            'Envio de parâmetros na rota, utilizando os recursos do Next.js',
            'Utilização da Context API do React',
          ],
        },
      ],
    },
    {
      name: 'Nearby',
      repo_name: 'nearby-mobile',
      id: 10,
      type: [ProjectType.MOBILE],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Nearby é um aplicativo para buscar cupons de desconto de estabelecimentos próximos ao usuário, com base na sua localização atual.',
      ],
      techs: [
        Techs.REACT,
        Techs.REACT_NATIVE,
        Techs.EXPO,
        Techs.TYPESCRIPT,
        Techs.AXIOS,
      ],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Tela de boas-vindas',
            'Busca de estabelecimentos por categoria',
            'Busca de estabelecimentos por localização',
            'Listagem dos estabelecimentos disponíveis',
            'Detalhes do estabelecimento selecionado',
            'Quantidade de cupons disponíveis',
            'Leitura de QR Code para exibir o cupom',
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Integração com o back-end',
            'Utilização do Expo para desenvolvimento multiplataforma',
            'Roteamento com Expo Router',
            'Utilização do Axios para requisições HTTP',
            'Utilização da biblioteca expo-camera para escanear QR Code',
            'Utilização de um componente de bottom-sheet',
            'Renderizar e customizar mapa com a biblioteca react-native-maps',
          ],
        },
      ],
    },
    {
      name: 'plann.er',
      repo_name: 'planner-mobile',
      videoOverview: 'overview.mp4',
      id: 9,
      type: [ProjectType.MOBILE],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'plann.er é um aplicativo multiplataforma projetado para planejar suas viagens.',
        'Com o plann.er, você pode convidar amigos e familiares para participar de suas aventuras, organizar todas as suas atividades de viagem e salvar links importantes para uma experiência de viagem perfeita.',
      ],
      techs: [
        Techs.REACT,
        Techs.REACT_NATIVE,
        Techs.EXPO,
        Techs.TYPESCRIPT,
        Techs.TAILWIND_CSS,
        Techs.AXIOS,
      ],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            {
              title: 'Criação de uma nova viagem',
              content: ['Especificando o local, data e email dos convidados'],
            },
            'Edição da viagem atual',
            'Remoção da viagem atual',
            'Cadastro de atividades, com data e horário',
            'Cadastro de links importantes',
            'Listagem das atividades, separadas por data',
            'Listagem dos links importantes',
            'Confirmação de presença na viagem, ao clicar no link enviado por email',
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Integração com o back-end',
            'Utilização do Expo para desenvolvimento multiplataforma',
            'Roteamento com Expo Router',
            'Utilização do Axios para requisições HTTP',
            'Utilização do AsyncStorage para salvar informações localmente',
            'Utilização do NativeWind (TailwindCSS para React Native) para estilização',
            'Utilização da biblioteca react-native-calendars para o componente de calendário',
          ],
        },
      ],
    },
    {
      name: 'DevStage',
      repo_name: 'devstage',
      id: 8,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.MEDIUM,
      isFeatured: true,
      description: [
        'DevStage é um software de indicação web que pode ser usado durante eventos online.',
      ],
      techs: [Techs.REACT, Techs.TYPESCRIPT, Techs.NEXT_JS, Techs.TAILWIND_CSS],
      listItems: [
        {
          title: 'Rodando o projeto',
          content: [
            'Siga as instruções disponível no Readme do repositório, clicando no botão "Ver código" no topo da página',
          ],
        },
        {
          title: featuresPtBrTitle,
          content: [
            {
              title: 'Tela inicial',
              content: [
                'Exibição dos dados do evento',
                'Formulário de inscrição no evento',
              ],
            },
            {
              title: 'Tela de inscrição confirmada',
              content: [
                'Exibição do link de indicação, com botão de copiar',
                {
                  title: 'Informações de indicação',
                  content: [
                    'Quantidade de acessos ao link de indicação',
                    'Quantidade de inscrições confirmadas através do link de indicação',
                    'Posição no ranking',
                  ],
                },
                'Ranking de indicações com o top 3',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Integração com o back-end com o Orval',
            {
              title: 'Next.js',
              content: [
                'Funcionalidades',
                'Server components',
                'Boas práticas',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'uFitt',
      repo_name: 'ufitt',
      deploy: 'https://ufitt.vercel.app/',
      id: 7,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.UNIVERSITY,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.MEDIUM,
      isFeatured: true,
      description: [
        'uFitt é uma aplicação web para calcular o Gasto Energético Basal com base nos conceitos de expressões algébricas.',
        'Este é um projeto universitário desenvolvido para a disciplina de Fundamentos Matemáticos do curso de Ciência da Computação.',
      ],
      techs: [Techs.REACT, Techs.TYPESCRIPT, Techs.NEXT_JS, Techs.TAILWIND_CSS],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Calcular o Gasto Energético Basal, a partir da altura, peso, idade e sexo do usuário',
            'Entender como o cálculo funciona',
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Utilização do shadcn/ui para o componente de modal',
            'Responsividade',
            'Utilização da biblioteca Lucide para ícones',
            'Validações manuais de formulário',
            'Hooks do React',
          ],
        },
      ],
    },
    {
      name: 'Food Explorer',
      repo_name: 'foodexplorer-web',
      deploy: 'https://foodexplorer-web-orpin.vercel.app/',
      id: 6,
      type: [ProjectType.FRONTEND, ProjectType.BACKEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Food Explorer é um aplicativo de cardápio digital para um restaurante fictício, desenvolvido para colocar em prática os conceitos de back-end e front-end desenvolvidos durante a formação do Explorer.',
      ],
      techs: [
        Techs.REACT,
        Techs.JAVASCRIPT,
        Techs.VITE,
        Techs.REACT_ROUTER,
        Techs.STYLED_COMPONENTS,
        Techs.AXIOS,
        Techs.NODEJS,
        Techs.EXPRESS,
      ],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Login e criação de conta no Food Explorer',
            {
              title: 'Permissionamento de recursos',
              content: [
                {
                  title: 'Apenas usuários Admins',
                  content: [
                    'Criação de novos pratos',
                    'Edição de pratos existentes',
                    'Upload de imagens',
                  ],
                },
                {
                  title: 'Todos os usuários',
                  content: [
                    'Visualizar os pratos',
                    'Visualizar os detalhes do prato',
                  ],
                },
              ],
            },
            'Listagem dos pratos disponíveis',
            'Upload de imagem para o prato',
            'Visualização dos detalhes do prato',
            'Lista de ingredientes dos pratos',
            {
              title: 'Filtragem dos pratos por pesquisa',
              content: [
                'Pesquisa por nome do prato',
                'Pesquisa por nome do ingrediente',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            {
              title: 'Front-end',
              content: [
                'Integração com o back-end',
                'Autenticação de usuário',
                'Utilização do React Router para navegação na aplicação',
                'Permissionamento',
                'Restringir rotas e funcionalidades para usuários admin',
                'Restringir rotas para apenas usuários logados',
                'Salvar o token de login como cookie',
                'Salvar o usuário logado no local storage',
                'Utilização do Styled Components para estilização',
                'Requisições com o Axios',
                'Criação e utilização de Contextos do React',
                'Utilização da biblioteca keen-slider para os carrosséis de pratos na página inicial',
              ],
            },
            {
              title: 'Back-end',
              content: [
                'Utilização do Express para criação da API',
                'Salvamento de informações em um banco de dados',
                'Autenticação de usuários',
                'Autorização de usuários',
                'Permissionamento de recursos',
                'Upload de arquivos',
                'Utilização do SQLite para o banco de dados',
                'Utilização da biblioteca Knex para manipular o banco de dados',
                'Middlewares',
                'Rotas para cada funcionalidade',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Notes App',
      repo_name: 'nlw-notes',
      deploy: 'https://notes-nlw-app.vercel.app/',
      id: 5,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.MEDIUM,
      isFeatured: true,
      description: [
        'NLW Notes é um site que permite salvar notas de texto geradas a partir do reconhecimento de fala com a API do navegador, projetado para aprender conceitos básicos do ReactJS',
      ],
      techs: [Techs.REACT, Techs.TYPESCRIPT, Techs.VITE, Techs.TAILWIND_CSS],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Salvar notas personalizadas',
            'Salvamento das notas no local storage do navegador',
            'Adicionar uma nota convertendo voz para texto',
            'Pesquisa para encontrar as notas mais facilmente',
            'Modal de detalhes da nota',
            'Botão de deletar nota',
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Utilização da API SpeechRecognition que está presente nos browsers modernos',
            'Salvamento de dados no local storage',
            'Utilização do componente dialog do RadixUI',
            'Utilização da biblioteca Sonner para exibição de toasts na aplicação',
          ],
        },
      ],
    },
    {
      name: 'Notesify',
      repo_name: 'notesify-web',
      deploy: 'https://notesify-web.netlify.app/',
      id: 4,
      type: [ProjectType.FRONTEND, ProjectType.BACKEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Notesify é um aplicativo para registrar e gerenciar notas, para facilitar o dia a dia, desenvolvido para aprender conceitos de back-end e front-end',
      ],
      techs: [
        Techs.REACT,
        Techs.JAVASCRIPT,
        Techs.VITE,
        Techs.REACT_ROUTER,
        Techs.STYLED_COMPONENTS,
        Techs.AXIOS,
        Techs.NODEJS,
        Techs.EXPRESS,
      ],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Login e criação de conta no Notesify',
            'Criação de notas',
            'Visualização dos detalhes da nota',
            'Recurso de incluir links úteis ao cadastrar nota',
            'Recurso de incluir marcadores para facilitar encontrar as notas',
            'Filtragem das notas por marcadores',
            'Filtragem das notas por pesquisa',
            {
              title: 'Perfil do usuário',
              content: [
                'Nome, email, senha e avatar personalizado',
                'Página para editar as informações do usuário',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            {
              title: 'Front-end',
              content: [
                'Integração com o back-end',
                'Autenticação de usuário',
                'Utilização do React Router para navegação na aplicação',
                'Restringir rotas para apenas usuários logados',
                'Salvar o token de login no local storage',
                'Salvar o usuário logado no local storage',
                'Utilização do Styled Components para estilização',
                'Requisições com o Axios',
                'Criação e utilização de Contextos do React',
              ],
            },
            {
              title: 'Back-end',
              content: [
                'Utilização do Express para criação da API',
                'Salvamento de informações em um banco de dados',
                'Autenticação de usuários',
                'Autorização de usuários',
                'Upload de arquivos',
                'Utilização do SQLite para o banco de dados',
                'Utilização da biblioteca Knex para manipular o banco de dados',
                'Middlewares',
                'Rotas para cada funcionalidade',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Twitter UI',
      repo_name: 'twitter-ui',
      deploy: 'https://twitter-ui-app.vercel.app/',
      id: 3,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.MEDIUM,
      isFeatured: false,
      description: [
        'Este projeto é um clone da interface do site Twitter, projetado para aprender conceitos básicos do ReactJS',
      ],
      techs: [
        Techs.REACT,
        Techs.TYPESCRIPT,
        Techs.VITE,
        Techs.REACT_ROUTER,
        Techs.CSS,
      ],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Adicionar novo tweet',
            'Acessar detalhes do tweet',
            'Responsividade',
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Estados do React',
            'Iterações no React',
            'Roteamento com React Router',
            'Responsividade',
          ],
        },
      ],
    },
    {
      name: 'GitFav',
      repo_name: 'gitfav',
      deploy: 'https://emanueltavecia.github.io/gitfav',
      id: 2,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.LOW,
      isFeatured: false,
      description: [
        'GitFav é um site que permite favoritar usuários do GitHub, projetado para colocar em prática conceitos de programação JavaScript',
      ],
      techs: [Techs.HTML, Techs.CSS, Techs.JAVASCRIPT],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Favoritar usuários do GitHub',
            'Salvamento dos favoritos no local storage',
            'Listagem dos favoritos exibindo a foto, nome, usuário, quantidade de repositórios e quantidade de seguidores',
            'Botão de remover favorito',
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Programação assíncrona com JavaScript',
            'Programação Orientada a Objetos (POO)',
            'Imutabilidade',
            'Uso do Local Storage',
            'Eventos e interatividade',
            'Consumo de API',
            'Promises',
            'Uso do elemento table do HTML',
          ],
        },
      ],
    },
    {
      name: 'FocusTimer v2.0',
      repo_name: 'focustimer-v2.0',
      deploy: 'https://emanueltavecia.github.io/focustimer-v2.0',
      id: 1,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.LOW,
      isFeatured: false,
      description: [
        'O FocusTimer v2.0 é um timer estilo pomodoro projetado para colocar em prática conceitos de programação JavaScript.',
      ],
      techs: [Techs.HTML, Techs.CSS, Techs.JAVASCRIPT],
      listItems: [
        {
          title: featuresPtBrTitle,
          content: [
            'Botões de mais (+) e menos (-) que alteram o tempo em 5 minutos',
            'Botões de Play/Pause e Parar para controlar a execução',
            {
              title: '4 opções de sons ambiente',
              content: ['Floresta', 'Chuva', 'Cafeteria', 'Fogo'],
            },
            'Tema claro e escuro',
          ],
        },
        {
          title: conceptsDevelopedPtBrTitle,
          content: [
            'Transição de tema claro para escuro',
            'CSS :not',
            'ES6 Modules',
            'Manipulação da DOM através do JavaScript',
          ],
        },
      ],
    },
  ],

  [Locales.EN_US]: [
    {
      name: 'Purchasing Center',
      id: 13,
      repo_name: {
        frontend: 'central-de-compras-frontend',
        backend: 'central-de-compras-backend',
      },
      deploy: 'https://central-de-compras-frontend.vercel.app/',
      type: [ProjectType.BACKEND, ProjectType.FRONTEND],
      source: ProjectSource.UNIVERSITY,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Complete Purchasing Center platform developed as an MVP for the interdisciplinary project of the 4th phase of the Computer Science course at UNESC.',
        'Full-stack system that allows managing organizations (stores and suppliers), users, products, promotional campaigns, orders, cashback and commercial conditions, with three permission levels: Administrator, Store and Supplier.',
      ],
      techs: [
        Techs.TYPESCRIPT,
        Techs.NEXT_JS,
        Techs.REACT,
        Techs.TAILWIND_CSS,
        Techs.NODEJS,
        Techs.EXPRESS,
        Techs.POSTGRESQL,
        Techs.DOCKER,
        Techs.ZOD,
      ],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            {
              title: 'Dashboard',
              content: ['Overview with statistics'],
            },
            {
              title: 'Organization Management',
              content: [
                'Store registration and management',
                'Supplier registration and management',
                'Address management',
                'Contact management',
              ],
            },
            {
              title: 'Product Catalog',
              content: [
                'Complete product CRUD',
                'Organization by categories',
                'Advanced filters and search',
              ],
            },
            {
              title: 'Order System',
              content: [
                'Order creation and tracking',
                'Quotation management',
                'Order approval',
                'Order history',
              ],
            },
            {
              title: 'Promotional Campaigns',
              content: [
                'Campaign creation and management',
                'Definition of validity periods',
                'Product association to campaigns',
              ],
            },
            {
              title: 'Cashback Program',
              content: [
                'Cashback wallet system',
                'Transaction tracking',
                'Balance management',
              ],
            },
            {
              title: 'Commercial Conditions',
              content: [
                'Payment conditions configuration',
                'Management of conditions by supplier state',
                'Definition of terms and payment methods',
              ],
            },
            {
              title: 'User Management',
              content: [
                'JWT authentication system',
                'Three permission levels (Admin, Store, Supplier)',
                'Profile management',
                'Profile picture upload',
              ],
            },
          ],
        },
        {
          title: 'Backend Architecture',
          content: [
            {
              title: 'RESTful API',
              content: [
                'Express 5 framework with TypeScript',
                'Complete documentation with Swagger',
                'Data validation with class-validator and class-transformer',
                'Decorators with routing-controllers',
                'Typed routes organized by modules',
              ],
            },
            {
              title: 'Database',
              content: [
                'PostgreSQL 16 for persistence',
                'Complete schema with complex relationships',
                'Containerization with Docker Compose',
              ],
            },
            {
              title: 'Security',
              content: [
                'JWT authentication with secure tokens',
                'Password hashing with bcryptjs',
                'Helmet for HTTP protection',
                'Configured CORS',
                'Strict input validation',
                'Parameterized queries against SQL Injection',
              ],
            },
            {
              title: 'File Upload',
              content: [
                'Upload system with Multer',
                'Profile image storage',
                'File optimization',
              ],
            },
          ],
        },
        {
          title: 'Frontend Architecture',
          content: [
            {
              title: 'Next.js 16 App Router',
              content: [
                'Modern routing with App Router',
                'Server and Client Components',
                'Protected and public routes',
                'Middleware for authentication',
              ],
            },
            {
              title: 'Interface and Components',
              content: [
                'Mantine v8 library for UI',
                'Tailwind CSS v4 for styling',
                'Reusable components',
                'Responsive design',
                'Tabler Icons and Lucide React icons',
              ],
            },
            {
              title: 'State Management and Forms',
              content: [
                'React Hook Form for complex forms',
                'Validation with Zod',
                'Axios for HTTP requests',
                'Day.js for date manipulation',
              ],
            },
            {
              title: 'Color Palette System',
              content: [
                'Custom CSS variables',
                'Semantic colors (primary, secondary, success, warning, error)',
              ],
            },
          ],
        },
        {
          title: 'Permissions and Features by User Type',
          content: [
            {
              title: 'Administrator',
              content: [
                {
                  title: 'Organization management (stores and suppliers)',
                  content: ['Contact management', 'Address management'],
                },
                'User management',
              ],
            },
            {
              title: 'Store',
              content: [
                'View suppliers',
                'Create orders',
                'View own orders',
                'Access to cashback program',
              ],
            },
            {
              title: 'Supplier',
              content: [
                'Product management',
                'View and manage received orders',
                'Promotional campaign management',
                'Commercial conditions configuration',
                'Configuration of conditions by state',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Layered architecture (Controllers → Services → Repositories → Database)',
            'Repository and DTO patterns',
            'Dependency Injection with decorators',
            'Middleware Pattern for authentication and validation',
            'Application containerization with Docker',
            'Full-stack application deployment on Vercel',
            'API documentation with Swagger/OpenAPI',
            'Complete type-safety from database to UI',
            'Permission and authorization management',
            'File upload and storage system',
            'Multi-layer data validation',
            'Clear separation between frontend and backend',
            'Use of environment variables',
            'Web security practices (JWT, hashing, HTTP protection)',
            'Collaborative team development',
          ],
        },
      ],
    },
    {
      name: 'Let me ask',
      id: 12,
      repo_name: {
        frontend: 'letmeask-ai-web',
        backend: 'letmeask-ai-server',
      },
      deploy: 'https://letmeask-ai-web.vercel.app/',
      type: [ProjectType.BACKEND, ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Real-time Q&A platform powered by AI that allows you to create discussion rooms where audio is transcribed and used as context for accurate automatic responses via Google Gemini.',
        'The backend implements vector semantic search with PostgreSQL and embeddings, ensuring contextually relevant responses based on transcribed content.',
      ],
      techs: [
        Techs.TYPESCRIPT,
        Techs.NODEJS,
        Techs.FASTIFY,
        Techs.POSTGRESQL,
        Techs.DOCKER,
        Techs.DRIZZLE_ORM,
        Techs.ZOD,
        Techs.GOOGLE_GEMINI,
        Techs.VITE,
        Techs.TAILWIND_CSS,
        Techs.REACT,
      ],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            'Automatic audio upload and transcription with Google Gemini 2.5 Flash',
            'Semantic search with embeddings and PostgreSQL pgvector for precise context',
            'AI-generated responses based on content similarity',
            'Creation and management of question rooms',
            'Responsive interface for recording and sending audio',
            'Robust data validation with Zod on all routes',
          ],
        },
        {
          title: 'Backend Architecture',
          content: [
            {
              title: 'RESTful API',
              content: [
                'Fastify framework with complete type-safety via fastify-type-provider-zod',
                'Strict payload validation with Zod',
                'Support for multipart/form-data for audio upload',
                'End-to-end typed routes',
              ],
            },
            {
              title: 'Database',
              content: [
                'PostgreSQL 17 with pgvector extension for vector storage',
                'Drizzle ORM for type-safe migrations and queries',
                'Relational schema with relationships between rooms, questions, and audio_chunks',
                'Native support for vector similarity operations (<=> operator)',
              ],
            },
            {
              title: 'Artificial Intelligence',
              content: [
                'Audio transcription via Google Gemini 2.5 Flash',
                'Embedding generation with text-embedding-004 model',
                'RAG (Retrieval-Augmented Generation) for contextual responses',
                'Semantic similarity search with 0.7 threshold',
                'Selection of the 3 most relevant chunks for response context',
              ],
            },
            {
              title: 'Infrastructure',
              content: [
                'Docker Compose for isolated development environment',
                'Versioned migrations with Drizzle Kit',
                'Seed system for test data',
                'Build scripts with automatic import correction',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Implementation of RAG system with vector search',
            'Integration with Google Generative AI for multimodal processing',
            'Data modeling for generative AI applications',
            'Vector similarity search with cosine distance operator',
            'Complete type-safety from database to API',
            'Microservices architecture with frontend/backend separation',
            'Processing pipeline: audio → transcription → embeddings → search → generation',
            'Containerization of PostgreSQL environment with custom extensions',
          ],
        },
      ],
    },
    {
      name: 'Point of Sale System',
      id: 11,
      screenshot: project10Screenshot,
      type: [ProjectType.DESKTOP],
      source: ProjectSource.FREELANCE,
      visibility: ProjectVisibility.PRIVATE,
      complexity: ProjectComplexity.HIGH,
      isFeatured: false,
      description: [
        'Full-stack desktop event management system with product registration, ticket printing, cash calculator and final sales report. My responsibility in this freelance project was the front-end.',
      ],
      techs: [
        Techs.ELECTRON,
        Techs.REACT,
        Techs.TYPESCRIPT,
        Techs.NEXT_JS,
        Techs.TAILWIND_CSS,
      ],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            'Product listing',
            'Product registration, with name and price',
            'Product editing',
            'Product deletion',
            {
              title: 'Sales',
              content: [
                'Clicking on "Start sales" opens a modal to define the name of the event and the initial change',
                'On the sales page, the products are listed, to select the quantity that will be purchased of each item',
                'The purchase total is automatically calculated and displayed to the user',
                'By clicking the "Print ticket" button, the sale is finalized and the ticket is printed',
                'Sales only end when clicking the "Finalize" button in the header, which takes the user to the sales summary page, with the overall total and quantity purchased for each product',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Creating a desktop app with Electron, using web technologies',
            'Using React Query to manage requests',
            'Using the Sonner library to display toasts',
            'Sending parameters on the route, using Next.js features',
            'Using the React Context API',
          ],
        },
      ],
    },
    {
      name: 'Nearby',
      repo_name: 'nearby-mobile',
      id: 10,
      type: [ProjectType.MOBILE],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Nearby is an app for searching for discount coupons from establishments near the user, based on their current location.',
      ],
      techs: [
        Techs.REACT,
        Techs.REACT_NATIVE,
        Techs.EXPO,
        Techs.TYPESCRIPT,
        Techs.AXIOS,
      ],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            'Welcome screen',
            'Search for establishments by category',
            'Search for establishments by location',
            'List of available establishments',
            'Details of the selected establishment',
            'Number of coupons available',
            'Scan QR Code to display coupon',
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Integration with the back-end',
            'Using Expo for cross-platform development',
            'Routing with Expo Router',
            'Using Axios for HTTP requests',
            'Using the expo-camera library to scan QR Code',
            'Using a bottom-sheet component',
            'Render and customize map with react-native-maps library',
          ],
        },
      ],
    },
    {
      name: 'plann.er',
      repo_name: 'planner-mobile',
      videoOverview: 'overview.mp4',
      id: 9,
      type: [ProjectType.MOBILE],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'plann.er is a cross-platform application designed to plan your trips.',
        'With plann.er, you can invite friends and family to join your adventures, organize all your travel activities, and save important links for a seamless travel experience.',
      ],
      techs: [
        Techs.REACT,
        Techs.REACT_NATIVE,
        Techs.EXPO,
        Techs.TYPESCRIPT,
        Techs.TAILWIND_CSS,
        Techs.AXIOS,
      ],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            {
              title: 'Creating a new trip',
              content: [
                'Specifying the location, date and email of the guests',
              ],
            },
            'Edit current trip',
            'Remove current trip',
            'Activity registration, with date and time',
            'Register important links',
            'List of activities, separated by date',
            'List of important links',
            'Confirmation of attendance on the trip, by clicking on the link sent by email',
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Integration with the back-end',
            'Using Expo for cross-platform development',
            'Routing with Expo Router',
            'Using Axios for HTTP requests',
            'Using AsyncStorage to save information locally',
            'Using NativeWind (TailwindCSS for React Native) for styling',
            'Using react-native-calendars library for calendar component',
          ],
        },
      ],
    },
    {
      name: 'DevStage',
      repo_name: 'devstage',
      id: 8,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.MEDIUM,
      isFeatured: true,
      description: [
        'DevStage is an indication web software that can be used during online events.',
      ],
      techs: [Techs.REACT, Techs.TYPESCRIPT, Techs.NEXT_JS, Techs.TAILWIND_CSS],
      listItems: [
        {
          title: 'Running the project',
          content: [
            `Follow the instructions available in the repository's Readme by clicking the "View code" button at the top of the page.`,
          ],
        },
        {
          title: featuresEnUsTitle,
          content: [
            {
              title: 'Home screen',
              content: ['Displaying event data', 'Event Registration Form'],
            },
            {
              title: 'Confirmed registration screen',
              content: [
                'Referral link display, with copy button',
                {
                  title: 'Referral information',
                  content: [
                    'Number of hits on the referral link',
                    'Number of registrations confirmed through the referral link',
                    'Ranking position',
                  ],
                },
                'Ranking of referral with the top 3',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Back-end integration with Orval',
            {
              title: 'Next.js',
              content: ['Features', 'Server components', 'Good practices'],
            },
          ],
        },
      ],
    },
    {
      name: 'uFitt',
      repo_name: 'ufitt',
      deploy: 'https://ufitt.vercel.app/',
      id: 7,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.UNIVERSITY,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.MEDIUM,
      isFeatured: true,
      description: [
        'uFitt is a web application to calculate Basal Energy Expenditure based on the concepts of algebraic expressions.',
        'This is a university project developed for the Mathematical Foundations discipline of the Computer Science course.',
      ],
      techs: [Techs.REACT, Techs.TYPESCRIPT, Techs.NEXT_JS, Techs.TAILWIND_CSS],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            "Calculate Basal Energy Expenditure, based on the user's height, weight, age and sex",
            'Understand how the calculation works',
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Using shadcn/ui for the modal component',
            'Responsiveness',
            'Using the Lucide library for icons',
            'Manual form validations',
            'React Hooks',
          ],
        },
      ],
    },
    {
      name: 'Food Explorer',
      repo_name: 'foodexplorer-web',
      deploy: 'https://foodexplorer-web-orpin.vercel.app/',
      id: 6,
      type: [ProjectType.FRONTEND, ProjectType.BACKEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Food Explorer is a digital menu application for a fictional restaurant, developed to put into practice the back-end and front-end concepts developed during the formation of Explorer.',
      ],
      techs: [
        Techs.REACT,
        Techs.JAVASCRIPT,
        Techs.VITE,
        Techs.REACT_ROUTER,
        Techs.STYLED_COMPONENTS,
        Techs.AXIOS,
        Techs.NODEJS,
        Techs.EXPRESS,
      ],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            'Login and create an account on Food Explorer',
            {
              title: 'Resource permissioning',
              content: [
                {
                  title: 'Admin users only',
                  content: [
                    'Creation of new dishes',
                    'Editing existing dishes',
                    'Upload images',
                  ],
                },
                {
                  title: 'All users',
                  content: ['View the dishes', 'View dish details'],
                },
              ],
            },
            'List of available dishes',
            'Upload image to dish',
            'View dish details',
            'List of ingredients for the dishes',
            {
              title: 'Filtering dishes by search',
              content: ['Search by dish name', 'Search by ingredient name'],
            },
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            {
              title: 'Front-end',
              content: [
                'Integration with the back-end',
                'User authentication',
                'Using React Router for navigation in the application',
                'Permissioning',
                'Restrict routes and features to admin users',
                'Restrict routes to logged in users only',
                'Save login token as cookie',
                'Save the logged in user to local storage',
                'Using Styled Components for styling',
                'Requests with Axios',
                'Creating and Using React Contexts',
                'Using the keen-slider library for dish carousels on the home page',
              ],
            },
            {
              title: 'Back-end',
              content: [
                'Using Express to create the API',
                'Saving information in a database',
                'User authentication',
                'User authorization',
                'Resource permissioning',
                'File upload',
                'Using SQLite for the database',
                'Using the Knex library to manipulate the database',
                'Middlewares',
                'Routes for each functionality',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Notes App',
      repo_name: 'nlw-notes',
      deploy: 'https://notes-nlw-app.vercel.app/',
      id: 5,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.MEDIUM,
      isFeatured: true,
      description: [
        'NLW Notes is a website that allows you to save text notes generated from speech recognition with the browser API, designed to learn basic ReactJS concepts',
      ],
      techs: [Techs.REACT, Techs.TYPESCRIPT, Techs.VITE, Techs.TAILWIND_CSS],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            'Save custom notes',
            "Saving notes to the browser's local storage",
            'Add a note by converting speech to text',
            'Search to find notes more easily',
            'Note details modal',
            'Delete note button',
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Using the SpeechRecognition API that is present in modern browsers',
            'Saving data to local storage',
            'Using the RadixUI dialog component',
            'Using the Sonner library to display toasts in the application',
          ],
        },
      ],
    },
    {
      name: 'Notesify',
      repo_name: 'notesify-web',
      deploy: 'https://notesify-web.netlify.app/',
      id: 4,
      type: [ProjectType.FRONTEND, ProjectType.BACKEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.HIGH,
      isFeatured: true,
      description: [
        'Notesify is an application for recording and managing notes, to make everyday life easier, developed to learn back-end and front-end concepts.',
      ],
      techs: [
        Techs.REACT,
        Techs.JAVASCRIPT,
        Techs.VITE,
        Techs.REACT_ROUTER,
        Techs.STYLED_COMPONENTS,
        Techs.AXIOS,
        Techs.NODEJS,
        Techs.EXPRESS,
      ],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            'Login and create an account on Notesify',
            'Creating notes',
            'Viewing note details',
            'Feature to include useful links when registering a note',
            'Feature to include tags to make it easier to find notes',
            'Filtering notes by tags',
            'Filtering notes by search',
            {
              title: 'User profile',
              content: [
                'Name, email, password and custom avatar',
                'Page to edit user information',
              ],
            },
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            {
              title: 'Front-end',
              content: [
                'Integration with the back-end',
                'User authentication',
                'Using React Router for navigation in the application',
                'Restrict routes to logged in users only',
                'Save login token to local storage',
                'Save the logged in user to local storage',
                'Using Styled Components for styling',
                'Requests with Axios',
                'Creating and using React Contexts',
              ],
            },
            {
              title: 'Back-end',
              content: [
                'Using Express to create the API',
                'Saving information in a database',
                'User authentication',
                'User authorization',
                'File upload',
                'Using SQLite for the database',
                'Using the Knex library to manipulate the database',
                'Middlewares',
                'Routes for each functionality',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Twitter UI',
      repo_name: 'twitter-ui',
      deploy: 'https://twitter-ui-app.vercel.app/',
      id: 3,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.MEDIUM,
      isFeatured: false,
      description: [
        'This project is a clone of the Twitter website interface, designed to learn basic ReactJS concepts.',
      ],
      techs: [
        Techs.REACT,
        Techs.TYPESCRIPT,
        Techs.VITE,
        Techs.REACT_ROUTER,
        Techs.CSS,
      ],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: ['Add new tweet', 'Access tweet details', 'Responsiveness'],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'React States',
            'Iterations in React',
            'Routing with React Router',
            'Responsiveness',
          ],
        },
      ],
    },
    {
      name: 'GitFav',
      repo_name: 'gitfav',
      deploy: 'https://emanueltavecia.github.io/gitfav',
      id: 2,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.LOW,
      isFeatured: false,
      description: [
        'GitFav is a website that allows you to favorite GitHub users, designed to put JavaScript programming concepts into practice.',
      ],
      techs: [Techs.HTML, Techs.CSS, Techs.JAVASCRIPT],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            'Favorite GitHub Users',
            'Saving favorites to local storage',
            'List of favorites showing photo, name, username, number of repositories and number of followers',
            'Remove favorite button',
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Asynchronous programming with JavaScript',
            'Object Oriented Programming (OOP)',
            'Immutability',
            'Using Local Storage',
            'Events and interactivity',
            'API consumption',
            'Promises',
            'Using the HTML table element',
          ],
        },
      ],
    },
    {
      name: 'FocusTimer v2.0',
      repo_name: 'focustimer-v2.0',
      deploy: 'https://emanueltavecia.github.io/focustimer-v2.0',
      id: 1,
      type: [ProjectType.FRONTEND],
      source: ProjectSource.PERSONAL,
      visibility: ProjectVisibility.PUBLIC,
      complexity: ProjectComplexity.LOW,
      isFeatured: false,
      description: [
        'FocusTimer v2.0 is a pomodoro-style timer designed to put JavaScript programming concepts into practice.',
      ],
      techs: [Techs.HTML, Techs.CSS, Techs.JAVASCRIPT],
      listItems: [
        {
          title: featuresEnUsTitle,
          content: [
            'Plus (+) and minus (-) buttons that change the time by 5 minutes',
            'Play/Pause and Stop buttons to control playback',
            {
              title: '4 ambient sound options',
              content: ['Forest', 'Rain', 'Coffee shop', 'Fire'],
            },
            'Light and dark theme',
          ],
        },
        {
          title: conceptsDevelopedEnUsTitle,
          content: [
            'Transition from light to dark theme',
            'CSS :not',
            'ES6 Modules',
            'DOM manipulation with JavaScript',
          ],
        },
      ],
    },
  ],
}
