'use client'

import React from 'react'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { StaggerReveal, ScrollReveal } from '@/components/ui/ScrollReveal'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface ProductPageLayoutProps {
  metadata: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    heading: string
    goldWord: string
    subtitle: string
    badge: string
    primaryCta: { text: string; href: string }
    secondaryCta: { text: string; href: string }
  }
  overview: {
    stats: { number: string; label: string }[]
    description: string
  }
  features: {
    title: string
    description: string
    icon: string
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  targets: string[]
  pricing: {
    name: string
    price: string
    description: string
    features: string[]
  }[]
  testimonials: {
    quote: string
    author: string
    role: string
    organization: string
  }[]
}

export function ProductPageLayout({
  metadata,
  hero,
  overview,
  features,
  process,
  targets,
  pricing,
  testimonials
}: ProductPageLayoutProps) {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
          style={{ background: '#1A395B' }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Glow top-right */}
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Glow bottom-left */}
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.07) 0%, transparent 70%)',
            }}
          />

          {/* Gold top rule */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32"
          >
            {/* Product Name */}
            <div className="mb-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-light-blue">
                {metadata.title.split(' — ')[0]}
              </h2>
            </div>

            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-gold/25 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
                {hero.badge}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
              <span style={{
                color: '#C79639',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
              }}>
                {hero.eyebrow}
              </span>
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
            </div>

            {/* Heading */}
            <h1
              className="font-display font-bold leading-[1.05] text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ color: '#ffffff' }}
            >
              {hero.heading}{' '}
              <em style={{
                fontStyle: 'italic',
                color: '#FFFFFF',
              }}>
                {hero.goldWord}
              </em>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10 text-light-blue">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={hero.primaryCta.href}>
                <Button size="lg" className="shadow-2xl hover:shadow-3xl">
                  {hero.primaryCta.text}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={hero.secondaryCta.href}>
                <Button variant="outline" size="lg" className="border-white text-white hover:border-white hover:bg-white/10">
                  {hero.secondaryCta.text}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {overview.stats.map((stat, index) => (
                <div key={index} className="rounded-[1.4rem] border border-slate-200 bg-white p-6 text-center shadow-soft">
                  <div className="font-display font-bold text-4xl md:text-5xl mb-2 text-gold">
                    {stat.number}
                  </div>
                  <div className="font-body text-sm md:text-[0.95rem] font-medium leading-6 tracking-wide text-medium-grey">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <p className="font-body text-lg leading-8 text-medium-grey">
                  {overview.description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-navy">
                Powerful Features
              </h2>
              <p className="font-body text-xl leading-8 text-medium-grey max-w-2xl mx-auto">
                Everything you need to manage your operations efficiently
              </p>
            </ScrollReveal>

            <StaggerReveal
              staggerDelay={0.1}
              itemDelay={0.2}
              direction="up"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-card shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/20 bg-ice text-navy">
                    <Icon name={feature.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 text-navy">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[1rem] leading-8 text-medium-grey">
                    {feature.description}
                  </p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">
                How It Works
              </h2>
              <p className="font-body text-xl leading-8 text-light-blue max-w-2xl mx-auto">
                Get started in 5 simple steps
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center shadow-card backdrop-blur-sm">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-navy text-gold font-display font-bold text-2xl shadow-gold">
                      {step.step}
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="font-body text-[0.98rem] leading-7 text-light-blue">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who It Is For Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-navy">
                Who It Is For
              </h2>
              <p className="font-body text-xl leading-8 text-medium-grey max-w-2xl mx-auto">
                Built for organizations of all sizes
              </p>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-4">
              {targets.map((target, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="rounded-full border border-gold/20 bg-gold/10 px-6 py-3 shadow-sm">
                    <span className="font-body font-medium text-navy">{target}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Source Section */}
        <section id="plans" className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mx-auto max-w-4xl rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-card md:p-10">
              <div className="mx-auto mb-5 flex items-center justify-center gap-3">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                  Plan Options
                </span>
                <div className="h-0.5 w-8 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-navy">
                Choose the Right Plan with Our Team
              </h2>
              <p className="font-body text-xl leading-8 text-medium-grey max-w-3xl mx-auto">
                We keep package details and billing periods in one place so every quote stays accurate. Review the plan options, then book a consultation for fit, onboarding, and implementation scope.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {pricing.map((plan) => (
                  <div key={plan.name} className="rounded-xl border border-slate-200 bg-ice px-4 py-3 text-left">
                    <div className="font-body text-sm font-bold text-navy">{plan.name}</div>
                    <div className="mt-1 font-body text-xs leading-5 text-medium-grey">{plan.description}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/pricing">
                  <Button size="lg">Compare Product Plans</Button>
                </Link>
                <Link href="/book-demo">
                  <Button variant="secondary" size="lg">Book a Discovery Call</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">
                What Our Customers Say
              </h2>
              <p className="font-body text-xl leading-8 text-light-blue max-w-2xl mx-auto">
                Trusted by organizations across East Africa
              </p>
            </ScrollReveal>

            <StaggerReveal
              staggerDelay={0.1}
              itemDelay={0.2}
              direction="up"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-card backdrop-blur-sm">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="font-body text-light-blue mb-6 italic leading-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-display font-bold text-white">
                      {testimonial.author}
                    </div>
                    <div className="font-body text-muted text-sm leading-6">
                      {testimonial.role}, {testimonial.organization}
                    </div>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-navy">
                Ready to Get Started?
              </h2>
              <p className="font-body text-xl leading-8 text-medium-grey mb-8">
                Join hundreds of organizations already using our solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-demo">
                  <Button size="lg" className="shadow-2xl hover:shadow-3xl">
                    Book a Free Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </Layout>
  )
}
