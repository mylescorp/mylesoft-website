import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Zap, Brain, ArrowRight, CheckCircle, Code, Database, Globe, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function MylesAIPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section gradient-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-deep/80 to-navy-900/90"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-transparent"></div>
          </div>
          <div className="section-padding relative z-10">
            <div className="text-center mb-8 fade-in">
              <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30 mb-4">
                <Icon name="brain" className="w-5 h-5 text-gold" />
                <span className="text-gold font-body font-semibold">AI Development Services</span>
                <span className="bg-gold text-navy px-2 py-1 rounded-full text-xs font-body font-semibold">New</span>
              </div>
              <h1 className="heading-1 mb-4 fade-in text-white">Myles AI</h1>
              <p className="text-2xl text-navy-100 leading-relaxed mb-6 slide-up max-w-3xl mx-auto">
                Custom AI Development & Machine Learning Solutions
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-navy-200 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>500+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>50+ AI Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>95% Success Rate</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <p className="text-xl text-navy-100 leading-relaxed mb-8 slide-up">
                  Transform your business with cutting-edge machine learning, natural language processing, and computer vision solutions tailored to your specific needs. Myles AI delivers custom artificial intelligence solutions for competitive advantage.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">AI Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">NLP Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">Computer Vision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm">AI Consulting</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 fade-in">
                  <Link href="/book-demo">
                    <Button size="lg">Book a Demo</Button>
                  </Link>
                  <Link href="/pricing">
                    <Button variant="secondary" size="lg">View Pricing</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gold/30">
                  <Icon name="brain" className="text-gold-400" size={96} />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-2 rounded-full font-body font-semibold text-sm">
                  AI Innovation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">AI Development Services</h2>
              <p className="body-text max-w-2xl mx-auto">
                Comprehensive AI solutions for modern business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: 'Machine Learning',
                  description: 'Custom ML models for predictive analytics and automation'
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'NLP Solutions',
                  description: 'Natural language processing for text analysis and chatbots'
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: 'Computer Vision',
                  description: 'Image recognition and visual data analysis solutions'
                },
                {
                  icon: <ArrowRight className="w-6 h-6" />,
                  title: 'Consulting',
                  description: 'Expert AI strategy consulting and implementation guidance'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="heading-3 mb-3">{feature.title}</h3>
                  <p className="body-text">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Why Choose Myles AI</h2>
                <div className="space-y-4 body-text">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Custom Solutions</h4>
                      <p>Tailored AI solutions designed specifically for your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Expert Team</h4>
                      <p>Experienced AI engineers and data scientists with proven track records</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">End-to-End Service</h4>
                      <p>From strategy to implementation and ongoing support for your AI journey</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gold-100 rounded-2xl flex items-center justify-center">
                  <Icon name="zap" className="text-gold-400" size={96} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section gradient-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Transform Your Business with AI</h2>
              <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
                Let us help you leverage artificial intelligence for competitive advantage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-demo">
                  <Button size="lg">Book a Demo</Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="secondary" size="lg">View Pricing</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
