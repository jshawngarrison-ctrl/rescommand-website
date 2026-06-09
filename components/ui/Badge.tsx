import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'sky' | 'success' | 'warning' | 'error' | 'muted'

const tones: Record<Tone, string> = {
  sky: 'bg-accent-sky text-primary-navy',
  success: 'bg-semantic-success text-white',
  warning: 'bg-semantic-warning text-white',
  error: 'bg-semantic-error text-white',
  muted: 'bg-primary-deep text-muted',
}

interface BadgeProps {
  tone?: Tone
  className?: string
  children: ReactNode
}

/** Small pill label for categories, tags, and status markers. */
export function Badge({ tone = 'sky', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-body-xs font-bold uppercase tracking-wider',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
