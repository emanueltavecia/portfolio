import { Techs } from '@/data/tech-stack'

export enum ProjectType {
  FRONTEND = 'Front-end',
  BACKEND = 'Back-end',
  MOBILE = 'Mobile',
  DESKTOP = 'Desktop',
}

export enum ProjectSource {
  UNIVERSITY = 'UNIVERSITY',
  FREELANCE = 'FREELANCE',
  PERSONAL = 'PERSONAL',
}

export enum ProjectVisibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export enum ProjectComplexity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export interface ProjectListItem {
  title?: string
  content: (string | ProjectListItem)[]
}

export interface Project {
  name: string
  repo_name?: string
  deploy?: string
  overviewVideo?: string
  id: number
  type: ProjectType[]
  source: ProjectSource
  visibility: ProjectVisibility
  complexity: ProjectComplexity
  isFeatured: boolean
  description: string[]
  techs: Techs[]
  listItems?: ProjectListItem[]
}
