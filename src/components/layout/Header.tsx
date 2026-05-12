'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { MegaMenu } from '@/components/layout/MegaMenu'
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
    { name: 'Solutions', href: '#' },
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Coverage', href: '/coverage' },
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
          ? 'bg-navy-deep border-b border-gold/25 shadow-lg shadow-navy-900/20'
          : 'bg-navy-deep border-b border-gold/15'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22 w-full">
          {/* Logo */}
          <div className="flex items-center group">
            <Logo size="lg" className="group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            <MegaMenu />
            <Link href="/" transitionTypes={['fade']} className="flex items-center group">
              <span className="ml-3 flex flex-col">
                <span className="text-[14px] font-body font-semibold text-white group-hover:text-gold transition-colors duration-300">Home</span>
              </span>
            </Link>
            {navigation
              .filter((item) => item.name !== 'Solutions' && item.name !== 'Home' && item.name !== 'Coverage')
              .map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="relative text-ice/90 hover:text-gold transition-all duration-200 font-body font-medium text-[14px] tracking-[0.15px] group"
                >
                  {item.name}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center ml-6 shrink-0">
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
            className="lg:hidden p-2 rounded-lg text-light-blue hover:text-gold hover:bg-navy-dark/50 transition-colors duration-200"
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
        <div className="fixed inset-0 z-50 bg-navy-deep flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 p-8">
            <button
              className="absolute top-4 right-4 p-2 rounded-lg text-light-blue hover:text-gold hover:bg-navy-dark/50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col space-y-6 text-center max-w-md w-full">
              {/* Solutions */}
              <div className="px-6 py-4">
                <MegaMenu />
              </div>
              
              {/* Home */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-4 text-xl font-body font-bold text-white hover:text-gold transition-colors duration-200 text-center border-l-2 border-transparent hover:border-gold rounded-lg"
              >
                Home
              </Link>
              
              {/* Other Navigation Items */}
              {navigation
                .filter((item) => item.name !== 'Solutions' && item.name !== 'Home' && item.name !== 'Coverage')
                .map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-xl font-body font-medium text-ice/90 hover:text-gold transition-colors duration-200 text-center border-l-2 border-transparent hover:border-gold rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
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
