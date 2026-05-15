import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ServicePricingSection } from '@/components/ui/ServicePricingSection'
import { servicePricingBySlug } from '@/lib/constants/service-pricing'
import { Icon } from '@/components/ui/Icon'
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
  Target,
  FileText,
  Award,
  Heart
} from 'lucide-react'

export const metadata = {
  title: 'IT Consulting & Digital Transformation | MylesCorp',
  description: 'Strategic IT consulting, technology audits, and digital transformation advisory for organisations across East Africa. Expert guidance from Nairobi.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/services/it-consulting',
  },
}

export default function ITConsultingPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* PAGE HERO */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
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

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                STRATEGIC CONSULTING
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Technology Strategy
              <span className="text-white italic">
                That Works
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              Expert consultants who assess your technology landscape, identify gaps, and build strategic roadmaps aligned with your business goals.
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
                <p className="text-medium-grey leading-relaxed mb-6">
                  Our expert consultants provide strategic guidance to help you leverage technology effectively. We focus on ROI-driven solutions that align with your business objectives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy">Strategic Planning</h4>
                      <p className="text-medium-grey">Long-term technology roadmaps</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy">Digital Transformation</h4>
                      <p className="text-medium-grey">Modernizing legacy systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy">ROI-Focused Strategy</h4>
                      <p className="text-medium-grey">Measurable business impact</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">100+</div>
                  <div className="text-sm text-medium-grey">Organisations Advised</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">18</div>
                  <div className="text-sm text-medium-grey">Sectors Covered</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">Digital</div>
                  <div className="text-sm text-medium-grey">Transformation</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">ROI</div>
                  <div className="text-sm text-medium-grey">Focused Strategy</div>
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
              <p className="text-medium-grey max-w-2xl mx-auto">
                Comprehensive consulting services for digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="text-gold" size={32} />,
                  title: "IT Strategy & Roadmapping",
                  description: "Strategic technology planning and implementation roadmaps."
                },
                {
                  icon: <Shield className="text-gold" size={32} />,
                  title: "Technology Audits",
                  description: "Comprehensive assessment of current technology infrastructure."
                },
                {
                  icon: <TrendingUp className="text-gold" size={32} />,
                  title: "Digital Transformation Planning",
                  description: "Strategic planning for digital transformation initiatives."
                },
                {
                  icon: <Database className="text-gold" size={32} />,
                  title: "System Architecture",
                  description: "Design and optimization of system architecture."
                },
                {
                  icon: <Users className="text-gold" size={32} />,
                  title: "Vendor Selection & Management",
                  description: "Strategic vendor selection and relationship management."
                },
                {
                  icon: <Settings className="text-gold" size={32} />,
                  title: "Project Management",
                  description: "Expert project management for technology initiatives."
                },
                {
                  icon: <Heart className="text-gold" size={32} />,
                  title: "Change Management",
                  description: "Managing organizational change during technology adoption."
                },
                {
                  icon: <Award className="text-gold" size={32} />,
                  title: "Staff Training & Upskilling",
                  description: "Training programs to build internal capabilities."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-ice rounded-xl p-8 hover:bg-gold/5 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-medium-grey leading-relaxed">
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
                A systematic approach to technology consulting.
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gold/30 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {[
                  { step: 1, title: "Audit", description: "Assess current state" },
                  { step: 2, title: "Strategy", description: "Develop strategic plan" },
                  { step: 3, title: "Planning", description: "Create implementation roadmap" },
                  { step: 4, title: "Implementation", description: "Execute the strategy" },
                  { step: 5, title: "Review", description: "Monitor and optimize" }
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

        <ServicePricingSection service={servicePricingBySlug['it-consulting']} />

        {/* TESTIMONIALS */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Client Testimonials
              </h2>
              <p className="text-light-blue max-w-2xl mx-auto">
                Hear what our clients say about our consulting services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "MylesCorp's strategic guidance helped us modernize our entire IT infrastructure. The ROI has been exceptional.",
                  author: "James Mwangi",
                  role: "CIO, Manufacturing Company",
                  rating: 5
                },
                {
                  quote: "Their understanding of African business challenges is unmatched. Highly recommend their consulting services!",
                  author: "Fatuma Ali",
                  role: "Director, Healthcare NGO",
                  rating: 5
                },
                {
                  quote: "The digital transformation roadmap they created has positioned us for future growth. Excellent work!",
                  author: "Peter Kiptanui",
                  role: "CEO, Financial Services Firm",
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
              Ready to Transform Your Technology Strategy?
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
