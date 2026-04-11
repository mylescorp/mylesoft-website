import { Layout } from '@/components/layout/Layout'
import { ProductHero } from '@/components/ui/ProductHero'
import { StatsSection } from '@/components/ui/StatsSection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'

export const metadata = {
  title: 'MylesRetail — POS & Retail Management Kenya',
  description: 'Complete retail management solution for Kenyan businesses. Point of sale, inventory management, customer loyalty, sales analytics. Built for East African retail sector.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylesretail',
  },
}

const MYLESRETAIL_DATA = {
  hero: {
    eyebrow: 'RETAIL',
    heading: 'Smart Retail',
    goldWord: 'Management',
    subtitle: 'Comprehensive retail solution with POS, inventory, and customer management for modern retail businesses.',
    badge: 'LIVE',
    primaryCta: { text: 'Get Started', href: '/book-demo' },
    secondaryCta: { text: 'Learn More', href: '/contact' }
  },
  overview: {
    stats: [
      { number: "Real-time", label: "Inventory Tracking" },
      { number: "Multi-store", label: "Support" },
      { number: "24/7", label: "Sales Analytics" },
      { number: "99.9%", label: "Uptime" }
    ],
    description: "MylesRetail empowers retail businesses with an all-in-one solution that combines point-of-sale, inventory management, customer relationship management, and powerful analytics. Grow your retail business with data-driven insights and streamlined operations."
  },
  features: [
    {
      icon: 'credit-card',
      title: 'POS System',
      description: 'Modern point-of-sale system with multiple payment options and receipt management.'
    },
    {
      icon: 'package',
      title: 'Inventory Management',
      description: 'Real-time inventory tracking with automated reordering and stock alerts.'
    },
    {
      icon: 'heart',
      title: 'Customer Loyalty',
      description: 'Build customer loyalty with rewards programs and personalized offers.'
    },
    {
      icon: 'bar-chart',
      title: 'Sales Analytics',
      description: 'Comprehensive sales reporting with insights into trends and performance.'
    },
    {
      icon: 'store',
      title: 'Multi-store Support',
      description: 'Manage multiple locations from a single dashboard with centralized control.'
    },
    {
      icon: 'shopping-cart',
      title: 'E-commerce Integration',
      description: 'Seamless integration with online stores and marketplaces.'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Store Setup',
      description: 'Configure your store locations, departments, and product categories.'
    },
    {
      step: 2,
      title: 'Product Import',
      description: 'Import your product catalog with images, prices, and inventory levels.'
    },
    {
      step: 3,
      title: 'POS Configuration',
      description: 'Set up POS terminals, payment methods, and receipt templates.'
    },
    {
      step: 4,
      title: 'Staff Training',
      description: 'Train your team on using the POS system and inventory management.'
    },
    {
      step: 5,
      title: 'Launch Operations',
      description: 'Start selling with real-time inventory sync and sales tracking.'
    }
  ],
  targets: [
    'Retail Stores',
    'Supermarkets',
    'Fashion Boutiques',
    'Electronics Shops',
    'Restaurants',
    'Pharmacies'
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 5,999',
      period: 'per month',
      description: 'Perfect for small retail shops with single locations.',
      features: [
        '1 store location',
        'POS system',
        'Basic inventory',
        'Sales reports',
        'Email support'
      ],
      featured: false
    },
    {
      name: 'Professional',
      price: 'KES 15,999',
      period: 'per month',
      description: 'Ideal for growing retail businesses with multiple locations.',
      features: [
        'Up to 5 stores',
        'Advanced POS',
        'Inventory management',
        'Customer loyalty',
        'Priority support',
        'API access'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large retail chains and enterprises.',
      features: [
        'Unlimited stores',
        'White-label solution',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'Multi-currency support'
      ],
      featured: false
    }
  ],
  testimonials: [
    {
      quote: "MylesRetail has transformed how we manage our three stores. Inventory is now synchronized across all locations in real-time.",
      author: "Peter Njoroge",
      role: "Owner, Fashion Hub Kenya",
      organization: "Fashion Hub Kenya",
      avatar: "PN"
    },
    {
      quote: "The POS system is intuitive and the sales analytics help us make better business decisions every day.",
      author: "Lucy Wairimu",
      role: "Manager, QuickMart Express",
      organization: "QuickMart Express",
      avatar: "LW"
    }
  ]
}

export default function MylesRetailPage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...MYLESRETAIL_DATA.hero} productName="MylesRetail" />

        {/* Stats */}
        <StatsSection stats={MYLESRETAIL_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection 
          title="MylesRetail"
          description={MYLESRETAIL_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "99.9%", label: "System uptime" },
            { number: "5+", label: "Store locations" },
            { number: "24/7", label: "Sales analytics" },
            { number: "Real-time", label: "Inventory sync" },
          ]}
        />

        {/* Features */}
        <FeaturesSection
          title="Everything Your Retail Needs"
          description="6 powerful features covering every aspect of retail management — all in one platform."
          features={MYLESRETAIL_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'credit-card' ? '💳' :
                   f.icon === 'package' ? '📦' :
                   f.icon === 'heart' ? '❤️' :
                   f.icon === 'bar-chart' ? '📊' :
                   f.icon === 'store' ? '🏪' :
                   f.icon === 'shopping-cart' ? '🛒' : '🏬'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Up and Running in 5 Steps"
          description="From store setup to daily operations — a clear and simple implementation process."
          steps={MYLESRETAIL_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every Retailer"
          targets={MYLESRETAIL_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Simple, Transparent Pricing"
          description="All plans include free setup, training, and ongoing support. No hidden fees."
          plans={MYLESRETAIL_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Priority support')
          }))}
          centerHeader={true}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="What Our Customers Say"
          testimonials={MYLESRETAIL_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Transform Your Retail Business?"
          tagline="Modernizing Retail Across East Africa."
          description="Join thousands of retailers already using MylesRetail for efficient operations and increased sales. Start your transformation today."
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Sales", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
