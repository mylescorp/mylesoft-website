'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, X, ArrowRight, Star, Shield, Zap, Users, Globe, Heart, Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Product {
  name: string
  description: string
  href: string
  icon: React.ReactNode
  features: string[]
  badge?: string
  popular?: boolean
}

interface Category {
  title: string
  description: string
  products: Product[]
}

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const categories: Category[] = [
    {
      title: 'Education',
      description: 'Transform learning with AI-powered education solutions',
      products: [
        {
          name: 'EduMyles',
          description: 'Complete school management system',
          href: '/products/edumyles',
          icon: <Target className="w-5 h-5" />,
          features: ['Student Management', 'AI Grading', 'Parent Portal', 'Analytics'],
          popular: true
        },
        {
          name: 'EduRyde',
          description: 'Modern school transport management and tracking system',
          href: '/products/eduryde',
          icon: <Shield className="w-5 h-5" />,
          features: ['Real-time Tracking', 'Route Optimization', 'Parent Notifications', 'Safety Monitoring'],
          badge: 'New'
        }
      ]
    },
    {
      title: 'Healthcare',
      description: 'Revolutionize healthcare delivery with smart technology',
      products: [
        {
          name: 'MylesCare',
          description: 'Intelligent hospital management',
          href: '/products/mylescare',
          icon: <Heart className="w-5 h-5" />,
          features: ['Patient Records', 'AI Diagnostics', 'Appointment System', 'Billing']
        }
      ]
    },
    {
      title: 'Agriculture',
      description: 'Empower farmers with data-driven agricultural solutions',
      products: [
        {
          name: 'AgriMyles',
          description: 'Smart agricultural platform',
          href: '/products/agrimyles',
          icon: <Globe className="w-5 h-5" />,
          features: ['Crop Monitoring', 'Weather Analytics', 'Market Prices', 'Farm Management']
        }
      ]
    },
    {
      title: 'Business',
      description: 'Accelerate business growth with intelligent solutions',
      products: [
        {
          name: 'MylesCRM',
          description: 'Customer relationship management',
          href: '/products/mylescrm',
          icon: <Users className="w-5 h-5" />,
          features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Automation']
        }
      ]
    },
    {
      title: 'AI Platform',
      description: 'Africa\'s intelligence engine powering all solutions',
      products: [
        {
          name: 'Myles AI',
          description: 'Africa\'s intelligence engine with local language support',
          href: '/products/myles-ai',
          icon: <Zap className="w-5 h-5" />,
          features: ['Multi-language AI', 'Industry Solutions', 'Real-time Analytics', 'NLP Processing'],
          badge: 'New'
        }
      ]
    },
    {
      title: 'Financial Services',
      description: 'Revolutionizing financial transactions with secure digital solutions',
      products: [
        {
          name: 'MylesPay',
          description: 'Digital payment solution for seamless transactions',
          href: '/products/mylespay',
          icon: <Star className="w-5 h-5" />,
          features: ['Mobile Money Integration', 'Multi-currency Support', 'Instant Settlements', 'Payment Analytics']
        }
      ]
    },
    {
      title: 'Logistics',
      description: 'Optimizing supply chains and fleet operations with intelligent tracking',
      products: [
        {
          name: 'MylesLogistics',
          description: 'Supply chain and fleet management solution',
          href: '/products/myleslogistics',
          icon: <Shield className="w-5 h-5" />,
          features: ['Fleet Tracking', 'Route Optimization', 'Delivery Management', 'Warehouse Management']
        }
      ]
    },
    {
      title: 'Real Estate',
      description: 'Streamlining property management and real estate operations',
      products: [
        {
          name: 'MylesProperty',
          description: 'Property management system for real estate professionals',
          href: '/products/mylesproperty',
          icon: <Target className="w-5 h-5" />,
          features: ['Property Listings', 'Tenant Management', 'Rent Collection', 'Maintenance Tracking']
        }
      ]
    },
    {
      title: 'Retail',
      description: 'Enhancing retail operations with integrated POS and inventory management',
      products: [
        {
          name: 'MylesRetail',
          description: 'Point of sale and inventory management for retail businesses',
          href: '/products/mylesretail',
          icon: <Users className="w-5 h-5" />,
          features: ['POS System', 'Inventory Management', 'Customer Loyalty', 'Sales Analytics']
        }
      ]
    },
    {
      title: 'Government',
      description: 'Digitalizing public sector services for improved citizen engagement',
      products: [
        {
          name: 'MylesGov',
          description: 'Digital governance solution for public sector efficiency',
          href: '/products/mylesgov',
          icon: <Shield className="w-5 h-5" />,
          features: ['Citizen Services', 'Document Management', 'Workflow Automation', 'Public Records']
        }
      ]
    },
    {
      title: 'Manufacturing',
      description: 'Optimizing production processes with smart manufacturing solutions',
      products: [
        {
          name: 'MylesManufacturing',
          description: 'Production and quality management for manufacturers',
          href: '/products/mylesmanufacturing',
          icon: <Zap className="w-5 h-5" />,
          features: ['Production Planning', 'Quality Control', 'Equipment Maintenance', 'Cost Analysis']
        }
      ]
    },
    {
      title: 'Hospitality',
      description: 'Elevating guest experiences with comprehensive hospitality management',
      products: [
        {
          name: 'MylesHospitality',
          description: 'Hotel and restaurant management system',
          href: '/products/myles-hospitality',
          icon: <Heart className="w-5 h-5" />,
          features: ['Reservation Management', 'Room Service', 'Restaurant POS', 'Guest Services']
        }
      ]
    },
    {
      title: 'Legal',
      description: 'Streamlining legal practice management with intelligent automation',
      products: [
        {
          name: 'MylesLegal',
          description: 'Practice management solution for law firms',
          href: '/products/myleslegal',
          icon: <Shield className="w-5 h-5" />,
          features: ['Case Management', 'Document Management', 'Time Tracking', 'Billing System']
        }
      ]
    },
    {
      title: 'Energy',
      description: 'Optimizing energy consumption and management with smart monitoring',
      products: [
        {
          name: 'MylesEnergy',
          description: 'Energy management and monitoring solution',
          href: '/products/mylesenergy',
          icon: <Zap className="w-5 h-5" />,
          features: ['Energy Monitoring', 'Consumption Analytics', 'Predictive Maintenance', 'Cost Optimization']
        }
      ]
    },
    {
      title: 'Non-Profit',
      description: 'Empowering NGOs with tools for donor and volunteer management',
      products: [
        {
          name: 'MylesNonProfit',
          description: 'Donor and volunteer management for NGOs',
          href: '/products/mylesnonprofit',
          icon: <Heart className="w-5 h-5" />,
          features: ['Donor Management', 'Volunteer Coordination', 'Grant Tracking', 'Impact Reporting']
        }
      ]
    },
    {
      title: 'Construction',
      description: 'Managing construction projects with intelligent project tracking',
      products: [
        {
          name: 'MylesConstruction',
          description: 'Project management for construction companies',
          href: '/products/mylesconstruction',
          icon: <Target className="w-5 h-5" />,
          features: ['Project Planning', 'Resource Management', 'Budget Tracking', 'Progress Monitoring']
        }
      ]
    },
    {
      title: 'Media',
      description: 'Streamlining content creation and distribution for media organizations',
      products: [
        {
          name: 'MylesMedia',
          description: 'Content management and publishing platform',
          href: '/products/mylesmedia',
          icon: <Shield className="w-5 h-5" />,
          features: ['Content Management', 'Publishing Workflow', 'Media Library', 'Analytics Dashboard']
        }
      ]
    },
    {
      title: 'Transportation',
      description: 'Modernizing public transit with intelligent management systems',
      products: [
        {
          name: 'MylesTransit',
          description: 'Public transportation management system',
          href: '/products/mylestransit',
          icon: <Users className="w-5 h-5" />,
          features: ['Route Management', 'Fare Collection', 'Vehicle Tracking', 'Schedule Management']
        }
      ]
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setActiveCategory(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
      setActiveCategory(null)
    }, 200)
  }

  const handleCategoryHover = (category: string) => {
    setActiveCategory(category)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setActiveCategory(null)
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* Mega Menu Dropdown Trigger */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="flex items-center space-x-1 text-light-blue hover:text-gold transition-colors py-2 font-body font-medium text-[14px] tracking-[0.3px] group"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>Solutions</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300"></span>
        </button>

        {/* Mega Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-screen max-w-7xl bg-white border border-gold/20 rounded-2xl shadow-2xl mt-2 z-50 overflow-hidden">
            <div className="flex">
              {/* Categories Sidebar */}
              <div className="w-80 bg-off-white border-r border-gold/20 p-6 overflow-y-auto max-h-[600px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-display font-bold text-navy mb-4">Our Solutions</h3>
                  <button
                    onClick={closeMenu}
                    className="p-1 hover:bg-white rounded-lg transition-colors lg:hidden"
                  >
                    <X size={20} className="text-medium-grey" />
                  </button>
                </div>
                
                {/* All Products Option */}
                <Link
                  href="/products"
                  onClick={closeMenu}
                  className={`w-full text-left p-3 rounded-lg transition-colors mb-4 block ${
                      activeCategory === 'all'
                        ? 'bg-white text-navy border-l-4 border-gold'
                        : 'hover:bg-white text-medium-grey'
                  }`}
                  onMouseEnter={() => setActiveCategory('all')}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">ALL</span>
                    </div>
                    <div>
                      <h4 className="font-semibold font-body">All Products</h4>
                      <p className="text-sm text-medium-grey mt-1 font-body">
                        View all 18 MylesCorp solutions
                      </p>
                    </div>
                  </div>
                </Link>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.title}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeCategory === category.title
                          ? 'bg-white text-navy border-l-4 border-gold'
                          : 'hover:bg-white text-medium-grey'
                      }`}
                      onMouseEnter={() => handleCategoryHover(category.title)}
                    >
                      <h4 className="font-semibold font-body">{category.title}</h4>
                      <p className="text-sm text-medium-grey mt-1 font-body">
                        {category.description}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 p-4 bg-white rounded-lg border border-gold/20 sticky bottom-0">
                  <h4 className="font-semibold text-navy mb-3 font-body">Get Started</h4>
                  <div className="space-y-2">
                    <Link href="/book-demo" onClick={closeMenu}>
                      <Button size="sm" className="w-full bg-gold text-navy hover:bg-gold-light">
                        Book a Demo
                      </Button>
                    </Link>
                    <Link href="/contact" onClick={closeMenu}>
                      <Button variant="outline" size="sm" className="w-full border-gold text-gold hover:bg-gold hover:text-white">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Why Choose MylesCorp */}
                <div className="mt-6 p-4 bg-navy-deep/5 rounded-lg border border-gold/20">
                  <h4 className="font-semibold text-navy mb-4 font-body">Why Choose MylesCorp?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium text-navy text-sm font-body">East African Focus</h5>
                        <p className="text-xs text-medium-grey font-body">Solutions designed for African markets and challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium text-navy text-sm font-body">Secure & Compliant</h5>
                        <p className="text-xs text-gray-600 font-body">Data protection and regulatory compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium text-navy text-sm font-body">AI-Powered</h5>
                        <p className="text-xs text-gray-600 font-body">Cutting-edge artificial intelligence technology</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium text-navy text-sm font-body">24/7 Support</h5>
                        <p className="text-xs text-gray-600 font-body">Round-the-clock customer assistance</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gold/20">
                    <Link href="/about" onClick={closeMenu} className="flex items-center justify-between text-gold hover:text-gold-light transition-colors text-sm font-medium font-body">
                      <span>About Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Products Content */}
              <div className="flex-1 p-6 overflow-y-auto max-h-[600px]">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Left: Dynamic Content Area */}
                  <div className="lg:col-span-3">
                    {activeCategory && activeCategory !== 'all' ? (
                      <div>
                        <h3 className="text-2xl font-display font-bold text-navy mb-6">
                          {activeCategory} Solutions
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {categories
                            .find((cat) => cat.title === activeCategory)
                            ?.products.map((product) => (
                              <Link
                                key={product.name}
                                href={product.href}
                                onClick={closeMenu}
                                className="group p-6 bg-white border border-gold/20 rounded-xl hover:border-gold hover:shadow-lg transition-all duration-300"
                              >
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                                      {product.icon}
                                    </div>
                                    <div>
                                      <h4 className="text-lg font-semibold text-navy group-hover:text-gold transition-colors font-body">
                                        {product.name}
                                      </h4>
                                      <p className="text-sm text-gray-600 font-body">
                                        {product.description}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {product.popular && (
                                      <span className="px-2 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full font-body">
                                        Popular
                                      </span>
                                    )}
                                    {product.badge && (
                                      <span className="px-2 py-1 bg-navy/10 text-navy text-xs font-semibold rounded-full font-body">
                                        {product.badge}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="space-y-2 mb-4">
                                  {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                                      <span className="text-sm text-gray-600 font-body">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <span className="text-gold text-sm font-medium group-hover:text-gold-light transition-colors font-body">
                                    Learn more →
                                  </span>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    ) : activeCategory === 'all' ? (
                      <div>
                        <h3 className="text-2xl font-display font-bold text-navy mb-6">
                          All MylesCorp Solutions
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl">
                          Discover our complete suite of 18 AI-powered solutions designed to transform businesses across East Africa. From education to healthcare, agriculture to logistics - we have the perfect solution for your industry.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {categories.flatMap((category) => 
                            category.products.map((product) => (
                              <Link
                                key={product.name}
                                href={product.href}
                                onClick={closeMenu}
                                className="group p-4 bg-white border border-gold/20 rounded-lg hover:border-gold hover:shadow-lg transition-all duration-300"
                              >
                                <div className="flex items-center space-x-3 mb-3">
                                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                                    {product.icon}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-navy group-hover:text-gold transition-colors font-body text-base">
                                      {product.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 font-body">
                                      {category.title}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-gold text-xs font-medium group-hover:text-gold-light transition-colors font-body">
                                    View Details →
                                  </span>
                                  {product.popular && (
                                    <span className="px-2 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full font-body">
                                      Popular
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))
                          )}
                        </div>
                        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                          <h4 className="font-semibold text-navy mb-4 font-body">Can&apos;t find what you&apos;re looking for?</h4>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" onClick={closeMenu}>
                              <Button className="bg-gold text-navy hover:bg-gold-light">
                                Talk to an Expert
                              </Button>
                            </Link>
                            <Link href="/book-demo" onClick={closeMenu}>
                              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                                Schedule Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
                          <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-navy mb-2 font-body">Choose a Category</h3>
                        <p className="text-gray-600 font-body">
                          Select a category from the sidebar to explore our solutions
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Far Right: Why Choose MylesCorp Section */}
                  <div className="lg:col-span-1">
                    <div className="bg-navy-deep/5 rounded-xl border border-gold/20 p-6 sticky top-6">
                      <h3 className="text-xl font-display font-bold text-navy mb-4">Why Choose MylesCorp?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-navy text-sm font-body">East African Focus</h4>
                            <p className="text-xs text-gray-600 font-body mt-1">Solutions designed for African markets and challenges</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-navy text-sm font-body">Secure & Compliant</h4>
                            <p className="text-xs text-gray-600 font-body mt-1">Data protection and regulatory compliance</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-navy text-sm font-body">AI-Powered</h4>
                            <p className="text-xs text-gray-600 font-body mt-1">Cutting-edge artificial intelligence technology</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-navy text-sm font-body">24/7 Support</h4>
                            <p className="text-xs text-gray-600 font-body mt-1">Round-the-clock customer assistance</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gold/20">
                        <Link href="/about" onClick={closeMenu} className="flex items-center justify-between text-gold hover:text-gold-light transition-colors text-sm font-medium font-body">
                          <span>About Us</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
