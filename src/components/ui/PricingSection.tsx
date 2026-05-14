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
  const planNames = plans.map((plan) => plan.name).join(', ')

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
                Plan guidance is maintained in one trusted place
              </h3>
              <p className="mt-3 font-body text-[1rem] leading-8 text-medium-grey">
                To keep every product page accurate, package options are reviewed from the pricing page and finalized during consultation.
              </p>
              {planNames && (
                <p className="mt-4 font-body text-sm font-semibold uppercase tracking-[1.4px] text-gold">
                  Available options: {planNames}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/pricing"
                className="flex w-full items-center justify-center rounded-xl bg-gold px-5 py-3.5 font-body text-sm font-bold tracking-[0.04em] text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Review Plan Options
              </Link>
              <Link
                href="/book-demo"
                className="flex w-full items-center justify-center rounded-xl border border-navy/15 px-5 py-3.5 font-body text-sm font-bold tracking-[0.04em] text-navy transition-all duration-200 hover:border-navy"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
