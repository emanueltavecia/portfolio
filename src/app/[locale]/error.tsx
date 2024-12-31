'use client'

import { useEffect } from 'react'

import { motion } from 'framer-motion'
import { Home, RotateCcw } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from '@/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[calc(100vh-96px)] items-center justify-center px-5"
    >
      <Card className="relative w-full max-w-2xl overflow-hidden border-blue-100 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-900/10">
        <div className="absolute -right-4 -top-4 h-60 w-60 animate-pulse rounded-full bg-blue-500/10 blur-3xl filter dark:bg-blue-500/5" />

        <div className="relative flex flex-col items-center gap-6 p-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-8xl font-bold text-blue-600 dark:text-blue-400">
              500
            </span>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              Erro interno
            </h1>
          </div>

          <p className="max-w-md text-gray-600 dark:text-gray-400">
            Desculpe, ocorreu um erro inesperado. Por favor, tente novamente em
            alguns instantes ou acesse a página inicial.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="gap-2 bg-gray-200/60 dark:bg-gray-900"
              onClick={reset}
              variant="outline"
            >
              <RotateCcw className="size-4" />
              Tentar novamente
            </Button>
            <Button
              className="gap-2 dark:bg-gray-100 hover:dark:bg-gray-300/80"
              onClick={() => router.push('/')}
            >
              <Home className="size-4" />
              Página inicial
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
