'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const pct = docHeight > 0
        ? (scrollTop / docHeight) * 100
        : 0
      setProgress(Math.min(pct, 100))
    }

    window.addEventListener('scroll', updateProgress,
      { passive: true })
    updateProgress()

    return () =>
      window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 z-[9999]
                 pointer-events-none"
      style={{ height: '3px', width: '100%' }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background:
            'linear-gradient(90deg, #C79639, #A67C2E)',
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  )
}
