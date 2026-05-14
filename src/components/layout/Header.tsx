'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import Link from 'next/link'
import { useSmoothScroll } from '@/components/ui/ScrollReveal'
import { usePathname, useRouter } from 'next/navigation'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollToElement } = useSmoothScroll()
  const pathname = usePathname()
  const router = useRouter()

  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Brochure', href: '/brochure' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToElement(href.substring(1), 80)
    } else {
      router.push(href)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy border-b border-gold/25 shadow-lg shadow-navy-900/20'
          : 'bg-navy border-b border-gold/15'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22 w-full">
          {/* Logo */}
          <div className="flex items-center group">
            <Logo size="lg" className="group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6" aria-label="Primary navigation">
            {navigation
              .map((item) => {
                const active = pathname === item.href

                return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative font-body text-[14px] font-medium tracking-[0.15px] transition-all duration-200 group ${
                    active ? 'text-gold' : 'text-white/90 hover:text-light-blue'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.name}
                  <span className={`absolute bottom-[-2px] left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
                )
              })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center ml-6 shrink-0">
            <Link href="/book-demo" transitionTypes={['slide']}>
              <Button
                size="nav"
                className="min-w-[132px] rounded-xl px-5 py-3 text-[13px] shadow-md hover:-translate-y-0.5"
              >
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 rounded-lg text-light-blue hover:text-gold hover:bg-navy-dark/50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-navy flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 p-8">
            <button
              className="absolute top-4 right-4 p-2 rounded-lg text-light-blue hover:text-gold hover:bg-navy-dark/50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-4 text-center max-w-md w-full">
              {navigation
                .map((item) => {
                  const active = pathname === item.href

                  return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-4 text-xl font-body font-medium transition-colors duration-200 text-center border-l-2 rounded-lg ${
                      active
                        ? 'border-gold text-gold bg-white/5'
                        : 'border-transparent text-white/90 hover:text-light-blue hover:border-gold'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                  )
                })}
            </div>

            <div className="mt-8">
              <Link href="/book-demo" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="primary"
                  className="w-full shadow-lg hover:shadow-xl bg-gold text-navy hover:bg-gold-light font-body font-bold px-8 py-4 text-lg"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
