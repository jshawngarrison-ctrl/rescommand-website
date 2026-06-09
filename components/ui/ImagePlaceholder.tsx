import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  label?: string
  /** Aspect ratio as a CSS value, e.g. "4/3", "16/9", "3/2". */
  ratio?: string
  className?: string
}

/**
 * Branded placeholder for image slots that don't yet have real assets.
 * Swap for a `next/image` once photography/screenshots are available.
 */
export function ImagePlaceholder({
  label = 'Image placeholder',
  ratio = '16/9',
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: ratio }}
      className={cn(
        'flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-accent-sky/20 bg-primary-panel bg-grid text-muted shadow-md',
        className,
      )}
    >
      <ImageIcon className="h-10 w-10 text-accent-sky/60" aria-hidden="true" />
      <span className="px-4 text-center text-body-sm">{label}</span>
    </div>
  )
}
