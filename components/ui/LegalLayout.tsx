import type { ReactNode } from 'react'
import { PageHero } from './PageHero'
import { Container } from './Container'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

/** Shared wrapper for Privacy / Terms — narrow, readable legal prose. */
export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={`Last updated: ${lastUpdated}`} />
      <div className="bg-primary-navy py-16">
        <Container>
          <div className="prose-rescommand mx-auto max-w-prose">
            <p className="text-body-sm text-muted">
              This is placeholder legal text provided for layout purposes. Replace it with your
              finalized policy, reviewed by qualified counsel, before launch.
            </p>
            {children}
          </div>
        </Container>
      </div>
    </>
  )
}
