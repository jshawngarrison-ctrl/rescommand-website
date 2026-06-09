import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import type { PricingTier } from '@/lib/content'

interface PricingCardProps {
  tier: PricingTier
  ctaHref?: string
}

/** Single pricing plan card. The `featured` tier gets a sky border + badge. */
export function PricingCard({ tier, ctaHref = '/demo' }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-6 rounded-xl bg-primary-panel p-8 shadow-md',
        tier.featured ? 'border-2 border-accent-sky shadow-sky-sm' : 'border border-muted/10',
      )}
    >
      {tier.featured && (
        <div className="absolute -top-3 left-8">
          <Badge>Most popular</Badge>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-heading-sm font-bold text-ink">{tier.name}</h3>
        <p className="text-body-sm text-muted">{tier.blurb}</p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="font-display text-display-sm font-bold text-ink">{tier.price}</span>
        <span className="text-body-md text-muted">{tier.cadence}</span>
      </div>

      <ul className="flex flex-col gap-3">
        {tier.highlights.map((item) => (
          <li key={item} className="flex items-start gap-3 text-body-md text-ink">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-semantic-success" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <Button
        href={ctaHref}
        variant={tier.featured ? 'primary' : 'secondary'}
        className="mt-auto w-full"
      >
        {tier.cta}
      </Button>
    </div>
  )
}
