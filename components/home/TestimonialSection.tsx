import { Quote } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TESTIMONIALS } from '@/lib/content'

/** Three-column social proof. Quotes are placeholders pending real customers. */
export function TestimonialSection() {
  return (
    <Section background="navy" aria-labelledby="testimonials-heading">
      <SectionHeading
        eyebrow="Social proof"
        title={<span id="testimonials-heading">Loved by restaurant teams</span>}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col gap-5 rounded-xl bg-primary-panel p-8 shadow-md"
          >
            <Quote className="h-8 w-8 text-accent-sky/50" aria-hidden="true" />
            <blockquote className="text-body-md text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-deep font-display text-body-md font-bold text-accent-sky"
              >
                {t.initials}
              </span>
              <span className="flex flex-col">
                <span className="text-body-sm font-semibold text-ink">{t.name}</span>
                <span className="text-body-xs text-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
