import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'
import { DemoForm } from '@/components/demo/DemoForm'
import { CalendlyEmbed } from '@/components/demo/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    "Book a 20-minute ResCommand demo with our team. No pressure — see whether it's the right fit for your restaurant.",
  alternates: { canonical: '/demo' },
}

export default function DemoPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
  const walkthroughId = process.env.NEXT_PUBLIC_YOUTUBE_WALKTHROUGH_ID

  return (
    <section className="bg-primary-navy py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-body-sm font-semibold uppercase tracking-[0.18em] text-accent-sky">
            Book a demo
          </span>
          <h1 className="mt-4 font-display text-display-sm font-bold leading-tight text-balance sm:text-display-md">
            Let&rsquo;s See If ResCommand is Right for You
          </h1>
          <p className="mt-4 text-body-lg text-muted">
            Book a 20-minute demo with our team. No pressure.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-5">
          {/* Booking — 60% */}
          <div className="lg:col-span-3">
            {calendlyUrl ? <CalendlyEmbed url={calendlyUrl} /> : <DemoForm />}
          </div>

          {/* Video intro — 40% */}
          <aside className="flex flex-col gap-5 lg:col-span-2 lg:pt-2">
            <div>
              <h2 className="font-display text-heading-sm font-bold text-ink">See It in Action First</h2>
              <p className="mt-2 text-body-md text-muted">2-minute product walkthrough.</p>
            </div>
            <YouTubeEmbed
              videoId={walkthroughId}
              title="ResCommand product walkthrough"
              caption="Product Demo Video"
            />
            <p className="text-body-sm text-muted">
              Can&rsquo;t watch now? We&rsquo;ll show you everything in the demo.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  )
}
