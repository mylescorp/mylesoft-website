'use client'

import React from 'react'
import Link from 'next/link'

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  featured?: boolean
}

interface PricingSectionProps {
  title: string
  description: string
  plans: PricingPlan[]
  centerHeader?: boolean
}

export function PricingSection({ title, description, plans, centerHeader = false }: PricingSectionProps) {
  const planSummaries = plans.map((plan) => `${plan.name}: ${plan.price}${plan.period ? `/${plan.period.replace(/^\/?/, '')}` : ''}`)

  return (
    <section className="py-20 bg-ice">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={centerHeader ? 'text-center' : ''}>
          <div className={`flex items-center gap-3 mb-4 ${centerHeader ? 'justify-center' : ''}`}>
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
              Pricing
            </span>
            <div className="w-8 h-0.5 bg-gold" />
          </div>

          <h2 className="font-display font-bold text-navy text-4xl md:text-5xl leading-tight mb-4">
            {title}
          </h2>

          <p className={`font-body text-lg md:text-xl leading-8 text-medium-grey mb-12 ${centerHeader ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
            {description}
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-card md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-navy md:text-3xl">
                Choose with confidence before you commit
              </h3>
              <p className="mt-3 font-body text-[1rem] leading-8 text-medium-grey">
                Every plan conversation starts with your users, modules, onboarding needs, integrations, and support expectations. We help you compare the right product path, then confirm the final scope in a clean proposal.
              </p>
              {planSummaries.length > 0 && (
                <div className="mt-5 grid gap-2">
                  {planSummaries.map((summary) => (
                    <div key={summary} className="rounded-lg border border-slate-200 bg-ice px-4 py-3 font-body text-sm font-semibold text-navy">
                      {summary}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/pricing"
                className="flex w-full items-center justify-center rounded-xl bg-gold px-5 py-3.5 font-body text-sm font-bold tracking-[0.04em] text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Compare Product Plans
              </Link>
              <Link
                href="/book-demo"
                className="flex w-full items-center justify-center rounded-xl border border-navy/15 px-5 py-3.5 font-body text-sm font-bold tracking-[0.04em] text-navy transition-all duration-200 hover:border-navy"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
