'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  fallbackColor?: 'navy' | 'gold'
}

export function Logo({ size = 'md', className = '', fallbackColor = 'navy' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20', 
    lg: 'w-32 h-32'
  }

  const fallbackSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  }

  const fallbackBgClasses = {
    navy: 'from-navy-500 to-navy-600',
    gold: 'from-gold-400 to-gold-500'
  }

  return (
    <Link href="/" className={`${sizeClasses[size]} ${className} flex-shrink-0`}>
      <Image
        src="/logo.png"
        alt="MylesCorp Technologies Ltd"
        width={140}
        height={108}
        priority
        className="h-24 w-auto object-contain"
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
        className={`w-full h-full bg-gradient-to-br ${fallbackBgClasses[fallbackColor]} rounded-xl flex items-center justify-center`}
        style={{display: 'none'}}
      >
        <span className={`text-white font-bold ${fallbackSizeClasses[size]}`}>M</span>
      </div>
    </Link>
  )
}
