import {
  Project,
  ProjectComplexity,
  ProjectSource,
  ProjectType,
  ProjectVisibility,
} from '@/app/projects/types'
import { Techs } from './tech-stack'
import project10Screenshot from '@/app/assets/project-10-screenshot.png'

export const projects: Project[] = [
  {
    name: 'Sistema Ponto de Caixa',
    id: 10,
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
        title: 'Funcionalidades',
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
        title: 'Conceitos aprendidos',
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
    id: 9,
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
        title: 'Funcionalidades',
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
        title: 'Conceitos aprendidos',
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
    overviewVideo: 'overview.mp4',
    id: 8,
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
        title: 'Funcionalidades',
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
        title: 'Conceitos aprendidos',
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
      'Este é um projeto universitário desenvolvido para a disciplina de Fundamentos Matemáticos do curso de Ciência da Computação',
    ],
    techs: [Techs.REACT, Techs.TYPESCRIPT, Techs.NEXT_JS, Techs.TAILWIND_CSS],
    listItems: [
      {
        title: 'Funcionalidades',
        content: [
          'Calcular o Gasto Energético Basal, a partir da altura, peso, idade e sexo do usuário',
          'Entender como o cálculo funciona',
        ],
      },
      {
        title: 'Conceitos aprendidos',
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
        title: 'Funcionalidades',
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
          'Visualização dos detalhes da prato',
          'Lista de ingredientes dos pratos',
          {
            title: 'Filtragem das notas por pesquisa',
            content: [
              'Pesquisa por nome do prato',
              'Pesquisa por nome do ingrediente',
            ],
          },
        ],
      },
      {
        title: 'Conceitos aprendidos',
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
        title: 'Funcionalidades',
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
        title: 'Conceitos aprendidos',
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
        title: 'Funcionalidades',
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
        title: 'Conceitos aprendidos',
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
        title: 'Funcionalidades',
        content: [
          'Adicionar novo tweet',
          'Acessar detalhes do tweet',
          'Responsividade',
        ],
      },
      {
        title: 'Conceitos aprendidos',
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
        title: 'Funcionalidades',
        content: [
          'Favoritar usuários do GitHub',
          'Salvamento dos favoritos no local storage',
          'Listagem dos favoritos exibindo a foto, nome, usuário, quantidade de repositórios e quantidade de seguidores',
          'Botão de remover favorito',
        ],
      },
      {
        title: 'Conceitos aprendidos',
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
        title: 'Funcionalidades',
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
        title: 'Conceitos aprendidos',
        content: [
          'Transição de tema claro para escuro',
          'CSS :not',
          'ES6 Modules',
          'Manipulação da DOM através do JavaScript',
        ],
      },
    ],
  },
]
