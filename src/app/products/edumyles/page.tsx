import { Layout } from '@/components/layout/Layout'
import { EDUMYLES_DATA } from '@/lib/constants/products'
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
  title: 'EduMyles, School Management System Kenya | MylesCorp',
  description: 'EduMyles is a complete school management system for Kenyan schools, student tracking, CBC grading, parent communication & more. Try it free.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/edumyles',
  },
}

export default function EduMylesPage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...EDUMYLES_DATA.hero} productName="EduMyles" />

        {/* Stats */}
        <StatsSection stats={EDUMYLES_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection
          title="EduMyles"
          description={EDUMYLES_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "99.9%", label: "System uptime" },
            { number: "3 min", label: "Avg registration time" },
            { number: "CBC", label: "Report cards automated" },
            { number: "M-Pesa", label: "Fee collection live" },
            { number: "24/7", label: "Support available" },
            { number: "SMS", label: "Parent notifications" },
          ]}
        />

        {/* Features */}
        <FeaturesSection
          title="Everything Your School Needs"
          description="8 powerful modules covering every aspect of school administration — all in one platform."
          features={EDUMYLES_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'users' ? '👥' :
                   f.icon === 'credit-card' ? '💳' :
                   f.icon === 'file-text' ? '📝' :
                   f.icon === 'check-circle' ? '✅' :
                   f.icon === 'message-circle' ? '📱' :
                   f.icon === 'calendar' ? '🗓️' :
                   f.icon === 'briefcase' ? '💼' :
                   f.icon === 'bar-chart' ? '📊' : '📊'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Up and Running in 5 Steps"
          description="From sign-up to managing your school digitally — a clear and simple onboarding process."
          steps={EDUMYLES_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every School"
          targets={EDUMYLES_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Simple, Transparent Pricing"
          description="Current plan details are maintained on the pricing page and confirmed during consultation."
          plans={EDUMYLES_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Most Popular')
          }))}
          centerHeader={true}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="What Schools Say"
          testimonials={EDUMYLES_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Transform Your School?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${EDUMYLES_DATA.overview.stats[0].number} schools across East Africa already using EduMyles. Book a free demo today.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "WhatsApp Us", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
