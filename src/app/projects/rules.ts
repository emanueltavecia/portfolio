import {
  FilterState,
  ProjectComplexity,
  ProjectSource,
  ProjectType,
  ProjectVisibility,
} from './types'

export const filtersInitialState: FilterState = {
  type: [],
  source: [],
  visibility: [],
  complexity: [],
}

export function getSourceLabel(value: ProjectSource): string {
  switch (value) {
    case ProjectSource.PERSONAL:
      return 'Pessoal'
    case ProjectSource.UNIVERSITY:
      return 'Universidade'
    case ProjectSource.FREELANCE:
      return 'Freelance'
  }
}

export function getVisibilityLabel(value: ProjectVisibility): string {
  switch (value) {
    case ProjectVisibility.PUBLIC:
      return 'Público'
    case ProjectVisibility.PRIVATE:
      return 'Privado'
  }
}

export function getComplexityLabel(value: ProjectComplexity): string {
  switch (value) {
    case ProjectComplexity.LOW:
      return 'Baixa'
    case ProjectComplexity.MEDIUM:
      return 'Média'
    case ProjectComplexity.HIGH:
      return 'Alta'
  }
}

export const typeOptions = Object.values(ProjectType).map((type) => ({
  label: type,
  value: type,
}))

export const sourceOptions = Object.values(ProjectSource).map((source) => ({
  label: getSourceLabel(source),
  value: source,
}))

export const visibilityOptions = Object.values(ProjectVisibility).map(
  (visibility) => ({
    label: getVisibilityLabel(visibility),
    value: visibility,
  }),
)

export const complexityOptions = Object.values(ProjectComplexity).map(
  (complexity) => ({
    label: getComplexityLabel(complexity),
    value: complexity,
  }),
)
