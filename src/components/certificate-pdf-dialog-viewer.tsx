import { Dispatch, SetStateAction } from 'react'

import { DialogTitle } from '@radix-ui/react-dialog'
import { useTranslations } from 'use-intl'

import { Dialog, DialogContent, DialogHeader } from './ui/dialog'

interface CertificatePdfDialogViewerProps {
  selectedCertificate: string | null
  setSelectedCertificate: Dispatch<SetStateAction<string | null>>
}

export function CertificatePdfDialogViewer({
  selectedCertificate,
  setSelectedCertificate,
}: CertificatePdfDialogViewerProps) {
  const t = useTranslations('Education')

  return (
    <Dialog
      open={!!selectedCertificate}
      onOpenChange={() => setSelectedCertificate(null)}
    >
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{t('certificateTitle')}</DialogTitle>
        </DialogHeader>
        <div className="h-[70vh]">
          {selectedCertificate && (
            <iframe
              className="h-full w-full rounded-lg"
              src={selectedCertificate}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
