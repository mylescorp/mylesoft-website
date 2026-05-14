'use client'

import React from 'react'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
  width?: string | number
  height?: string | number
  lines?: number
  animated?: boolean
}

export function Skeleton({
  className = '',
  variant = 'text',
  width,
  height,
  lines = 1,
  animated = true
}: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]'
  const animationClass = animated ? 'animate-shimmer' : ''
  const combinedClasses = `${baseClasses} ${animationClass} ${className}`

  const renderSkeleton = () => {
    switch (variant) {
      case 'text':
        if (lines > 1) {
          return (
            <div className="space-y-2">
              {Array.from({ length: lines }, (_, i) => (
                <div
                  key={i}
                  className={`${combinedClasses} rounded`}
                  style={{
                    width: i === lines - 1 ? '70%' : '100%',
                    height: height || '1rem'
                  }}
                />
              ))}
            </div>
          )
        }
        return (
          <div
            className={`${combinedClasses} rounded`}
            style={{ width: width || '100%', height: height || '1rem' }}
          />
        )

      case 'circular':
        return (
          <div
            className={`${combinedClasses} rounded-full`}
            style={{ width: width || '40px', height: height || '40px' }}
          />
        )

      case 'rectangular':
        return (
          <div
            className={`${combinedClasses} rounded-lg`}
            style={{ width: width || '100%', height: height || '100px' }}
          />
        )

      case 'card':
        return (
          <div className={`p-6 ${combinedClasses} rounded-2xl`} style={{ width, height }}>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full shimmer" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4 shimmer" />
                  <div className="h-3 bg-gray-300 rounded w-1/2 shimmer" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded shimmer" />
                <div className="h-3 bg-gray-300 rounded w-5/6 shimmer" />
                <div className="h-3 bg-gray-300 rounded w-4/6 shimmer" />
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div
            className={`${combinedClasses} rounded`}
            style={{ width: width || '100%', height: height || '1rem' }}
          />
        )
    }
  }

  return <div className="opacity-70">{renderSkeleton()}</div>
}

// Premium Card Skeleton
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`glass-morphism p-6 rounded-2xl ${className}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton variant="circular" width={48} height={48} />
          <Skeleton variant="text" width={80} height={24} />
        </div>
        <div className="space-y-2">
          <Skeleton variant="text" height={24} />
          <Skeleton variant="text" lines={2} />
        </div>
        <div className="flex space-x-2">
          <Skeleton variant="rectangular" width={60} height={24} className="rounded-full" />
          <Skeleton variant="rectangular" width={60} height={24} className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

// Product Card Skeleton
export function ProductCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`glass-morphism p-6 rounded-2xl hover-lift-premium ${className}`}>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-gold/10 to-gold/20 rounded-xl shimmer animate-pulse-gold" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" height={20} width="60%" />
            <Skeleton variant="text" height={16} width="80%" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton variant="text" lines={3} />
        </div>
        <div className="flex items-center justify-between pt-4">
          <Skeleton variant="rectangular" width={100} height={32} className="rounded-lg" />
          <Skeleton variant="rectangular" width={80} height={32} className="rounded-lg" />
        </div>
      </div>
    </div>
  )
}

// Testimonial Card Skeleton
export function TestimonialSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`glass-morphism p-6 rounded-2xl ${className}`}>
      <div className="space-y-4">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} variant="rectangular" width={20} height={20} className="rounded" />
          ))}
        </div>
        <div className="space-y-2">
          <Skeleton variant="text" lines={3} />
        </div>
        <div className="flex items-center space-x-3">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="space-y-1">
            <Skeleton variant="text" height={16} width={120} />
            <Skeleton variant="text" height={14} width={80} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Stats Skeleton
export function StatsSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold/10 to-gold/20 rounded-2xl shimmer animate-pulse-gold" />
          <Skeleton variant="text" height={32} width={80} className="mx-auto" />
          <Skeleton variant="text" height={16} width={100} className="mx-auto" />
        </div>
      ))}
    </div>
  )
}
