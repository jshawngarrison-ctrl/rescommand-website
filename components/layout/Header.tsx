'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PRIMARY_NAV } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Logo } from './Logo'

/** Sticky site header: logo, primary nav, persistent "Book a Demo" CTA + mobile menu. */
export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-[300] border-b border-muted/10 bg-primary-navy/90 backdrop-blur supports-[backdrop-filter]:bg-primary-navy/75">
      <nav className="container-safe flex h-20 items-center justify-between gap-4" aria-label="Primary">
        <Link href="/" className="flex items-center" aria-label="ResCommand home">
          <Logo height={48} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {PRIMARY_NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'text-body-md font-medium transition-colors duration-300 hover:text-accent-sky',
                    active ? 'text-accent-sky' : 'text-ink',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Button href="/demo" size="sm">
            Book a Demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-muted/10 bg-primary-navy md:hidden">
          <ul className="container-safe flex flex-col gap-1 py-4">
            {PRIMARY_NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block rounded-md px-3 py-3 text-body-lg font-medium transition-colors',
                      active ? 'bg-primary-panel text-accent-sky' : 'text-ink hover:bg-primary-panel',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="px-3 pt-3">
              <Button href="/demo" className="w-full">
                Book a Demo
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
