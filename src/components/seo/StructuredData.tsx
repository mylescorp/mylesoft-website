import Script from 'next/script'
import { organizationSchema, websiteSchema, localBusinessSchema } from '@/lib/schema'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'localBusiness' | 'all'
  title?: string
  description?: string
  url?: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
}

export function StructuredData({
  type = 'all',
  title,
  description,
  url = 'https://www.mylescorptech.com',
  image = '/og-image.png',
  datePublished,
  dateModified,
  author
}: StructuredDataProps) {
  const schemas = []

  if (type === 'all' || type === 'organization') {
    schemas.push(organizationSchema)
  }

  if (type === 'all' || type === 'website') {
    schemas.push(websiteSchema)
  }

  if (type === 'all' || type === 'localBusiness') {
    schemas.push(localBusinessSchema)
  }

  // Article schema for blog posts
  if (datePublished) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      image: image,
      datePublished: datePublished,
      dateModified: dateModified || datePublished,
      author: {
        '@type': author ? 'Person' : 'Organization',
        name: author || 'MylesCorp Technologies',
      },
      publisher: {
        '@type': 'Organization',
        name: 'MylesCorp Technologies',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.mylescorptech.com/icon.png',
        },
      },
      url: url,
    })
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) }}
    />
  )
}
