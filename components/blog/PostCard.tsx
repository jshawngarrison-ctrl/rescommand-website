import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { PostMeta } from '@/lib/blogMeta'

/** Blog post card: thumbnail, category, title, excerpt, meta, read-more link. */
export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-transparent bg-primary-panel shadow-md transition duration-300 ease-default hover:-translate-y-1 hover:border-accent-sky/40 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block" aria-label={post.title}>
        {/* Thumbnail */}
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-primary-deep bg-grid">
          <span className="font-display text-heading-md font-bold text-accent-sky/30">RC</span>
          <span className="absolute left-4 top-4">
            <Badge>{post.category}</Badge>
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-heading-xs font-semibold leading-snug text-ink">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-accent-sky">
            {post.title}
          </Link>
        </h3>
        <p className="text-body-sm text-muted">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2 text-body-xs text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readTime} min read</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-body-sm font-semibold text-accent-sky"
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
