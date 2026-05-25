import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import {
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Heart,
  Bookmark,
  ArrowLeft,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'

const formatPublishedDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))

// Mock blog post data - in production, this would come from a CMS
const blogPosts = {
  'transforming-education-ai-kenya': {
    title: 'Transforming Education in Kenya with AI: The EduMyles Revolution',
    excerpt: 'How artificial intelligence is reshaping the educational landscape across Kenyan schools and universities.',
    content: `
# Transforming Education in Kenya with AI: The EduMyles Revolution

Kenyan schools are adopting digital systems for administration, communication, reporting, and parent engagement. EduMyles supports these daily workflows for institutions across the country.

## The Current Educational Challenge

Kenyan schools face numerous challenges that have long hindered optimal learning outcomes:

- **Administrative Burden**: Teachers spend countless hours on paperwork instead of teaching
- **Resource Management**: Inefficient allocation of limited educational resources
- **Student Performance Tracking**: Difficulty in monitoring and improving student progress
- **Parent Communication**: Gaps in real-time communication between schools and parents
- **Data-Driven Decisions**: Lack of actionable insights for educational leadership

## How AI is Making a Difference

### 1. Intelligent Administrative Automation

EduMyles leverages AI to automate routine administrative tasks, freeing up valuable time for educators:

- **Automated Attendance**: Facial recognition and smart attendance tracking
- **Intelligent Grading**: AI-assisted assessment and feedback generation
- **Schedule Optimization**: Smart timetabling that maximizes resource utilization
- **Report Generation**: Automated progress reports with AI-driven insights

### 2. Personalized Learning Experiences

Our AI algorithms analyze individual student performance to create personalized learning paths:

- **Adaptive Learning**: Content that adjusts to each student's pace and learning style
- **Early Intervention**: AI identifies students who need additional support before they fall behind
- **Talent Identification**: Machine learning uncovers hidden talents and strengths
- **Career Guidance**: Data-backed recommendations based on student aptitudes and interests

### 3. Enhanced Parent Engagement

Real-time communication powered by AI keeps parents informed and involved:

- **Smart Notifications**: AI determines the optimal timing and content for parent communications
- **Progress Insights**: Automated summaries of student performance with actionable recommendations
- **Translation Services**: Translation support helps communication reach parents in their preferred languages
- **Predictive Analytics**: Early warning systems for potential academic or behavioral issues

## Real-World Impact

Since launching EduMyles, we've witnessed remarkable transformations across Kenyan schools:

### Case Study: Nairobi Girls Secondary School

After implementing EduMyles, Nairobi Girls Secondary School saw:
- **40% reduction** in administrative workload
- **25% improvement** in student performance metrics
- **60% increase** in parent engagement rates
- **30% reduction** in operational costs

### Case Study: Rift Valley Academy

Rift Valley Academy reported:
- **50% faster** report card generation
- **35% improvement** in resource allocation
- **45% increase** in teacher satisfaction scores
- **20% improvement** in overall student outcomes

## The Technology Behind EduMyles

The EduMyles system incorporates production-ready technologies:

### Machine Learning Models
- **Natural Language Processing** for automated essay grading
- **Computer Vision** for attendance and behavior analysis
- **Predictive Analytics** for performance forecasting
- **Recommendation Engines** for personalized learning paths

### Data Security and Privacy
- **End-to-end encryption** for all student data
- **GDPR and Kenya DPA compliance**
- **Regular security audits** and penetration testing
- **Data anonymization** for research and analytics

### Integration Capabilities
- **Seamless LMS integration** with existing educational platforms
- **Mobile-first design** for accessibility across all devices
- **Offline capabilities** for areas with limited connectivity
- **API access** for third-party educational tools

## Looking to the Future

The integration of AI in Kenyan education is just beginning. We're excited about upcoming developments:

### Advanced AI Features
- **Virtual Teaching Assistants** for 24/7 student support
- **Emotion Recognition** for mental health monitoring
- **Language Learning AI** for multilingual education
- **Career Prediction Models** using academic and behavioral data

### Expanded Reach
- **Rural School Initiatives** bringing AI education to remote areas
- **Government Partnerships** for nationwide implementation
- **Teacher Training Programs** for AI literacy
- **Research Collaborations** with Kenyan universities

## Join the Education Revolution

Are you ready to modernise your school operations? EduMyles is already helping over 500 schools across Kenya achieve remarkable results.

**Book a demo today** and discover how AI can revolutionize your school's operations and student outcomes.

---

*This article is part of our ongoing series on education technology in East Africa. Subscribe to our newsletter for more insights and updates.*
    `,
    author: {
      name: 'Dr. Sarah Kimani',
      role: 'Education Technology Lead',
      avatar: '/images/team/sarah-kimani.jpg'
    },
    publishedAt: '2024-03-15',
    readTime: '8 min read',
    category: 'Education',
    tags: ['AI in Education', 'EduMyles', 'Digital Transformation', 'Kenya Schools'],
    featured: true,
    image: '/images/blog/education-ai-kenya.jpg',
    relatedPosts: ['future-healthcare-ai-africa', 'agricultural-technology-kenya', 'digital-transformation-strategies']
  },
  'future-healthcare-ai-africa': {
    title: 'The Future of Healthcare in Africa: AI-Powered Medical Solutions',
    excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery across African hospitals and clinics.',
    content: `
# The Future of Healthcare in Africa: AI-Powered Medical Solutions

African healthcare systems are at a pivotal moment, with artificial intelligence offering unprecedented opportunities to overcome longstanding challenges and improve patient outcomes...

[Full article content would go here]
    `,
    author: {
      name: 'Dr. Michael Ochieng',
      role: 'Healthcare Innovation Director',
      avatar: '/images/team/michael-ochieng.jpg'
    },
    publishedAt: '2024-03-10',
    readTime: '6 min read',
    category: 'Healthcare',
    tags: ['Healthcare AI', 'MylesCare', 'Medical Technology', 'Africa Health'],
    featured: false,
    image: '/images/blog/healthcare-ai-africa.jpg',
    relatedPosts: ['transforming-education-ai-kenya', 'agricultural-technology-kenya']
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-1 mb-4">Blog Post Not Found</h1>
            <p className="body-text mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/blog">
              <Button>Back to Blog</Button>
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
            <div className="max-w-4xl mx-auto">
              <div className="text-white">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-light-blue/80 mb-8">
                  <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
                  <span>/</span>
                  <span className="text-gold">{post.category}</span>
                </nav>

                {/* Category Badge */}
                <div className="inline-block rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold mb-6">
                  {post.category}
                </div>

                {/* Title */}
                <h1 className="heading-1 mb-6">{post.title}</h1>

                {/* Excerpt */}
                <p className="text-xl leading-8 text-light-blue mb-8 max-w-3xl">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-light-blue/85">
                  <div className="flex items-center space-x-2">
                    <User size={20} />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={20} />
                    <span>{formatPublishedDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="section">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              {/* Author Bio */}
              <div className="bg-off-white rounded-[1.5rem] border border-light-grey shadow-soft p-6 mb-12 flex items-center space-x-4">
                <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold text-xl">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy">{post.author.name}</h3>
                  <p className="text-medium-grey text-sm">{post.author.role}</p>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-light-grey">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-sm text-gold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share and Engagement */}
              <div className="flex flex-wrap items-center justify-between mt-12 pt-8 border-t border-light-grey">
                <div className="flex items-center space-x-4">
                  <Button variant="secondary" size="sm">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Heart size={16} className="mr-2" />
                    Like
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Bookmark size={16} className="mr-2" />
                    Save
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-medium-grey">
                  <MessageCircle size={16} />
                  <span className="text-sm">23 comments</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 mb-8 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {post.relatedPosts.map((relatedSlug) => {
                  const relatedPost = blogPosts[relatedSlug as keyof typeof blogPosts]
                  if (!relatedPost) return null

                  return (
                    <div key={relatedSlug} className="bg-white rounded-[1.5rem] border border-slate-200 shadow-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                      <div className="bg-ice text-navy px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                        {relatedPost.category}
                      </div>
                      <h3 className="heading-3 mb-3">{relatedPost.title}</h3>
                      <p className="body-text text-sm mb-4">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-medium-grey">{relatedPost.readTime}</span>
                        <Link href={`/blog/${relatedSlug}`}>
                          <Button variant="secondary" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="bg-navy rounded-[1.75rem] border border-gold/15 p-8 text-center text-white shadow-card">
                <h2 className="heading-2 mb-4">Stay Updated with AI Insights</h2>
                <p className="text-xl leading-8 text-light-blue mb-8">
                  Get the latest articles on AI technology and systems modernisation in East Africa delivered to your inbox.
                </p>
                <Link href="#newsletter">
                  <Button size="lg">
                    Subscribe to Newsletter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
