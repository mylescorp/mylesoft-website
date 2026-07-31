'use client'

import React, { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getCsrfHeader } from '@/lib/client/csrf'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    setMessage('')

    try {
      const csrfHeader = await getCsrfHeader()
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...csrfHeader,
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json() as { success?: boolean; message?: string }

      if (response.ok && data.success) {
        setStatus('success')
        setMessage(data.message || 'Subscribed. Welcome to the MylesCorp community.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message || 'We could not complete the subscription. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('We could not complete the subscription. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-navy-500 text-white rounded-2xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="text-gold" size={32} />
        </div>
        <h3 className="heading-3 mb-3">Stay Updated</h3>
        <p className="text-navy-200">
          Get product updates, implementation notes, and East African technology insights.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-white/10 border border-navy-400 rounded-lg text-white placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            disabled={isSubmitting}
          />
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-300" size={20} />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </Button>

        {status === 'success' && (
          <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
            <CheckCircle size={20} />
            <span className="text-sm">{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
            <AlertCircle size={20} />
            <span className="text-sm">{message}</span>
          </div>
        )}
      </form>

      <div className="mt-6 pt-6 border-t border-navy-400">
        <p className="text-xs text-navy-300 text-center">
          By subscribing, you agree to our{' '}
          <a href="/legal/privacy" className="text-gold hover:text-gold-light underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/legal/terms" className="text-gold hover:text-gold-light underline">
            Terms of Service
          </a>
          . Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}
