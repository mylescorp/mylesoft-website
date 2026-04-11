'use client'

import React from 'react'

interface TargetsSectionProps {
  title: string
  targets: string[]
}

export function TargetsSection({ title, targets }: TargetsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-gold" />
          <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
            Who It&apos;s For
          </span>
        </div>

        <h2 className="font-display font-bold text-navy text-4xl md:text-5xl leading-tight mb-8">
          {title}
        </h2>

        <div className="flex flex-wrap gap-3">
          {targets.map((target, index) => (
            <div
              key={index}
              className="rounded-full border border-gold/25 bg-gold/10 px-5 py-3 shadow-sm"
            >
              <span className="font-body text-[0.98rem] font-medium leading-6 text-navy">
                {target}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
