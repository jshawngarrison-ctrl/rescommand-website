import Link from 'next/link'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'link'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-body font-semibold whitespace-nowrap transition duration-300 ease-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky focus-visible:ring-offset-2 focus-visible:ring-offset-primary-navy disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-sky text-primary-navy font-bold hover:bg-accent-bright hover:shadow-sky-md hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border-2 border-accent-sky bg-primary-panel text-accent-sky hover:bg-primary-deep hover:shadow-sky-md hover:-translate-y-0.5',
  ghost:
    'border border-accent-sky text-accent-sky hover:bg-accent-sky/10 hover:text-accent-bright hover:border-accent-bright',
  link: 'text-accent-sky underline underline-offset-4 hover:text-accent-bright px-0',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-body-sm',
  md: 'px-6 py-3 text-body-md',
  lg: 'px-8 py-4 text-body-lg',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> {
  href?: undefined
}

interface ButtonAsLink extends CommonProps {
  href: string
  external?: boolean
}

type ButtonProps = ButtonAsButton | ButtonAsLink

/**
 * Polymorphic button — renders a styled `<button>` or an `<a>`/`next/link`
 * when an `href` is supplied. Variants: primary, secondary, ghost, link.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, children, ...props },
  ref,
) {
  const classes = cn(base, variants[variant], variant !== 'link' && sizes[size], className)

  if ('href' in props && props.href !== undefined) {
    const { href, external, ...rest } = props as ButtonAsLink
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button ref={ref} className={classes} {...buttonProps}>
      {children}
    </button>
  )
})
