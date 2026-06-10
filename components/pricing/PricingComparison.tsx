import { Check, Minus } from 'lucide-react'
import { PRICING_COMPARISON } from '@/lib/content'

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-semantic-success" aria-label="Included" />
    ) : (
      <Minus className="mx-auto h-5 w-5 text-muted" aria-label="Not included" />
    )
  }
  return <span className="text-body-md text-ink">{value}</span>
}

/** Feature comparison table: Core vs. Operator. */
export function PricingComparison() {
  return (
    <div className="overflow-hidden rounded-xl border border-muted/10 bg-primary-panel">
      <table className="w-full border-collapse text-center">
        <caption className="sr-only">Feature comparison between Core and Operator plans</caption>
        <thead>
          <tr className="border-b border-muted/15">
            <th scope="col" className="px-6 py-5 text-left font-display text-body-md text-muted">
              Feature
            </th>
            <th scope="col" className="px-6 py-5 font-display text-body-lg font-bold text-ink">
              Core
            </th>
            <th scope="col" className="px-6 py-5 font-display text-body-lg font-bold text-accent-sky">
              Operator
            </th>
          </tr>
        </thead>
        <tbody>
          {PRICING_COMPARISON.map((row) => (
            <tr key={row.label} className="border-b border-muted/10 last:border-0">
              <th scope="row" className="px-6 py-4 text-left text-body-md font-medium text-ink">
                {row.label}
              </th>
              <td className="px-6 py-4">
                <Cell value={row.starter} />
              </td>
              <td className="px-6 py-4">
                <Cell value={row.pro} />
              </td>
            </tr>
          ))}
          <tr className="bg-primary-deep/50">
            <th scope="row" className="px-6 py-5 text-left font-display text-body-lg font-bold text-ink">
              Price
            </th>
            <td className="px-6 py-5 font-display text-body-lg font-bold text-ink">$99/mo</td>
            <td className="px-6 py-5 font-display text-body-lg font-bold text-accent-sky">$199/mo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
