'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const isDark = saved === 'dark' ||
                  (!saved && prefersDark)
    setDark(isDark)
    document.documentElement.classList.toggle(
      'dark', isDark
    )
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      className="w-9 h-9 rounded-md flex items-center
                 justify-center transition-all duration-200
                 hover:bg-gold/10 border border-gold/20"
      aria-label="Toggle dark mode"
    >
      {dark
        ? <Sun className="w-4 h-4 text-gold" />
        : <Moon className="w-4 h-4 text-muted-blue" />
      }
    </button>
  )
}
