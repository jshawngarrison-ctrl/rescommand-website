import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** Rendered height in px; width scales to the lockup's aspect ratio. */
  height?: number
}

// Primary horizontal lockup, viewBox 1833 x 440 (ratio ≈ 4.166).
const RATIO = 1833 / 440

/** ResCommand primary lockup (cream wordmark + Ops Scope mark) for dark grounds. */
export function Logo({ className, height = 34 }: LogoProps) {
  const width = Math.round(height * RATIO)
  return (
    <Image
      src="/brand/rescommand-primary-dark.svg"
      alt="ResCommand"
      width={width}
      height={height}
      priority
      className={cn('h-auto w-auto', className)}
      style={{ height, width }}
    />
  )
}
