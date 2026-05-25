import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  ArrowLeft,
  Send,
  CheckCircle,
  Building,
  Globe,
  Heart,
  Target,
  Phone
} from 'lucide-react'
import Link from 'next/link'

// Mock job data - in production, this would come from a CMS
const jobs = {
  'senior-fullstack-developer': {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '5+ years',
    salary: 'KSh 150,000 - 250,000',
    posted: '2024-03-10',
    deadline: '2024-04-10',
    description: `
We are seeking a highly skilled Senior Full Stack Developer to join our growing engineering team at MylesCorp Technologies. You will be responsible for designing, developing, and maintaining scalable web applications that power our AI-driven solutions for the African market.

## About the Role

As a Senior Full Stack Developer, you will work on production software projects that use applied automation and modern web technologies to solve real-world problems in education, healthcare, agriculture, and business sectors across East Africa.

## Key Responsibilities

### Technical Leadership
- Lead the design and architecture of complex web applications
- Mentor junior developers and conduct code reviews
- Establish best practices and coding standards
- Drive technical decisions and architectural improvements

### Full Stack Development
- Develop responsive front-end applications using React/Next.js
- Build robust back-end services and APIs
- Design and optimize database schemas
- Implement CI/CD pipelines and deployment strategies

### AI Integration
- Integrate machine learning models into web applications
- Develop automation-backed features and user experiences
- Work with data scientists to implement ML algorithms
- Optimize AI model performance in production environments

### Product Innovation
- Contribute to product roadmap and feature planning
- Prototype new features and technologies
- Collaborate with product managers and designers
- Ensure scalability and performance of applications

## Requirements

### Technical Skills
- **Front-end**: Expertise in React, Next.js, TypeScript, and modern CSS
- **Back-end**: Strong experience with Node.js, Python, or similar
- **Databases**: Proficiency in PostgreSQL, MongoDB, and Redis
- **Cloud**: Experience with AWS, Google Cloud, or Azure
- **DevOps**: Knowledge of Docker, Kubernetes, and CI/CD

### Experience
- 5+ years of production full-stack development experience
- Proven track record of leading technical projects
- Experience with AI/ML integration in web applications
- Strong understanding of software architecture and design patterns

### Soft Skills
- Excellent communication and leadership abilities
- Problem-solving mindset and attention to detail
- Ability to work in a fast-paced, collaborative environment
- Passion for technology and innovation in Africa

## What We Offer

### Compensation & Benefits
- Competitive salary based on experience
- Performance bonuses and stock options
- Comprehensive health insurance package
- Flexible work arrangements and remote options
- Growth development budget

### Growth & Learning
- Opportunity to work on impactful AI projects
- Regular training and skill development programs
- Conference attendance and certifications
- Career advancement opportunities

### Work Environment
- Modern office in Westlands, Nairobi
- Collaborative, delivery-focused team culture
- Cutting-edge technology and tools
- Work-life balance and flexible hours
    `,
    requirements: [
      '5+ years of production full-stack development experience',
      'Expertise in React, Next.js, TypeScript, and modern CSS',
      'Strong experience with Node.js, Python, or similar back-end technologies',
      'Proficiency in PostgreSQL, MongoDB, and Redis',
      'Experience with cloud platforms (AWS, Google Cloud, or Azure)',
      'Knowledge of Docker, Kubernetes, and CI/CD pipelines',
      'Experience with AI/ML integration in web applications',
      'Strong understanding of software architecture and design patterns',
      'Excellent communication and leadership abilities',
      'Passion for technology and innovation in Africa'
    ],
    benefits: [
      'Competitive salary (KSh 150,000 - 250,000)',
      'Performance bonuses and stock options',
      'Comprehensive health insurance package',
      'Flexible work arrangements and remote options',
      'Growth development budget',
      'Regular training and skill development programs',
      'Conference attendance and certifications',
      'Modern office in Westlands, Nairobi',
      'Collaborative, delivery-focused team culture',
      'Work-life balance and flexible hours'
    ],
    skills: {
      required: [
        'React/Next.js',
        'TypeScript',
        'Node.js',
        'Python',
        'PostgreSQL',
        'MongoDB',
        'AWS/Cloud Services',
        'Docker/Kubernetes'
      ],
      preferred: [
        'Machine Learning',
        'AI/ML Integration',
        'GraphQL',
        'Microservices',
        'DevOps',
        'System Design'
      ]
    },
    culture: {
      values: [
        'Innovation and creativity',
        'Collaboration and teamwork',
        'Continuous learning',
        'Impact-driven work',
        'Diversity and inclusion'
      ],
      environment: 'Fast-paced, collaborative, and delivery-focused environment where you\'ll work with talented specialists who are passionate about building software for real operating problems in Africa.'
    },
    applicationProcess: [
      'Submit your application with resume and portfolio',
      'Initial technical assessment and screening',
      'Technical interview with engineering team',
      'Final interview with leadership team',
      'Offer and onboarding process'
    ],
    contact: {
      email: 'careers@mylescorptech.com',
      phone: '+254 743 993 715',
      location: 'Wester Heights, Westlands, Nairobi, Kenya'
    }
  },
  'product-manager': {
    title: 'Product Manager',
    department: 'Product',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    experience: '3+ years',
    salary: 'KSh 120,000 - 200,000',
    posted: '2024-03-08',
    deadline: '2024-04-08',
    description: `
We are looking for a passionate Product Manager to drive the development of our software products. You will be responsible for product strategy, roadmap planning, and cross-functional team leadership.

## About the Role

As Product Manager at MylesCorp Technologies, you will work at the intersection of technology, business, and user experience to deliver useful products for industries across East Africa.

## Key Responsibilities

### Product Strategy
- Define product vision and strategy for our software products
- Conduct market research and competitive analysis
- Identify user needs and market opportunities
- Develop and maintain product roadmaps

### Product Development
- Work closely with engineering teams to deliver high-quality products
- Define product requirements and user stories
- Prioritize features based on business impact and user value
- Ensure products meet quality standards and deadlines

### Stakeholder Management
- Collaborate with cross-functional teams (engineering, design, marketing)
- Communicate product vision and progress to leadership
- Gather feedback from customers and internal stakeholders
- Manage product launches and go-to-market strategies

## Requirements

### Experience
- 3+ years of product management experience
- Experience with B2B SaaS products
- Background in technology or software development
- Experience with AI/ML products is a plus

### Skills
- Strong analytical and problem-solving abilities
- Excellent communication and presentation skills
- Experience with product management tools and methodologies
- Understanding of agile development processes
    `,
    requirements: [
      '3+ years of product management experience',
      'Experience with B2B SaaS products',
      'Background in technology or software development',
      'Strong analytical and problem-solving abilities',
      'Excellent communication and presentation skills',
      'Experience with product management tools and methodologies',
      'Understanding of agile development processes',
      'Ability to work cross-functionally with engineering and design teams'
    ],
    benefits: [
      'Competitive salary (KSh 120,000 - 200,000)',
      'Performance bonuses and stock options',
      'Comprehensive health insurance package',
      'Flexible work arrangements',
      'Growth development budget',
      'Opportunity to shape applied automation products'
    ],
    skills: {
      required: [
        'Product Management',
        'Market Research',
        'Agile/Scrum',
        'Data Analysis',
        'Stakeholder Management'
      ],
      preferred: [
        'AI/ML Knowledge',
        'B2B SaaS Experience',
        'Technical Background',
        'User Research'
      ]
    },
    culture: {
      values: [
        'Customer-centric approach',
        'Data-driven decision making',
        'Innovation and creativity',
        'Collaboration and teamwork'
      ],
      environment: 'Dynamic and fast-paced environment where you\'ll have the opportunity to make a real impact on products used by African institutions.'
    },
    applicationProcess: [
      'Submit your application with resume and cover letter',
      'Initial screening and product case study',
      'Interview with product and engineering teams',
      'Final interview with leadership',
      'Offer and onboarding'
    ],
    contact: {
      email: 'careers@mylescorptech.com',
      phone: '+254 743 993 715',
      location: 'Wester Heights, Westlands, Nairobi, Kenya'
    }
  }
}

interface JobPageProps {
  params: {
    slug: string
  }
}

export default function JobPage({ params }: JobPageProps) {
  const job = jobs[params.slug as keyof typeof jobs]

  if (!job) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-1 mb-4">Job Not Found</h1>
            <p className="body-text mb-8">
              The job position you're looking for doesn't exist or has been closed.
            </p>
            <Link href="/careers">
              <Button>View All Jobs</Button>
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
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-white">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-navy-200 mb-8">
                  <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/careers" className="hover:text-gold transition-colors">Careers</Link>
                  <span>/</span>
                  <span className="text-gold">{job.title}</span>
                </nav>

                <div className="mb-8">
                  <h1 className="heading-1 mb-4">{job.title}</h1>
                  <p className="text-xl text-navy-100 mb-6">
                    Join our team and help build software products for industries across East Africa.
                  </p>
                </div>

                {/* Job Meta Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex items-center space-x-3">
                    <Building className="text-gold" size={20} />
                    <div>
                      <div className="text-sm text-navy-200">Department</div>
                      <div className="font-semibold">{job.department}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-gold" size={20} />
                    <div>
                      <div className="text-sm text-navy-200">Location</div>
                      <div className="font-semibold">{job.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-gold" size={20} />
                    <div>
                      <div className="text-sm text-navy-200">Type</div>
                      <div className="font-semibold">{job.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-gold" size={20} />
                    <div>
                      <div className="text-sm text-navy-200">Experience</div>
                      <div className="font-semibold">{job.experience}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="section">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Description */}
                  <div>
                    <h2 className="heading-2 mb-6">About the Role</h2>
                    <div className="prose prose-lg max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: job.description }} />
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="heading-2 mb-6">Requirements</h2>
                    <div className="space-y-3">
                      {job.requirements.map((requirement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                          <span className="body-text">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h2 className="heading-2 mb-6">Skills & Technologies</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="heading-3 mb-4">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.required.map((skill, index) => (
                            <span key={index} className="bg-gold/10 text-navy px-3 py-1 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="heading-3 mb-4">Preferred Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.preferred.map((skill, index) => (
                            <span key={index} className="bg-navy-100 text-navy-600 px-3 py-1 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application Process */}
                  <div>
                    <h2 className="heading-2 mb-6">Application Process</h2>
                    <div className="space-y-4">
                      {job.applicationProcess.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gold text-navy rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                            {index + 1}
                          </div>
                          <span className="body-text">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Quick Info */}
                  <div className="bg-off-white rounded-xl p-6">
                    <h3 className="heading-3 mb-4">Quick Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-medium-grey">Salary</span>
                        <span className="font-semibold">{job.salary}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-medium-grey">Posted</span>
                        <span className="font-semibold">{new Date(job.posted).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-medium-grey">Deadline</span>
                        <span className="font-semibold">{new Date(job.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-off-white rounded-xl p-6">
                    <h3 className="heading-3 mb-4">Benefits</h3>
                    <div className="space-y-3">
                      {job.benefits.slice(0, 5).map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Heart className="text-gold flex-shrink-0 mt-1" size={16} />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="secondary" size="sm" className="w-full mt-4">
                      View All Benefits
                    </Button>
                  </div>

                  {/* Culture */}
                  <div className="bg-off-white rounded-xl p-6">
                    <h3 className="heading-3 mb-4">Our Culture</h3>
                    <div className="space-y-3">
                      {job.culture.values.map((value, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Target className="text-gold" size={16} />
                          <span className="text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-medium-grey mt-4">
                      {job.culture.environment}
                    </p>
                  </div>

                  {/* Apply Button */}
                  <Link href="#apply">
                    <Button size="lg" className="w-full">
                      <Send size={20} className="mr-2" />
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="section bg-off-white">
          <div className="section-padding">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">Apply for This Position</h2>
                <p className="body-text">
                  Ready to join our team? Submit your application and we'll get back to you within 48 hours.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-medium p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-500 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-500 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-500 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-500 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-500 mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-500 mb-2">
                      Resume/CV *
                    </label>
                    <div className="border-2 border-dashed border-light-grey rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="text-gold" size={24} />
                      </div>
                      <p className="text-sm text-medium-grey mb-2">
                        Drag and drop your resume here, or click to browse
                      </p>
                      <p className="text-xs text-medium-grey">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-500 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-500 mb-2">
                      Portfolio/GitHub (Optional)
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                      placeholder="https://github.com/johndoe"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="terms" className="mt-1" required />
                    <label htmlFor="terms" className="text-sm text-medium-grey">
                      I agree to the processing of my personal data for recruitment purposes as outlined in the{' '}
                      <a href="/legal/privacy" className="text-navy hover:text-gold underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="heading-2 mb-4">Have Questions?</h2>
              <p className="text-xl text-navy-100 mb-8">
                Our team is here to help you learn more about this opportunity and our company culture.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-gold" size={24} />
                  </div>
                  <h3 className="heading-3 mb-2">Email Us</h3>
                  <p className="text-navy-200 mb-4">Get in touch via email</p>
                  <a href={`mailto:${job.contact.email}`} className="text-gold hover:text-gold-light">
                    {job.contact.email}
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <h3 className="heading-3 mb-2">Call Us</h3>
                  <p className="text-navy-200 mb-4">Speak with our team</p>
                  <a href={`tel:${job.contact.phone}`} className="text-gold hover:text-gold-light">
                    {job.contact.phone}
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="heading-3 mb-2">Visit Us</h3>
                  <p className="text-navy-200 mb-4">Our office location</p>
                  <p className="text-gold">{job.contact.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
