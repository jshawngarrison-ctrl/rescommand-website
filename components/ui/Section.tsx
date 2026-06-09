import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

type Background = 'navy' | 'panel' | 'deep'

const backgrounds: Record<Background, string> = {
  navy: 'bg-primary-navy',
  panel: 'bg-primary-panel',
  deep: 'bg-primary-deep',
}

interface SectionProps {
  background?: Background
  className?: string
  containerClassName?: string
  /** When false, children are rendered without the inner Container wrapper. */
  contained?: boolean
  id?: string
  children: ReactNode
  'aria-labelledby'?: string
}

/** Full-width vertical section with consistent rhythm + optional container. */
export function Section({
  background = 'navy',
  className,
  containerClassName,
  contained = true,
  id,
  children,
  ...rest
}: SectionProps) {
  return (
    <section id={id} className={cn('section', backgrounds[background], className)} {...rest}>
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  )
}
