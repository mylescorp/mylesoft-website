import { Layout } from '@/components/layout/Layout'
import { MYLESCRM_DATA } from '@/lib/constants/products'
import { ProductHero } from '@/components/ui/ProductHero'
import { StatsSection } from '@/components/ui/StatsSection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'

export const metadata = {
  title: 'MylesCRM, Business Management & CRM Software Kenya',
  description: 'MylesCRM is a complete business management system for Kenyan SMEs, CRM, inventory, invoicing & financial tracking. Start from KES 15,000/mo.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylescrm',
  },
}

export default function MylesCRMPage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...MYLESCRM_DATA.hero} productName="MylesCRM" />

        {/* Stats */}
        <StatsSection stats={MYLESCRM_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection 
          title="MylesCRM"
          description={MYLESCRM_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "40%", label: "Higher close rate" },
            { number: "M-Pesa", label: "Auto-reconciled" },
            { number: "Real-time", label: "Sales analytics" },
            { number: "SMS", label: "Marketing built-in" },
          ]}
        />

        {/* Features */}
        <FeaturesSection 
          title="Everything to Grow Your Business"
          description="8 powerful business tools in one integrated platform designed for East African businesses."
          features={MYLESCRM_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'users' ? '👥' : 
                   f.icon === 'trending-up' ? '📈' :
                   f.icon === 'file-text' ? '💳' :
                   f.icon === 'headset' ? '🎧' :
                   f.icon === 'mail' ? '📨' :
                   f.icon === 'package' ? '📦' :
                   f.icon === 'bar-chart' ? '📊' :
                   f.icon === 'check-square' ? '✅' : '✅'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Set Up and Selling in 5 Steps"
          description="From configuration to scaling revenue in 5 simple steps."
          steps={MYLESCRM_DATA.process}
          centerHeader={true}
        />

        {/* Pricing */}
        <PricingSection 
          title="Plans for Every Business"
          description="Flexible pricing designed to grow with your business."
          plans={MYLESCRM_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Most Popular')
          }))}
          centerHeader={true}
        />

        {/* Testimonials */}
        <TestimonialsSection 
          title="Businesses Growing with MylesCRM"
          testimonials={MYLESCRM_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection 
          title="Ready to Grow Your Business?"
          tagline="Transforming Industries, Empowering Generations."
          description="Join businesses across East Africa using MylesCRM to sell smarter and grow faster."
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "WhatsApp Us", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
