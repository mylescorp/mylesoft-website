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

// Editorial article data used for the public blog route.
const blogPosts = {
  'transforming-education-ai-kenya': {
    title: 'Modernising School Operations in Kenya with EduMyles',
    excerpt: 'How digital administration, reporting, and parent communication can make school operations clearer.',
    content: `
# Modernising School Operations in Kenya with EduMyles

Kenyan schools are adopting digital systems for administration, communication, reporting, and parent engagement. EduMyles supports these daily workflows for institutions across the country.

## The Current Educational Challenge

Kenyan schools face numerous challenges that have long hindered optimal learning outcomes:

- **Administrative Burden**: Teachers spend countless hours on paperwork instead of teaching
- **Resource Management**: Inefficient allocation of limited educational resources
- **Student Performance Tracking**: Difficulty in monitoring and improving student progress
- **Parent Communication**: Gaps in real-time communication between schools and parents
- **Data-Driven Decisions**: Lack of actionable insights for educational leadership

## How Digital Systems Help

### 1. Administrative Automation

EduMyles supports routine administrative tasks so educators can spend more time on school work that needs human judgement:

- **Attendance Records**: Digital attendance workflows for class and school operations
- **Assessment Support**: Structured assessment capture and review
- **Schedule Planning**: Timetabling support for classes, staff, and school resources
- **Report Generation**: Progress reports prepared from recorded academic data

### 2. Student Support

Digital records make it easier for school teams to spot patterns and support learners early:

- **Performance Tracking**: Academic records organised by learner, class, and term
- **Early Follow-up**: Easier visibility into learners who need extra attention
- **Parent Communication**: Clearer updates for families and guardians
- **Leadership Review**: Dashboards that help school leaders review operations

### 3. Parent Engagement

Timely communication keeps parents informed and reduces unnecessary office follow-up:

- **Fee Updates**: Clear payment follow-up and receipt visibility
- **Academic Updates**: Structured sharing of report cards and progress records
- **Announcements**: School notices sent through reliable communication channels
- **Contact Records**: Easier management of parent and guardian information

## Operational Impact

EduMyles is built around the practical work schools repeat every week:

- admissions and student records
- CBC reporting
- fee management
- attendance workflows
- parent communication
- staff and administrative records

## Implementation Focus

Successful school software depends on careful setup. The EduMyles rollout process focuses on:

- mapping the school's classes, streams, staff, and academic structure
- cleaning and importing student records
- configuring fee items and communication templates
- training the school team before launch
- reviewing the first live operating cycle with administrators

## Data Protection

School data must be handled with care. EduMyles is designed around role-based access, clear operating permissions, and responsible handling of learner and family records.

## Looking Ahead

Kenyan schools need software that respects local workflows, academic structures, payment realities, and parent communication habits. EduMyles is built for that context.

## Plan Your School Rollout

Book a demo to review how EduMyles can support your school's daily operations.

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
    tags: ['EduMyles', 'School Operations', 'Digital Transformation', 'Kenya Schools'],
    featured: true,
    image: '/images/blog/education-ai-kenya.jpg',
    relatedPosts: ['future-healthcare-ai-africa', 'agricultural-technology-kenya', 'digital-transformation-strategies']
  },
  'future-healthcare-ai-africa': {
    title: 'The Future of Healthcare Operations in Africa',
    excerpt: 'Exploring how structured digital systems can improve healthcare administration across hospitals and clinics.',
    content: `
# The Future of Healthcare Operations in Africa

African healthcare systems need clearer records, smoother billing, pharmacy visibility, and patient-flow coordination.

MylesCare is built around these operational needs: patient registration, appointment scheduling, billing, pharmacy records, laboratory workflows, and reporting. The goal is practical improvement in daily facility management, not hype.

Healthcare digitisation works best when facilities start with clear workflows, trained teams, and careful data handling. A strong rollout maps departments, roles, patient journeys, and billing processes before launch.
    `,
    author: {
      name: 'Dr. Michael Ochieng',
      role: 'Healthcare Innovation Director',
      avatar: '/images/team/michael-ochieng.jpg'
    },
    publishedAt: '2024-03-10',
    readTime: '6 min read',
    category: 'Healthcare',
    tags: ['MylesCare', 'Healthcare Operations', 'Medical Technology', 'Africa Health'],
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
                <h2 className="heading-2 mb-4">Stay Updated with Product Insights</h2>
                <p className="text-xl leading-8 text-light-blue mb-8">
                  Get the latest articles on product delivery and systems modernisation in East Africa delivered to your inbox.
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
