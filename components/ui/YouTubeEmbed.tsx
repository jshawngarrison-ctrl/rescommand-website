'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

interface YouTubeEmbedProps {
  /** YouTube video ID. When omitted, renders a styled placeholder. */
  videoId?: string
  title?: string
  caption?: string
  className?: string
}

/**
 * Lazy YouTube embed. Until the user clicks play (or if no ID is configured),
 * it shows a lightweight branded placeholder — no iframe, no extra weight.
 */
export function YouTubeEmbed({
  videoId,
  title = 'Product demo video',
  caption = 'Product Demo Video',
  className,
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(videoId)

  if (hasVideo && playing) {
    return (
      <div className={cn('relative aspect-video w-full overflow-hidden rounded-xl', className)}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => hasVideo && setPlaying(true)}
      aria-label={hasVideo ? `Play ${title}` : `${title} (coming soon)`}
      className={cn(
        'group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-accent-sky/20 bg-primary-navy/60 bg-grid transition duration-300 ease-default',
        hasVideo
          ? 'cursor-pointer hover:border-accent-sky/50'
          : 'cursor-default',
        className,
      )}
    >
      {hasVideo && (
        <Image
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-40"
        />
      )}
      <span className="relative z-10 flex flex-col items-center gap-3 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-sky text-primary-navy shadow-sky-md transition duration-300 ease-default group-hover:scale-105 group-hover:bg-accent-bright">
          <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
        </span>
        <span className="text-body-md font-semibold text-ink">{caption}</span>
        {!hasVideo && (
          <span className="text-body-sm text-muted">Video coming soon</span>
        )}
      </span>
    </button>
  )
}
