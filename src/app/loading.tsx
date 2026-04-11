'use client'

import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-deep flex flex-col items-center justify-center">
      {/* MylesCorp Logo */}
      <div className="relative">
        <div className="w-24 h-24 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="MylesCorp"
            width={96}
            height={96}
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        {/* Pulse animation ring */}
        <div className="absolute inset-0 border-4 border-gold/30 rounded-lg animate-ping" />
      </div>
      
      {/* Loading text */}
      <p className="mt-6 text-muted-blue font-body text-sm tracking-wider animate-pulse">
        Loading...
      </p>
    </div>
  )
}
