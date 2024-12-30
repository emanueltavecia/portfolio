import {
  FilterOption,
  ProjectComplexity,
  ProjectSource,
  ProjectType,
  ProjectVisibility,
} from './types'

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

export const filtersOptions: FilterOption[] = [
  {
    id: 'type',
    options: typeOptions,
    placeholder: 'Tipo',
    allDescription: 'Todos os tipos',
    allSelectedDescription: 'Todos os tipos selecionados',
  },
  {
    id: 'source',
    options: sourceOptions,
    placeholder: 'Origem',
    allDescription: 'Todas as origens',
    allSelectedDescription: 'Todas as origens selecionadas',
  },
  {
    id: 'visibility',
    options: visibilityOptions,
    placeholder: 'Visibilidade',
    allDescription: 'Todas as visibilidades',
    allSelectedDescription: 'Todas as visibilidades selecionadas',
  },
  {
    id: 'complexity',
    options: complexityOptions,
    placeholder: 'Complexidade',
    allDescription: 'Todas as complexidades',
    allSelectedDescription: 'Todas as complexidades selecionadas',
  },
]
