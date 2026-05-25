export type HeroImage = {
  src: string
  alt: string
}

export const SERVICE_HERO_IMAGES = {
  websiteDevelopment: {
    src: '/services/website-development.webp',
    alt: 'Laptop showing website development code for a business site',
  },
  softwareDevelopment: {
    src: '/services/software-development.webp',
    alt: 'Software developers collaborating over application code',
  },
  webAppDesign: {
    src: '/services/web-app-design.webp',
    alt: 'Digital web application interface design on a workspace screen',
  },
  uiUxDesign: {
    src: '/services/ui-ux-design.webp',
    alt: 'Designer planning user interface and user experience screens',
  },
  cloudSolutions: {
    src: '/services/cloud-solutions.webp',
    alt: 'Cloud infrastructure and data center servers',
  },
  webHosting: {
    src: '/services/web-hosting.webp',
    alt: 'Server room hardware for managed website hosting',
  },
  itConsulting: {
    src: '/services/it-consulting.webp',
    alt: 'Technology consultants reviewing a digital strategy in a meeting',
  },
} satisfies Record<string, HeroImage>

export const HOMEPAGE_SERVICE_HERO_IMAGES = [
  SERVICE_HERO_IMAGES.websiteDevelopment,
  SERVICE_HERO_IMAGES.softwareDevelopment,
  SERVICE_HERO_IMAGES.webAppDesign,
  SERVICE_HERO_IMAGES.uiUxDesign,
  SERVICE_HERO_IMAGES.cloudSolutions,
  SERVICE_HERO_IMAGES.webHosting,
  SERVICE_HERO_IMAGES.itConsulting,
]
