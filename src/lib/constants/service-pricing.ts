export type ServicePricingPlan = {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  featured?: boolean
}

export type ServicePricingGroup = {
  slug: string
  name: string
  category: string
  href: string
  summary: string
  plans: ServicePricingPlan[]
}

export const SERVICE_PRICING: ServicePricingGroup[] = [
  {
    slug: 'website-development',
    name: 'Website Development',
    category: 'Websites',
    href: '/services/website-development',
    summary: 'Business websites for schools, institutions, and organisations that need a credible web presence.',
    plans: [
      {
        name: 'Starter',
        price: 'KSh 25,000',
        description: 'A polished starter website for small businesses, schools, and personal brands.',
        features: [
          'Custom responsive design',
          'Up to 5 pages',
          'Basic SEO setup',
          'Contact form integration',
          'SSL-ready launch setup',
          '1 month support window'
        ]
      },
      {
        name: 'Growth',
        price: 'KSh 65,000',
        description: 'A fuller website for growing organisations that need richer content and stronger conversion paths.',
        features: [
          'Up to 15 pages',
          'Advanced SEO structure',
          'Blog or news section',
          'Forms and analytics setup',
          'Performance optimisation',
          '3 months support window'
        ],
        featured: true
      },
      {
        name: 'Enterprise',
        price: 'KSh 150,000+',
        description: 'A custom website or digital experience for larger organisations and complex requirements.',
        features: [
          'Unlimited planned pages',
          'Custom CMS or workflow integrations',
          'Advanced analytics dashboard',
          'Security and launch review',
          'Training and handover',
          'Priority support'
        ]
      }
    ]
  },
  {
    slug: 'software-development',
    name: 'Custom Software Development',
    category: 'Software',
    href: '/services/software-development',
    summary: 'Bespoke web apps, portals, dashboards, internal systems, APIs, and workflow platforms.',
    plans: [
      {
        name: 'Prototype',
        price: 'KSh 80,000',
        description: 'A focused proof-of-concept or MVP module to validate the workflow quickly.',
        features: [
          'Discovery and requirements workshop',
          'Core user flow implementation',
          'Basic admin dashboard',
          'Authentication setup',
          'Testing and deployment',
          'Technical handover'
        ]
      },
      {
        name: 'Business System',
        price: 'KSh 250,000',
        description: 'A production business application with user roles, data workflows, and integrations.',
        features: [
          'Multi-role application architecture',
          'Database design and API development',
          'Dashboards and reporting',
          'Payment or third-party integrations',
          'QA, deployment, and documentation',
          'Post-launch support'
        ],
        featured: true
      },
      {
        name: 'Enterprise Platform',
        price: 'KSh 500,000+',
        description: 'A larger custom platform for complex operations, multiple teams, or long-term product development.',
        features: [
          'Advanced system architecture',
          'Multiple modules and departments',
          'Custom integrations and automation',
          'Security and performance review',
          'Training and rollout support',
          'Dedicated delivery planning'
        ]
      }
    ]
  },
  {
    slug: 'web-app-design',
    name: 'Web Application Design',
    category: 'Product Design',
    href: '/services/web-app-design',
    summary: 'UX strategy, interface design, and responsive product design for web applications and SaaS platforms.',
    plans: [
      {
        name: 'Essential UI',
        price: 'KSh 35,000',
        description: 'A clean design package for a focused landing page, dashboard, or small web app interface.',
        features: [
          'UX review and design direction',
          'Responsive interface layouts',
          'Core component styling',
          'Clickable design handoff',
          'Basic design documentation',
          '2 revision rounds'
        ]
      },
      {
        name: 'Product Design',
        price: 'KSh 90,000',
        description: 'A complete design package for SaaS, portals, dashboards, and customer-facing workflows.',
        features: [
          'User journey mapping',
          'Wireframes and high-fidelity UI',
          'Responsive desktop and mobile views',
          'Reusable component patterns',
          'Developer-ready handoff',
          '3 revision rounds'
        ],
        featured: true
      },
      {
        name: 'Advanced Product System',
        price: 'KSh 200,000+',
        description: 'A broader product design engagement for multi-module platforms and design systems.',
        features: [
          'Research and product strategy',
          'Design system foundations',
          'Multi-role workflow design',
          'Accessibility review',
          'Prototype and stakeholder review',
          'Ongoing design support'
        ]
      }
    ]
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    category: 'Design',
    href: '/services/ui-ux-design',
    summary: 'Research, prototyping, user interface design, design systems, and conversion-focused UX improvement.',
    plans: [
      {
        name: 'Startup Package',
        price: 'KSh 50,000',
        description: 'For startups and small businesses that need a clear product design foundation.',
        features: [
          'User research',
          'Wireframing',
          'UI mockups',
          'Basic prototype',
          'Style guide',
          '2 revisions'
        ]
      },
      {
        name: 'Product Package',
        price: 'KSh 150,000',
        description: 'For growing businesses that need complete product UX and interface design.',
        features: [
          'Comprehensive research',
          'Full UI/UX design',
          'Interactive prototype',
          'Design system',
          'User testing',
          'Priority support'
        ],
        featured: true
      },
      {
        name: 'Enterprise Package',
        price: 'Custom',
        description: 'For large organisations, multi-platform products, and ongoing design support.',
        features: [
          'Full research program',
          'Complete design system',
          'Multi-platform design',
          'Advanced prototyping',
          'Extensive testing',
          'Dedicated team'
        ]
      }
    ]
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    category: 'Cloud',
    href: '/services/cloud-solutions',
    summary: 'Cloud infrastructure, migration, monitoring, backups, security, and optimisation for growing teams.',
    plans: [
      {
        name: 'Cloud Starter',
        price: 'KSh 60,000',
        description: 'A practical cloud setup for small teams moving from manual or shared infrastructure.',
        features: [
          'Cloud readiness review',
          'Basic infrastructure setup',
          'Domain, SSL, and deployment configuration',
          'Backup setup',
          'Monitoring basics',
          'Documentation handover'
        ]
      },
      {
        name: 'Cloud Operations',
        price: 'KSh 180,000',
        description: 'A managed cloud foundation for production applications, security, and operational resilience.',
        features: [
          'Cloud architecture planning',
          'Production deployment pipeline',
          'Database and storage configuration',
          'Security hardening',
          'Monitoring and alerting',
          'Cost optimisation review'
        ],
        featured: true
      },
      {
        name: 'Cloud Enterprise',
        price: 'KSh 450,000+',
        description: 'A custom infrastructure engagement for larger platforms and mission-critical systems.',
        features: [
          'High-availability architecture',
          'Multi-environment deployment',
          'Advanced security controls',
          'Disaster recovery planning',
          'Performance optimisation',
          'Dedicated cloud support'
        ]
      }
    ]
  },
  {
    slug: 'web-hosting',
    name: 'Web Hosting',
    category: 'Hosting',
    href: '/services/web-hosting',
    summary: 'Reliable web hosting with SSL, backups, email, migrations, domains, and technical support.',
    plans: [
      {
        name: 'Starter',
        price: 'KSh 2,999',
        period: '/month',
        description: 'For personal websites, blogs, and small businesses.',
        features: [
          '10 GB NVMe SSD storage',
          '100 GB bandwidth/month',
          '1 website',
          '5 email accounts',
          'Free SSL certificate',
          'Daily automated backups'
        ]
      },
      {
        name: 'Growth',
        price: 'KSh 5,999',
        period: '/month',
        description: 'For growing businesses and multiple websites.',
        features: [
          '50 GB NVMe SSD storage',
          '500 GB bandwidth/month',
          '5 websites',
          '25 email accounts',
          'Unlimited SSL certificates',
          'Priority support'
        ],
        featured: true
      },
      {
        name: 'Business',
        price: 'KSh 9,999',
        period: '/month',
        description: 'For established businesses with higher traffic and stronger support needs.',
        features: [
          '100 GB NVMe SSD storage',
          'Unlimited bandwidth',
          '10 websites',
          '50 email accounts',
          'Real-time backups',
          'Enhanced security suite'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored hosting for mission-critical sites, apps, and larger infrastructure needs.',
        features: [
          'Dedicated or cloud infrastructure',
          'Unlimited planned resources',
          'Custom control panel options',
          'Advanced DDoS protection',
          'Load balancing',
          'Dedicated support team'
        ]
      }
    ]
  },
  {
    slug: 'it-consulting',
    name: 'IT Consulting',
    category: 'Consulting',
    href: '/services/it-consulting',
    summary: 'Technology advisory, audits, systems planning, vendor guidance, and implementation roadmaps.',
    plans: [
      {
        name: 'Assessment',
        price: 'KSh 50,000',
        description: 'A focused assessment for teams that need clarity on systems, risks, and next steps.',
        features: [
          'Discovery workshop',
          'Current-state technology review',
          'Risk and opportunity report',
          'Priority recommendations',
          'Implementation roadmap',
          'Executive summary'
        ]
      },
      {
        name: 'Transformation Roadmap',
        price: 'KSh 150,000',
        description: 'A deeper consulting engagement for organisations preparing structured systems modernisation.',
        features: [
          'Stakeholder interviews',
          'Process and systems audit',
          'Systems modernisation roadmap',
          'Budget and implementation planning',
          'Vendor and platform guidance',
          'Board-ready presentation'
        ],
        featured: true
      },
      {
        name: 'Enterprise Advisory',
        price: 'KSh 400,000+',
        description: 'Ongoing strategic advisory for complex organisations, multi-team rollouts, or major modernisation.',
        features: [
          'Technology governance support',
          'Multi-department implementation planning',
          'Security and compliance advisory',
          'Procurement and vendor oversight',
          'Change management guidance',
          'Ongoing executive advisory'
        ]
      }
    ]
  }
]

export const servicePricingBySlug = Object.fromEntries(
  SERVICE_PRICING.map((service) => [service.slug, service])
) as Record<string, ServicePricingGroup>
