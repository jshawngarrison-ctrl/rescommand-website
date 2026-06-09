import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/ui/CTASection'
import { PostMeta } from '@/components/blog/PostMeta'
import { PostCard } from '@/components/blog/PostCard'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { JsonLd } from '@/components/seo/JsonLd'
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blogMeta'
import { SITE } from '@/lib/constants'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  }

  return (
    <>
      <JsonLd data={articleSchema} />

      <article>
        {/* Header */}
        <header className="border-b border-muted/10 bg-primary-navy">
          <Container className="py-16 sm:py-20">
            <div className="mx-auto max-w-prose">
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center gap-1.5 text-body-sm font-semibold text-accent-sky transition-colors hover:text-accent-bright"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to blog
              </Link>
              <Badge>{post.category}</Badge>
              <h1 className="mt-4 font-display text-display-sm font-bold leading-tight text-balance">
                {post.title}
              </h1>
              <p className="mt-4 text-body-lg text-muted">{post.excerpt}</p>
              <PostMeta author={post.author} date={post.date} readTime={post.readTime} className="mt-6" />
            </div>
          </Container>
        </header>

        {/* Featured image + body */}
        <div className="bg-primary-navy">
          <Container className="py-12">
            <div className="mx-auto max-w-prose">
              <ImagePlaceholder label="Featured image" ratio="2/1" className="mb-10" />
              <div className="prose-rescommand">
                <MDXRemote source={post.content} />
              </div>
            </div>
          </Container>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <Section background="deep" aria-labelledby="related-heading">
          <SectionHeading title={<span id="related-heading">Keep reading</span>} align="left" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <PostCard key={rel.slug} post={rel} />
            ))}
          </div>
        </Section>
      )}

      <CTASection
        title="Ready to try ResCommand?"
        copy="Book a demo and see how it fits your operation."
        background="navy"
      />
    </>
  )
}
