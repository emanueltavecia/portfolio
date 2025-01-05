'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Check, Loader2, Send, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

import { contactFormDefaultValues, schema } from './rules'
import { ContactFormData } from './types'

export default function Contact() {
  const { toast } = useToast()
  const t = useTranslations('Contact')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema(t)),
    defaultValues: contactFormDefaultValues,
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        description: (
          <div className="flex items-center gap-3">
            <Check className="size-4 shrink-0 rounded-full bg-green-600 p-[3px] text-slate-100 dark:bg-slate-100 dark:text-slate-800" />
            <p className="flex flex-col">
              {t.rich('successMessage', {
                span: (chunks) => <span>{chunks}</span>,
              })}
            </p>
          </div>
        ),
      })

      reset()
    } catch (error) {
      console.error(error)

      toast({
        variant: 'destructive',
        description: (
          <div className="flex items-center gap-3">
            <X className="size-4 shrink-0 rounded-full bg-slate-100 p-[3px] text-red-500 dark:bg-slate-100 dark:text-slate-800" />
            <p className="flex flex-col">
              {t.rich('errorMessage', {
                span: (chunks) => <span>{chunks}</span>,
              })}
            </p>
          </div>
        ),
      })
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-10 flex flex-col gap-10 px-5"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
          {t('title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
      </div>

      <div className="w-full">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-4">
            <div className="w-full space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                {t('nameLabel')}
              </Label>
              <Input
                id="name"
                {...register('name')}
                className={cn(
                  'ring-offset-1 ring-offset-slate-100 transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-gray-600 dark:ring-offset-gray-900 dark:focus-visible:ring-slate-400',
                  errors.name &&
                    'border-red-500 ring-offset-0 focus-visible:ring-1 focus-visible:ring-red-500 dark:border-red-500 dark:focus-visible:ring-red-500',
                )}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="w-full space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                {t('emailLabel')}
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={cn(
                  'ring-offset-1 ring-offset-slate-100 transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-gray-600 dark:ring-offset-gray-900 dark:focus-visible:ring-slate-400',
                  errors.email &&
                    'border-red-500 ring-offset-0 focus-visible:ring-1 focus-visible:ring-red-500 dark:border-red-500 dark:focus-visible:ring-red-500',
                )}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">
              {t('subjectLabel')}
            </Label>
            <Input
              id="subject"
              {...register('subject')}
              className={cn(
                'ring-offset-1 ring-offset-slate-100 transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-gray-600 dark:ring-offset-gray-900 dark:focus-visible:ring-slate-400',
                errors.subject &&
                  'border-red-500 ring-offset-0 focus-visible:ring-1 focus-visible:ring-red-500 dark:border-red-500 dark:focus-visible:ring-red-500',
              )}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="text-sm text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              {t('messageLabel')}
            </Label>
            <Textarea
              id="message"
              {...register('message')}
              rows={5}
              className={cn(
                'min-h-[220px] resize-y ring-offset-1 ring-offset-slate-100 transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-gray-600 dark:ring-offset-gray-900 dark:focus-visible:ring-slate-400',
                errors.message &&
                  'border-red-500 ring-offset-0 focus-visible:ring-1 focus-visible:ring-red-500 dark:border-red-500 dark:focus-visible:ring-red-500',
              )}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gap-2 ring-offset-2 ring-offset-slate-50 transition-all duration-200 focus-visible:ring-2 dark:ring-offset-black"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
            {isSubmitting ? t('sending') : t('sendButtonText')}
          </Button>
        </form>
      </div>
    </motion.main>
  )
}
