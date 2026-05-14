'use client'

import React, { Component, ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo })

    // Log error to console in development - this is appropriate for error boundaries
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        this.props.fallback || (
          <div className="min-h-[400px] flex items-center justify-center bg-navy p-6">
            <div className="text-center max-w-md">
              {/* Gold Icon */}
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-gold" />
              </div>

              {/* Heading */}
              <h2 className="font-display font-bold text-white text-2xl mb-4">
                Something went wrong
              </h2>

              {/* Message */}
              <p className="font-body text-light-blue mb-6">
                We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
              </p>

              {/* Error details in development */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-navy-dark rounded-lg text-left overflow-auto">
                  <p className="font-mono text-xs text-red-400 mb-2">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <pre className="font-mono text-xs text-muted-blue whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              )}

              {/* Retry Button */}
              <Button
                onClick={this.handleRetry}
                variant="primary"
                className="bg-gold text-navy hover:bg-gold-light font-body font-bold"
              >
                <RefreshCw className="mr-2 w-4 h-4" />
                Reload Page
              </Button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}

// Hook for using error boundaries with functional components
export function useErrorBoundary() {
  const [hasError, setHasError] = React.useState(false)

  const resetError = () => setHasError(false)

  return { hasError, setHasError, resetError }
}
