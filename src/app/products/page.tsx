import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { Icon } from '@/components/ui/Icon'
import Link from 'next/link'
import { StaggerReveal } from '@/components/ui/ScrollReveal'

export const metadata = {
  title: 'All Products, AI-Powered Software Solutions | MylesCorp',
  description: 'Explore AI-powered software solutions from MylesCorp for schools, hospitals, farms, logistics teams, and businesses across East Africa.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products',
  },
}

const allProducts = [
  // Education Sector
  {
    name: 'EduMyles',
    description: 'Complete school management system transforming education across East Africa.',
    icon: <Icon name="graduation-cap" className="text-gold-400" />,
    features: [
      'Student Information Management',
      'Automated Grading & Reports',
      'Parent Communication Portal',
      'Attendance Tracking',
      'Exam Management',
      'Library Management'
    ],
    status: 'live' as const,
    href: '/products/edumyles',
    sector: 'Education'
  },
  
  // Healthcare Sector
  {
    name: 'MylesCare',
    description: 'AI-powered hospital management system for rn healthcare delivery.',
    icon: <Icon name="stethoscope" className="text-gold-400" />,
    features: [
      'Patient Records Management',
      'Appointment Scheduling',
      'AI Diagnostic Support',
      'Medical Billing',
      'Inventory Management',
      'Telemedicine Integration'
    ],
    status: 'live' as const,
    href: '/products/mylescare',
    sector: 'Healthcare'
  },
  
  // Agriculture Sector
  {
    name: 'AgriMyles',
    description: 'Smart farming solution for agricultural productivity and sustainability.',
    icon: <Icon name="sprout" className="text-gold-400" />,
    features: [
      'Crop Health Monitoring',
      'Weather Integration',
      'Market Price Analytics',
      'Irrigation Management',
      'Supply Chain Tracking',
      'Farm Management'
    ],
    status: 'live' as const,
    href: '/products/agrimyles',
    sector: 'Agriculture'
  },
  
  // Business Sector
  {
    name: 'MylesCRM',
    description: 'Customer relationship management built for African businesses.',
    icon: <Icon name="users" className="text-gold-400" />,
    features: [
      'Lead Management',
      'Sales Pipeline Tracking',
      'Customer Analytics',
      'Email Marketing',
      'Customer Support',
      'Reporting Dashboard'
    ],
    status: 'live' as const,
    href: '/products/mylescrm',
    sector: 'Business'
  },
  
  // Education Sector - School Transport
  {
    name: 'EduRyde',
    description: 'Modern school transport management and safety system with real-time tracking.',
    icon: <Icon name="bus" className="text-gold-400" />,
    features: [
      'Real-time GPS Tracking',
      'Route Optimization',
      'Parent Notifications',
      'Driver Management',
      'Safety Monitoring',
      'Emergency Alerts'
    ],
    status: 'live' as const,
    href: '/products/eduryde',
    sector: 'Education'
  },
  
  // AI Platform
  {
    name: 'Myles AI',
    description: 'Africa\'s intelligence engine with local language support.',
    icon: <Icon name="brain" className="text-gold-400" />,
    features: [
      'Multi-language AI ls',
      'Industry-specific Solutions',
      'Real-time Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ],
    status: 'live' as const,
    href: '/products/myles-ai',
    sector: 'AI Platform'
  },
  
  // Financial Services
  {
    name: 'MylesPay',
    description: 'Digital payment solution for seamless transactions.',
    icon: <Icon name="credit-card" className="text-gold-400" />,
    features: [
      'Mobile Money Integration',
      'Multi-currency Support',
      'Instant Settlements',
      'Payment Analytics',
      'Invoice Management',
      'Recurring Payments'
    ],
    status: 'development' as const,
    href: '/products/mylespay',
    sector: 'Financial Services'
  },
  
  // Logistics Sector
  {
    name: 'MylesLogistics',
    description: 'Supply chain and fleet management solution.',
    icon: <Icon name="truck" className="text-gold-400" />,
    features: [
      'Fleet Tracking',
      'Route Optimization',
      'Delivery Management',
      'Warehouse Management',
      'Inventory Tracking',
      'Driver Management'
    ],
    status: 'live' as const,
    href: '/products/myleslogistics',
    sector: 'Logistics'
  },
  
  // Real Estate
  {
    name: 'MylesProperty',
    description: 'Property management system for real estate professionals.',
    icon: <Icon name="building" className="text-gold-400" />,
    features: [
      'Property Listings',
      'Tenant Management',
      'Rent Collection',
      'Maintenance Tracking',
      'Financial Reporting',
      'Document Management'
    ],
    status: 'development' as const,
    href: '/products/mylesproperty',
    sector: 'Real Estate'
  },
  
  // Retail Sector
  {
    name: 'MylesRetail',
    description: 'Point of sale and inventory management for retail businesses.',
    icon: <Icon name="briefcase" className="text-gold-400" />,
    features: [
      'POS System',
      'Inventory Management',
      'Customer Loyalty',
      'Sales Analytics',
      'Multi-store Support',
      'E-commerce Integration'
    ],
    status: 'live' as const,
    href: '/products/mylesretail',
    sector: 'Retail'
  },
  
  // Government Sector
  {
    name: 'MylesGov',
    description: 'Digital governance solution for public sector efficiency.',
    icon: <Icon name="shield" className="text-gold-400" />,
    features: [
      'Citizen Services',
      'Document Management',
      'Workflow Automation',
      'Public Records',
      'Service Requests',
      'Compliance Tracking'
    ],
    status: 'development' as const,
    href: '/products/mylesgov',
    sector: 'Government'
  },
  
  // Manufacturing
  {
    name: 'MylesManufacturing',
    description: 'Production and quality management for manufacturers.',
    icon: <Icon name="zap" className="text-gold-400" />,
    features: [
      'Production Planning',
      'Quality Control',
      'Equipment Maintenance',
      'Supply Chain Management',
      'Cost Analysis',
      'Compliance Tracking'
    ],
    status: 'development' as const,
    href: '/products/mylesmanufacturing',
    sector: 'Manufacturing'
  },
  
  // Hospitality
  {
    name: 'MylesHospitality',
    description: 'Hotel and restaurant management system.',
    icon: <Icon name="heart" className="text-gold-400" />,
    features: [
      'Reservation Management',
      'Room Service',
      'Restaurant POS',
      'Guest Services',
      'Staff Management',
      'Revenue Analytics'
    ],
    status: 'development' as const,
    href: '/products/myles-hospitality',
    sector: 'Hospitality'
  },
  
  // Legal Sector
  {
    name: 'MylesLegal',
    description: 'Practice management solution for law firms.',
    icon: <Icon name="file-text" className="text-gold-400" />,
    features: [
      'Case Management',
      'Document Management',
      'Time Tracking',
      'Billing System',
      'Client Portal',
      'Legal Research'
    ],
    status: 'development' as const,
    href: '/products/myleslegal',
    sector: 'Legal'
  },
  
  // Energy Sector
  {
    name: 'MylesEnergy',
    description: 'Energy management and monitoring solution.',
    icon: <Icon name="zap" className="text-gold-400" />,
    features: [
      'Energy Monitoring',
      'Consumption Analytics',
      'Predictive Maintenance',
      'Cost Optimization',
      'Sustainability Tracking',
      'Reporting Dashboard'
    ],
    status: 'development' as const,
    href: '/products/mylesenergy',
    sector: 'Energy'
  },
  
  // Non-Profit Sector
  {
    name: 'MylesNonProfit',
    description: 'Donor and volunteer management for NGOs.',
    icon: <Icon name="heart" className="text-gold-400" />,
    features: [
      'Donor Management',
      'Volunteer Coordination',
      'Grant Tracking',
      'Impact Reporting',
      'Fundraising Campaigns',
      'Compliance Management'
    ],
    status: 'development' as const,
    href: '/products/mylesnonprofit',
    sector: 'Non-Profit'
  },
  
  // Construction Sector
  {
    name: 'MylesConstruction',
    description: 'Project management for construction companies.',
    icon: <Icon name="building" className="text-gold-400" />,
    features: [
      'Project Planning',
      'Resource Management',
      'Budget Tracking',
      'Progress Monitoring',
      'Safety Compliance',
      'Quality Control'
    ],
    status: 'development' as const,
    href: '/products/mylesconstruction',
    sector: 'Construction'
  },
  
  // Media Sector
  {
    name: 'MylesMedia',
    description: 'Content management and publishing platform.',
    icon: <Icon name="file-text" className="text-gold-400" />,
    features: [
      'Content Management',
      'Publishing Workflow',
      'Media Library',
      'Analytics Dashboard',
      'Subscription Management',
      'Multi-channel Distribution'
    ],
    status: 'development' as const,
    href: '/products/mylesmedia',
    sector: 'Media'
  },
  
  // Transportation Sector
  {
    name: 'MylesTransit',
    description: 'Public transportation management system.',
    icon: <Icon name="truck" className="text-gold-400" />,
    features: [
      'Route Management',
      'Fare Collection',
      'Vehicle Tracking',
      'Passenger Analytics',
      'Schedule Management',
      'Maintenance Planning'
    ],
    status: 'development' as const,
    href: '/products/mylestransit',
    sector: 'Transportation'
  }
]

const sectors = Array.from(new Set(allProducts.map(product => product.sector)))

const sectorData = {
  'Education': {
    eyebrow: 'EDUCATION',
    name: 'Education Sector',
    description: 'Transforming educational institutions with comprehensive management solutions.'
  },
  'Healthcare': {
    eyebrow: 'HEALTHCARE',
    name: 'Healthcare Sector',
    description: 'Modernizing healthcare delivery with AI-powered systems and patient management.'
  },
  'Agriculture': {
    eyebrow: 'AGRICULTURE',
    name: 'Agriculture Sector',
    description: 'Empowering farmers with smart technology for increased productivity and sustainability.'
  },
  'Business': {
    eyebrow: 'BUSINESS',
    name: 'Business Sector',
    description: 'Driving business growth with intelligent customer relationship and operational management.'
  },
  'AI Platform': {
    eyebrow: 'AI PLATFORM',
    name: 'AI Platform',
    description: 'Africa\'s intelligence engine powering all our solutions with advanced AI capabilities.'
  },
  'Financial Services': {
    eyebrow: 'FINANCIAL',
    name: 'Financial Services',
    description: 'Revolutionizing financial transactions with secure digital payment solutions.'
  },
  'Logistics': {
    eyebrow: 'LOGISTICS',
    name: 'Logistics Sector',
    description: 'Optimizing supply chains and fleet operations with intelligent tracking systems.'
  },
  'Real Estate': {
    eyebrow: 'REAL ESTATE',
    name: 'Real Estate',
    description: 'Streamlining property management and real estate operations.'
  },
  'Retail': {
    eyebrow: 'RETAIL',
    name: 'Retail Sector',
    description: 'Enhancing retail operations with integrated POS and inventory management.'
  },
  'Government': {
    eyebrow: 'GOVERNMENT',
    name: 'Government Sector',
    description: 'Digitalizing public sector services for improved citizen engagement.'
  },
  'Manufacturing': {
    eyebrow: 'MANUFACTURING',
    name: 'Manufacturing',
    description: 'Optimizing production processes with smart manufacturing solutions.'
  },
  'Hospitality': {
    eyebrow: 'HOSPITALITY',
    name: 'Hospitality',
    description: 'Elevating guest experiences with comprehensive hospitality management.'
  },
  'Legal': {
    eyebrow: 'LEGAL',
    name: 'Legal Sector',
    description: 'Streamlining legal practice management with intelligent automation.'
  },
  'Energy': {
    eyebrow: 'ENERGY',
    name: 'Energy',
    description: 'Optimizing energy consumption and management with smart monitoring.'
  },
  'Non-Profit': {
    eyebrow: 'NON-PROFIT',
    name: 'Non-Profit',
    description: 'Empowering NGOs with tools for donor and volunteer management.'
  },
  'Construction': {
    eyebrow: 'CONSTRUCTION',
    name: 'Construction',
    description: 'Managing construction projects with intelligent project tracking.'
  },
  'Media': {
    eyebrow: 'MEDIA',
    name: 'Media',
    description: 'Streamlining content creation and distribution for media organizations.'
  },
  'Transportation': {
    eyebrow: 'TRANSPORTATION',
    name: 'Transportation',
    description: 'Modernizing public transit with intelligent management systems.'
  }
}

export default function ProductsPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
          style={{ background: '#080e18' }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Glow top-right */}
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Glow bottom-left */}
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.07) 0%, transparent 70%)',
            }}
          />

          {/* Gold top rule */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          {/* Content — relative + z-10 is MANDATORY */}
          <div
            className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
              <span style={{
                color: '#C79639',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
              }}>
                OUR PRODUCTS
              </span>
              <div className="w-8 h-px" style={{ background: '#C79639' }} />
            </div>

            {/* Heading */}
            <h1
              className="font-display font-bold leading-[1.05] text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ color: '#ffffff' }}
            >
              Transform Your{' '}
              <em style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #C79639, #e0b055)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Business
              </em>
            </h1>

            {/* Subtitle */}
            <p
              className="font-body font-light text-xl leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: '#C7D7EF' }}
            >
              Discover our comprehensive suite of AI-powered solutions 
              designed to transform different sectors across East Africa 
              and beyond.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-demo"
                className="inline-flex items-center justify-center px-9 py-4 rounded-md font-body font-bold text-[15px] tracking-[0.4px] transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#C79639', color: '#1A395B' }}
              >
                Explore Solutions
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-9 py-4 rounded-md font-body font-semibold text-[15px] transition-all duration-200 hover:border-gold hover:text-gold"
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                }}
              >
                View All Products
              </a>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl mb-2" style={{ color: '#C79639' }}>
                  18
                </div>
                <div className="font-body text-sm font-medium tracking-wide" style={{ color: '#545454' }}>
                  Sectors Served
                </div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl mb-2" style={{ color: '#C79639' }}>
                  20+
                </div>
                <div className="font-body text-sm font-medium tracking-wide" style={{ color: '#545454' }}>
                  Products
                </div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl mb-2" style={{ color: '#C79639' }}>
                  6
                </div>
                <div className="font-body text-sm font-medium tracking-wide" style={{ color: '#545454' }}>
                  Live Products
                </div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl mb-2" style={{ color: '#C79639' }}>
                  14
                </div>
                <div className="font-body text-sm font-medium tracking-wide" style={{ color: '#545454' }}>
                  In Development
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products by Sector */}
        {sectors.map((sector, index) => {
          const sectorProducts = allProducts.filter(product => product.sector === sector)
          const data = sectorData[sector as keyof typeof sectorData]
          const isEven = index % 2 === 0

          return (
            <section key={sector} className={`py-16 ${isEven ? 'bg-white' : 'bg-[#f8f6f2]'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Sector header */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-0.5 bg-gold" />
                    <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                      {data.eyebrow}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-3">
                    {data.name}
                  </h2>
                  <p className="font-body font-light text-gray-600 text-base leading-relaxed max-w-2xl">
                    {data.description}
                  </p>
                </div>

                {/* Product cards grid */}
                {sectorProducts.length === 1 ? (
                  <div className="flex justify-start">
                    <div className="w-full sm:w-[360px]">
                      <ProductCard {...sectorProducts[0]} />
                    </div>
                  </div>
                ) : sectorProducts.length === 2 ? (
                  <StaggerReveal
                    staggerDelay={0.1}
                    itemDelay={0.2}
                    direction="up"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {sectorProducts.map((product) => (
                      <ProductCard key={product.name} {...product} />
                    ))}
                  </StaggerReveal>
                ) : (
                  <StaggerReveal
                    staggerDelay={0.1}
                    itemDelay={0.2}
                    direction="up"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {sectorProducts.map((product) => (
                      <ProductCard key={product.name} {...product} />
                    ))}
                  </StaggerReveal>
                )}
              </div>
            </section>
          )
        })}

        {/* CTA Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Find Your Solution</h2>
              <p className="text-xl text-navy-100 mb-8">
                Not sure which product is right for you? Let our experts help you find the perfect solution for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-demo" transitionTypes={['slide']}>
                  <Button>Book a Consultation</Button>
                </Link>
                <Link href="/contact" transitionTypes={['slide']}>
                  <Button variant="secondary">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
