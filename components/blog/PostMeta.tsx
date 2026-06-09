import { CalendarDays, Clock, User } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface PostMetaProps {
  author?: string
  date: string
  readTime: string
  className?: string
}

/** Inline byline row: author · date · read time. */
export function PostMeta({ author, date, readTime, className }: PostMetaProps) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-body-sm text-muted ${className ?? ''}`}>
      {author && (
        <span className="inline-flex items-center gap-1.5">
          <User className="h-4 w-4" aria-hidden="true" />
          {author}
        </span>
      )}
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-4 w-4" aria-hidden="true" />
        <time dateTime={date}>{formatDate(date)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-4 w-4" aria-hidden="true" />
        {readTime} min read
      </span>
    </div>
  )
}
