import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

/** Split layout: "Built by operators, for operators" with a Duffers image slot. */
export function SolutionSection() {
  return (
    <Section background="navy" aria-labelledby="solution-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="text-body-sm font-semibold uppercase tracking-[0.18em] text-accent-sky">
            Why ResCommand
          </span>
          <h2
            id="solution-heading"
            className="font-display text-heading-md font-bold text-balance sm:text-display-sm"
          >
            Built by operators, for operators
          </h2>
          <p className="text-body-lg text-muted">
            ResCommand is built on real restaurant challenges. We started with Duffers Donuts — a
            scratch-made donut shop in Charleston. Every feature comes from &ldquo;we need this to
            survive.&rdquo; It&rsquo;s not feature-bloated enterprise software. It&rsquo;s the exact
            tools a small team actually uses.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-semibold text-accent-sky transition-colors hover:text-accent-bright"
          >
            Read how Duffers uses ResCommand
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ImagePlaceholder label="Duffers Donuts operation" ratio="4/3" />
      </div>
    </Section>
  )
}
