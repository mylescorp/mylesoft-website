'use client'

import React from 'react'

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ProcessSectionProps {
  title: string
  description: string
  steps: ProcessStep[]
  centerHeader?: boolean
}

export function ProcessSection({ title, description, steps, centerHeader = false }: ProcessSectionProps) {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={centerHeader ? 'text-center' : ''}>
          <div className={`flex items-center gap-3 mb-4 ${centerHeader ? 'justify-center' : ''}`}>
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
              How It Works
            </span>
            <div className="w-8 h-0.5 bg-gold" />
          </div>

          <h2 className="font-display font-bold text-white text-4xl md:text-5xl leading-tight mb-4">
            {title}
          </h2>

          <p className={`font-body text-lg md:text-xl leading-8 text-light-blue mb-12 ${centerHeader ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-white/10 bg-white/5 p-6 text-center shadow-card backdrop-blur-sm"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-navy text-gold shadow-gold">
                <span className="font-display font-bold text-2xl">
                  {step.step}
                </span>
              </div>

              <h4 className="font-display font-bold text-white text-xl mb-3">
                {step.title}
              </h4>

              <p className="font-body text-[0.98rem] leading-7 text-light-blue">
                {step.description}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
