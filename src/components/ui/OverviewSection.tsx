'use client'

import React from 'react'

interface OverviewSectionProps {
  title: string
  description: string[]
  stats: { number: string; label: string }[]
}

export function OverviewSection({ title, description, stats }: OverviewSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                What Is {title}
              </span>
            </div>

            <h2 className="font-display font-bold text-navy text-4xl md:text-5xl leading-tight mb-5">
              {title}
            </h2>

            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-[1.02rem] md:text-lg leading-8 text-medium-grey"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-gold/20 bg-navy-deep p-6 sm:p-8 shadow-card">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner"
                >
                  <div className="font-display font-bold text-3xl md:text-4xl text-gold">
                    {stat.number}
                  </div>
                  <div className="mt-2 font-body text-sm md:text-[0.95rem] leading-6 text-light-blue">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
