import { z } from 'zod'

import { schema } from './rules'

export type ContactFormData = z.infer<ReturnType<typeof schema>>
