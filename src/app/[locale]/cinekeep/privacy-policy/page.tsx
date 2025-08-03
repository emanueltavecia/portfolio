'use client'

import { motion } from 'framer-motion'
import { Calendar, Mail } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cinekeepPrivacyPolicy } from '@/data/cinekeep-privacy-policy'
import { Locales } from '@/locales'
import { Link } from '@/navigation'
import { useScrollToTopOnPageLoad } from '@/utils/scroll-to-top'

export default function CinekeepPrivacyPolicy() {
  const locale = useLocale() as Locales
  const t = useTranslations('CinekeepPrivacyPolicy')

  const policyData = cinekeepPrivacyPolicy[locale]

  useScrollToTopOnPageLoad()

  const renderTextWithMarkdown = (text: string) => {
    const parts = text.split('**')
    const processed = parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
    )

    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const result: React.ReactNode[] = []

    processed.forEach((part, index) => {
      if (typeof part === 'string') {
        const linkParts = part.split(linkRegex)
        for (let i = 0; i < linkParts.length; i += 3) {
          if (linkParts[i]) {
            result.push(linkParts[i])
          }
          if (linkParts[i + 1] && linkParts[i + 2]) {
            result.push(
              <a
                key={`${index}-${i}`}
                href={linkParts[i + 2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {linkParts[i + 1]}
              </a>,
            )
          }
        }
      } else {
        result.push(part)
      }
    })

    return result
  }

  const renderContent = (
    content: (string | { subtitle?: string; content: string[] })[],
  ) => {
    return content.map((item, index) => {
      if (typeof item === 'string') {
        return (
          <p
            key={index}
            className="leading-relaxed text-gray-700 dark:text-gray-300"
          >
            {renderTextWithMarkdown(item)}
          </p>
        )
      } else {
        return (
          <div key={index} className="mb-4">
            {item.subtitle && (
              <h4 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                {item.subtitle}
              </h4>
            )}
            <ul className="ml-4 list-inside list-disc space-y-2">
              {item.content.map((listItem, listIndex) => (
                <li
                  key={listIndex}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {renderTextWithMarkdown(listItem)}
                </li>
              ))}
            </ul>
          </div>
        )
      }
    })
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto my-10 flex min-h-[75vh] max-w-4xl flex-col gap-10 px-5"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
            {t('title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>

        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {t('effectiveDateLabel')} {policyData.effectiveDate}
          </Badge>
        </div>
      </div>

      <Card className="border border-gray-200 dark:border-gray-800">
        <CardContent className="p-6">
          <div className="space-y-4">
            {policyData.introduction.map((paragraph, index) => (
              <p
                key={index}
                className="leading-relaxed text-gray-700 dark:text-gray-300"
              >
                {renderTextWithMarkdown(paragraph)}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {policyData.sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border border-gray-200 transition-shadow duration-300 hover:shadow-md dark:border-gray-800">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {renderContent(section.content)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border border-gray-200 bg-blue-50 dark:border-gray-800 dark:bg-blue-900/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-blue-600 dark:text-blue-400" />
            <div className="space-y-2">
              <Link
                href="/contact"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                {policyData.contact.email}
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>
                  {locale === Locales.PT_BR ? 'Nome do App:' : 'App Name:'}
                </strong>{' '}
                {policyData.contact.appName}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.main>
  )
}
