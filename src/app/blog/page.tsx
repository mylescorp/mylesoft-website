import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Card, CardIcon, CardHeader, CardContent } from '@/components/ui/Card'
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal'
import {
  Calendar,
  User,
  Clock,
  Tag,
  Search,
  ChevronRight,
  ArrowRight,
  Brain,
  TrendingUp,
  BookOpen
} from 'lucide-react'

export const metadata = {
  title: 'MylesCorp Blog — AI, Software & Digital Transformation Insights',
  description: 'Read MylesCorp insights on AI, education technology, healthcare systems, agriculture platforms, and systems modernisation across East Africa.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/blog',
  },
}

const blogPosts = [
  {
    title: 'The Future of AI in African Education',
    excerpt: 'Exploring how school software is changing educational operations across East Africa, from personalized learning to administrative efficiency.',
    author: 'Jonathan Myles',
    role: 'CEO & Founder',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Education Technology',
    image: null,
    featured: true,
    tags: ['AI in Education', 'EdTech', 'East Africa', 'Innovation']
  },
  {
    title: 'Digital Healthcare: Bridging the Gap in East Africa',
    excerpt: 'How technology is revolutionizing healthcare delivery in remote areas, improving patient outcomes and reducing medical costs.',
    author: 'Dr. Sarah Kimani',
    role: 'Healthcare Advisor',
    date: '2024-03-10',
    readTime: '7 min read',
    category: 'Healthcare Innovation',
    image: null,
    featured: true,
    tags: ['Digital Health', 'Telemedicine', 'Healthcare Africa', 'Medical Technology']
  },
  {
    title: 'Smart Agriculture: Technology for African Farmers',
    excerpt: 'Revolutionizing farming practices with IoT sensors, weather prediction, and market intelligence to increase yields and reduce waste.',
    author: 'Grace Achieng',
    role: 'Agriculture Specialist',
    date: '2024-03-08',
    readTime: '6 min read',
    category: 'AgriTech',
    image: null,
    featured: false,
    tags: ['Smart Farming', 'AgriTech', 'IoT', 'African Agriculture']
  },
  {
    title: 'Building Scalable SaaS for African Markets',
    excerpt: 'Key considerations for developing software solutions that address the unique challenges and opportunities in East African business environments.',
    author: 'David Ochieng',
    role: 'CTO',
    date: '2024-03-05',
    readTime: '8 min read',
    category: 'Software Development',
    image: null,
    featured: false,
    tags: ['SaaS', 'African Markets', 'Scalability', 'Software Architecture']
  },
  {
    title: 'Cybersecurity in the African Context',
    excerpt: 'Understanding unique security challenges facing African organizations and implementing strategies to protect digital assets effectively.',
    author: 'Security Team',
    role: 'Security Experts',
    date: '2024-03-01',
    readTime: '10 min read',
    category: 'Security',
    image: null,
    featured: false,
    tags: ['Cybersecurity', 'African Security', 'Digital Protection', 'Risk Management']
  },
  {
    title: 'Cloud Migration Strategies for East African Businesses',
    excerpt: 'Step-by-step guide to successful cloud adoption, addressing infrastructure challenges and maximizing ROI.',
    author: 'Technical Team',
    role: 'Cloud Architects',
    date: '2024-02-28',
    readTime: '12 min read',
    category: 'Cloud Computing',
    image: null,
    featured: true,
    tags: ['Cloud Migration', 'Digital Transformation', 'Infrastructure', 'ROI']
  },
  {
    title: 'Mobile Money Integration: The Kenyan Success Story',
    excerpt: 'How M-Pesa and mobile payment infrastructure are changing financial services across East Africa.',
    author: 'Finance Team',
    role: 'Financial Analysts',
    date: '2024-02-25',
    readTime: '6 min read',
    category: 'FinTech',
    image: null,
    featured: false,
    tags: ['Mobile Money', 'M-Pesa', 'FinTech', 'Kenyan Innovation']
  }
]

const categories = [
  { name: 'All', count: blogPosts.length, description: 'View all articles' },
  { name: 'Education Technology', count: 1, description: 'EdTech insights' },
  { name: 'Healthcare Innovation', count: 1, description: 'Health tech trends' },
  { name: 'AgriTech', count: 1, description: 'Agricultural tech' },
  { name: 'Software Development', count: 1, description: 'Dev best practices' },
  { name: 'Security', count: 1, description: 'Cybersecurity' },
  { name: 'Cloud Computing', count: 1, description: 'Cloud solutions' },
  { name: 'FinTech', count: 1, description: 'Financial tech' }
]

const featuredPosts = blogPosts.filter(post => post.featured)
const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3)

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
          {/* Grid texture overlay — always present on dark sections */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Radial glow top-right */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Radial glow bottom-left */}
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
            <ScrollReveal direction="up" delay={0.2}>
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  INSIGHTS & UPDATES
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                Our{' '}
                <span className="text-white italic">
                  Blog
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
                Thought leadership, product updates, and industry insights from the MylesCorp team.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="text-center mb-16">
                  {/* Eyebrow Label */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-8 h-0.5 bg-gold" />
                    <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                      FEATURED
                    </span>
                    <div className="w-8 h-0.5 bg-gold" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">Featured Articles</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
                    Our most important insights and thought leadership pieces.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerReveal staggerDelay={0.2} itemDelay={0.4} direction="up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post, index) => (
                    <Card variant="light" key={index} className="overflow-hidden group h-full flex flex-col">
                      <div className="aspect-video bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Brain className="text-gold w-12 h-12" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="flex-1">
                            <span className="inline-block bg-ice text-navy px-3 py-1 rounded-full text-xs font-semibold mb-2 font-body">
                              {post.category}
                            </span>
                            <h3 className="text-2xl font-display font-bold text-navy mb-2">{post.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4 font-body flex-grow">{post.excerpt}</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <User size={16} className="mr-2" />
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.role}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={16} className="mr-2" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gold font-semibold hover:text-gold-light transition-colors font-body mt-auto">
                          Read Article
                          <ArrowRight size={16} className="ml-2" />
                        </div>
                      </div>
                    </Card>
                  ))}
              </StaggerReveal>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center mb-16">
                {/* Eyebrow Label */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                    LATEST ARTICLES
                  </span>
                  <div className="w-8 h-0.5 bg-gold" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">Recent Articles</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
                  Latest insights from our team on technology trends, industry analysis, and innovation.
                </p>
              </div>
            </ScrollReveal>

            <StaggerReveal staggerDelay={0.2} itemDelay={0.4} direction="up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post, index) => (
                  <Card variant="light" key={index} className="overflow-hidden group h-full flex flex-col">
                    <div className="aspect-video bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="text-gold w-8 h-8" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="flex-1">
                          <span className="inline-block bg-ice text-navy px-3 py-1 rounded-full text-xs font-semibold mb-2 font-body">
                            {post.category}
                          </span>
                          <h3 className="text-xl font-display font-bold text-navy mb-2">{post.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4 font-body text-sm flex-grow">{post.excerpt}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User size={16} className="mr-2" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-2" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gold font-semibold hover:text-gold-light transition-colors font-body mt-auto">
                        Read More
                        <ChevronRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </Card>
                ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center mb-16">
                {/* Eyebrow Label */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                    CATEGORIES
                  </span>
                  <div className="w-8 h-0.5 bg-gold" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">Browse by Category</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
                  Explore our articles by topic to find insights most relevant to your interests.
                </p>
              </div>
            </ScrollReveal>

            <StaggerReveal staggerDelay={0.1} itemDelay={0.3} direction="up" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <Card variant="light" key={index} className="text-center h-full flex flex-col">
                    <div className="p-6">
                      <div className="text-3xl font-bold text-gold mb-3">{category.count}</div>
                      <h3 className="font-semibold text-navy mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </Card>
                ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center text-white">
                {/* Eyebrow Label */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                    STAY UPDATED
                  </span>
                  <div className="w-8 h-0.5 bg-gold" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Stay Updated</h2>
                <p className="text-xl text-light-blue mb-8 font-body">
                  Get the latest insights delivered to your inbox. Join our community of technology leaders and innovators.
                </p>
                <div className="max-w-md mx-auto">
                  <form className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white/20 font-body"
                    />
                    <Button type="submit">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </Layout>
  )
}
