import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROBLEMS } from '@/lib/content'

/** "The Problem Every Small Restaurant Faces" — three pain-point cards. */
export function ProblemSection() {
  return (
    <Section background="deep" aria-labelledby="problem-heading">
      <SectionHeading
        eyebrow="The reality"
        title={<span id="problem-heading">The Problem Every Small Restaurant Faces</span>}
        subtitle="You have the same operational rigor as a big chain — without the staff to run five different tools."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PROBLEMS.map(({ icon: Icon, title, copy }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-xl bg-primary-panel p-8 shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-deep text-accent-sky">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="font-display text-heading-sm font-semibold text-ink">{title}</h3>
            <p className="text-body-md text-muted">{copy}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
