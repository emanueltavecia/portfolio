import { Formats, TranslationValues } from 'next-intl'
import { z } from 'zod'

import { ContactFormData } from './types'

export const contactFormDefaultValues: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const schema = (t: {
  <TargetKey>(
    key: TargetKey,
    values?: TranslationValues,
    formats?: Formats,
  ): string
}) =>
  z.object({
    name: z.string().min(1, t('nameRequiredValidationError')),
    email: z
      .string()
      .min(1, t('emailRequiredValidationError'))
      .email(t('emailInvalidValidationError')),
    subject: z.string().min(1, t('subjectRequiredValidationError')),
    message: z
      .string()
      .min(1, t('messageRequiredValidationError'))
      .min(10, t('messageMinLengthValidationError')),
  })
