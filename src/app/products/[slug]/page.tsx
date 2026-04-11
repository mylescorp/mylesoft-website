import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { Icon } from '@/components/ui/Icon'
import { 
  Check, 
  X, 
  Star, 
  Users, 
  Shield, 
  Zap, 
  Clock,
  Award,
  ArrowLeft,
  Calendar,
  Download,
  Play,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react'
import Link from 'next/link'

const STATUS_LABELS: Record<string, string> = {
  live: 'Live Product',
  beta: 'Beta Access',
  development: 'In Development',
  'coming-soon': 'Coming Soon',
}

// Mock product data - in production, this would come from a CMS
const products = {
  'edumyles': {
    name: 'EduMyles',
    tagline: 'Complete School Management System',
    category: 'Education',
    sector: 'Education',
    description: 'EduMyles is a comprehensive AI-powered school management system designed to transform educational institutions across Kenya and East Africa. From automated attendance to intelligent performance tracking, EduMyles streamlines every aspect of school operations.',
    longDescription: `
EduMyles represents the pinnacle of educational technology innovation, specifically designed for the unique challenges and opportunities within African educational systems. Our AI-powered platform goes beyond traditional school management to provide intelligent insights that drive educational excellence.

## Comprehensive School Management

### Academic Excellence
- **Intelligent Attendance System**: AI-powered facial recognition and automated attendance tracking
- **Smart Grading Assistant**: Machine learning algorithms assist teachers in grading and provide instant feedback
- **Performance Analytics**: Real-time student performance tracking with predictive analytics for early intervention
- **Curriculum Management**: Digital curriculum delivery with adaptive learning paths

### Administrative Efficiency
- **Automated Report Generation**: Instant generation of comprehensive progress reports and transcripts
- **Resource Management**: Smart allocation and tracking of school resources including classrooms, labs, and equipment
- **Staff Management**: Complete HR system for teachers and administrative staff
- **Financial Management**: Fee collection, budget tracking, and financial reporting

### Parent Engagement
- **Real-time Communication**: Instant messaging and notifications between parents and teachers
- **Progress Monitoring**: Parents can track their children's academic progress in real-time
- **Mobile App**: Dedicated mobile application for parents on the go
- **Multilingual Support**: Communication in parents' preferred languages

## AI-Powered Features

### Personalized Learning
- **Adaptive Learning Paths**: AI creates personalized learning journeys based on individual student performance
- **Talent Identification**: Machine learning algorithms identify hidden talents and strengths
- **Career Guidance**: AI-powered career recommendations based on student aptitudes and interests
- **Learning Style Analysis**: System adapts to individual learning preferences

### Predictive Analytics
- **At-Risk Student Identification**: Early warning system for students who need additional support
- **Performance Forecasting**: Predict future academic performance based on current trends
- **Resource Optimization**: AI predicts resource needs and optimizes allocation
- **Enrollment Forecasting**: Predict future enrollment patterns for better planning

## Security and Compliance
- **Data Privacy**: End-to-end encryption for all student and school data
- **GDPR & Kenya DPA Compliance**: Full compliance with data protection regulations
- **Role-Based Access**: Granular access control for different user types
- **Audit Trails**: Complete audit logging for all system activities

## Integration Capabilities
- **LMS Integration**: Seamless integration with existing learning management systems
- **Government Systems**: Integration with Ministry of Education systems
- **Payment Gateways**: Multiple payment options for fees and transactions
- **Biometric Systems**: Integration with existing biometric attendance systems

## Success Stories

### Nairobi Girls Secondary School
- **40% reduction** in administrative workload
- **25% improvement** in student performance
- **60% increase** in parent engagement
- **30% reduction** in operational costs

### Rift Valley Academy
- **50% faster** report generation
- **35% improvement** in resource utilization
- **45% increase** in teacher satisfaction
- **20% improvement** in student outcomes
    `,
    features: [
      'AI-powered attendance and performance tracking',
      'Automated grading and report generation',
      'Real-time parent-teacher communication',
      'Comprehensive curriculum management',
      'Financial management and fee collection',
      'Mobile app for parents and students',
      'Multilingual support (English, Swahili, and local languages)',
      'Advanced analytics and reporting',
      'Secure data storage and backup',
      'Integration with government education systems'
    ],
    benefits: [
      'Reduce administrative workload by up to 50%',
      'Improve student performance through personalized learning',
      'Enhance parent engagement and communication',
      'Streamline financial management and reporting',
      'Ensure data security and compliance',
      'Scale from small schools to large institutions'
    ],
    pricing: {
      starter: {
        name: 'Starter',
        price: '12,900',
        period: 'month',
        description: 'Perfect for small schools up to 500 students',
        features: [
          'Up to 500 students',
          'Basic attendance tracking',
          'Simple report generation',
          'Parent communication portal',
          'Mobile app access',
          'Email support'
        ]
      },
      professional: {
        name: 'Professional',
        price: '38,900',
        period: 'month',
        description: 'Ideal for medium schools 501-2,000 students',
        features: [
          'Up to 2,000 students',
          'AI-powered attendance',
          'Advanced analytics',
          'Automated grading assistant',
          'Financial management',
          'Priority support',
          'Custom integrations'
        ],
        popular: true
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact',
        description: 'For large institutions and multi-campus schools',
        features: [
          'Unlimited students',
          'Advanced AI features',
          'Custom development',
          'Dedicated support team',
          'On-premise deployment option',
          'Advanced security features',
          'API access',
          'Training programs'
        ]
      }
    },
    status: 'live',
    icon: 'GraduationCap',
    color: 'blue',
    stats: {
      schools: '500+',
      students: '250,000+',
      countries: '4',
      satisfaction: '98%'
    },
    testimonials: [
      {
        name: 'Dr. Sarah Kimani',
        role: 'Principal, Nairobi Girls Secondary School',
        content: 'EduMyles has transformed how we manage our school. The AI insights have helped us improve student performance significantly.',
        rating: 5
      },
      {
        name: 'James Mwangi',
        role: 'Director, Rift Valley Academy',
        content: 'The automated features have saved us countless hours. Our teachers can now focus on what matters most - teaching.',
        rating: 5
      }
    ],
    images: [
      '/images/products/edumyles-dashboard.jpg',
      '/images/products/edumyles-mobile.jpg',
      '/images/products/edumyles-analytics.jpg'
    ],
    demoUrl: '/book-demo?product=edumyles',
    trialAvailable: true,
    support: {
      email: 'support@mylescorptech.com',
      phone: '+254 743 993 715',
      documentation: '/docs/edumyles',
      training: '/training/edumyles'
    }
  },
  'mylescare': {
    name: 'MylesCare',
    tagline: 'Intelligent Hospital Management System',
    category: 'Healthcare',
    sector: 'Healthcare',
    description: 'MylesCare is an AI-powered hospital management system that streamlines healthcare delivery, improves patient outcomes, and optimizes resource utilization across medical facilities in East Africa.',
    longDescription: `
MylesCare revolutionizes healthcare management with cutting-edge AI technology designed specifically for African healthcare environments. Our comprehensive platform addresses the unique challenges faced by hospitals and clinics across the region while improving patient care and operational efficiency.

## Intelligent Healthcare Management

### Patient Care Excellence
- **AI-Powered Diagnostics**: Machine learning algorithms assist in preliminary diagnosis and treatment recommendations
- **Electronic Health Records**: Comprehensive digital patient records with intelligent search and retrieval
- **Appointment Management**: Smart scheduling system that optimizes doctor-patient appointments
- **Medication Management**: Automated prescription tracking and drug interaction alerts

### Operational Efficiency
- **Resource Allocation**: AI optimizes bed, equipment, and staff allocation based on real-time demand
- **Inventory Management**: Smart tracking of medical supplies and automated reordering
- **Staff Scheduling**: Intelligent scheduling that considers staff availability and patient needs
- **Financial Management**: Comprehensive billing, insurance processing, and revenue cycle management

### Patient Engagement
- **Patient Portal**: Mobile app for patients to access records, book appointments, and communicate with doctors
- **Telemedicine**: Remote consultation capabilities for patients in remote areas
- **Health Monitoring**: IoT integration for continuous patient health monitoring
- **Medication Reminders**: Automated reminders for patients to take medications

## AI-Powered Healthcare Features

### Predictive Analytics
- **Disease Outbreak Prediction**: AI analyzes patterns to predict potential disease outbreaks
- **Patient Risk Assessment**: Early identification of high-risk patients for proactive care
- **Resource Demand Forecasting**: Predict future resource needs based on historical data
- **Readmission Risk**: Identify patients at risk of readmission for targeted interventions

### Clinical Decision Support
- **Treatment Recommendations**: AI suggests evidence-based treatment options
- **Drug Interaction Alerts**: Real-time alerts for potential drug interactions
- **Diagnostic Assistance**: AI tools that assist in medical imaging analysis
- **Clinical Guidelines**: Integration with latest medical protocols and guidelines

## Security and Compliance
- **HIPAA Compliance**: Full compliance with healthcare data protection standards
- **Data Encryption**: End-to-end encryption for all patient data
- **Access Control**: Role-based access for different healthcare professionals
- **Audit Trails**: Complete logging of all system activities for compliance

## Integration Capabilities
- **Medical Devices**: Integration with IoT medical devices and monitoring equipment
- **Laboratory Systems**: Integration with lab information systems
- **Pharmacy Systems**: Connection with pharmacy management systems
- **Insurance Providers**: Integration with insurance company systems for claims processing
    `,
    features: [
      'AI-powered diagnostic assistance',
      'Electronic health records management',
      'Smart appointment scheduling',
      'Telemedicine capabilities',
      'Inventory and resource management',
      'Patient mobile portal',
      'Financial and billing management',
      'Predictive analytics for healthcare',
      'HIPAA-compliant data security',
      'Integration with medical devices'
    ],
    benefits: [
      'Reduce patient wait times by up to 40%',
      'Improve diagnostic accuracy with AI assistance',
      'Optimize resource utilization and reduce costs',
      'Enhance patient engagement and satisfaction',
      'Streamline billing and revenue cycle',
      'Enable remote healthcare delivery'
    ],
    pricing: {
      starter: {
        name: 'Starter',
        price: '25,000',
        period: 'month',
        description: 'Perfect for small clinics and health centers',
        features: [
          'Up to 50 beds',
          'Basic patient management',
          'Appointment scheduling',
          'Simple billing system',
          'Patient portal',
          'Email support'
        ]
      },
      professional: {
        name: 'Professional',
        price: '75,000',
        period: 'month',
        description: 'Ideal for medium hospitals up to 200 beds',
        features: [
          'Up to 200 beds',
          'AI diagnostic assistance',
          'Telemedicine features',
          'Advanced analytics',
          'Inventory management',
          'Priority support',
          'Integration capabilities'
        ],
        popular: true
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact',
        description: 'For large hospitals and healthcare networks',
        features: [
          'Unlimited beds',
          'Advanced AI features',
          'Custom development',
          'Dedicated support team',
          'On-premise deployment',
          'Advanced security',
          'API access',
          'Training programs'
        ]
      }
    },
    status: 'live',
    icon: 'Activity',
    color: 'red',
    stats: {
      hospitals: '100+',
      patients: '1M+',
      doctors: '5,000+',
      satisfaction: '96%'
    },
    testimonials: [
      {
        name: 'Dr. Michael Ochieng',
        role: 'Medical Director, Nairobi General Hospital',
        content: 'MylesCare has transformed our hospital operations. The AI diagnostics have improved our accuracy and efficiency significantly.',
        rating: 5
      }
    ],
    images: [
      '/images/products/mylescare-dashboard.jpg',
      '/images/products/mylescare-mobile.jpg',
      '/images/products/mylescare-analytics.jpg'
    ],
    demoUrl: '/book-demo?product=mylescare',
    trialAvailable: true,
    support: {
      email: 'healthcare@mylescorptech.com',
      phone: '+254 743 993 715',
      documentation: '/docs/mylescare',
      training: '/training/mylescare'
    }
  }
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-1 mb-4">Product Not Found</h1>
            <p className="body-text mb-8">
              The product you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section bg-navy-deep">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-white">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-light-blue/80 mb-8">
                  <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/products" className="hover:text-gold transition-colors">Products</Link>
                  <span>/</span>
                  <span className="text-gold">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    {/* Status Badge */}
                    <div className="inline-flex items-center space-x-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold mb-6">
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                      <span>{STATUS_LABELS[product.status] ?? 'Available Product'}</span>
                    </div>

                    {/* Product Name */}
                    <h1 className="heading-1 mb-4">{product.name}</h1>
                    
                    {/* Tagline */}
                    <p className="text-2xl text-gold mb-6">{product.tagline}</p>
                    
                    {/* Description */}
                    <p className="text-xl leading-8 text-light-blue mb-8">{product.description}</p>
                    
                    {/* Key Features */}
                    <div className="space-y-3 mb-8">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Check className="text-gold flex-shrink-0" size={20} />
                          <span className="text-light-blue">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={product.demoUrl}>
                        <Button size="lg">
                          <Play size={20} className="mr-2" />
                          Book a Demo
                        </Button>
                      </Link>
                      <Link href="#pricing">
                        <Button variant="secondary" size="lg">
                          View Pricing
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="relative">
                    {/* Product Image */}
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/6 backdrop-blur-sm p-8 shadow-card">
                      <div className="aspect-square rounded-[1.4rem] border border-gold/20 bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center">
                        <Icon name={product.icon} size={120} className="text-gold" />
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {Object.entries(product.stats).map(([key, value]) => (
                        <div key={key} className="rounded-[1.2rem] border border-white/10 bg-white/6 backdrop-blur-sm p-4 text-center shadow-soft">
                          <div className="text-2xl font-display font-bold text-gold">{value}</div>
                          <div className="text-sm text-light-blue capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long Description */}
        <section className="section">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: product.longDescription }} />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section bg-off-white">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">Choose Your Plan</h2>
                <p className="body-text max-w-2xl mx-auto">
                  Flexible pricing options designed to fit organizations of all sizes. Start with a plan that matches your needs and scale as you grow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.values(product.pricing).map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-[1.6rem] border border-slate-200 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 ${
                      'popular' in plan && plan.popular ? 'ring-2 ring-gold-400 relative' : ''
                    }`}
                  >
                    {'popular' in plan && plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="heading-3 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        {plan.price === 'Custom' ? (
                          <div className="text-4xl font-bold text-navy-500">Custom</div>
                        ) : (
                            <div className="text-4xl font-display font-bold text-navy">
                              KES {plan.price}
                              <span className="text-lg font-normal text-medium-grey">/{plan.period}</span>
                            </div>
                        )}
                      </div>
                      <p className="body-text text-sm">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="text-gold-400 flex-shrink-0 mt-1" size={16} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={plan.price === 'Custom' ? '/contact' : '/book-demo'}>
                      <Button 
                        className="w-full" 
                        variant={'popular' in plan && plan.popular ? 'primary' : 'secondary'}
                      >
                        {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">What Our Customers Say</h2>
                <p className="body-text max-w-2xl mx-auto">
                  Real stories from organizations using our products to transform their operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-off-white rounded-[1.4rem] border border-light-grey p-6 shadow-soft">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-gold fill-current" size={16} />
                      ))}
                    </div>
                    <blockquote className="body-text mb-4 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className="font-display font-semibold text-navy">{testimonial.name}</div>
                      <div className="text-sm text-medium-grey">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="section bg-navy-deep">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="heading-2 mb-4">Need Help?</h2>
              <p className="text-xl leading-8 text-light-blue mb-8">
                Our support team is here to help you get the most out of {product.name}.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <h3 className="heading-3 mb-2">Email Support</h3>
                  <p className="text-light-blue mb-4">Get help via email</p>
                  <a href={`mailto:${product.support.email}`} className="text-gold hover:text-gold-light">
                    {product.support.email}
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <h3 className="heading-3 mb-2">Phone Support</h3>
                  <p className="text-light-blue mb-4">Call us directly</p>
                  <a href={`tel:${product.support.phone}`} className="text-gold hover:text-gold-light">
                    {product.support.phone}
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-gold" size={24} />
                  </div>
                  <h3 className="heading-3 mb-2">Live Chat</h3>
                  <p className="text-light-blue mb-4">Chat with our team</p>
                  <Button variant="secondary" size="sm">Start Chat</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
