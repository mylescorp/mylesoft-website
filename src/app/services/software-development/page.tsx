import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { ServicePricingSection } from '@/components/ui/ServicePricingSection'
import { servicePricingBySlug } from '@/lib/constants/service-pricing'
import { HeroImageBackdrop } from '@/components/ui/HeroImageBackdrop'
import { SERVICE_HERO_IMAGES } from '@/lib/constants/hero-images'
import Link from 'next/link'
import {
  Users,
  Settings,
  Brain,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Star,
  Quote,
  Code,
  Monitor
} from 'lucide-react'

export const metadata = {
  title: 'Custom Software Development Kenya | MylesCorp',
  description: 'Custom web applications, mobile apps, ERP systems, and API development for East African businesses. Built by MylesCorp Technologies in Nairobi.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/services/software-development',
  },
}

export default function SoftwareDevelopmentPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* PAGE HERO */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
          <HeroImageBackdrop images={[SERVICE_HERO_IMAGES.softwareDevelopment]} priority />
          <div className="absolute inset-0 bg-navy/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/15 to-navy/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/45 via-transparent to-navy/30" />
          {/* Grid texture overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Radial glows */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.06) 0%, transparent 70%)',
            }}
          />

          {/* Gold top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          <div className="hero-copy-shadow relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                CUSTOM SOFTWARE
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-[2.65rem] md:text-[3.35rem] lg:text-7xl leading-[1.05] mb-6">
              Software Built for
              <span className="text-white italic">
                Your Business
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              We design and build custom software around your workflows, users, data, approvals, integrations, and reporting needs across East Africa.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo">
                <Button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/80 hover:border-white hover:bg-white/10 transition-all duration-200">
                  Request a Proposal
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
                  What We Offer
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We build custom software that solves defined operating problems. From web applications to mobile apps and internal systems, each build is scoped around the way your team actually works.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy">Custom Workflows</h4>
                      <p className="text-gray-600">Designed around your users, roles, data, and approvals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy">Agile Development</h4>
                      <p className="text-gray-600">Iterative approach with regular feedback</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy">Scalable Architecture</h4>
                      <p className="text-gray-600">Built to grow with your business</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">99%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">6 Weeks</div>
                  <div className="text-sm text-gray-600">Avg Delivery</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                What's Included
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Software delivery services covering the key parts of a production build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="text-gold" size={32} />,
                  title: "Custom Web Applications",
                  description: "Tailored web applications built with modern frameworks and best practices."
                },
                {
                  icon: <Monitor className="text-gold" size={32} />,
                  title: "Mobile Apps (iOS & Android)",
                  description: "Native and cross-platform mobile applications for all devices."
                },
                {
                  icon: <Database className="text-gold" size={32} />,
                  title: "Enterprise ERP Systems",
                  description: "Comprehensive enterprise resource planning solutions."
                },
                {
                  icon: <Globe className="text-gold" size={32} />,
                  title: "API Development & Integrations",
                  description: "RESTful APIs and third-party service integrations."
                },
                {
                  icon: <Shield className="text-gold" size={32} />,
                  title: "Database Architecture",
                  description: "Scalable database design and optimization services."
                },
                {
                  icon: <Settings className="text-gold" size={32} />,
                  title: "Software Maintenance & Support",
                  description: "Ongoing maintenance, updates, and technical support."
                },
                {
                  icon: <CheckCircle className="text-gold" size={32} />,
                  title: "Quality Assurance & Testing",
                  description: "Comprehensive testing to ensure quality and reliability."
                },
                {
                  icon: <Brain className="text-gold" size={32} />,
                  title: "Technical Documentation",
                  description: "Detailed documentation for maintenance and knowledge transfer."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-ice rounded-xl p-8 hover:bg-gold/5 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-light-blue max-w-2xl mx-auto">
                A structured approach to ensure successful project delivery.
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gold/30 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {[
                  { step: 1, title: "Discovery", description: "Understanding your requirements" },
                  { step: 2, title: "Architecture", description: "Designing the solution" },
                  { step: 3, title: "Development", description: "Building your software" },
                  { step: 4, title: "Testing", description: "Ensuring quality" },
                  { step: 5, title: "Deployment", description: "Launching your solution" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl mx-auto mb-4 relative z-10">
                      {item.step}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-light-blue text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServicePricingSection service={servicePricingBySlug['software-development']} />

        {/* TESTIMONIALS */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Client Testimonials
              </h2>
              <p className="text-light-blue max-w-2xl mx-auto">
                Hear what our clients say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "MylesCorp delivered our custom ERP system on time and within budget. Our team now has clearer workflows and reporting.",
                  author: "John Kamau",
                  role: "CEO, TechSolutions Ltd",
                  rating: 5
                },
                {
                  quote: "Their attention to detail and understanding of our business needs was impressive. Highly recommend!",
                  author: "Sarah Ochieng",
                  role: "Operations Director, Logistics Co",
                  rating: 5
                },
                {
                  quote: "The mobile app they built for us has increased our customer engagement by 300%. Excellent work!",
                  author: "Michael Njoroge",
                  role: "Founder, RetailHub",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={16} />
                    ))}
                  </div>
                  <Quote className="text-gold/50 mb-4" size={32} />
                  <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-light-blue text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Ready to Build the System Your Team Needs?
            </h2>
            <p className="text-light-blue text-xl mb-8 max-w-2xl mx-auto">
              Transforming Industries, Empowering Generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/book-demo">
                <Button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact" className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/80 hover:border-white hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center">
                Request a Proposal
              </Link>
            </div>
            <div className="text-light-blue text-sm">
              <p>Email: info@mylescorptech.com | Phone: +254 743 993 715</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
