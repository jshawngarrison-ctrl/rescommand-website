import { Section } from './Section'
import { Button } from './Button'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  title: string
  copy?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  background?: 'navy' | 'panel' | 'deep'
}

/** Reusable closing call-to-action band used at the foot of most pages. */
export function CTASection({
  title,
  copy,
  primaryLabel = 'Book a Demo',
  primaryHref = '/demo',
  secondaryLabel,
  secondaryHref,
  background = 'deep',
}: CTASectionProps) {
  return (
    <Section background={background}>
      <div
        className={cn(
          'relative overflow-hidden rounded-xl border border-accent-sky/20 bg-primary-panel bg-grid px-6 py-12 text-center sm:px-12 sm:py-16',
        )}
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="font-display text-heading-md font-bold text-balance sm:text-display-sm">
            {title}
          </h2>
          {copy && <p className="text-body-lg text-muted">{copy}</p>}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="link">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
