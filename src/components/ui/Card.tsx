'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'light'
  children: React.ReactNode
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface CardIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

// Main Card Component
export function Card({
  className,
  variant = 'dark',
  children,
  ...props
}: CardProps) {
  const variants = {
    dark: 'bg-navy-dark border border-gold/20 rounded-xl p-8 relative overflow-hidden hover:-translate-y-6 hover:border-gold/50 hover:shadow-xl transition-all duration-300 group',
    light: 'bg-white border border-navy/10 rounded-lg p-7 hover:border-gold hover:shadow-md transition-all duration-300'
  }

  return (
    <div
      className={cn(variants[variant], className)}
      {...props}
    >
      {/* Gold accent bar for dark cards - revealed on hover */}
      {variant === 'dark' && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      {children}
    </div>
  )
}

// Card Header
export function CardHeader({
  className,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn('mb-6', className)}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Content
export function CardContent({
  className,
  children,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn('', className)}
      {...props}
    >
      {children}
    </div>
  )
}

// Card Icon Block
export function CardIcon({
  className,
  children,
  size = 'md',
  ...props
}: CardIconProps) {
  const sizes = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-14 h-14 text-2xl',
    lg: 'w-16 h-16 text-3xl'
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-gold mb-6',
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
