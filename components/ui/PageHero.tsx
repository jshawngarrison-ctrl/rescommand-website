import type { ReactNode } from 'react'
import { Container } from './Container'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}

/** Compact inner-page hero band with consistent styling. */
export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-muted/10 bg-primary-navy">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="flex max-w-3xl flex-col gap-5">
          {eyebrow && (
            <span className="text-body-sm font-semibold uppercase tracking-[0.18em] text-accent-sky">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-display-sm font-bold leading-tight text-balance sm:text-display-md">
            {title}
          </h1>
          {subtitle && <p className="text-body-lg text-muted">{subtitle}</p>}
          {children}
        </div>
      </Container>
    </section>
  )
}
