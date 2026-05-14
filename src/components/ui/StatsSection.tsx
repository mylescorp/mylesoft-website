'use client'

import React from 'react'

interface StatsSectionProps {
  stats: { number: string; label: string }[]
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section style={{ background: 'var(--white)', padding: '56px 5%' }}>
      <div className="grid grid-cols-4 gap-6 max-w-[900px] mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div
              className="font-bold leading-[1]"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '40px',
                color: 'var(--gold)',
              }}
            >
              {stat.number}
            </div>
            <div
              className="font-medium mt-1.5"
              style={{
                fontSize: '13px',
                color: 'var(--med)',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
