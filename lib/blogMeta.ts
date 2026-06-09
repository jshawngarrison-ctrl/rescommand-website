import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostFrontmatter {
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime: string
  featured?: boolean
  image?: string
}

export interface PostMeta extends PostFrontmatter {
  slug: string
}

export interface Post extends PostMeta {
  content: string
}

/** All `.mdx` slugs in the content directory (filename without extension). */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

/** Read a single post (frontmatter + raw MDX body) by slug. */
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    content,
    ...(data as PostFrontmatter),
  }
}

/** Frontmatter only for a single post. */
export function getPostMetaBySlug(slug: string): PostMeta | null {
  const post = getPostBySlug(slug)
  if (!post) return null
  const { content: _content, ...meta } = post
  return meta
}

/** All posts' metadata, sorted newest-first. */
export function getSortedPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMetaBySlug(slug))
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

/** Posts filtered by category. Pass "All" (or omit) to return everything. */
export function getPostsByCategory(category?: string): PostMeta[] {
  const posts = getSortedPosts()
  if (!category || category === 'All') return posts
  return posts.filter((post) => post.category === category)
}

/**
 * Up to `limit` related posts: same category first, then most recent others,
 * excluding the current slug.
 */
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const current = getPostMetaBySlug(slug)
  if (!current) return getSortedPosts().slice(0, limit)

  const others = getSortedPosts().filter((post) => post.slug !== slug)
  const sameCategory = others.filter((post) => post.category === current.category)
  const rest = others.filter((post) => post.category !== current.category)

  return [...sameCategory, ...rest].slice(0, limit)
}
