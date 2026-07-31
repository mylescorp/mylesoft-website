import { NextResponse } from 'next/server'

// Editorial feed entries for the public RSS route.
const blogPosts = [
  {
    title: 'Modernising School Operations in Kenya with EduMyles',
    slug: 'transforming-education-ai-kenya',
    excerpt: 'How digital administration, reporting, and parent communication can make school operations clearer.',
    content: `
# Modernising School Operations in Kenya with EduMyles

Kenyan schools are adopting digital systems for administration, communication, reporting, and parent engagement. EduMyles supports these daily workflows for institutions across the country.
    `,
    author: 'Dr. Sarah Kimani',
    publishedAt: '2024-03-15T10:00:00Z',
    category: 'Education',
    tags: ['EduMyles', 'School Operations', 'Digital Transformation', 'Kenya Schools'],
    image: 'https://www.mylescorptech.com/images/blog/education-ai-kenya.jpg'
  },
  {
    title: 'The Future of Healthcare Operations in Africa',
    slug: 'future-healthcare-ai-africa',
    excerpt: 'Exploring how structured digital systems can improve healthcare administration across hospitals and clinics.',
    content: `
# The Future of Healthcare Operations in Africa

African healthcare systems need clearer records, smoother billing, pharmacy visibility, and patient-flow coordination.
    `,
    author: 'Dr. Michael Ochieng',
    publishedAt: '2024-03-10T14:30:00Z',
    category: 'Healthcare',
    tags: ['MylesCare', 'Healthcare Operations', 'Medical Technology', 'Africa Health'],
    image: 'https://www.mylescorptech.com/images/blog/healthcare-ai-africa.jpg'
  },
  {
    title: 'Agricultural Technology for Kenyan Farming Operations',
    slug: 'agricultural-technology-kenya',
    excerpt: 'How software products are helping Kenyan farmers increase productivity and sustainability.',
    content: `
# Agricultural Technology for Kenyan Farming Operations

Kenyan agriculture needs clearer farm records, cooperative workflows, market coordination, and field reporting.
    `,
    author: 'James Mwangi',
    publishedAt: '2024-03-05T09:15:00Z',
    category: 'Agriculture',
    tags: ['AgriMyles', 'Kenyan Farming', 'Field Operations', 'Sustainability'],
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
  <description>Latest insights on product delivery and systems modernisation in East Africa</description>
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
