'use client'

import React from 'react'
import Link from 'next/link'

interface ProductHeroProps {
  eyebrow: string
  heading: string
  goldWord: string
  subtitle: string
  badge: string
  primaryCta: { text: string; href: string }
  secondaryCta: { text: string; href: string }
  productName?: string
}

export function ProductHero({
  eyebrow,
  heading,
  goldWord,
  subtitle,
  badge,
  primaryCta,
  secondaryCta,
  productName
}: ProductHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ background: 'var(--navy)' }}>
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(199,150,57,0.04)1px,transparent 1px),linear-gradient(90deg,rgba(199,150,57,0.04)1px,transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow Effects */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(26,57,91,0.55)0%,transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(199,150,57,0.07)0%,transparent 65%)',
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
      <div className="relative z-1 text-center max-w-[760px] px-[5%] py-[100px_5%_80px]">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <div className="w-7 h-0.5" style={{ background: 'var(--gold)' }} />
          <span style={{
            color: 'var(--gold)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
          }}>
            {eyebrow}
          </span>
          <div className="w-7 h-0.5" style={{ background: 'var(--gold)' }} />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-6 rounded-full" style={{
          background: 'rgba(238,242,248,0.1)',
          border: '1px solid rgba(199,150,57,0.35)',
        }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{
            background: 'var(--gold)',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{
            color: 'var(--white)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-bold leading-[1.05] mb-5"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(38px,5.5vw,70px)',
            color: 'var(--white)',
          }}
        >
          {heading}{' '}
          <em style={{
            fontStyle: 'italic',
            color: 'var(--white)',
          }}>
            {goldWord}
          </em>
        </h1>

        {/* Product Name */}
        {productName && (
          <div
            className="text-center mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(24px,3.5vw,36px)',
              color: 'var(--gold)',
              fontWeight: 600,
              letterSpacing: '1px',
            }}
          >
            {productName}
          </div>
        )}

        {/* Subtitle */}
        <p
          className="font-light leading-[1.8] max-w-[600px] mx-auto mb-9"
          style={{
            fontSize: '18px',
            color: 'var(--light-blue)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
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
              border: '1.5px solid rgba(255,255,255,0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold)'
              e.currentTarget.style.color = 'var(--white)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = 'var(--white)'
            }}
          >
            {secondaryCta.text}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </section>
  )
}
