'use client'
import type { ErrorInfo } from 'next/error'
import { Button } from '@/components/ui/Button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { COMPANY_CONTACT, telHref } from '@/lib/constants/contact'

export default function Error({ unstable_retry }: ErrorInfo) {
  const handleRetry = () => {
    unstable_retry()
  }

  const handleGoHome = () => {
    window.location.href = '/'
  }

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-navy-dark border border-gold/20 rounded-2xl shadow-card overflow-hidden">
        {/* Error Header */}
        <div className="bg-navy border-b border-gold/20 p-6 text-white text-center">
          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-gold" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">Page Could Not Load</h1>
          <p className="font-body text-light-blue">Something unexpected happened</p>
        </div>

        {/* Error Content */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="font-display text-xl font-semibold text-white mb-3">
              We&apos;re sorry for the inconvenience
            </h2>
            <p className="font-body text-light-blue leading-relaxed">
              An unexpected error occurred while loading this page. Our team has been notified
              and is working to resolve the issue. You can try refreshing the page or go back
              to the homepage.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button
              onClick={handleRetry}
              variant="primary"
              className="bg-gold text-navy hover:bg-gold-light font-body font-bold"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>

            <Button
              variant="outline"
              onClick={handleReload}
              className="border-gold/20 text-gold hover:border-gold hover:bg-gold/10 font-body"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reload Page
            </Button>

            <Button
              variant="outline"
              onClick={handleGoHome}
              className="border-gold/20 text-gold hover:border-gold hover:bg-gold/10 font-body"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>

          {/* Support Information */}
          <div className="bg-navy-dark/50 border border-gold/10 rounded-lg p-6 text-center">
            <h3 className="font-display font-semibold text-white mb-2">Need Help?</h3>
            <p className="font-body text-sm text-muted-blue mb-4">
              If this problem continues, please don&apos;t hesitate to reach out to our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm font-body">
              <a
                href={`mailto:${COMPANY_CONTACT.contactEmail}`}
                className="text-gold hover:text-gold-light font-medium"
              >
                {COMPANY_CONTACT.contactEmail}
              </a>
              <span className="text-muted-blue">•</span>
              <a
                href={telHref(COMPANY_CONTACT.technicalPhone)}
                className="text-gold hover:text-gold-light font-medium"
              >
                {COMPANY_CONTACT.technicalPhone}
              </a>
            </div>
          </div>
        </div>

        {/* Error Footer */}
        <div className="bg-navy border-t border-gold/10 px-8 py-4 text-center">
          <p className="font-mono text-xs text-muted-blue">
            Please refresh the page or contact support if this continues.
          </p>
        </div>
      </div>
    </div>
  )
}
