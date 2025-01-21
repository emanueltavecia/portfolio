'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'
import { Building2, Calendar, Clock, FileText } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

import { CertificateDetailsDialog } from '@/components/certificate-details-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Certificate, certificates } from '@/data/certificates'
import { Locales } from '@/locales'
import { useScrollToTopOnPageLoad } from '@/utils/scroll-to-top'

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Partial<Certificate>>()

  const locale = useLocale() as Locales
  const t = useTranslations('Certificates')

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates[locale].map((certificate) => (
            <Card
              key={certificate.id}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 dark:bg-gray-900/50"
            >
              <CardContent className="h-full p-6">
                <div className="flex h-full flex-col justify-between gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="secondary"
                        className="shrink-0 text-nowrap bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30"
                      >
                        {certificate.courseType}
                      </Badge>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t('course', {
                          name: certificate.course,
                          type: certificate.courseType,
                        })}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Building2 className="size-4 shrink-0" />
                        <span>{certificate.institution}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="size-4 shrink-0" />
                        <span>
                          {certificate.date.start &&
                            `${certificate.date.start} - `}
                          {certificate.date.end}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="size-4 shrink-0" />
                        <span>
                          {t('workload', {
                            hours: certificate.workload,
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      animatedSize="md"
                      className="w-full gap-2"
                      onClick={() => setSelectedCertificate(certificate)}
                    >
                      <FileText className="size-4" />
                      {t('viewDetails')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.main>

      <CertificateDetailsDialog
        selectedCertificate={selectedCertificate}
        setSelectedCertificate={setSelectedCertificate}
      />
    </>
  )
}
