import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-primary-navy bg-grid">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <span className="font-display text-display-lg font-bold text-accent-sky">404</span>
          <h1 className="font-display text-heading-md font-bold text-ink sm:text-display-sm">
            We couldn&rsquo;t find that page
          </h1>
          <p className="text-body-lg text-muted">
            The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s get you
            back on track.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/">Back to home</Button>
            <Button href="/demo" variant="secondary">
              Book a demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
