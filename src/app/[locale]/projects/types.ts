import { Techs } from '@/data/tech-stack'
import { StaticImageData } from 'next/image'

export enum ProjectType {
  FRONTEND = 'Front-end',
  BACKEND = 'Back-end',
  MOBILE = 'Mobile',
  DESKTOP = 'Desktop',
}

export enum ProjectSource {
  PERSONAL = 'PERSONAL',
  UNIVERSITY = 'UNIVERSITY',
  FREELANCE = 'FREELANCE',
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
  screenshot?: StaticImageData
  videoOverview?: string
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

export interface FilterState {
  type: string[]
  source: string[]
  visibility: string[]
  complexity: string[]
}

export interface FilterOption {
  id: keyof FilterState
  options: { value: string; label: string }[]
  placeholder: string
  allDescription: string
  allSelectedDescription: string
}
