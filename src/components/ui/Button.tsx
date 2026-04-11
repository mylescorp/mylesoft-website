'use client'

import React from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'nav'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-deep disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group'
  
  const variants = {
    // Primary CTA Button - Gold on Navy
    primary: 'bg-gold text-navy hover:bg-gold-light hover:-translate-y-2 hover:shadow-gold focus:ring-gold active:scale-98 font-body font-bold tracking-[0.4px] btn-shine',
    
    // Secondary Button - Navy background
    secondary: 'bg-navy text-white hover:bg-navy-dark focus:ring-navy shadow-card shadow-card-hover transform hover:-translate-y-1',
    
    // Outline Button - Transparent with white border
    outline: 'bg-transparent border border-white/20 text-white hover:border-gold hover:text-gold focus:ring-gold',
    
    // Ghost Button
    ghost: 'text-light-blue hover:text-gold hover:bg-navy-dark/30 focus:ring-gold',
    
    // Destructive Button
    destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    
    // Link Button
    link: 'text-gold hover:text-gold-light underline-offset-4 hover:underline focus:ring-gold p-0'
  }
  
  const sizes = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-9 py-4 text-[14px]', // Primary CTA: 16px 36px
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
    nav: 'px-5 py-3 text-[13px]'
  }

  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
    nav: 'w-4 h-4'
  }

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <Loader2 className={`w-5 h-5 animate-spin ${iconSizes[size]}`} />
          {children && <span className="ml-2">{children}</span>}
        </>
      )
    }

    if (icon && iconPosition === 'left') {
      return (
        <>
          <span className={iconSizes[size]}>{icon}</span>
          {children && <span className="ml-2">{children}</span>}
        </>
      )
    }

    if (icon && iconPosition === 'right') {
      return (
        <>
          {children && <span className="mr-2">{children}</span>}
          <span className={iconSizes[size]}>{icon}</span>
        </>
      )
    }

    return children
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {renderContent()}
    </button>
  )
}
