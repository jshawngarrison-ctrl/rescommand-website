import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

/** Wordmark logo: "Res" in ink, "Command" in sky blue, with a command glyph. */
export function Logo({ className }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-sky font-display text-body-lg font-bold text-primary-navy"
      >
        R
      </span>
      <span className="font-display text-xl font-bold tracking-tight">
        <span className="text-ink">Res</span>
        <span className="text-accent-sky">Command</span>
      </span>
    </span>
  )
}
