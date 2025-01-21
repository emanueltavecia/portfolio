import { Locales } from '@/locales'

import {
  FilterOption,
  ProjectComplexity,
  ProjectSource,
  ProjectType,
  ProjectVisibility,
} from './types'

export function getSourceLabel(value: ProjectSource, locale: Locales): string {
  switch (locale) {
    case Locales.PT_BR:
      switch (value) {
        case ProjectSource.PERSONAL:
          return 'Pessoal'
        case ProjectSource.UNIVERSITY:
          return 'Universidade'
        case ProjectSource.FREELANCE:
          return 'Freelance'
      }
      break

    case Locales.EN_US:
      switch (value) {
        case ProjectSource.PERSONAL:
          return 'Personal'
        case ProjectSource.UNIVERSITY:
          return 'University'
        case ProjectSource.FREELANCE:
          return 'Freelance'
      }
  }
}

export function getVisibilityLabel(
  value: ProjectVisibility,
  locale: Locales,
): string {
  switch (locale) {
    case Locales.PT_BR:
      switch (value) {
        case ProjectVisibility.PUBLIC:
          return 'Público'
        case ProjectVisibility.PRIVATE:
          return 'Privado'
      }
      break

    case Locales.EN_US:
      switch (value) {
        case ProjectVisibility.PUBLIC:
          return 'Public'
        case ProjectVisibility.PRIVATE:
          return 'Private'
      }
  }
}

export function getComplexityLabel(
  value: ProjectComplexity,
  locale: Locales,
): string {
  switch (locale) {
    case Locales.PT_BR:
      switch (value) {
        case ProjectComplexity.LOW:
          return 'Baixa'
        case ProjectComplexity.MEDIUM:
          return 'Média'
        case ProjectComplexity.HIGH:
          return 'Alta'
      }
      break

    case Locales.EN_US:
      switch (value) {
        case ProjectComplexity.LOW:
          return 'Low'
        case ProjectComplexity.MEDIUM:
          return 'Medium'
        case ProjectComplexity.HIGH:
          return 'High'
      }
  }
}

export const typeOptions = Object.values(ProjectType).map((type) => ({
  label: type,
  value: type,
}))

export const sourceOptions = (locale: Locales) =>
  Object.values(ProjectSource).map((source) => ({
    label: getSourceLabel(source, locale),
    value: source,
  }))

export const visibilityOptions = (locale: Locales) =>
  Object.values(ProjectVisibility).map((visibility) => ({
    label: getVisibilityLabel(visibility, locale),
    value: visibility,
  }))

export const complexityOptions = (locale: Locales) =>
  Object.values(ProjectComplexity).map((complexity) => ({
    label: getComplexityLabel(complexity, locale),
    value: complexity,
  }))

export const filtersOptions: Record<Locales, FilterOption[]> = {
  [Locales.PT_BR]: [
    {
      id: 'type',
      options: typeOptions,
      placeholder: 'Tipo',
      allDescription: 'Todos os tipos',
      allSelectedDescription: 'Todos os tipos selecionados',
    },
    {
      id: 'source',
      options: sourceOptions(Locales.PT_BR),
      placeholder: 'Origem',
      allDescription: 'Todas as origens',
      allSelectedDescription: 'Todas as origens selecionadas',
    },
    {
      id: 'visibility',
      options: visibilityOptions(Locales.PT_BR),
      placeholder: 'Visibilidade',
      allDescription: 'Todas as visibilidades',
      allSelectedDescription: 'Todas as visibilidades selecionadas',
    },
    {
      id: 'complexity',
      options: complexityOptions(Locales.PT_BR),
      placeholder: 'Complexidade',
      allDescription: 'Todas as complexidades',
      allSelectedDescription: 'Todas as complexidades selecionadas',
    },
  ],

  [Locales.EN_US]: [
    {
      id: 'type',
      options: typeOptions,
      placeholder: 'Type',
      allDescription: 'All types',
      allSelectedDescription: 'All types selected',
    },
    {
      id: 'source',
      options: sourceOptions(Locales.EN_US),
      placeholder: 'Source',
      allDescription: 'All sources',
      allSelectedDescription: 'All sources selected',
    },
    {
      id: 'visibility',
      options: visibilityOptions(Locales.EN_US),
      placeholder: 'Visibility',
      allDescription: 'All visibilities',
      allSelectedDescription: 'All visibilities selected',
    },
    {
      id: 'complexity',
      options: complexityOptions(Locales.EN_US),
      placeholder: 'Complexity',
      allDescription: 'All complexities',
      allSelectedDescription: 'All complexities selected',
    },
  ],
}
