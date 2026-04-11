import { Layout } from '@/components/layout/Layout'
import { AGRIMYLES_DATA } from '@/lib/constants/products'
import { ProductHero } from '@/components/ui/ProductHero'
import { StatsSection } from '@/components/ui/StatsSection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'

export const metadata = {
  title: 'AgriMyles, Smart Agricultural Software for East Africa',
  description: 'AgriMyles gives Kenyan farmers AI-powered crop monitoring, weather alerts & market insights. Join 1,000+ farmers already growing smarter.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/agrimyles',
  },
}

export default function AgriMylesPage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...AGRIMYLES_DATA.hero} productName="AgriMyles" />

        {/* Stats */}
        <StatsSection stats={AGRIMYLES_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection 
          title="AgriMyles"
          description={AGRIMYLES_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "35%", label: "Avg yield increase" },
            { number: "Free", label: "For individual farmers" },
            { number: "AI", label: "Crop recommendations" },
            { number: "Live", label: "Market prices" },
          ]}
        />

        {/* Features */}
        <FeaturesSection 
          title="Smart Farming Tools"
          description="6 powerful tools connecting farmers to knowledge, markets, and financial services."
          features={AGRIMYLES_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'sprout' ? '🌱' : 
                   f.icon === 'clipboard' ? '📊' :
                   f.icon === 'trending-up' ? '💰' :
                   f.icon === 'truck' ? '🚚' :
                   f.icon === 'dollar-sign' ? '🏦' :
                   f.icon === 'users' ? '🤝' : '🤝'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Farm to Market in 5 Steps"
          description="From registration to getting paid in 5 simple steps."
          steps={AGRIMYLES_DATA.process}
          centerHeader={true}
        />

        {/* Pricing */}
        <PricingSection 
          title="Free for Farmers"
          description="Flexible pricing with free access for individual farmers."
          plans={AGRIMYLES_DATA.pricing.map(p => ({
            ...p,
            price: p.price === 'Free' ? 'FREE' : p.price.split('/')[0],
            period: p.price === 'Free' ? 'always free for farmers' : p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Most Popular')
          }))}
          centerHeader={true}
        />

        {/* Testimonials */}
        <TestimonialsSection 
          title="Farmers Love AgriMyles"
          testimonials={AGRIMYLES_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection 
          title="Transform Your Farm Today"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${AGRIMYLES_DATA.overview.stats[0].number} farmers across all 47 counties already using AgriMyles to grow smarter.`}
          primaryCta={{ text: "Get Started Free", href: "/book-demo" }}
          secondaryCta={{ text: "WhatsApp Us", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
