import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { CTASection } from '@/components/ui/CTASection'
import { FeatureDetail } from '@/components/features/FeatureDetail'
import { FEATURES } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Scheduling, inventory & par, recipes & prep, and compliance — every ResCommand feature was designed by restaurant operators for restaurant operators.',
  alternates: { canonical: '/features' },
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Built for the Chaos You Know"
        subtitle="Every feature designed by restaurant operators for restaurant operators."
      />

      <Section background="navy">
        <div className="flex flex-col gap-20 lg:gap-28">
          {FEATURES.map((feature, index) => (
            <FeatureDetail key={feature.slug} feature={feature} reverse={index % 2 === 1} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to see it in action?"
        copy="Book a 20-minute demo and we'll walk you through the features that matter most to your operation."
      />
    </>
  )
}
