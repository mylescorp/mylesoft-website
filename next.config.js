/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  logging: {
    browserToTerminal: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'www.mylescorptech.com' },
      { protocol: 'https', hostname: 'mylescorptech.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    prefetchInlining: true,
  },
  serverExternalPackages: ['algoliasearch'],
  async redirects() {
    return [
      {
        source: '/legal/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/legal/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/legal/cookies',
        destination: '/cookie-policy',
        permanent: true,
      },
      {
        source: '/legal/compliance',
        destination: '/compliance',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'X-Content-Type-Options',     value: 'nosniff' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'Server',                     value: '' },
        ],
      },
    ];
  },
}

module.exports = nextConfig
