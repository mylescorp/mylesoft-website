'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Zap, Shield, Wrench } from 'lucide-react'
import { Skeleton } from '@/components/ui/Skeleton'
import { Icon } from '@/components/ui/Icon'

interface ProductCardProps {
  name: string
  category?: string
  description: string
  icon: React.ReactNode | string
  features: string[]
  status: 'live' | 'beta' | 'coming-soon' | 'development'
  href: string
  className?: string
  loading?: boolean
}

export function ProductCard({
  name,
  category,
  description,
  icon,
  features,
  status,
  href,
  className = '',
  loading = false
}: ProductCardProps) {
  if (loading) {
    return <ProductCardSkeleton className={className} />
  }

  const statusColors = {
    live: 'bg-ice text-navy border border-navy/10',
    beta: 'bg-navy text-white border border-gold/20',
    'coming-soon': 'bg-muted-blue text-navy',
    development: 'bg-gold text-navy border border-gold/20'
  }

  const statusIcons = {
    live: <Star className="w-3 h-3" />,
    beta: <Zap className="w-3 h-3" />,
    'coming-soon': <Shield className="w-3 h-3" />,
    development: <Wrench className="w-3 h-3" />
  }

  return (
    <Link
      href={href}
      className={`group relative flex h-full min-h-[360px] w-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 ${className}`}
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-gold via-gold-light to-gold/70" />

      <div className="flex h-full flex-col p-6 md:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {category && (
              <div className="badge badge-gold mb-4">
                {category}
              </div>
            )}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/15 bg-gold/8 text-3xl shadow-sm transition-transform duration-300 group-hover:scale-105">
              {typeof icon === 'string'
                ? <Icon name={icon} size={28} className="text-gold" />
                : icon}
            </div>
            <h3 className="font-display text-[1.85rem] md:text-[2rem] font-bold leading-[1.05] text-navy transition-colors duration-300 group-hover:text-gold">
              {name}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-medium-grey line-clamp-4">
              {description}
            </p>
          </div>

          <div className={`mt-1 flex shrink-0 items-center space-x-1 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm ${statusColors[status]}`}>
            {statusIcons[status]}
            <span className="uppercase tracking-[0.14em]">{status}</span>
          </div>
        </div>

        <div className="mb-6 flex-grow space-y-3 border-t border-slate-200/80 pt-5">
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
              <span className="text-[0.96rem] leading-7 text-dark-grey">
                {feature}
              </span>
            </div>
          ))}
          {features.length > 2 && (
            <div className="pl-5 text-[0.9rem] italic text-medium-grey">
              +{features.length - 2} more features
            </div>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-200/80 pt-4">
          <div className="flex items-center space-x-2 text-[0.96rem] font-semibold text-gold transition-colors duration-200 group-hover:text-gold-light">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>

          <div className="rounded-full border border-slate-200 bg-ice px-3 py-1 text-[0.8rem] font-semibold text-navy">
            Details
          </div>
        </div>
      </div>
    </Link>
  )
}

// Product Card Skeleton Component
function ProductCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`product-card p-6 h-full flex flex-col ${className}`}>
      <div className="space-y-4 flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gold/10 to-gold/20 rounded-xl" />
            <div className="flex-1 space-y-2">
              <Skeleton variant="text" height={24} width="60%" />
              <Skeleton variant="text" height={16} width="80%" />
            </div>
          </div>
          <Skeleton variant="rectangular" width={80} height={24} className="rounded-full" />
        </div>
        <div className="space-y-2">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-muted-blue rounded-full" />
              <Skeleton variant="text" height={14} width="90%" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
          <Skeleton variant="rectangular" width={80} height={20} />
          <Skeleton variant="rectangular" width={100} height={32} className="rounded-lg" />
        </div>
      </div>
    </div>
  )
}
