import Link from 'next/link'
import { Mail } from 'lucide-react'
import { FOOTER_NAV, SITE } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { Logo } from './Logo'

const YEAR = 2025

/** Four-column site footer: brand blurb, product/company links, contact, credit. */
export function Footer() {
  return (
    <footer className="border-t border-muted/10 bg-primary-navy">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="ResCommand home">
              <Logo />
            </Link>
            <p className="max-w-xs text-body-sm text-muted">{SITE.tagline}</p>
          </div>

          {/* Product */}
          <FooterColumn title={FOOTER_NAV.product.title} links={FOOTER_NAV.product.links} />

          {/* Company */}
          <FooterColumn title={FOOTER_NAV.company.title} links={FOOTER_NAV.company.links} />

          {/* Contact + credit */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-body-md font-semibold text-ink">Contact</h2>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="inline-flex items-center gap-2 text-body-sm text-muted transition-colors hover:text-accent-sky"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {SITE.supportEmail}
            </a>
            <div className="mt-2 text-body-sm text-muted">
              <p>
                ResCommand is built by{' '}
                <a
                  href={SITE.builtBy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-sky hover:text-accent-bright"
                >
                  {SITE.builtBy.name}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-muted/10 pt-6 text-body-xs text-muted">
          © {YEAR} ResCommand. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-body-md font-semibold text-ink">{title}</h2>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-body-sm text-muted transition-colors duration-300 hover:text-accent-sky"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
