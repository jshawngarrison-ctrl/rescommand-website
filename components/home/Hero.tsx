import { ArrowRight, Play } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { DashboardMockup } from './DashboardMockup'

/** Full-width homepage hero: headline, subhead, dual CTA, dashboard mockup. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-navy">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-accent-sky/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-sky/30 bg-primary-panel px-4 py-1.5 text-body-sm font-medium text-accent-sky">
            Built for small restaurants
          </span>
          <h1 className="font-display text-display-sm font-bold leading-[1.1] text-balance sm:text-display-md lg:text-display-lg">
            Everything Your Restaurant Team Needs to Run Like the Big Guys
          </h1>
          <p className="max-w-xl text-body-lg text-muted">
            One app for scheduling, inventory, recipes, prep, and compliance. Built for small
            restaurants. Priced for them, too.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="/demo" size="lg">
              Book a Demo
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button href="/demo" variant="link" className="inline-flex items-center gap-2">
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              Watch 2-min demo
            </Button>
          </div>
        </div>

        <div className="relative">
          <DashboardMockup />
        </div>
      </Container>
    </section>
  )
}
