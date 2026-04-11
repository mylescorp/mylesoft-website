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
  return (
    <section className="py-20 bg-off-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-[1.6rem] border bg-white shadow-card shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                plan.featured ? 'border-gold ring-1 ring-gold/30' : 'border-slate-200'
              }`}
            >
              <div className={`p-6 ${plan.featured ? 'bg-gradient-to-br from-navy-deep via-navy to-[#254a78]' : 'bg-navy-deep'}`}>
                {plan.featured && (
                  <div className="mb-3 inline-flex rounded-full bg-gold px-3 py-1">
                    <span className="font-body text-[10px] font-bold uppercase tracking-[1.4px] text-navy">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="font-display font-bold text-white text-2xl mb-2">
                  {plan.name}
                </h3>

                <p className="font-body text-[0.98rem] leading-7 text-light-blue">
                  {plan.description}
                </p>
              </div>

              <div className="border-b border-slate-200 bg-ice px-6 py-5">
                <div className="font-display font-bold text-3xl text-navy">
                  {plan.price}
                </div>
                <div className="mt-1 font-body text-sm leading-6 text-medium-grey">
                  {plan.period}
                </div>
              </div>

              <div className="p-6 flex-grow">
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <div className="mb-0.5 h-1.5 w-1.5 rotate-45 border-b-2 border-r-2 border-gold" />
                      </div>
                      <span className="font-body text-[0.98rem] leading-7 text-dark-grey">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-200 p-4">
                <Link
                  href="/book-demo"
                  className={`flex w-full items-center justify-center rounded-xl px-5 py-3.5 font-body text-sm font-bold tracking-[0.04em] transition-all duration-200 ${
                    plan.featured
                      ? 'bg-gold text-navy shadow-gold hover:-translate-y-0.5 hover:bg-gold-light'
                      : 'border border-navy/15 text-navy hover:border-gold hover:text-gold'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
