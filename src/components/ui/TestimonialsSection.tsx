'use client'

import React from 'react'

interface Testimonial {
  quote: string
  author: string
  role: string
  organization: string
}

interface TestimonialsSectionProps {
  title: string
  testimonials: Testimonial[]
  centerHeader?: boolean
}

export function TestimonialsSection({ title, testimonials, centerHeader = false }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-navy-deep">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={centerHeader ? 'text-center' : ''}>
          <div className={`flex items-center gap-3 mb-4 ${centerHeader ? 'justify-center' : ''}`}>
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
              Testimonials
            </span>
            <div className="w-8 h-0.5 bg-gold" />
          </div>

          <h2 className="font-display font-bold text-white text-4xl md:text-5xl leading-tight mb-12">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7 shadow-card backdrop-blur-sm"
            >
              <div className="flex gap-1.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 w-4 bg-gold"
                    style={{
                      clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)',
                    }}
                  />
                ))}
              </div>

              <p className="font-body text-[1rem] leading-8 italic text-light-blue mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="border-t border-white/10 pt-5">
                <div className="font-display font-bold text-white text-lg">
                  {testimonial.author}
                </div>

                <div className="mt-1 font-body text-sm md:text-[0.95rem] leading-6 text-muted">
                  {testimonial.role}, {testimonial.organization}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
