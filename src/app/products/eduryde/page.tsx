import { Layout } from '@/components/layout/Layout'
import { EDURYDE_DATA } from '@/lib/constants/products'
import { ProductHero } from '@/components/ui/ProductHero'
import { StatsSection } from '@/components/ui/StatsSection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'

export const metadata = {
  title: 'EduRyde — School Transport Management System',
  description: 'Real-time GPS school bus tracking, instant parent notifications, and route optimisation. Keep every student safe from door to door across East Africa.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/eduryde',
  },
}

export default function EduRydePage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...EDURYDE_DATA.hero} productName="EduRyde" />

        {/* Stats */}
        <StatsSection stats={EDURYDE_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection
          title="EduRyde"
          description={EDURYDE_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "Live", label: "GPS tracking" },
            { number: "SMS", label: "Parent alerts" },
            { number: "18%", label: "Avg fuel savings" },
            { number: "0", label: "Panic calls/day" },
          ]}
        />

        {/* Features */}
        <FeaturesSection
          title="Complete Transport Safety Suite"
          description="Everything you need to manage school transport safely and efficiently."
          features={EDURYDE_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'map-pin' ? '📍' :
                   f.icon === 'smartphone' ? '🔔' :
                   f.icon === 'route' ? '🗺️' :
                   f.icon === 'users' ? '✅' :
                   f.icon === 'truck' ? '🚌' :
                   f.icon === 'alert-triangle' ? '🚨' : '🚨'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Simple Setup, Immediate Safety"
          description="From route creation to real-time parent tracking in 5 simple steps."
          steps={EDURYDE_DATA.process}
          centerHeader={true}
        />

        {/* Pricing */}
        <PricingSection
          title="Affordable Fleet Management"
          description="Flexible pricing based on your fleet size. All plans include setup and support."
          plans={EDURYDE_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Most Popular')
          }))}
          centerHeader={true}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="Trusted by Schools Across Kenya"
          testimonials={EDURYDE_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Keep Every Student Safe"
          tagline="Transforming Industries, Empowering Generations."
          description="Join schools across East Africa using EduRyde to protect their students every day."
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "WhatsApp Us", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
