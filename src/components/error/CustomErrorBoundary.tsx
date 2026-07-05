'use client'

import React from 'react'
import { unstable_catchError, type ErrorInfo } from 'next/error'
import { Button } from '@/components/ui/Button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { COMPANY_CONTACT } from '@/lib/constants/contact'

interface CustomErrorBoundaryProps {
  title?: string
  description?: string
  showHomeButton?: boolean
  children?: React.ReactNode
}

function CustomErrorBoundary(
  props: CustomErrorBoundaryProps,
  { unstable_retry }: ErrorInfo
) {
  const handleRetry = () => {
    unstable_retry()
  }

  const handleGoHome = () => {
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-premium-card p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-navy-500 mb-3">
          {props.title || 'Something went wrong'}
        </h1>

        <p className="text-medium-grey mb-6">
          {props.description || 'An unexpected error occurred. Please try again or contact support if the problem persists.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={handleRetry}
            className="flex items-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </Button>

          {(props.showHomeButton !== false) && (
            <Button
              variant="outline"
              onClick={handleGoHome}
              className="flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Button>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-light-grey">
          <p className="text-sm text-medium-grey">
            If this problem continues, please contact{' '}
            <a href={`mailto:${COMPANY_CONTACT.contactEmail}`} className="text-gold hover:text-navy">
              {COMPANY_CONTACT.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default unstable_catchError(CustomErrorBoundary)
