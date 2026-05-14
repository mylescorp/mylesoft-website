'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const LOGO_SRC = '/mylescorp-logo.png'

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  }

  const fallbackSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  }

  return (
    <Link
      href="/"
      aria-label="MylesCorp Technologies home"
      className={`${sizeClasses[size]} ${className} flex-shrink-0 rounded-none border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 logo-no-border`}
    >
      <Image
        src={LOGO_SRC}
        alt="MylesCorp Technologies Ltd"
        width={96}
        height={96}
        priority
        className="h-full w-full object-contain rounded-none border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
        style={{
          border: 'none !important',
          outline: 'none !important',
          boxShadow: 'none !important'
        }}
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) {
            fallback.style.display = 'flex';
          }
        }}
      />
      <div
        className={`w-full h-full flex items-center justify-center rounded-none`}
        style={{display: 'none'}}
      >
        <span className={`text-gold font-bold ${fallbackSizeClasses[size]}`}>M</span>
      </div>
    </Link>
  )
}
