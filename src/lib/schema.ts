// Schema.org structured data for MylesCorp Technologies

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MylesCorp Technologies',
  alternateName: 'MylesCorp',
  url: 'https://www.mylescorptech.com',
  logo: 'https://www.mylescorptech.com/icon.png',
  description: 'East Africa\'s leading AI-powered software company transforming Education, Healthcare, Agriculture, and Business with innovative solutions.',
  email: 'info@mylescorptech.com',
  telephone: '+254 743 993 715',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nairobi',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    addressCountry: 'KE',
  },
  sameAs: [
    'https://www.linkedin.com/company/mylescorp-technologies',
    'https://twitter.com/MylesCorpTech',
    'https://www.facebook.com/MylesCorpTechnologies',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254 743 993 715',
    contactType: 'customer service',
    availableLanguage: ['English', 'Swahili'],
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MylesCorp Technologies',
  url: 'https://www.mylescorptech.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.mylescorptech.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MylesCorp Technologies',
  url: 'https://www.mylescorptech.com',
  description: 'AI-powered software solutions for education, healthcare, agriculture and business in East Africa.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '15000',
    priceCurrency: 'KES',
  },
  areaServed: ['Kenya', 'Uganda', 'Tanzania'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KE',
    addressLocality: 'Nairobi',
  },
}
