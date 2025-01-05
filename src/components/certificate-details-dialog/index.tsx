import { Dispatch, SetStateAction } from 'react'

import { motion } from 'framer-motion'
import { Calendar, ExternalLink, Hash, QrCode } from 'lucide-react'
import { useTranslations } from 'use-intl'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Certificate } from '@/data/certificates'

interface CertificateDetailsDialogProps {
  selectedCertificate: Partial<Certificate> | undefined
  setSelectedCertificate: Dispatch<
    SetStateAction<Partial<Certificate> | undefined>
  >
}

export function CertificateDetailsDialog({
  selectedCertificate,
  setSelectedCertificate,
}: CertificateDetailsDialogProps) {
  const t = useTranslations('CertificateDetailsDialog')

  return (
    <Dialog
      open={!!selectedCertificate}
      onOpenChange={() => setSelectedCertificate(undefined)}
    >
      <DialogContent className="max-h-[95vh] max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <DialogHeader>
            <DialogTitle className="text-left text-3xl">
              {t('title', {
                name: selectedCertificate?.course,
                type: selectedCertificate?.courseType,
              })}
            </DialogTitle>
          </DialogHeader>

          {selectedCertificate && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5 text-sm text-gray-600 dark:text-gray-400 md:gap-3 md:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 shrink-0 md:size-5" />
                  <span>
                    {t('issueDate', {
                      date: selectedCertificate?.issueDate,
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <QrCode className="size-4 shrink-0 md:size-5" />
                  <span>
                    {t('verificationCode')}:{' '}
                    {selectedCertificate?.verificationCode}
                  </span>
                </div>

                {selectedCertificate?.registrationNumber && (
                  <div className="flex items-center gap-2">
                    <Hash className="size-4 shrink-0 md:size-5" />
                    <span>
                      {t('registrationNumber')}:{' '}
                      {selectedCertificate?.registrationNumber}
                    </span>
                  </div>
                )}
              </div>

              <Button variant="outline" className="gap-2 self-start" asChild>
                <a
                  href={selectedCertificate?.verifierUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-4" />
                  {t('verifyCertificate')}
                </a>
              </Button>

              <div
                style={{
                  height: `calc(60vh${selectedCertificate?.verifierUrl ? ' - 60px' : ''}${selectedCertificate?.registrationNumber ? ' - 36px' : ''})`,
                }}
              >
                <iframe
                  className="h-full w-full rounded-lg"
                  src={selectedCertificate?.pdfUrl}
                />
              </div>
            </div>
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
