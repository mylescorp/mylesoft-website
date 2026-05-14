'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  distance?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 50,
  once = true
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, opacity: 0 }
      case 'down': return { y: -distance, opacity: 0 }
      case 'left': return { x: distance, opacity: 0 }
      case 'right': return { x: -distance, opacity: 0 }
      case 'fade': return { opacity: 0 }
      case 'scale': return { scale: 0.8, opacity: 0 }
      default: return { y: distance, opacity: 0 }
    }
  }

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 }
      case 'fade':
        return { opacity: 1 }
      case 'scale':
        return { scale: 1, opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={isInView ? getFinalPosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  offset?: number
}

export function Parallax({ children, className = '', speed = 0.5, offset = 0 }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -speed * 100])

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

interface StaggerRevealProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  itemDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  distance?: number
}

export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.1,
  itemDelay = 0,
  direction = 'up',
  distance = 50
}: StaggerRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, opacity: 0 }
      case 'down': return { y: -distance, opacity: 0 }
      case 'left': return { x: distance, opacity: 0 }
      case 'right': return { x: -distance, opacity: 0 }
      case 'fade': return { opacity: 0 }
      case 'scale': return { scale: 0.8, opacity: 0 }
      default: return { y: distance, opacity: 0 }
    }
  }

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 }
      case 'fade':
        return { opacity: 1 }
      case 'scale':
        return { scale: 1, opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={getInitialPosition()}
          animate={isInView ? getFinalPosition() : getInitialPosition()}
          transition={{
            duration: 0.6,
            delay: itemDelay + (index * staggerDelay),
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

interface ProgressLineProps {
  className?: string
  color?: string
  height?: number
  duration?: number
  delay?: number
}

export function ProgressLine({
  className = '',
  color = 'bg-gold',
  height = 2,
  duration = 1,
  delay = 0
}: ProgressLineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className={`h-full ${color} rounded-full`}
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        style={{ height: `${height}px` }}
      />
    </div>
  )
}

interface CounterProps {
  end: number
  duration?: number
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function Counter({
  end,
  duration = 2,
  delay = 0,
  className = '',
  prefix = '',
  suffix = ''
}: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const endTime = startTime + (duration * 1000) + (delay * 1000)

    const updateCount = () => {
      const now = Date.now()
      if (now < endTime) {
        const progress = (now - startTime - (delay * 1000)) / (duration * 1000)
        const currentCount = Math.floor(progress * end)
        setCount(Math.min(currentCount, end))
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    if (Date.now() >= startTime + (delay * 1000)) {
      updateCount()
    } else {
      setTimeout(updateCount, delay * 1000)
    }
  }, [isInView, end, duration, delay])

  return (
    <div ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
}

// Hook for smooth scroll behavior
export function useSmoothScroll() {
  const scrollToElement = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { scrollToElement, scrollToTop }
}
