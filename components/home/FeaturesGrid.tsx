import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { FEATURES } from '@/lib/content'

/** "One App. Everything You Need." — four core feature cards with hover lift. */
export function FeaturesGrid() {
  return (
    <Section background="navy" aria-labelledby="features-heading">
      <SectionHeading
        eyebrow="The solution"
        title={<span id="features-heading">One App. Everything You Need.</span>}
        subtitle="No more scattered tools. No more chaos."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, short, slug }) => (
          <Link
            key={slug}
            href={`/features#${slug}`}
            className="group flex flex-col gap-4 rounded-xl border border-transparent bg-primary-panel p-6 shadow-md transition duration-300 ease-default hover:-translate-y-1 hover:border-accent-sky hover:shadow-sky-sm"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-deep text-accent-sky transition-colors group-hover:bg-accent-sky group-hover:text-primary-navy">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="font-display text-heading-xs font-semibold text-ink">{title}</h3>
            <p className="text-body-sm text-muted">{short}</p>
            <span className="mt-auto inline-flex items-center gap-1 text-body-sm font-semibold text-accent-sky">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/features" variant="secondary">
          Explore all features
        </Button>
      </div>
    </Section>
  )
}
