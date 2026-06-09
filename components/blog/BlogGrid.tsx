'use client'

import { useMemo, useState } from 'react'
import { BLOG_CATEGORIES, type BlogCategory } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { PostCard } from './PostCard'
import type { PostMeta } from '@/lib/blogMeta'

/** Category-filterable blog grid (client-side filtering over pre-fetched posts). */
export function BlogGrid({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<BlogCategory>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return posts
    return posts.filter((p) => p.category === active)
  }, [active, posts])

  return (
    <div className="flex flex-col gap-10">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter posts by category">
        {BLOG_CATEGORIES.map((category) => {
          const isActive = active === category
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full px-4 py-2 text-body-sm font-semibold transition duration-300',
                isActive
                  ? 'bg-accent-sky text-primary-navy'
                  : 'bg-primary-panel text-muted hover:text-accent-sky',
              )}
            >
              {category}
            </button>
          )
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-body-md text-muted">No posts in this category yet — check back soon.</p>
      )}
    </div>
  )
}
