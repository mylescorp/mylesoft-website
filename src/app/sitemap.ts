import { MetadataRoute } from 'next'

const base = 'https://www.mylescorptech.com'

const routes = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/portfolio', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/book-demo', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.65 },
  { path: '/careers', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/partners', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/team', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/support', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/docs', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/coverage', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/brochure', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/products/edumyles', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/eduryde', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/mylescare', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/products/agrimyles', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/products/mylescrm', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/products/myles-ai', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylespay', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/myleslogistics', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylesprop', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylesretail', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylesgov', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/myleslegal', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/myles-hospitality', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylesconstruction', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylestransit', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylesenergy', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylesnonprofit', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylesmedia', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/mylesmanufacturing', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/website-development', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/software-development', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/it-consulting', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/cloud-solutions', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/web-app-design', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/ui-ux-design', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/services/web-hosting', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.35 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.35 },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.35 },
  { path: '/compliance', changeFrequency: 'yearly', priority: 0.35 },
] satisfies Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}>

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
