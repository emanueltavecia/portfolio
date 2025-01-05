'use client'
import { useState } from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'
import {
  Building2,
  Calendar,
  Clock,
  ExternalLink,
  FileText,
  Hash,
  QrCode,
} from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

import { CertificatePdfDialogViewer } from '@/components/certificate-pdf-dialog-viewer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { education } from '@/data/education'
import { Locales } from '@/locales'
import { useScrollToTopOnPageLoad } from '@/utils/scroll-to-top'

export default function Education() {
  const locale = useLocale() as Locales
  const t = useTranslations('Education')
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null,
  )

  useScrollToTopOnPageLoad()

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 flex min-h-[75vh] flex-col gap-10 px-5"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>

        <div className="relative flex flex-col gap-8">
          {education[locale].map((edu, i) => (
            <Card
              key={edu.institution}
              className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                i === 0
                  ? 'shadow-lg dark:bg-gray-900/90'
                  : 'dark:bg-gray-900/50'
              }`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex items-center justify-between gap-4 sm:items-start">
                    <div className="h-9 max-w-52">
                      <Image
                        src={edu.logo}
                        alt={t('institutionLogoAlt', {
                          institutionName: edu.institution,
                        })}
                        className="object-contain object-left brightness-[0.2] dark:brightness-100"
                        fill
                        priority
                        fetchPriority="high"
                        style={{ position: '' as never }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30"
                      >
                        {edu.courseType}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
                      {edu.course}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2.5 text-sm text-gray-600 dark:text-gray-400 md:gap-3 md:text-base">
                    <div className="flex items-center gap-2">
                      <Building2 className="size-4 shrink-0 md:size-5" />
                      <span>{edu.institution}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="size-4 shrink-0 md:size-5" />
                      <span>
                        {edu.date.start} - {edu.date.end}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="size-4 shrink-0 md:size-5" />
                      <span>
                        {t('workload', {
                          hours: edu.workload,
                        })}
                      </span>
                    </div>

                    {edu.certificate && (
                      <>
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4 shrink-0 md:size-5" />
                          <span>
                            {t('issueDate', {
                              date: edu.certificate.issueDate,
                            })}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <QrCode className="size-4 shrink-0 md:size-5" />
                          <span>
                            {t('verificationCode')}:{' '}
                            {edu.certificate.verificationCode}
                          </span>
                        </div>

                        {edu.certificate.registrationNumber && (
                          <div className="flex items-center gap-2">
                            <Hash className="size-4 shrink-0 md:size-5" />
                            <span>
                              {t('registrationNumber')}:{' '}
                              {edu.certificate.registrationNumber}
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {edu.certificate && (
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() =>
                          setSelectedCertificate(
                            edu.certificate?.pdfUrl || null,
                          )
                        }
                      >
                        <FileText className="size-4" />
                        {t('viewCertificate')}
                      </Button>
                      <Button variant="outline" className="gap-2" asChild>
                        <a
                          href={edu.certificate.verifierUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="size-4" />
                          {t('verifyCertificate')}
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.main>
      <CertificatePdfDialogViewer
        selectedCertificate={selectedCertificate}
        setSelectedCertificate={setSelectedCertificate}
      />
    </>
  )
}
