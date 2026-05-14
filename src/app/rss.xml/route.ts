import { NextResponse } from 'next/server'

// Mock blog posts data - in production, this would come from a CMS
const blogPosts = [
  {
    title: 'Transforming Education in Kenya with AI: The EduMyles Revolution',
    slug: 'transforming-education-ai-kenya',
    excerpt: 'How artificial intelligence is reshaping the educational landscape across Kenyan schools and universities.',
    content: `
# Transforming Education in Kenya with AI: The EduMyles Revolution

Kenya's educational landscape is undergoing a profound transformation, driven by the integration of artificial intelligence into everyday learning experiences. At the forefront of this revolution stands EduMyles, our comprehensive AI-powered school management system that's changing how educational institutions operate across the country.

## The Current Educational Challenge

Kenyan schools face numerous challenges that have long hindered optimal learning outcomes:

- **Administrative Burden**: Teachers spend countless hours on paperwork instead of teaching
- **Resource Management**: Inefficient allocation of limited educational resources
- **Student Performance Tracking**: Difficulty in monitoring and improving student progress
- **Parent Communication**: Gaps in real-time communication between schools and parents
- **Data-Driven Decisions**: Lack of actionable insights for educational leadership

## How AI is Making a Difference

### 1. Intelligent Administrative Automation

EduMyles leverages AI to automate routine administrative tasks, freeing up valuable time for educators...

[Full content continues]
    `,
    author: 'Dr. Sarah Kimani',
    publishedAt: '2024-03-15T10:00:00Z',
    category: 'Education',
    tags: ['AI in Education', 'EduMyles', 'Digital Transformation', 'Kenya Schools'],
    image: 'https://www.mylescorptech.com/images/blog/education-ai-kenya.jpg'
  },
  {
    title: 'The Future of Healthcare in Africa: AI-Powered Medical Solutions',
    slug: 'future-healthcare-ai-africa',
    excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery across African hospitals and clinics.',
    content: `
# The Future of Healthcare in Africa: AI-Powered Medical Solutions

African healthcare systems are at a pivotal moment, with artificial intelligence offering unprecedented opportunities to overcome longstanding challenges and improve patient outcomes...

[Full content continues]
    `,
    author: 'Dr. Michael Ochieng',
    publishedAt: '2024-03-10T14:30:00Z',
    category: 'Healthcare',
    tags: ['Healthcare AI', 'MylesCare', 'Medical Technology', 'Africa Health'],
    image: 'https://www.mylescorptech.com/images/blog/healthcare-ai-africa.jpg'
  },
  {
    title: 'Agricultural Technology: Transforming Kenyan Farming with AI',
    slug: 'agricultural-technology-kenya',
    excerpt: 'How AI-powered solutions are helping Kenyan farmers increase productivity and sustainability.',
    content: `
# Agricultural Technology: Transforming Kenyan Farming with AI

Kenya's agricultural sector, the backbone of the nation's economy, is experiencing a technological renaissance powered by artificial intelligence...

[Full content continues]
    `,
    author: 'James Mwangi',
    publishedAt: '2024-03-05T09:15:00Z',
    category: 'Agriculture',
    tags: ['Agriculture AI', 'AgriMyles', 'Kenyan Farming', 'Sustainability'],
    image: 'https://www.mylescorptech.com/images/blog/agricultural-technology-kenya.jpg'
  }
]

export async function GET() {
  const siteUrl = 'https://www.mylescorptech.com'
  const currentDate = new Date().toISOString()

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>MylesCorp Technologies Blog</title>
  <description>Latest insights on AI technology and digital transformation in East Africa</description>
  <link>${siteUrl}/blog</link>
  <language>en-us</language>
  <copyright>Copyright 2024 MylesCorp Technologies Limited. All rights reserved.</copyright>
  <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
  <lastBuildDate>${currentDate}</lastBuildDate>
  <generator>MylesCorp Technologies RSS Generator</generator>
  <image>
    <url>${siteUrl}/mylescorp-logo.png</url>
    <title>MylesCorp Technologies</title>
    <link>${siteUrl}</link>
    <width>144</width>
    <height>144</height>
  </image>
  ${blogPosts.map(post => `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <description><![CDATA[${post.excerpt}]]></description>
    <link>${siteUrl}/blog/${post.slug}</link>
    <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    <dc:creator><![CDATA[${post.author}]]></dc:creator>
    <category><![CDATA[${post.category}]]></category>
    ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n    ')}
    <content:encoded><![CDATA[
      <div>
        <img src="${post.image}" alt="${post.title}" style="max-width: 100%; height: auto;">
        <p><strong>Category:</strong> ${post.category}</p>
        <div>${post.content}</div>
        <p><em>By ${post.author} | Published: ${new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</em></p>
        <p><a href="${siteUrl}/blog/${post.slug}">Read the full article on MylesCorp Technologies</a></p>
      </div>
    ]]></content:encoded>
  </item>`).join('\n')}
</channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
