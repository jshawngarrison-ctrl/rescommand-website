import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/ui/CTASection'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'About',
  description:
    'ResCommand came from real restaurant chaos at Duffers Donuts in Charleston. Built by operators, for operators — simple, priced for reality, and built to last.',
  alternates: { canonical: '/about' },
}

const STATS = [
  { value: '1', label: 'donut shop' },
  { value: '4+', label: 'operations challenges solved' },
  { value: '0', label: 'enterprise bloat' },
  { value: '∞', label: 'sanity preserved' },
]

const PHILOSOPHY = [
  {
    title: 'Simple Doesn’t Mean Stupid',
    copy: 'Small restaurants have the same compliance and operational rigor as big chains. We just don’t have the staff to run five different tools. Everything in ResCommand is built for focus: do one thing, do it right.',
  },
  {
    title: 'Priced for Reality',
    copy: 'Enterprise software costs enterprise money. We price for a team of 5–50, not 500. You should never need a payment plan to manage your restaurant better.',
  },
  {
    title: 'Built to Last',
    copy: 'We don’t chase hype features. We improve what matters: reliability, speed, and supporting the way you actually work.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built by Operators, for Operators"
        subtitle="ResCommand came from real restaurant chaos."
      />

      {/* Origin story */}
      <Section background="navy" aria-labelledby="origin-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 id="origin-heading" className="font-display text-heading-md font-bold text-ink sm:text-display-sm">
              The Origin Story
            </h2>
            <p className="text-body-md text-muted">
              ResCommand wasn&rsquo;t born from a boardroom. It came from Duffers Donuts — a
              scratch-made donut shop in Charleston, South Carolina.
            </p>
            <p className="text-body-md text-muted">
              Catherine Williamson, our head baker, was juggling recipes in notebooks. The team was
              scattered across text messages. Prep schedules were printed yesterday, now outdated. We
              watched the chaos and decided: there has to be a better way.
            </p>
            <p className="text-body-md text-muted">
              We built ResCommand as the operating system our restaurant needed. Every feature
              answered a real question: &ldquo;How do we stop the bleeding here?&rdquo; Not features
              we thought restaurants should want. Features restaurants are already trying to use in
              ten different tools.
            </p>

            <dl className="mt-4 grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-accent-sky/30 bg-primary-panel p-5"
                >
                  <dt className="font-display text-display-sm font-bold text-accent-sky">{stat.value}</dt>
                  <dd className="mt-1 text-body-sm text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ImagePlaceholder label="Duffers Donuts kitchen / team" ratio="4/5" />
        </div>
      </Section>

      {/* Philosophy */}
      <Section background="deep" aria-labelledby="philosophy-heading">
        <SectionHeading title={<span id="philosophy-heading">Why We Do This</span>} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PHILOSOPHY.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 rounded-xl bg-primary-panel p-8 shadow-md">
              <h3 className="font-display text-heading-xs font-semibold text-ink">{item.title}</h3>
              <p className="text-body-md text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team placeholder */}
      <Section background="navy" aria-labelledby="team-heading">
        <SectionHeading
          title={<span id="team-heading">The Team</span>}
          subtitle="Operators, builders, and a few very serious donut tasters. Full team bios coming soon."
        />
      </Section>

      <CTASection title="Ready to Stop the Chaos?" background="deep" />
    </>
  )
}
