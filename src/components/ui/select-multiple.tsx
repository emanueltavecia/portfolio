'use client'

import { useState, useMemo, useEffect } from 'react'
import { Check, ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface Option {
  value: string
  label: string
}

interface SelectMultipleProps {
  options: Option[]
  selected: string[] | undefined
  onSelect: (value: string[]) => void
  setIsAllSelected?: (isAllSelected: boolean) => void
  multiple?: boolean
  useAll?: boolean
  allDescription?: string
  allSelectedDescription?: string
  searchPlaceholder?: string
  emptyMessage?: string
  placeholder: string
  allowNoSelection?: boolean
}

export function SelectMultiple({
  options,
  selected,
  onSelect,
  setIsAllSelected,
  multiple = false,
  useAll = false,
  allDescription = 'Select All',
  allSelectedDescription,
  searchPlaceholder,
  emptyMessage = 'No options found',
  placeholder = 'Select...',
  allowNoSelection = true,
}: SelectMultipleProps) {
  const [open, setOpen] = useState(false)

  const isAllSelected: boolean = useMemo(() => {
    return (
      selected?.length === options.length ||
      selected?.some((selected) => selected === 'ALL') ||
      false
    )
  }, [selected, options])

  useEffect(() => {
    if (setIsAllSelected) {
      setIsAllSelected(isAllSelected)
    }
  }, [isAllSelected, setIsAllSelected])

  const handleSelect = (value: string) => {
    if (!multiple) {
      onSelect([value])
      setOpen(false)
      return
    }

    if (value === 'ALL') {
      if (isAllSelected) {
        onSelect([])
      } else {
        onSelect(options.map((opt) => opt.value))
      }
    } else {
      const isSelected = selected?.includes(value)
      const newSelected = isSelected
        ? selected?.filter((item) => item !== value)
        : [...(selected || []), value]

      if (!allowNoSelection && newSelected?.length === 0) {
        onSelect(options.map((opt) => opt.value))
      } else {
        onSelect(newSelected || [])
      }
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm font-normal shadow-sm ring-offset-white focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:ring-offset-gray-950 dark:hover:bg-gray-900/50 dark:focus:ring-gray-300 [&>span]:line-clamp-1',
            !selected?.length &&
              'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
          )}
        >
          {isAllSelected && allSelectedDescription
            ? allSelectedDescription
            : selected?.length
              ? options
                  .filter((option) => selected?.includes(option.value))
                  .map((opt) => opt.label)
                  .join(', ')
              : placeholder}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          {searchPlaceholder && (
            <CommandInput placeholder={searchPlaceholder} />
          )}
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {useAll && (
                <CommandItem
                  value="ALL"
                  onSelect={() => handleSelect('ALL')}
                  className="justify-between"
                >
                  {allDescription}
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      isAllSelected ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              )}

              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSelect(option.value)}
                  className="justify-between"
                >
                  {option.label}
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selected?.includes(option.value)
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
