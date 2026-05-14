'use client'

import React from 'react'
import Link from 'next/link'

interface CTASectionProps {
  title: string
  tagline: string
  description: string
  primaryCta: { text: string; href: string }
  secondaryCta: { text: string; href: string }
}

export function CTASection({ title, tagline, description, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden text-center"
      style={{
        background: 'var(--navy)',
        padding: '72px 5%'
      }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(199,150,57,0.03)1px,transparent 1px),linear-gradient(90deg,rgba(199,150,57,0.03)1px,transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top Rule */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: 'linear-gradient(90deg,transparent,var(--gold),transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-1">
        {/* Title */}
        <h2
          className="font-bold mb-3"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px,4vw,48px)',
            color: 'var(--white)',
          }}
        >
          {title}
        </h2>

        {/* Tagline */}
        <p
          className="italic mb-2.5"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '17px',
            color: 'var(--light-blue)',
          }}
        >
          {tagline}
        </p>

        {/* Description */}
        <p
          className="font-light max-w-[480px] mx-auto mb-9 leading-[1.7]"
          style={{
            fontSize: '16px',
            color: 'var(--light-blue)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          {description}
        </p>

        {/* CTAs */}
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center px-9 py-3.5 rounded-md font-bold text-[14px] transition-all hover:translate-y-[-2px]"
            style={{
              background: 'var(--gold)',
              color: 'var(--navy)',
              letterSpacing: '0.3px',
            }}
          >
            {primaryCta.text}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center px-9 py-3.5 rounded-md font-semibold text-[14px] transition-all"
            style={{
              background: 'transparent',
              color: 'var(--white)',
              border: '1.5px solid rgba(255,255,255,0.85)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.borderColor = 'var(--white)'
              e.currentTarget.style.color = 'var(--white)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.85)'
              e.currentTarget.style.color = 'var(--white)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            {secondaryCta.text}
          </Link>
        </div>
      </div>
    </section>
  )
}
