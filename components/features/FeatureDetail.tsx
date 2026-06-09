import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { cn } from '@/lib/utils'
import type { FeatureItem } from '@/lib/content'

interface FeatureDetailProps {
  feature: FeatureItem
  /** Alternates image side for visual rhythm down the page. */
  reverse?: boolean
}

/** Detailed feature block: problem → solution → benefit, bullets, screenshot. */
export function FeatureDetail({ feature, reverse = false }: FeatureDetailProps) {
  const { icon: Icon } = feature
  return (
    <div
      id={feature.slug}
      className="scroll-mt-24 grid items-center gap-12 lg:grid-cols-2"
    >
      <div className={cn('flex flex-col gap-6', reverse && 'lg:order-2')}>
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-deep text-accent-sky">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="font-display text-heading-md font-bold text-ink sm:text-display-sm">
          {feature.title}
        </h2>

        <div className="flex flex-col gap-3">
          <p className="text-body-md text-muted">
            <span className="font-semibold text-ink">The problem: </span>
            {feature.problem}
          </p>
          <p className="text-body-md text-muted">
            <span className="font-semibold text-ink">How we solve it: </span>
            {feature.solution}
          </p>
          <p className="text-body-md text-accent-bright">
            <span className="font-semibold">What that means for you: </span>
            {feature.benefit}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {feature.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-body-sm text-ink">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-semantic-success" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>

        <div>
          <Button href="/demo" variant="secondary" size="sm">
            See demo
          </Button>
        </div>
      </div>

      <div className={cn(reverse && 'lg:order-1')}>
        <ImagePlaceholder label={`${feature.title} screenshot`} ratio="5/4" />
      </div>
    </div>
  )
}
