'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AccordionItemData {
  question: string
  answer: React.ReactNode
}

interface AccordionProps {
  items: AccordionItemData[]
  className?: string
  /** Allow multiple panels open at once. Default: single-open. */
  allowMultiple?: boolean
}

/** Accessible disclosure list for FAQs and help sections. */
export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [open, setOpen] = useState<number[]>([])
  const baseId = useId()

  function toggle(index: number) {
    setOpen((prev) => {
      const isOpen = prev.includes(index)
      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index]
      }
      return isOpen ? [] : [index]
    })
  }

  return (
    <div className={cn('divide-y divide-muted/15 rounded-xl bg-primary-panel', className)}>
      {items.map((item, index) => {
        const isOpen = open.includes(index)
        const buttonId = `${baseId}-button-${index}`
        const panelId = `${baseId}-panel-${index}`
        return (
          <div key={index}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-body-lg font-semibold text-ink transition-colors duration-300 hover:text-accent-sky"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 flex-shrink-0 text-accent-sky transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-6 text-body-md leading-relaxed text-muted"
            >
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
