'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-gold-400 text-white shadow-gold hover:bg-gold-500',
        secondary: 'border-transparent bg-navy-500 text-white hover:bg-navy-600',
        destructive: 'border-transparent bg-red-500 text-white hover:bg-red-600',
        outline: 'border-navy-500 text-navy-500',
        gold: 'border-transparent bg-gold-100 text-gold-700 hover:bg-gold-200',
        navy: 'border-transparent bg-navy-100 text-navy-700 hover:bg-navy-200',
        success: 'border-transparent bg-green-100 text-green-700 hover:bg-green-200',
        warning: 'border-transparent bg-amber-100 text-amber-700 hover:bg-amber-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string
  children: React.ReactNode
}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
