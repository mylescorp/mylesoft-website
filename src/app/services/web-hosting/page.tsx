import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import Link from 'next/link'
import {
  Server,
  Shield,
  Zap,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Cpu,
  ArrowLeft
} from 'lucide-react'

export const metadata = {
  title: 'Web Hosting Services — MylesCorp Technologies',
  description: 'Reliable, secure, and high-performance web hosting from MylesCorp Technologies with SSL, backups, email hosting, domain support, and technical support.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/services/web-hosting',
  },
}

const WEB_HOSTING_DATA = {
  features: [
    {
      icon: '🚀',
      title: 'Lightning Fast Performance',
      description: 'SSD storage, NVMe drives, and CDN integration for blazing-fast website loading speeds.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Advanced security features including SSL certificates, DDoS protection, and daily malware scans.'
    },
    {
      icon: '📊',
      title: 'Scalable Infrastructure',
      description: 'Easily upgrade your hosting plan as your business grows with seamless resource scaling.'
    },
    {
      icon: '💬',
      title: 'Expert Support',
      description: 'Round-the-clock technical support from certified hosting experts via chat, phone, and email.'
    },
    {
      icon: '🌍',
      title: 'Global CDN',
      description: 'Content Delivery Network with 50+ edge locations worldwide for optimal performance.'
    },
    {
      icon: '🔄',
      title: 'Automated Backups',
      description: 'Daily automated backups with one-click restore and 30-day retention period.'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Choose Your Plan',
      description: 'Select the perfect hosting plan based on your website requirements, traffic expectations, and budget.'
    },
    {
      step: 2,
      title: 'Domain Registration',
      description: 'Register your domain name with us or transfer your existing domain. Get free domain registration with annual plans.'
    },
    {
      step: 3,
      title: 'Instant Setup',
      description: 'Your hosting account is activated instantly. Access cPanel, install WordPress with one-click.'
    },
    {
      step: 4,
      title: 'Launch & Grow',
      description: 'Launch your website with confidence. Monitor performance, scale resources as needed.'
    }
  ],
  targets: [
    'Small Businesses & Startups - Affordable shared hosting with easy scalability',
    'E-commerce Stores - High-performance hosting optimized for WooCommerce and Shopify',
    'Enterprise Solutions - Dedicated servers and cloud hosting for mission-critical applications',
    'Agencies & Developers - Reseller hosting and white-label solutions for multiple clients',
    'Educational Institutions - Secure hosting for learning management systems and student portals'
  ],
  testimonials: [
    {
      quote: 'MylesCorp\'s hosting service has been exceptional. Our e-commerce site loads 3x faster, and the 24/7 support team is always there when we need them.',
      author: 'John Kamau',
      role: 'CEO',
      organization: 'TechShop Kenya'
    },
    {
      quote: 'We host all our client websites with MylesCorp. The uptime is outstanding, the control panel is intuitive, and the technical support is responsive.',
      author: 'Sarah Ochieng',
      role: 'Founder',
      organization: 'Nairobi Digital Agency'
    },
    {
      quote: 'The dedicated server solution has transformed our online learning platform. Performance is excellent, security is top-notch.',
      author: 'David Njoroge',
      role: 'IT Manager',
      organization: 'EduTech Africa'
    },
    {
      quote: 'As a web developer, I appreciate the technical expertise and flexibility MylesCorp offers. Their staging environments make development workflows smooth.',
      author: 'Grace Mwangi',
      role: 'Senior Developer',
      organization: 'Creative Studio KE'
    }
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KSh 2,999',
      period: '/month',
      description: 'Perfect for personal websites, blogs, and small businesses',
      features: [
        '10 GB NVMe SSD Storage',
        '100 GB Bandwidth/month',
        '1 Website',
        '5 Email Accounts',
        'Free SSL Certificate',
        'Daily Automated Backups',
        '99.9% Uptime Guarantee',
        '24/7 Customer Support',
        'cPanel Control Panel',
        '1-Click WordPress Install',
        'Free Website Migration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KSh 5,999',
      period: '/month',
      description: 'Ideal for growing businesses and multiple websites',
      features: [
        '50 GB NVMe SSD Storage',
        '500 GB Bandwidth/month',
        '5 Websites',
        '25 Email Accounts',
        'Free SSL Certificate (Unlimited)',
        'Daily Automated Backups',
        '99.9% Uptime Guarantee',
        '24/7 Priority Support',
        'cPanel Control Panel',
        '1-Click WordPress Install',
        'Free Website Migration',
        'Free Domain (1st year)',
        'Staging Environment',
        'Git Integration',
        'Advanced Caching'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: 'KSh 9,999',
      period: '/month',
      description: 'For established businesses with high traffic needs',
      features: [
        '100 GB NVMe SSD Storage',
        'Unlimited Bandwidth',
        '10 Websites',
        '50 Email Accounts',
        'Free SSL Certificate (Unlimited)',
        'Real-time Backups',
        '99.95% Uptime SLA',
        '24/7 Priority Support',
        'cPanel Control Panel',
        '1-Click App Installer',
        'Free Website Migration',
        'Free Domain (1st year)',
        'Staging Environment',
        'Git Integration',
        'Advanced Caching',
        'Dedicated IP Address',
        'Enhanced Security Suite',
        'Performance Optimization'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large-scale operations and mission-critical applications',
      features: [
        'Dedicated Servers or Cloud Infrastructure',
        'Unlimited Storage & Bandwidth',
        'Unlimited Websites',
        'Unlimited Email Accounts',
        'Free Wildcard SSL Certificate',
        'Real-time Backups with Geo-redundancy',
        '99.99% Uptime SLA Guarantee',
        'Dedicated Support Team',
        'Custom Control Panel Options',
        'White-label Solutions Available',
        'Free Domain Portfolio Management',
        'Multiple Staging Environments',
        'Advanced Git & CI/CD Integration',
        'Enterprise-grade Caching',
        'Multiple Dedicated IPs',
        'Advanced DDoS Protection',
        'Load Balancing',
        'Content Delivery Network (CDN)',
        'Database Management',
        'Custom Configuration',
        'Compliance & Audit Support'
      ],
      popular: false
    }
  ]
}

export default function WebHostingPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Comprehensive Web Hosting & Domain Overview */}
        <section className="py-12 md:py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-['Playfair_Display'] leading-tight">
                Professional Web Hosting & Domain Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gold mb-6 md:mb-8 font-['Playfair_Display']">
                Complete Online Presence Solution for African Businesses
              </p>
              <div className="max-w-4xl mx-auto px-4">
                <p className="text-base sm:text-lg text-light-blue leading-relaxed">
                  MylesCorp provides comprehensive web hosting and domain registration services designed specifically for the African market.
                  Our enterprise-grade infrastructure ensures your website performs optimally for visitors across Kenya and beyond.
                  From personal blogs to enterprise applications, we have the perfect hosting solution for your needs.
                </p>
              </div>
            </div>

            {/* Web Hosting Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center hover:bg-white/15 transition-all duration-300">
                <Server className="w-10 h-10 md:w-12 md:h-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">99.9% Uptime Guarantee</h3>
                <p className="text-sm md:text-base text-light-blue">Your website stays online when your customers need it most</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center hover:bg-white/15 transition-all duration-300">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-sm md:text-base text-light-blue">Advanced protection against malware, DDoS attacks, and threats</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center hover:bg-white/15 transition-all duration-300">
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-sm md:text-base text-light-blue">NVMe SSD storage and global CDN for optimal performance</p>
              </div>
            </div>

            {/* Domain Registration Overview */}
            <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 md:mb-12 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-6 text-center font-['Playfair_Display']">
                Domain Registration Services
              </h2>
              <p className="text-gray-600 text-center mb-6 md:mb-8 max-w-3xl mx-auto px-4 text-sm md:text-base leading-relaxed">
                Secure your online identity with professional domain registration. Choose from 500+ domain extensions
                including .com, .co.ke, .ke, .africa, and many more. Get free privacy protection and easy management tools.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { ext: '.com', popular: true },
                  { ext: '.co.ke', popular: true },
                  { ext: '.ke', popular: false },
                  { ext: '.africa', popular: false }
                ].map((domain, index) => (
                  <div key={index} className={`border rounded-lg p-3 md:p-4 text-center transition-all duration-300 hover:shadow-md ${domain.popular ? 'border-gold bg-gold/5 hover:bg-gold/10' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="text-base md:text-lg font-bold text-navy mb-1">{domain.ext}</div>
                    <Link href="/pricing" className="text-sm md:text-base text-gold font-semibold hover:text-gold-light">
                      Review plan options
                    </Link>
                    {domain.popular && <div className="text-xs text-gold mt-1 font-semibold">POPULAR</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { number: '99.9%', label: 'Uptime Guarantee' },
                { number: '24/7', label: 'Expert Support' },
                { number: '10+', label: 'Hosting Plans' },
                { number: '5000+', label: 'Websites Hosted' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-xs md:text-sm text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection
          features={WEB_HOSTING_DATA.features}
          title="Why Choose Our Web Hosting?"
          description="We provide enterprise-grade hosting infrastructure with features designed for performance, security, and reliability."
        />

        {/* Process Section */}
        <ProcessSection
          steps={WEB_HOSTING_DATA.process}
          title="Simple Setup Process"
          description="Get your website online in minutes with our streamlined hosting setup process."
        />

        {/* Targets Section */}
        <TargetsSection
          targets={WEB_HOSTING_DATA.targets}
          title="Perfect for Every Business Size"
        />

        {/* PRICING SOURCE */}
        <section className="py-16 md:py-20 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg md:p-10">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[2.5px] text-gold">Hosting Proposal</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-navy mb-4">
                Choose the Right Hosting Setup
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm md:text-base leading-8">
                Hosting needs vary by traffic, storage, domains, SSL, email, and support coverage. Review the plan options, then confirm the best setup with our team.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/pricing">
                  <Button>Review Plan Options</Button>
                </Link>
                <Link href="/book-demo">
                  <Button variant="secondary">Book a Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Playfair_Display']">
                Technical Specifications
              </h2>
              <p className="text-base md:text-xl text-light-blue max-w-3xl mx-auto px-4">
                Enterprise-grade infrastructure built for performance, security, and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'Server Infrastructure',
                  items: [
                    'Latest Intel Xeon & AMD EPYC Processors',
                    'DDR4 ECC RAM for maximum reliability',
                    'NVMe SSD storage for lightning-fast performance',
                    'RAID-10 storage configuration for redundancy',
                    'Multiple Tier-1 bandwidth providers'
                  ]
                },
                {
                  title: 'Security Features',
                  items: [
                    'Imunify360 Advanced Security Suite',
                    'Daily malware scanning and removal',
                    'DDoS protection up to 10 Gbps',
                    'Web Application Firewall (WAF)',
                    'Free SSL certificates from Let\'s Encrypt',
                    'Two-factor authentication available'
                  ]
                },
                {
                  title: 'Performance Optimization',
                  items: [
                    'LiteSpeed web server for better performance',
                    'Redis & Memcached caching',
                    'HTTP/2 and HTTP/3 support',
                    'Global CDN with 50+ edge locations',
                    'Image optimization and compression',
                    'Database query optimization'
                  ]
                },
                {
                  title: 'Control Panel Features',
                  items: [
                    'Industry-standard cPanel control panel',
                    'Softaculous with 400+ one-click installs',
                    'Email management with webmail',
                    'File manager with drag-and-drop',
                    'Database management (phpMyAdmin)',
                    'Resource usage monitoring'
                  ]
                }
              ].map((spec, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                      {index === 0 && <Server className="w-5 h-5 md:w-6 md:h-6 text-gold" />}
                      {index === 1 && <Shield className="w-5 h-5 md:w-6 md:h-6 text-gold" />}
                      {index === 2 && <Zap className="w-5 h-5 md:w-6 md:h-6 text-gold" />}
                      {index === 3 && <Cpu className="w-5 h-5 md:w-6 md:h-6 text-gold" />}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-navy">{spec.title}</h3>
                  </div>
                  <ul className="space-y-2 md:space-3">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-gold mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs md:text-sm leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection
          testimonials={WEB_HOSTING_DATA.testimonials}
          title="What Our Clients Say"
        />

        {/* CTA Section */}
        <section id="contact" className="py-12 md:py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 font-['Playfair_Display']">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-xl text-light-blue mb-6 md:mb-8 px-4">
              Join thousands of businesses who trust MylesCorp for reliable web hosting
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
              <Link href="tel:+254743993715">
                <Button className="bg-gold hover:bg-gold/90 text-sm md:text-base py-2 md:py-3">
                  <Phone className="w-4 h-4 mr-2" />
                  Call +254 743 993 715
                </Button>
              </Link>
              <Link href="mailto:info@mylescorptech.com">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 hover:text-navy md:text-base">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Sales
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center text-light-blue px-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm md:text-base">Visit us: Westlands, Nairobi, Kenya</span>
            </div>
          </div>
        </section>

        {/* Back to Services */}
        <section className="py-12 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link href="/services" className="inline-flex items-center text-gold hover:text-gold/80 transition-colors text-sm md:text-base">
              <span>← Back to All Services</span>
              <ArrowLeft className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
