import { motion } from 'framer-motion'
import { Eraser, FolderSearch } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EmptyStateProps {
  onClearFilters: () => void
}

export function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="col-span-3 flex min-h-[400px] w-full flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50/50 px-6 py-12 text-center dark:border-gray-700 dark:bg-gray-900/20"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-900">
          <FolderSearch className="size-8 text-gray-600 dark:text-gray-400" />
        </div>

        <div className="max-w-sm space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Nenhum projeto encontrado
          </h3>
        </div>

        <Button onClick={onClearFilters} variant="outline" className="mt-2">
          <Eraser />
          Limpar filtros
        </Button>
      </div>
    </motion.div>
  )
}
