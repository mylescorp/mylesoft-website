import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { Logo } from '@/components/ui/Logo'
import { Handshake, Target, Globe, Award, TrendingUp, Users, Mail, Phone, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Partners — MylesCorp Technologies',
  description: 'Partner with MylesCorp Technologies to deliver software products across East Africa. Technology, reseller, and integration partnerships.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/partners',
  },
}

const PARTNERS_DATA = {
  overview: {
    title: 'Partners',
    tagline: 'Partner With Us  for Success',
    description: [
      'Join our growing ecosystem of partners delivering practical systems across East Africa.',
      'Together, we can reach more customers and create greater impact in the region.'
    ],
    image: '/api/og/product?name=Partners&category=Collaboration',
    stats: [
      { number: '50+', label: 'Active Partners' },
      { number: '4', label: 'Partner Types' },
      { number: '12', label: 'Countries Reached' },
      { number: '95%', label: 'Partner Satisfaction' }
    ]
  },
  features: [
    {
      icon: '🤝',
      title: 'Mutual Growth',
      description: 'We grow together by sharing resources, expertise, and market opportunities.'
    },
    {
      icon: '🎯',
      title: 'Shared Success',
      description: 'Our success is tied to our partners\' success - we win when you win.'
    },
    {
      icon: '🌍',
      title: 'Market Expansion',
      description: 'Expand your reach across East Africa with our established network and local expertise.'
    },
    {
      icon: '🚀',
      title: 'Innovation Support',
      description: 'Access production-ready technology and innovation resources to enhance your offerings.'
    },
    {
      icon: '💡',
      title: 'Technical Excellence',
      description: 'Use our technical guidance, integration support, and handover process.'
    },
    {
      icon: '🏆',
      title: 'Brand Association',
      description: 'Partner with a trusted brand known for quality and innovation in African markets.'
    }
  ],
  process: [
    { step: 1, title: 'Application', description: 'Submit your partnership application and tell us about your business' },
    { step: 2, title: 'Evaluation', description: 'We review your application and assess mutual fit and opportunities' },
    { step: 3, title: 'Agreement', description: 'We establish partnership terms and sign agreements' },
    { step: 4, title: 'Onboarding', description: 'We provide training, resources, and partner handover' },
    { step: 5, title: 'Growth', description: 'We work together to grow our businesses and serve customers' }
  ],
  targets: [
    'Technology Companies - Software providers, SaaS companies, and technology vendors',
    'System Integrators - IT consulting firms and implementation specialists',
    'Resellers - Value-added resellers and distributors across East Africa',
    'Strategic Partners - Industry associations, educational institutions, and government agencies'
  ],
  testimonials: [
    {
      quote: 'Partnering with MylesCorp has opened new markets for us and significantly increased our revenue.',
      author: 'David Kimani',
      role: 'CEO',
      organization: 'TechSolutions Kenya'
    },
    {
      quote: 'The support and resources provided by MylesCorp have been instrumental in our growth.',
      author: 'Sarah Ochieng',
      role: 'Managing Director',
      organization: 'Innovate Uganda'
    },
    {
      quote: 'Our partnership with MylesCorp has allowed us to deliver better solutions to our customers.',
      author: 'Michael Mwangi',
      role: 'Founder',
      organization: 'Digital Tanzania'
    }
  ]
}

const partnershipTypes = [
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Strategic Partners",
    description: "Collaborate with us to deliver complete systems to shared customers",
    benefits: ["Revenue sharing opportunities", "Co-marketing initiatives", "Joint product development"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Technology Partners",
    description: "Integrate your technology with our platform to expand your market reach",
    benefits: ["API integration support", "Technical collaboration", "Shared customer base"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Channel Partners",
    description: "Resell our solutions and earn attractive commissions while growing your business",
    benefits: ["Competitive commission rates", "Sales training and support", "Marketing materials"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Implementation Partners",
    description: "Help businesses implement our solutions and join our certified partner network",
    benefits: ["Certification program", "Implementation tools", "Customer referrals"]
  }
]

const currentPartners = [
  {
    name: "Microsoft",
    type: "Technology Partner",
    description: "Azure and Office 365 integration partner",
    logo: "/partners/microsoft.png"
  },
  {
    name: "Google Cloud",
    type: "Technology Partner",
    description: "Cloud infrastructure and AI services partner",
    logo: "/partners/google.png"
  },
  {
    name: "Safaricom",
    type: "Strategic Partner",
    description: "Mobile payments and connectivity partner",
    logo: "/partners/safaricom.png"
  },
  {
    name: "Equity Bank",
    type: "Financial Partner",
    description: "Payment processing and financial services partner",
    logo: "/partners/equity.png"
  }
]

const partnershipStats = [
  { number: 50, label: "Active Partners", suffix: "+" },
  { number: 10, label: "Countries", suffix: "+" },
  { number: 100000, label: "End Users", suffix: "+" },
  { number: 95, label: "Partner Satisfaction", suffix: "%" }
]

export default function PartnersPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
          {/* Grid texture overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Gold top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                PARTNER WITH US
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Partner With Us
              <span className="text-white">
                For Success
              </span>
            </h1>

            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              {PARTNERS_DATA.overview.description[0]}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {PARTNERS_DATA.overview.stats.map((stat, index) => (
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
          title={PARTNERS_DATA.overview.title}
          description={PARTNERS_DATA.overview.description}
          stats={PARTNERS_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection
          title="Why Partner With MylesCorp"
          description="We provide the resources, support, and opportunities you need to grow your business and serve customers better."
          features={PARTNERS_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Partnership Journey"
          description="From application to growth — we support you every step of the way."
          steps={PARTNERS_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Who We're Looking For"
          targets={PARTNERS_DATA.targets}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="Partner Success Stories"
          testimonials={PARTNERS_DATA.testimonials}
          centerHeader={true}
        />

        {/* Final CTA */}
        <CTASection
          title="Ready to Partner With Us?"
          tagline="Together, We Can Achieve More."
          description="Join our growing ecosystem of partners and unlock new opportunities for growth and success."
          primaryCta={{ text: "Apply Now", href: "/contact" }}
          secondaryCta={{ text: "Learn More", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
