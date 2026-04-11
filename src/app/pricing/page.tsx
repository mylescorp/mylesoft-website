import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import Link from 'next/link'
import { Check, X, CheckCircle, Star, Shield, Zap, Users, Crown, TrendingUp, Award } from 'lucide-react'

export const metadata = {
  title: 'Pricing — Affordable Plans for All MylesCorp Products & Services',
  description: 'Complete pricing for all 9 MylesCorp products and services. EduMyles, MylesCare, MylesLegal, MylesEnergy, MylesNonProfit, MylesConstruction, MylesHospitality, MylesManufacturing, MylesMedia, MylesTransit. No hidden fees. 14-day free trial.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/pricing',
  },
}

const PRICING_DATA = {
  overview: {
    title: 'Pricing',
    tagline: 'Simple, Transparent Pricing for African Businesses',
    description: [
      'Affordable plans designed for organizations of all sizes across Africa.',
      'No hidden fees, no surprises. Start free and scale as you grow with confidence.'
    ],
    image: '/api/og/product?name=Pricing&category=Plans',
    stats: [
      { number: '1,000+', label: 'Happy Customers' },
      { number: '14', label: 'Day Free Trial' },
      { number: '20%', label: 'Annual Discount' },
      { number: '24/7', label: 'Support Available' }
    ]
  },
  features: [
    {
      icon: '👑',
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise charges or hidden costs. What you see is what you pay.'
    },
    {
      icon: '📈',
      title: 'Flexible Scaling',
      description: 'Easily upgrade or downgrade your plan as your business grows or requirements change.'
    },
    {
      icon: '🏆',
      title: 'Premium Support',
      description: '24/7 customer support with dedicated account managers for enterprise plans.'
    },
    {
      icon: '🛡️',
      title: 'Security First',
      description: 'Enterprise-grade security with data encryption and compliance across all plans.'
    },
    {
      icon: '⚡',
      title: 'Quick Setup',
      description: 'Get started in minutes with our streamlined onboarding process and guided setup.'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Collaborate seamlessly with your team with role-based access and shared workspaces.'
    }
  ],
  process: [
    { step: 1, title: 'Choose Your Plan', description: 'Select the perfect plan based on your organization size and needs' },
    { step: 2, title: 'Start Free Trial', description: 'Begin your 14-day free trial with full access to all features' },
    { step: 3, title: 'Onboarding & Setup', description: 'Our team helps you get started with personalized onboarding' },
    { step: 4, title: 'Go Live', description: 'Launch your solution with confidence and start seeing results immediately' },
    { step: 5, title: 'Scale & Grow', description: 'Upgrade your plan as your business grows and needs evolve' }
  ],
  targets: [
    'Startups - Small businesses and startups looking for affordable solutions',
    'SMEs - Small and medium enterprises needing scalable business tools',
    'Enterprise - Large organizations requiring comprehensive solutions',
    'Non-Profits - Organizations with special pricing and dedicated support'
  ],
  testimonials: [
    {
      quote: 'The pricing is incredibly transparent and affordable. We started with the Professional plan and scaled as we grew.',
      author: 'Sarah Johnson',
      role: 'CEO',
      organization: 'TechStart Kenya'
    },
    {
      quote: 'The 14-day free trial let us test everything before committing. The value we got was exceptional.',
      author: 'Michael Chen',
      role: 'Operations Director',
      organization: 'East Africa Manufacturing'
    },
    {
      quote: 'Best pricing structure we have seen. No hidden fees, excellent support, and great features.',
      author: 'Grace Wanjiku',
      role: 'Managing Partner',
      organization: 'LegalEdge Associates'
    }
  ]
}

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small organizations getting started with digital transformation.',
    price: 'KES 15,000',
    period: '/month',
    features: [
      'Up to 50 users',
      'Basic product access',
      'Email support',
      'Standard security',
      'Monthly reports',
      'Mobile app access'
    ],
    notIncluded: [
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access',
      'White-label options'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing organizations needing advanced features and support.',
    price: 'KES 45,000',
    period: '/month',
    features: [
      'Up to 200 users',
      'All products access',
      'Priority email support',
      'Advanced security',
      'Weekly reports',
      'Mobile app access',
      'Advanced analytics',
      'API access',
      'Custom training'
    ],
    notIncluded: [
      'Dedicated support',
      'Custom integrations',
      'White-label options'
    ],
    popular: true,
    cta: 'Choose Professional'
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for large organizations with complex needs.',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Unlimited users',
      'All products access',
      '24/7 dedicated support',
      'Enterprise security',
      'Real-time reports',
      'Mobile app access',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'White-label options',
      'Dedicated account manager',
      'Custom development'
    ],
    notIncluded: [],
    popular: false,
    cta: 'Contact Sales'
  }
]

const productPricing = [
  {
    category: 'Education',
    products: [
      {
        name: 'EduMyles Basic',
        price: 'KES 10,000',
        period: '/month',
        features: ['Up to 100 students', 'Basic management', 'Parent portal', 'Mobile app', 'Email support']
      },
      {
        name: 'EduMyles Pro',
        price: 'KES 25,000',
        period: '/month',
        features: ['Up to 500 students', 'Advanced features', 'Analytics', 'Mobile app', 'Priority support', 'Most Popular']
      },
      {
        name: 'EduMyles Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited students', 'All features', 'Custom development', 'Dedicated support']
      }
    ]
  },
  {
    category: 'Healthcare',
    products: [
      {
        name: 'MylesCare Basic',
        price: 'KES 15,000',
        period: '/month',
        features: ['Up to 50 doctors', 'Basic patient management', 'Appointment scheduling', 'Mobile app']
      },
      {
        name: 'MylesCare Pro',
        price: 'KES 40,000',
        period: '/month',
        features: ['Up to 200 doctors', 'Advanced features', 'AI diagnostics', 'Telemedicine', 'Priority support', 'Most Popular']
      },
      {
        name: 'MylesCare Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited doctors', 'All features', 'Custom integrations', 'Dedicated support']
      }
    ]
  },
  {
    category: 'Agriculture',
    products: [
      {
        name: 'AgriMyles Small Farm',
        price: 'KES 5,000',
        period: '/month',
        features: ['Up to 10 hectares', 'Basic monitoring', 'Weather alerts', 'Mobile app']
      },
      {
        name: 'AgriMyles Commercial',
        price: 'KES 20,000',
        period: '/month',
        features: ['Up to 100 hectares', 'Advanced analytics', 'Market insights', 'Priority support', 'Most Popular']
      },
      {
        name: 'AgriMyles Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited hectares', 'All features', 'Custom solutions', 'Dedicated support']
      }
    ]
  },
  {
    category: 'Legal',
    products: [
      {
        name: 'MylesLegal Starter',
        price: 'KES 5,000',
        period: '/month',
        features: ['Up to 3 users', 'Basic case management', 'Document storage (5GB)', 'Mobile app', 'Email support']
      },
      {
        name: 'MylesLegal Professional',
        price: 'KES 15,000',
        period: '/month',
        features: ['Up to 15 users', 'Advanced case management', 'Document storage (50GB)', 'Priority support', 'Client portal', 'Time tracking', 'Most Popular']
      },
      {
        name: 'MylesLegal Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited users', 'Full feature access', 'Unlimited storage', 'Dedicated support', 'Custom integrations']
      }
    ]
  },
  {
    category: 'Energy',
    products: [
      {
        name: 'MylesEnergy Basic',
        price: 'KES 3,000',
        period: '/month',
        features: ['Up to 5 meters', 'Basic monitoring', 'Monthly reports', 'Mobile app', 'Email support']
      },
      {
        name: 'MylesEnergy Professional',
        price: 'KES 10,000',
        period: '/month',
        features: ['Up to 25 meters', 'Advanced analytics', 'Real-time alerts', 'Predictive maintenance', 'Priority support', 'API access', 'Most Popular']
      },
      {
        name: 'MylesEnergy Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited meters', 'Full analytics suite', 'AI optimization', 'Dedicated support', 'Custom integrations']
      }
    ]
  },
  {
    category: 'NonProfit',
    products: [
      {
        name: 'MylesNonProfit Starter',
        price: 'KES 2,000',
        period: '/month',
        features: ['Up to 100 donors', 'Basic volunteer management', 'Event planning', 'Mobile app', 'Email support']
      },
      {
        name: 'MylesNonProfit Professional',
        price: 'KES 8,000',
        period: '/month',
        features: ['Up to 1,000 donors', 'Advanced volunteer management', 'Grant tracking', 'Impact reporting', 'Priority support', 'API access', 'Most Popular']
      },
      {
        name: 'MylesNonProfit Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited donors', 'Full feature access', 'Multi-organization management', 'Dedicated support']
      }
    ]
  },
  {
    category: 'Construction',
    products: [
      {
        name: 'MylesConstruction Basic',
        price: 'KES 5,000',
        period: '/month',
        features: ['Up to 10 projects', 'Basic project tracking', 'Resource management', 'Mobile app', 'Email support']
      },
      {
        name: 'MylesConstruction Professional',
        price: 'KES 20,000',
        period: '/month',
        features: ['Up to 50 projects', 'Advanced tracking', 'Budget control', 'Quality management', 'Priority support', 'API access', 'Most Popular']
      },
      {
        name: 'MylesConstruction Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited projects', 'Full feature access', 'Multi-site management', 'Dedicated support', 'Custom integrations']
      }
    ]
  },
  {
    category: 'Hospitality',
    products: [
      {
        name: 'MylesHospitality Basic',
        price: 'KES 8,000',
        period: '/month',
        features: ['Up to 50 rooms', 'Basic booking system', 'Guest management', 'Mobile app', 'Email support']
      },
      {
        name: 'MylesHospitality Professional',
        price: 'KES 25,000',
        period: '/month',
        features: ['Up to 200 rooms', 'Advanced booking engine', 'Revenue management', 'Review management', 'Priority support', 'API access', 'Most Popular']
      },
      {
        name: 'MylesHospitality Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited rooms', 'Full feature access', 'Multi-property management', 'Dedicated support', 'Custom integrations']
      }
    ]
  },
  {
    category: 'Manufacturing',
    products: [
      {
        name: 'MylesManufacturing Basic',
        price: 'KES 12,000',
        period: '/month',
        features: ['Up to 50 employees', 'Basic production planning', 'Inventory management', 'Mobile app', 'Email support']
      },
      {
        name: 'MylesManufacturing Professional',
        price: 'KES 35,000',
        period: '/month',
        features: ['Up to 200 employees', 'Advanced planning', 'Quality control', 'Maintenance management', 'Priority support', 'API access', 'Most Popular']
      },
      {
        name: 'MylesManufacturing Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited employees', 'Full feature access', 'Multi-plant management', 'Dedicated support', 'Custom integrations']
      }
    ]
  },
  {
    category: 'Media',
    products: [
      {
        name: 'MylesMedia Basic',
        price: 'KES 6,000',
        period: '/month',
        features: ['Up to 10 users', 'Basic content management', 'Asset library (100GB)', 'Mobile app', 'Email support']
      },
      {
        name: 'MylesMedia Professional',
        price: 'KES 20,000',
        period: '/month',
        features: ['Up to 50 users', 'Advanced content management', 'Video production tools', 'Analytics dashboard', 'Priority support', 'API access', 'Most Popular']
      },
      {
        name: 'MylesMedia Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited users', 'Full feature access', 'Multi-channel publishing', 'Dedicated support', 'Custom integrations']
      }
    ]
  },
  {
    category: 'Transportation',
    products: [
      {
        name: 'MylesTransit Basic',
        price: 'KES 8,000',
        period: '/month',
        features: ['Up to 20 vehicles', 'Basic route planning', 'Fleet tracking', 'Mobile app', 'Email support']
      },
      {
        name: 'MylesTransit Professional',
        price: 'KES 25,000',
        period: '/month',
        features: ['Up to 100 vehicles', 'Advanced route optimization', 'Driver management', 'Cost tracking', 'Priority support', 'API access', 'Most Popular']
      },
      {
        name: 'MylesTransit Enterprise',
        price: 'Custom',
        period: 'pricing',
        features: ['Unlimited vehicles', 'Full feature access', 'Multi-depot management', 'Dedicated support', 'Custom integrations']
      }
    ]
  }
]

const servicesPricing = [
  {
    category: 'Web Development',
    services: [
      {
        name: 'Basic Website',
        price: 'KES 25,000',
        period: 'one-time',
        features: ['5-page website', 'Responsive design', 'Basic SEO', 'Contact form', 'Mobile friendly']
      },
      {
        name: 'Professional Website',
        price: 'KES 75,000',
        period: 'one-time',
        features: ['15-page website', 'Custom design', 'Advanced SEO', 'CMS integration', 'Analytics setup', 'Most Popular']
      },
      {
        name: 'E-commerce Platform',
        price: 'KES 150,000',
        period: 'one-time',
        features: ['Full e-commerce', 'Payment integration', 'Inventory management', 'Customer accounts', 'Admin dashboard']
      }
    ]
  },
  {
    category: 'IT Consulting',
    services: [
      {
        name: 'IT Assessment',
        price: 'KES 30,000',
        period: 'one-time',
        features: ['System audit', 'Security assessment', 'Performance analysis', 'Recommendations', 'Implementation plan']
      },
      {
        name: 'Digital Transformation',
        price: 'KES 100,000',
        period: 'one-time',
        features: ['Process optimization', 'Technology roadmap', 'Staff training', 'Change management', 'Ongoing support', 'Most Popular']
      },
      {
        name: 'Strategic Consulting',
        price: 'KES 200,000',
        period: 'one-time',
        features: ['Business strategy', 'Technology alignment', 'ROI analysis', 'Long-term planning', 'Executive coaching']
      }
    ]
  },
  {
    category: 'Cloud Solutions',
    services: [
      {
        name: 'Cloud Migration',
        price: 'KES 50,000',
        period: 'one-time',
        features: ['Data migration', 'System setup', 'Security configuration', 'Training', 'Documentation']
      },
      {
        name: 'Cloud Infrastructure',
        price: 'KES 15,000',
        period: '/month',
        features: ['Server management', 'Backup solutions', 'Security monitoring', 'Performance optimization', '24/7 support', 'Most Popular']
      },
      {
        name: 'Enterprise Cloud',
        price: 'Custom',
        period: 'pricing',
        features: ['Multi-cloud setup', 'Advanced security', 'Compliance management', 'Dedicated infrastructure', 'Custom solutions']
      }
    ]
  }
]

const faqs = [
  {
    question: 'Do you offer discounts for annual payments?',
    answer: 'Yes! We offer a 20% discount when you pay annually instead of monthly. Contact our sales team to set up annual billing.'
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa, bank transfers, credit cards, and mobile money payments across all East African countries.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
  },
  {
    question: 'Do you provide training and onboarding?',
    answer: 'Yes! Professional and Enterprise plans include comprehensive training and onboarding. Starter plans can purchase training separately.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'Starter plans get email support, Professional plans get priority email support, and Enterprise plans get 24/7 dedicated support.'
  }
]

export default function PricingPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                TRANSPARENT PRICING
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Simple, Honest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Pricing
              </span>
            </h1>
            
            <p className="font-body text-ice text-lg md:text-2xl max-w-3xl mx-auto mb-8 leading-9">
              {PRICING_DATA.overview.description[0]}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/book-demo">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-4 text-sm font-semibold border-gold/50 text-gold hover:border-gold hover:bg-gold hover:text-navy"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {PRICING_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-[0.95rem] text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <OverviewSection 
          title={PRICING_DATA.overview.title}
          description={PRICING_DATA.overview.description}
          stats={PRICING_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection 
          title="Why Choose Our Pricing?"
          description="Transparent, flexible, and designed for African businesses of all sizes."
          features={PRICING_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Get Started in 5 Simple Steps"
          description="From choosing your plan to scaling your business — we make it easy."
          steps={PRICING_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection 
          title="Perfect for Every Organization"
          targets={PRICING_DATA.targets}
        />

        {/* Main Pricing Plans */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Choose Your Plan</h2>
              <p className="body-text max-w-2xl mx-auto">
                Flexible pricing options for organizations of all sizes. All plans include core features with premium options for advanced needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-[1.6rem] shadow-card p-8 transition-all duration-300 h-full flex flex-col ${
                    plan.popular ? 'ring-2 ring-gold-400 ring-offset-4' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gold-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8 flex-shrink-0">
                    <h3 className="text-2xl font-display font-bold text-navy mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <div className="text-4xl font-display font-bold text-gold mb-1">{plan.price}</div>
                      <div className="text-medium-grey text-sm">{plan.period}</div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="mb-8">
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm text-dark-grey">{feature}</span>
                          </div>
                        ))}
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center opacity-60">
                            <X size={16} className="text-medium-grey mr-3 flex-shrink-0" />
                            <span className="text-sm text-medium-grey">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button className={`w-full ${plan.popular ? 'bg-gold-400 text-white hover:bg-gold-500' : ''}`}>
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product-Specific Pricing */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Product-Specific Pricing</h2>
              <p className="body-text max-w-2xl mx-auto">
                Individual product pricing for organizations needing specific solutions.
              </p>
            </div>
            
            <div className="space-y-12">
              {productPricing.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="heading-3 mb-6 text-center">{category.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="bg-white rounded-[1.4rem] shadow-card p-6 border border-slate-200">
                        <h4 className="font-display font-semibold text-navy mb-2">{product.name}</h4>
                        <div className="mb-4">
                          <span className="text-2xl font-display font-bold text-gold">{product.price}</span>
                          <span className="text-medium-grey text-sm">{product.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <Check size={14} className="text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Pricing */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Services Pricing</h2>
              <p className="body-text max-w-2xl mx-auto">
                Professional services for organizations needing expert implementation and consulting.
              </p>
            </div>
            
            <div className="space-y-12">
              {servicesPricing.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="heading-3 mb-6 text-center">{category.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white rounded-[1.4rem] shadow-card p-6 border border-slate-200">
                        <h4 className="font-display font-semibold text-navy mb-2">{service.name}</h4>
                        <div className="mb-4">
                          <span className="text-2xl font-display font-bold text-gold">{service.price}</span>
                          <span className="text-medium-grey text-sm">{service.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <Check size={14} className="text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
              <p className="body-text max-w-2xl mx-auto">
                Got questions about our pricing? We've got answers.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-[1.4rem] shadow-card p-6 border border-slate-200">
                    <h3 className="font-display font-semibold text-navy mb-3">{faq.question}</h3>
                    <p className="body-text">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection 
          title="What Our Customers Say"
          testimonials={PRICING_DATA.testimonials}
          centerHeader={true}
        />

        {/* Final CTA */}
        <CTASection 
          title="Ready to Get Started?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${PRICING_DATA.overview.stats[0].number} happy customers across Africa already thriving with MylesCorp solutions.`}
          primaryCta={{ text: "Start Free Trial", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Sales Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
