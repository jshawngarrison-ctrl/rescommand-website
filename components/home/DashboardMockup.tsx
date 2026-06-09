import { Calendar, Package, UtensilsCrossed, CheckCircle } from 'lucide-react'

/**
 * Pure-CSS placeholder for the product dashboard. Stands in for a real
 * screenshot/mockup so the hero has a focal point without an image asset.
 */
export function DashboardMockup() {
  return (
    <div className="rounded-xl border border-accent-sky/20 bg-primary-panel p-3 shadow-lg">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-2 pb-3">
        <span className="h-3 w-3 rounded-full bg-semantic-error/70" />
        <span className="h-3 w-3 rounded-full bg-semantic-warning/70" />
        <span className="h-3 w-3 rounded-full bg-semantic-success/70" />
        <span className="ml-3 text-body-xs text-muted">app.rescommand.com</span>
      </div>

      <div className="rounded-lg bg-primary-deep p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-body-xs uppercase tracking-wider text-muted">Today · Duffers Donuts</p>
            <p className="font-display text-body-lg font-bold text-ink">Morning Prep</p>
          </div>
          <span className="rounded-full bg-semantic-success/20 px-3 py-1 text-body-xs font-semibold text-semantic-success">
            On track
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <StatTile icon={<Calendar className="h-4 w-4" />} label="Shifts covered" value="8 / 8" />
          <StatTile icon={<Package className="h-4 w-4" />} label="Below par" value="3 items" tone="warn" />
          <StatTile icon={<UtensilsCrossed className="h-4 w-4" />} label="Prep done" value="74%" />
          <StatTile icon={<CheckCircle className="h-4 w-4" />} label="Logs complete" value="12 / 12" tone="ok" />
        </div>

        <div className="mt-4 space-y-2">
          {['Open & temp check', 'Fryer station prep', 'Glaze batch — yield logged'].map((task, i) => (
            <div
              key={task}
              className="flex items-center gap-3 rounded-md bg-primary-panel px-3 py-2 text-body-sm text-ink"
            >
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-sm ${
                  i < 2 ? 'bg-accent-sky text-primary-navy' : 'border border-muted/40'
                }`}
              >
                {i < 2 ? '✓' : ''}
              </span>
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatTile({
  icon,
  label,
  value,
  tone = 'default',
}: {
  icon: React.ReactNode
  label: string
  value: string
  tone?: 'default' | 'warn' | 'ok'
}) {
  const valueTone =
    tone === 'warn' ? 'text-semantic-warning' : tone === 'ok' ? 'text-semantic-success' : 'text-ink'
  return (
    <div className="rounded-md bg-primary-panel p-3">
      <div className="mb-1 flex items-center gap-2 text-accent-sky">{icon}</div>
      <p className="text-body-xs text-muted">{label}</p>
      <p className={`font-display text-body-lg font-bold ${valueTone}`}>{value}</p>
    </div>
  )
}
