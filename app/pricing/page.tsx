import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/ui/CTASection'
import { PricingCard } from '@/components/pricing/PricingCard'
import { PricingComparison } from '@/components/pricing/PricingComparison'
import { Accordion } from '@/components/ui/Accordion'
import { FaqJsonLd } from '@/components/seo/JsonLd'
import { PRICING_TIERS, PRICING_FAQ } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Pricing that grows with you. No setup fees, no contracts, cancel anytime. Core at $99/mo, Operator at $199/mo. Try ResCommand free for 14 days.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return (
    <>
      <FaqJsonLd items={PRICING_FAQ} />

      <PageHero
        eyebrow="Pricing"
        title="Pricing That Grows With You"
        subtitle="No setup fees. No contracts. Cancel anytime."
      />

      <Section background="navy">
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </Section>

      <Section background="deep" aria-labelledby="compare-heading">
        <SectionHeading title={<span id="compare-heading">Compare Plans</span>} />
        <div className="mx-auto mt-10 max-w-3xl">
          <PricingComparison />
        </div>
      </Section>

      <Section background="navy" aria-labelledby="pricing-faq-heading">
        <SectionHeading
          title={<span id="pricing-faq-heading">Questions?</span>}
          subtitle={
            <>
              Short answers below. Need more detail?{' '}
              <a href="/help" className="text-accent-sky hover:text-accent-bright">
                Visit the Help Center
              </a>
              .
            </>
          }
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion items={PRICING_FAQ} />
        </div>
      </Section>

      <CTASection
        title="Start Today. No Credit Card Required."
        copy="Try ResCommand free for 14 days."
        primaryLabel="Start Your Free Trial"
      />
    </>
  )
}
