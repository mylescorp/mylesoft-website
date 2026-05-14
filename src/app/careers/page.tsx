import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import Link from 'next/link'
import {
  MapPin,
  Clock,
  Users,
  Brain,
  Heart,
  Shield,
  TrendingUp,
  Target,
  Award,
  Briefcase,
  DollarSign,
  ArrowRight,
  Zap,
  Globe,
  Calendar,
  Star,
  CheckCircle
} from 'lucide-react'

export const metadata = {
  title: 'Careers — Join MylesCorp Technologies',
  description: 'Join East Africa\'s leading AI-powered software company. Explore open positions in engineering, design, sales, and customer success at MylesCorp Technologies in Nairobi, Kenya.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/careers',
  },
}

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '5+ years',
    category: 'Engineering',
    description: 'We are looking for an experienced full-stack developer to join our engineering team and help build scalable AI-powered solutions for African markets.',
    requirements: [
      '5+ years of experience in full-stack development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong understanding of databases and API design',
      'Experience with AI/ML concepts is a plus',
      'Excellent problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Flexible work arrangements',
      'Professional development budget',
      'Health insurance and wellness benefits',
      'Opportunity to work on impactful projects'
    ],
    posted: '2 weeks ago'
  },
  {
    title: 'Product Manager',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '3+ years',
    category: 'Product',
    description: 'Join our product team to drive the development of innovative solutions that address real challenges in education, healthcare, and agriculture.',
    requirements: [
      '3+ years of product management experience',
      'Experience with SaaS products and enterprise software',
      'Strong analytical and data-driven decision making',
      'Excellent communication and stakeholder management',
      'Understanding of African markets is a plus',
      'Experience with agile development methodologies'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Professional development opportunities',
      'Health and wellness benefits',
      'Flexible work environment',
      'Direct impact on customer success'
    ],
    posted: '1 week ago'
  }
]

const departments = [
  {
    name: 'Engineering',
    description: 'Build innovative AI-powered solutions that transform African industries.',
    teamSize: '15+',
    focusAreas: ['Frontend', 'Backend', 'AI/ML', 'DevOps']
  },
  {
    name: 'Product',
    description: 'Shape the future of our products and ensure they solve real customer problems.',
    teamSize: '6+',
    focusAreas: ['Product Strategy', 'Design', 'Research', 'Analytics']
  },
  {
    name: 'Operations',
    description: 'Keep our business running smoothly and efficiently as we scale.',
    teamSize: '8+',
    focusAreas: ['Finance', 'HR', 'Legal', 'Admin']
  },
  {
    name: 'Sales',
    description: 'Drive growth and build relationships with organizations across East Africa.',
    teamSize: '8+',
    focusAreas: ['Business development', 'customer acquisition', 'partnerships']
  },
  {
    name: 'Customer Success',
    description: 'Ensure our customers achieve maximum value and success with our solutions.',
    teamSize: '6+',
    focusAreas: ['Customer onboarding', 'support', 'relationship management']
  },
  {
    name: 'Marketing',
    description: 'Tell our story and build our brand across African markets.',
    teamSize: '4+',
    focusAreas: ['Brand building', 'content creation', 'digital marketing']
  }
]

const benefits = [
  {
    icon: <DollarSign size={24} className="text-gold" />,
    title: 'Competitive Compensation',
    description: 'Market-aligned salaries with performance-based bonuses and equity options for key roles.'
  },
  {
    icon: <Heart size={24} className="text-gold" />,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, wellness programs, and mental health support for all team members.'
  },
  {
    icon: <Briefcase size={24} className="text-gold" />,
    title: 'Professional Growth',
    description: 'Continuous learning opportunities, training budgets, conference attendance, and clear career progression paths.'
  },
  {
    icon: <Users size={24} className="text-gold" />,
    title: 'Great Team',
    description: 'Work with talented, passionate colleagues who are transforming Africa through technology.'
  },
  {
    icon: <Target size={24} className="text-gold" />,
    title: 'Impactful Work',
    description: 'Join a mission-driven company making real difference in education, healthcare, and agriculture.'
  },
  {
    icon: <TrendingUp size={24} className="text-gold" />,
    title: 'Flexible Work',
    description: 'Hybrid work options, flexible hours, and focus on results rather than face time.'
  }
]

const cultureValues = [
  {
    title: 'Innovation First',
    description: 'We encourage experimentation, learning, and pushing boundaries to solve Africa\'s challenges creatively.'
  },
  {
    title: 'Customer Obsessed',
    description: 'Our customers\' success is our success. We go above and beyond to ensure they achieve their goals.'
  },
  {
    title: 'Collaborative Spirit',
    description: 'We believe diverse perspectives create better solutions. Teamwork and knowledge sharing are in our DNA.'
  },
  {
    title: 'Local Context',
    description: 'We understand African markets because we\'re part of them. Our solutions are built by Africans, for Africa.'
  },
  {
    title: 'Growth Mindset',
    description: 'We invest in our people\'s development and provide opportunities for career advancement and skill building.'
  }
]

const CAREERS_DATA = {
  overview: {
    title: 'Careers',
    tagline: 'Build the Future With Us',
    description: [
      'Join a team of innovators transforming African industries through world-class technology.',
      'We\'re always looking for talented people who share our passion for making a difference.'
    ],
    image: '/api/og/product?name=Careers&category=Join',
    stats: [
      { number: '50+', label: 'Team Members' },
      { number: '6', label: 'Departments' },
      { number: '4', label: 'East Africa Offices' },
      { number: '98%', label: 'Employee Satisfaction' }
    ]
  },
  features: [
    {
      icon: '🎯',
      title: 'Impactful Work',
      description: 'Transform education, healthcare, agriculture, and business across Africa with innovative technology solutions.'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Continuous learning opportunities, training budgets, and clear career progression paths for professional development.'
    },
    {
      icon: '🌍',
      title: 'African Focus',
      description: 'Build solutions for African markets by Africans, with deep understanding of local challenges and opportunities.'
    },
    {
      icon: '👥',
      title: 'Great Team',
      description: 'Work with talented, passionate colleagues who are committed to excellence and innovation.'
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, hybrid options, and focus on results rather than face time.'
    },
    {
      icon: '🏆',
      title: 'Competitive Benefits',
      description: 'Market-aligned salaries, health insurance, equity options, and comprehensive wellness programs.'
    }
  ],
  process: [
    { step: 1, title: 'Apply', description: 'Submit your application for positions that match your skills and interests' },
    { step: 2, title: 'Review', description: 'Our team reviews your application and assesses fit for the role' },
    { step: 3, title: 'Interview', description: 'Meet with team members to discuss your experience and our culture' },
    { step: 4, title: 'Decision', description: 'We make a decision and extend an offer to successful candidates' },
    { step: 5, title: 'Onboarding', description: 'Join our team with comprehensive onboarding and training program' }
  ],
  targets: [
    'Engineers - Frontend, Backend, AI/ML, and DevOps professionals',
    'Product Managers - Strategic thinkers who love building great products',
    'Sales & Marketing - Growth drivers who can build relationships and tell our story',
    'Operations - People who keep our business running smoothly and efficiently'
  ],
  testimonials: [
    {
      quote: 'Joining MylesCorp was the best career decision I made. The impact we\'re making across Africa is incredible.',
      author: 'Sarah Johnson',
      role: 'Senior Developer',
      organization: 'Engineering Team'
    },
    {
      quote: 'The culture here is amazing. We collaborate, innovate, and truly care about making a difference.',
      author: 'Michael Chen',
      role: 'Product Manager',
      organization: 'Product Team'
    },
    {
      quote: 'MylesCorp invested in my growth and provided opportunities I couldn\'t find anywhere else.',
      author: 'Grace Wanjiku',
      role: 'Sales Lead',
      organization: 'Business Development'
    }
  ]
}

export default function CareersPage() {
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
                JOIN OUR TEAM
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Build the Future
              <span className="text-white italic">
                With Us
              </span>
            </h1>

            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              {CAREERS_DATA.overview.description[0]}
            </p>

            {/* CTA button */}
            <Link href="#open-positions">
              <Button
                size="lg"
                variant="primary"
                className="px-8 py-4 shadow-lg hover:shadow-xl"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16">
              {CAREERS_DATA.overview.stats.map((stat, index) => (
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
          title={CAREERS_DATA.overview.title}
          description={CAREERS_DATA.overview.description}
          stats={CAREERS_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection
          title="Why Join MylesCorp?"
          description="We offer more than just a job – we offer a career with purpose, growth, and impact."
          features={CAREERS_DATA.features}
          centerHeader={true}
        />

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  OPEN POSITIONS
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Current Opportunities
              </h2>
              <p className="font-body text-medium-grey text-lg md:text-xl max-w-2xl mx-auto leading-8">
                We're always looking for talented individuals to join our mission. Find your opportunity below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-[1.5rem] p-8 shadow-card border border-slate-200 hover:-translate-y-1 hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display font-bold text-navy text-2xl mb-2">{position.title}</h3>
                      <div className="flex items-center text-sm text-medium-grey mb-4">
                        <MapPin size={16} className="mr-2" />
                        <span>{position.location}</span>
                        <span className="mx-2">•</span>
                        <span>{position.type}</span>
                        <span className="mx-2">•</span>
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <div className="bg-ice text-navy px-3 py-1 rounded-full text-sm font-semibold font-body">
                      {position.category}
                    </div>
                  </div>

                  <p className="font-body text-medium-grey leading-8 mb-6">{position.description}</p>

                  <div className="mb-6">
                    <h4 className="font-body font-semibold text-navy mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm">
                          <CheckCircle size={16} className="text-gold mr-3 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-medium-grey">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-body font-semibold text-navy mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm">
                          <Star size={16} className="text-gold mr-3 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-medium-grey">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-medium-grey">
                      <Clock size={16} className="mr-2" />
                      Posted {position.posted}
                    </div>
                    <Link href="/contact">
                      <Button size="lg">Apply Now</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <ProcessSection
          title="Our Hiring Process"
          description="From application to onboarding — we ensure a smooth and professional experience for all candidates."
          steps={CAREERS_DATA.process}
          centerHeader={true}
        />

        {/* Departments */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  OUR TEAMS
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Meet Our Departments
              </h2>
              <p className="font-body text-medium-grey text-lg md:text-xl max-w-2xl mx-auto leading-8">
                Meet the departments driving our mission forward. Each team plays a crucial role in transforming African industries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white rounded-[1.5rem] p-8 shadow-card border border-slate-200 hover:-translate-y-1 hover:border-gold/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="text-gold w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-2xl mb-3">{dept.name}</h3>
                  <p className="font-body text-medium-grey leading-7 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-semibold text-navy">Team Size:</span>
                      <span className="text-medium-grey ml-2">{dept.teamSize}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-navy">Focus Areas:</span>
                      <span className="text-medium-grey ml-2">{dept.focusAreas.join(', ')}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full">
                        View {dept.name} Roles
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Targets */}
        <TargetsSection
          title="Who We're Looking For"
          targets={CAREERS_DATA.targets}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="Life at MylesCorp"
          testimonials={CAREERS_DATA.testimonials}
          centerHeader={true}
        />

        {/* Final CTA */}
        <CTASection
          title="Ready to Join Our Team?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Take the next step in your career journey. Join ${CAREERS_DATA.overview.stats[0].number} talented professionals making a difference across Africa.`}
          primaryCta={{ text: "View All Positions", href: "#open-positions" }}
          secondaryCta={{ text: "Join Talent Network", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
