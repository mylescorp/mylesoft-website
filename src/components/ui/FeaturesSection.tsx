'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

interface Feature {
  title: string
  description: string
  icon: string
}

interface FeaturesSectionProps {
  title: string
  description: string
  features: Feature[]
  centerHeader?: boolean
}

export function FeaturesSection({ title, description, features, centerHeader = false }: FeaturesSectionProps) {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={centerHeader ? 'text-center' : ''}>
          <div className={`flex items-center gap-3 mb-4 ${centerHeader ? 'justify-center' : ''}`}>
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
              Features
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-card shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-xl">
                <Icon name={feature.icon} size={22} className="text-gold" />
              </div>

              <h3 className="font-display font-bold text-navy text-2xl mb-3">
                {feature.title}
              </h3>

              <p className="font-body text-[1rem] leading-8 text-medium-grey">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
