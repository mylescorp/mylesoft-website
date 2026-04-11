'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

interface BackToTopProps {
  className?: string
  showAt?: number
  smooth?: boolean
}

export function BackToTop({ 
  className = '', 
  showAt = 300, 
  smooth = true 
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAt) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [showAt])

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      })
    }
  }

  return (
    <motion.div
      className={`fixed bottom-8 right-8 z-50 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.3, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      <button
        onClick={scrollToTop}
        className="group relative w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-500 text-white rounded-full shadow-premium-gold hover:shadow-premium-glow transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <ArrowUp className="w-5 h-5 absolute group-hover:animate-bounce" />
      </button>
    </motion.div>
  )
}

// Hook for intersection observer
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)
    return () => observer.disconnect()
  }, [elementRef, options])

  return isIntersecting
}
