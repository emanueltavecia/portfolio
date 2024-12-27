export enum ProjectType {
  WEB = 'WEB',
  MOBILE = 'MOBILE',
  DESKTOP = 'DESKTOP',
}

export enum ProjectSource {
  UNIVERSITY = 'UNIVERSITY',
  FREELANCE = 'FREELANCE',
  PERSONAL = 'PERSONAL',
}

export const projects = [
  {
    name: 'uFitt',
    repo_name: 'ufitt',
    deploy: 'https://ufitt.vercel.app/',
    id: 6,
    type: [ProjectType.WEB],
    source: ProjectSource.UNIVERSITY,
  },
  {
    name: 'Notes App',
    repo_name: 'nlw-notes',
    deploy: 'https://notes-nlw-app.vercel.app/',
    id: 5,
    type: [ProjectType.WEB],
    source: ProjectSource.PERSONAL,
  },
  {
    name: 'Twitter UI',
    repo_name: 'twitter-ui',
    deploy: 'https://twitter-ui-app.vercel.app/',
    id: 4,
    type: [ProjectType.WEB],
    source: ProjectSource.PERSONAL,
  },
  {
    name: 'Notesify',
    repo_name: 'notesify-web',
    deploy: 'https://notesify-web.netlify.app/',
    id: 3,
    type: [ProjectType.WEB],
    source: ProjectSource.PERSONAL,
  },
  {
    name: 'GitFav',
    repo_name: 'gitfav',
    deploy: 'https://emanueltavecia.github.io/gitfav',
    id: 2,
    type: [ProjectType.WEB],
    source: ProjectSource.PERSONAL,
  },
  {
    name: 'FocusTimer v2.0',
    repo_name: 'focustimer-v2.0',
    deploy: 'https://emanueltavecia.github.io/focustimer-v2.0',
    id: 1,
    type: [ProjectType.WEB],
    source: ProjectSource.PERSONAL,
  },
]
