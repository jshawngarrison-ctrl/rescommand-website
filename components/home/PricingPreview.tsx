import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { PricingCard } from '@/components/pricing/PricingCard'
import { PRICING_TIERS } from '@/lib/content'

/** Homepage pricing teaser: two tiers + link to the full pricing page. */
export function PricingPreview() {
  return (
    <Section background="deep" aria-labelledby="pricing-preview-heading">
      <SectionHeading
        eyebrow="Pricing"
        title={<span id="pricing-preview-heading">Simple, Honest Pricing</span>}
        subtitle="No surprise fees. Pay for what you use."
      />
      <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
        {PRICING_TIERS.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/pricing" variant="link">
          See full pricing
        </Button>
      </div>
    </Section>
  )
}
