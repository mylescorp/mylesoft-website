import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { Icon } from '@/components/ui/Icon'
import Link from 'next/link'
import { 
  Users, 
  Settings, 
  Brain, 
  Shield, 
  TrendingUp,
  Clock,
  Code,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Heart,
  Monitor,
  Server
} from 'lucide-react'

const SERVICES_DATA = {
  overview: {
    title: 'Services',
    tagline: 'Expert Solutions for African Businesses',
    description: [
      'We deliver comprehensive technology solutions tailored for African markets.',
      'From digital transformation to custom software development, we help businesses thrive.'
    ],
    image: '/api/og/product?name=Services&category=Consulting',
    stats: [
      { number: '200+', label: 'Projects Delivered' },
      { number: '50+', label: 'Happy Clients' },
      { number: '7', label: 'Service Categories' },
      { number: '4', label: 'East Africa Countries' }
    ]
  },
  features: [
    {
      icon: '🎯',
      title: 'Local Expertise',
      description: 'Deep understanding of African markets and unique business challenges.'
    },
    {
      icon: '🚀',
      title: 'Cutting-Edge Technology',
      description: 'Latest technologies and best practices for optimal solutions.'
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Skilled professionals with diverse expertise across multiple domains.'
    },
    {
      icon: '⚡',
      title: 'Agile Approach',
      description: 'Flexible methodologies that adapt to your business needs.'
    },
    {
      icon: '🏆',
      title: 'Proven Results',
      description: 'Track record of successful projects across various industries.'
    },
    {
      icon: '💡',
      title: 'Innovation Focus',
      description: 'Creative solutions that address real business challenges.'
    }
  ],
  process: [
    { step: 1, title: 'Discovery', description: 'We analyze your needs and understand your business context' },
    { step: 2, title: 'Strategy', description: 'We develop a tailored approach and solution roadmap' },
    { step: 3, title: 'Development', description: 'We build and implement the solution with quality assurance' },
    { step: 4, title: 'Deployment', description: 'We launch the solution with comprehensive training and support' },
    { step: 5, title: 'Optimization', description: 'We monitor performance and continuously improve the solution' }
  ],
  targets: [
    'Small to Medium Enterprises - Businesses looking to digitize and scale operations',
    'Large Corporations - Established companies seeking digital transformation and innovation',
    'Government Institutions - Public sector organizations needing modern technology solutions',
    'Non-Profit Organizations - NGOs and social enterprises maximizing impact through technology'
  ],
  testimonials: [
    {
      quote: 'MylesCorp transformed our operations with their digital solutions. We\'re now more efficient than ever.',
      author: 'Sarah Johnson',
      role: 'CEO',
      organization: 'Kenya Manufacturing Co.'
    },
    {
      quote: 'Their custom software solution exceeded our expectations. The team is professional and delivers on time.',
      author: 'Michael Chen',
      role: 'Operations Director',
      organization: 'East Africa Logistics'
    },
    {
      quote: 'The digital transformation consulting helped us modernize our entire business model.',
      author: 'Grace Wanjiku',
      role: 'Managing Director',
      organization: 'Nairobi Retail Group'
    }
  ]
}

const services = [
  {
    name: 'Digital Transformation Consulting',
    description: 'Comprehensive assessment and roadmap development for organizations looking to digitize their operations.',
    icon: <Icon name="brain" className="text-gold-400" size={48} />,
    features: [
      'Digital Readiness Assessment',
      'Technology Roadmap Development',
      'Change Management Strategy',
      'Process Optimization',
      'ROI Analysis',
      'Implementation Planning'
    ],
    duration: '3-6 months',
    price: 'Starting from KES 500,000',
    href: '/services/it-consulting'
  },
  {
    name: 'Custom Software Development',
    description: 'Tailored software solutions built specifically for your organization\'s unique requirements.',
    icon: <Icon name="settings" className="text-gold-400" size={48} />,
    features: [
      'Requirements Analysis',
      'Custom Application Development',
      'Integration Services',
      'Testing & Quality Assurance',
      'Deployment & Training',
      'Ongoing Support'
    ],
    duration: '2-8 months',
    price: 'Starting from KES 300,000',
    href: '/services/software-development'
  },
  {
    name: 'Web Application Development',
    description: 'Modern, responsive web applications that deliver exceptional user experiences.',
    icon: <Icon name="globe" className="text-gold-400" size={48} />,
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Development',
      'Performance Optimization'
    ],
    duration: '1-6 months',
    price: 'Starting from KES 200,000',
    href: '/services/web-app-design'
  },
  {
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: <Icon name="monitor" className="text-gold-400" size={48} />,
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'UI/UX Design',
      'App Store Deployment',
      'Maintenance & Updates',
      'Analytics Integration'
    ],
    duration: '2-6 months',
    price: 'Starting from KES 400,000',
    href: '/services/ui-ux-design'
  },
  {
    name: 'Cloud Solutions',
    description: 'Comprehensive cloud migration and management services for optimal performance.',
    icon: <Icon name="cloud" className="text-gold-400" size={48} />,
    features: [
      'Cloud Migration',
      'Infrastructure Setup',
      'Security & Compliance',
      'Cost Optimization',
      'Backup & Recovery',
      '24/7 Monitoring'
    ],
    duration: '1-3 months',
    price: 'Starting from KES 150,000',
    href: '/services/cloud-solutions'
  },
  {
    name: 'IT Consulting',
    description: 'Strategic IT consulting to help businesses leverage technology effectively.',
    icon: <Icon name="users" className="text-gold-400" size={48} />,
    features: [
      'IT Strategy Development',
      'Technology Assessment',
      'Process Optimization',
      'Security Audits',
      'Vendor Management',
      'Digital Roadmap'
    ],
    duration: '1-2 months',
    price: 'Starting from KES 100,000',
    href: '/services/it-consulting'
  },
  {
    name: 'Web Hosting',
    description: 'Reliable, secure, and high-performance web hosting solutions for businesses of all sizes.',
    icon: <Icon name="server" className="text-gold-400" size={48} />,
    features: [
      'Shared Hosting Plans',
      'VPS & Dedicated Servers',
      'Cloud Hosting Solutions',
      'SSL Certificates',
      'Domain Registration',
      '24/7 Technical Support',
      'Automated Backups',
      'DDoS Protection',
      'Email Hosting',
      'Website Migration'
    ],
    duration: 'Instant Setup',
    price: 'Starting from KES 2,999/month',
    href: '/services/web-hosting'
  }
]

export default function ServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen">
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
                OUR SERVICES
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Expert Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                For African Businesses
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              {SERVICES_DATA.overview.description[0]}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {SERVICES_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  OUR SERVICES
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                Services We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
                Comprehensive technology solutions designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4 font-body">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-2 font-body">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle size={16} className="text-gold mr-2" />
                          <span className="text-gray-600 font-body">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500 font-body">{service.duration}</div>
                      <div className="text-gold font-semibold">{service.price}</div>
                    </div>
                    <Link href={service.href}>
                      <Button size="sm">Learn More</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <OverviewSection 
          title={SERVICES_DATA.overview.title}
          description={SERVICES_DATA.overview.description}
          stats={SERVICES_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection 
          title="Why Choose Our Services"
          description="We combine technical expertise with deep African market understanding to deliver solutions that drive real business value."
          features={SERVICES_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Our Service Delivery Process"
          description="From discovery to optimization — we ensure successful outcomes through proven methodologies."
          steps={SERVICES_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection 
          title="Who We Serve"
          targets={SERVICES_DATA.targets}
        />

        {/* Testimonials */}
        <TestimonialsSection 
          title="Client Success Stories"
          testimonials={SERVICES_DATA.testimonials}
          centerHeader={true}
        />

        {/* Final CTA */}
        <CTASection 
          title="Ready to Transform Your Business?"
          tagline="Expert Solutions, Local Understanding."
          description="Let's discuss how our services can help you achieve your business goals and drive growth."
          primaryCta={{ text: "Book a Consultation", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Us", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
                    
