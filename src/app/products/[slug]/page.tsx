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
import { COMPANY_CONTACT, telHref } from '@/lib/constants/contact'

const STATUS_LABELS: Record<string, string> = {
  live: 'Live Product',
  beta: 'Beta Access',
  development: 'In Development',
  'coming-soon': 'Coming Soon',
}

const products = {
  'edumyles': {
    name: 'EduMyles',
    tagline: 'Complete School Management System',
    category: 'Education',
    sector: 'Education',
    description: 'EduMyles is a school management system for institutions across Kenya and East Africa. It supports attendance, performance tracking, fees, communication, and daily administration in one place.',
    longDescription: `
EduMyles is designed for the operating needs of African schools, combining administration, reporting, communication, and analytics in one system.

## Comprehensive School Management

### Academic Excellence
- **Intelligent Attendance System**: attendance automation and optional facial recognition
- **Smart Grading Assistant**: Machine learning algorithms assist teachers in grading and provide instant feedback
- **Performance Analytics**: Real-time student performance tracking with predictive analytics for early intervention
- **Curriculum Management**: Digital curriculum delivery with adaptive learning paths

### Administrative Efficiency
- **Automated Report Generation**: Progress reports and transcripts generated from structured school records
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
- **Career Guidance**: Career guidance based on student aptitudes and interests
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
- **Clearer** parent engagement workflows
- **30% reduction** in operational costs

### Rift Valley Academy
- **50% faster** report generation
- **35% improvement** in resource utilization
- **45% increase** in teacher satisfaction
- **20% improvement** in student outcomes
    `,
    features: [
      'Attendance and performance tracking',
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
        description: 'For small schools up to 500 students',
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
        name: 'Growth',
        price: '38,900',
        period: 'month',
        description: 'For medium schools 501-2,000 students',
        features: [
          'Up to 2,000 students',
          'Attendance automation',
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
      schools: 'School',
      students: 'Student',
      countries: '4',
      satisfaction: 'Support'
    },
    testimonials: [
      {
        name: 'Dr. Sarah Kimani',
        role: 'Principal, Nairobi Girls Secondary School',
        content: 'EduMyles improved how we manage our school. The reporting tools helped us understand student performance more clearly.',
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
      email: COMPANY_CONTACT.contactEmail,
      phone: COMPANY_CONTACT.technicalPhone,
      documentation: '/docs/edumyles',
      training: '/training/edumyles'
    }
  },
  'mylescare': {
    name: 'MylesCare',
    tagline: 'Intelligent Hospital Management System',
    category: 'Healthcare',
    sector: 'Healthcare',
    description: 'MylesCare is a hospital management system for patient records, appointments, billing, pharmacy, laboratory workflows, and resource visibility across medical facilities in East Africa.',
    longDescription: `
MylesCare improves healthcare management with digital workflows designed for African healthcare environments. The platform addresses patient records, appointments, billing, pharmacy, laboratory, claims, and reporting workflows for hospitals and clinics across the region.

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
- **Access Control**: Role-based access for different healthcare staff
- **Audit Trails**: Complete logging of all system activities for compliance

## Integration Capabilities
- **Medical Devices**: Integration with IoT medical devices and monitoring equipment
- **Laboratory Systems**: Integration with lab information systems
- **Pharmacy Systems**: Connection with pharmacy management systems
- **Insurance Providers**: Integration with insurance company systems for claims processing
    `,
    features: [
      'Diagnostic workflow support',
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
        description: 'For small clinics and health centers',
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
        name: 'Growth',
        price: '75,000',
        period: 'month',
        description: 'For medium hospitals up to 200 beds',
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
      hospitals: 'Healthcare',
      patients: 'Patient',
      doctors: '5,000+',
      satisfaction: '96%'
    },
    testimonials: [
      {
        name: 'Dr. Michael Ochieng',
        role: 'Medical Director, Nairobi General Hospital',
        content: 'MylesCare improved our hospital operations. The clinical workflows and reports made daily work faster and clearer.',
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
      email: COMPANY_CONTACT.contactEmail,
      phone: COMPANY_CONTACT.technicalPhone,
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
        <section className="section bg-navy">
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
                      <Link href="/pricing">
                        <Button variant="secondary" size="lg">
                          Compare Product Plans
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

        {/* Plan Guidance Section */}
        <section id="plans" className="section bg-off-white">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-card md:p-10">
                <h2 className="heading-2 mb-4">Choose the Right Product Plan</h2>
                <p className="body-text max-w-2xl mx-auto">
                  Compare the plan structure, then speak with our team about users, modules, onboarding, integrations, and support before finalising scope.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {Object.values(product.pricing).map((plan) => (
                    <div key={plan.name} className="rounded-xl border border-slate-200 bg-ice px-4 py-3 text-left">
                      <div className="font-body text-sm font-bold text-navy">{plan.name}</div>
                      <div className="mt-1 font-body text-xs leading-5 text-medium-grey">{plan.description}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/pricing">
                    <Button size="lg">Compare Product Plans</Button>
                  </Link>
                  <Link href={product.demoUrl}>
                    <Button variant="secondary" size="lg">Book a Demo</Button>
                  </Link>
                </div>
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
                  Real stories from organizations using our products to run clearer operations.
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
        <section className="section bg-navy">
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
                  <a href={telHref(product.support.phone)} className="text-gold hover:text-gold-light">
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
