import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { Users, Mail, Phone, MapPin, Linkedin, Twitter, Star, Award } from 'lucide-react'
import { TEAM_MEMBERS } from '@/lib/constants/team'
import Image from 'next/image'
import Link from 'next/link'
import { MYLESValues } from '@/components/sections/MYLESValues'

export const metadata = {
  title: 'Our Team — Leadership at MylesCorp Technologies',
  description: 'Meet the leadership team behind MylesCorp Technologies — the brilliant minds transforming Education, Healthcare, Agriculture, and Business across East Africa.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/team',
  },
}

const TEAM_DATA = {
  overview: {
    title: 'Our Team',
    tagline: 'Meet Our Amazing Team',
    description: [
      'We\'re a diverse group of passionate individuals united by our mission.',
      'Transforming African businesses through innovative technology solutions.'
    ],
    image: '/api/og/product?name=Team&category=Leadership',
    stats: [
      { number: '50+', label: 'Team Members' },
      { number: '6', label: 'Departments' },
      { number: '15+', label: 'Years Experience' },
      { number: '4', label: 'East Africa Offices' }
    ]
  },
  features: [
    {
      icon: '👥',
      title: 'Diverse Expertise',
      description: 'Our team brings together experts from engineering, design, business, and domain-specific backgrounds.'
    },
    {
      icon: '🎯',
      title: 'Mission-Driven',
      description: 'Every team member is passionate about making a real difference in African communities.'
    },
    {
      icon: '🌍',
      title: 'Local Understanding',
      description: 'We understand African markets because we\'re part of them, bringing authentic local perspectives.'
    },
    {
      icon: '🚀',
      title: 'Innovation Focus',
      description: 'Our team constantly pushes boundaries to create solutions that address real challenges.'
    },
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Our leadership team has successfully delivered transformative projects across multiple sectors.'
    },
    {
      icon: '💡',
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development to stay at the forefront of technology.'
    }
  ],
  process: [
    { step: 1, title: 'Recruitment', description: 'We attract top talent who share our passion for African transformation' },
    { step: 2, title: 'Onboarding', description: 'Comprehensive integration into our culture and processes' },
    { step: 3, title: 'Development', description: 'Continuous learning and skill enhancement programs' },
    { step: 4, title: 'Collaboration', description: 'Cross-functional teamwork to drive innovation' },
    { step: 5, title: 'Growth', description: 'Career advancement and leadership development opportunities' }
  ],
  targets: [
    'Engineering Talent - Frontend, Backend, AI/ML, and DevOps professionals',
    'Product Experts - Strategic thinkers who understand African markets',
    'Business Leaders - Sales, marketing, and operations professionals',
    'Domain Specialists - Education, healthcare, and agriculture experts'
  ],
  testimonials: [
    {
      quote: 'Working at MylesCorp has been the most rewarding experience of my career. We\'re truly making a difference.',
      author: 'Sarah Johnson',
      role: 'Lead Engineer',
      organization: 'Engineering Team'
    },
    {
      quote: 'The collaborative culture and shared vision make this an amazing place to grow professionally.',
      author: 'Michael Chen',
      role: 'Product Manager',
      organization: 'Product Team'
    },
    {
      quote: 'I\'ve never worked with a more dedicated team. Everyone is committed to our mission.',
      author: 'Grace Wanjiku',
      role: 'Sales Director',
      organization: 'Business Development'
    }
  ]
}

export default function TeamPage() {
  return (
    <Layout>
      {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
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
                MEET THE TEAM
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                Amazing Team
              </span>
            </h1>
            
            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              {TEAM_DATA.overview.description[0]}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {TEAM_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-[0.95rem] text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Values Section */}
      <MYLESValues />

      {/* Overview */}
      <OverviewSection 
        title={TEAM_DATA.overview.title}
        description={TEAM_DATA.overview.description}
        stats={TEAM_DATA.overview.stats}
      />

      {/* Features */}
      <FeaturesSection 
        title="Why Join Our Team"
        description="We bring together diverse talent united by our mission to transform Africa through technology."
        features={TEAM_DATA.features}
        centerHeader={true}
      />

      {/* Process */}
      <ProcessSection 
        title="Our Team Development"
        description="From recruitment to growth — we invest in our people to build a world-class team."
        steps={TEAM_DATA.process}
        centerHeader={true}
      />

      {/* Targets */}
      <TargetsSection 
        title="Who We're Looking For"
        targets={TEAM_DATA.targets}
      />

      {/* Testimonials */}
      <TestimonialsSection 
        title="Life at MylesCorp"
        testimonials={TEAM_DATA.testimonials}
        centerHeader={true}
      />

      {/* Final CTA */}
      <CTASection 
        title="Join Our Amazing Team"
        tagline="Transforming Industries, Empowering Generations."
        description="Ready to make a difference? Join our team and help us transform Africa through innovative technology."
        primaryCta={{ text: "View Open Positions", href: "/careers" }}
        secondaryCta={{ text: "Contact Us", href: "/contact" }}
      />
    </Layout>
  )
}
