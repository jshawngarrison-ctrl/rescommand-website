import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

/** Centered, max-width (1280px) wrapper with responsive horizontal padding. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return <Tag className={cn('container-safe', className)}>{children}</Tag>
}
