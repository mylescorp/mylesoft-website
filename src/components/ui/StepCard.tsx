import React from 'react'

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="text-center group slide-up">
      <div className="relative mb-6">
        {/* Connection line */}
        {number < 3 && (
          <div className="absolute top-1/2 left-full w-full h-0.5 bg-light-grey -translate-y-1/2 hidden lg:block" />
        )}

        {/* Step circle */}
        <div className="relative z-10 w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-gold/20 transition-colors hover-scale">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            {icon}
          </div>
        </div>

        {/* Step number */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-navy-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Step {number}
        </div>
      </div>

      <h3 className="heading-3 mb-3">{title}</h3>
      <p className="body-text">{description}</p>
    </div>
  )
}
