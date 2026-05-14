'use client'

import { useEffect } from 'react'
import type { ErrorInfo } from 'next/error'
import { Button } from '@/components/ui/Button'
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'

export default function Error({ error, unstable_retry }: ErrorInfo) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)

    // You could also send to a service like Sentry, LogRocket, etc.
    // errorReportingService.captureException(error)
  }, [error])

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
          <h1 className="font-display text-3xl font-bold mb-2">Application Error</h1>
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

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <details className="mb-6">
              <summary className="cursor-pointer text-sm font-medium text-navy-500 mb-2 hover:text-gold">
                Error Details (Development )
              </summary>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-2">
                <pre className="text-xs font-mono text-red-700 whitespace-pre-wrap break-all">
                  {error.stack || error.message}
                </pre>
              </div>
            </details>
          )}

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
              <Bug className="w-4 h-4 mr-2" />
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
                href="mailto:support@mylescorptech.com"
                className="text-gold hover:text-gold-light font-medium"
              >
                support@mylescorptech.com
              </a>
              <span className="text-muted-blue">•</span>
              <a
                href="tel:+254743993715"
                className="text-gold hover:text-gold-light font-medium"
              >
                +254 743 993 715
              </a>
            </div>
          </div>
        </div>

        {/* Error Footer */}
        <div className="bg-navy border-t border-gold/10 px-8 py-4 text-center">
          <p className="font-mono text-xs text-muted-blue">
            Error ID: {Date.now()} | Reference: {error.name || 'Unknown'}
          </p>
        </div>
      </div>
    </div>
  )
}
