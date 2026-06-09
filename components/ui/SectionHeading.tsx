import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  titleClassName?: string
}

/** Reusable eyebrow + headline + subhead block used across page sections. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as: Heading = 'h2',
  className,
  titleClassName,
}: SectionHeadingProps) {
  const sizes = {
    h1: 'text-display-sm sm:text-display-md lg:text-display-lg',
    h2: 'text-heading-md sm:text-display-sm',
    h3: 'text-heading-sm sm:text-heading-md',
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center mx-auto max-w-3xl' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-body-sm font-semibold uppercase tracking-[0.18em] text-accent-sky">
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn('font-display font-bold leading-tight text-balance', sizes[Heading], titleClassName)}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className={cn('text-body-lg text-muted', align === 'center' && 'max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
