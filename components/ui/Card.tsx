import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  /** Adds a hover-lift + sky border treatment for interactive cards. */
  interactive?: boolean
  children: ReactNode
}

/** Base panel card. Set `interactive` for grid/feature cards that lift on hover. */
export function Card({ className, interactive = false, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-primary-panel p-8 shadow-md',
        interactive &&
          'border border-transparent transition duration-300 ease-default hover:-translate-y-1 hover:border-accent-sky hover:shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  )
}
