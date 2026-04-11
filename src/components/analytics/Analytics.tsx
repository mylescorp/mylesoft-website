'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import posthog from 'posthog-js'
import ReactGA from 'react-ga4'

export function AnalyticsProvider() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Initialize Google Analytics 4
    if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID)
    }

    // Initialize Posthog
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        // Disable in development
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing()
        }
      })
    }
  }, [isClient])

  // Track page views
  useEffect(() => {
    if (!isClient) return

    const handleRouteChange = () => {
      // Google Analytics page view
      if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
        ReactGA.send('pageview')
      }

      // Posthog page view
      if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        posthog.capture('$pageview')
      }
    }

    // Initial page view
    handleRouteChange()

    // Listen for route changes
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handleRouteChange)
      return () => {
        window.removeEventListener('popstate', handleRouteChange)
      }
    }
  }, [isClient])

  if (!isClient) {
    return null
  }

  return <Analytics />
}

// Custom hooks for analytics tracking
export function useAnalytics() {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Google Analytics event
    if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
      ReactGA.event({
        category: properties?.category || 'User Interaction',
        action: eventName,
        label: properties?.label,
        value: properties?.value
      })
    }

    // Posthog event
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture(eventName, properties)
    }
  }

  const trackPageView = (page: string) => {
    // Google Analytics page view
    if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
      ReactGA.send({ hitType: 'pageview', page })
    }

    // Posthog page view
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture('$pageview', { page })
    }
  }

  const trackUserProperties = (properties: Record<string, any>) => {
    // Posthog user properties
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.people.set(properties)
    }
  }

  const identifyUser = (userId: string, properties?: Record<string, any>) => {
    // Posthog identify
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.identify(userId, properties)
    }
  }

  return {
    trackEvent,
    trackPageView,
    trackUserProperties,
    identifyUser
  }
}

// Specific tracking functions for common events
export function trackNewsletterSignup() {
  // Google Analytics event
  if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Lead Generation',
      action: 'newsletter_signup',
      label: 'Newsletter',
      value: 1
    })
  }

  // Posthog event
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('newsletter_signup', {
      category: 'Lead Generation',
      label: 'Newsletter',
      value: 1
    })
  }
}

export function trackDemoRequest(product: string) {
  // Google Analytics event
  if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Lead Generation',
      action: 'demo_request',
      label: product,
      value: 1
    })
  }

  // Posthog event
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('demo_request', {
      category: 'Lead Generation',
      label: product,
      value: 1
    })
  }
}

export function trackJobApplication(jobTitle: string, department: string) {
  // Google Analytics event
  if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Careers',
      action: 'job_application',
      label: `${department} - ${jobTitle}`,
      value: 1
    })
  }

  // Posthog event
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('job_application', {
      category: 'Careers',
      label: `${department} - ${jobTitle}`,
      value: 1
    })
  }
}

export function trackContactFormSubmission(subject: string) {
  // Google Analytics event
  if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Contact',
      action: 'contact_form_submission',
      label: subject,
      value: 1
    })
  }

  // Posthog event
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('contact_form_submission', {
      category: 'Contact',
      label: subject,
      value: 1
    })
  }
}

export function trackProductView(productName: string) {
  // Google Analytics event
  if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Products',
      action: 'product_view',
      label: productName,
      value: 1
    })
  }

  // Posthog event
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('product_view', {
      category: 'Products',
      label: productName,
      value: 1
    })
  }
}

export function trackBlogPostView(postTitle: string) {
  // Google Analytics event
  if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Content',
      action: 'blog_post_view',
      label: postTitle,
      value: 1
    })
  }

  // Posthog event
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('blog_post_view', {
      category: 'Content',
      label: postTitle,
      value: 1
    })
  }
}

export function trackSearchQuery(query: string, resultsCount: number) {
  // Google Analytics event
  if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Search',
      action: 'search_query',
      label: query,
      value: resultsCount
    })
  }

  // Posthog event
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('search_query', {
      category: 'Search',
      label: query,
      value: resultsCount
    })
  }
}

export function trackWhatsAppClick() {
  // Google Analytics event
  if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Social',
      action: 'whatsapp_click',
      label: 'WhatsApp',
      value: 1
    })
  }

  // Posthog event
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('whatsapp_click', {
      category: 'Social',
      label: 'WhatsApp',
      value: 1
    })
  }
}

export function trackSocialShare(platform: string) {
  // Google Analytics event
  if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'Social',
      action: 'social_share',
      label: platform,
      value: 1
    })
  }

  // Posthog event
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture('social_share', {
      category: 'Social',
      label: platform,
      value: 1
    })
  }
}
