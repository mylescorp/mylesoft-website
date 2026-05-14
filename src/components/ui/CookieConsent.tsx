'use client'

import React, { useState, useEffect } from 'react'
import { Cookie } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface CookieConsentProps {
  onAccept?: () => void
  onReject?: () => void
}

export function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookie-consent')
    if (!cookieChoice) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-preferences', JSON.stringify({
      essential: true,
      performance: true,
      functional: true,
      marketing: true
    }))
    setIsVisible(false)
    onAccept?.()
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-preferences', JSON.stringify({
      essential: true,
      performance: false,
      functional: false,
      marketing: false
    }))
    setIsVisible(false)
    onReject?.()
  }

  const handleSavePreferences = (preferences: Record<string, boolean>) => {
    localStorage.setItem('cookie-consent', 'customized')
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy text-white z-50 shadow-gold border-t border-gold/20">
      <div className="container">
        <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start space-x-3">
            <Cookie size={24} className="text-gold" />
            <div className="flex-1">
              <p className="mb-1 text-[0.98rem] font-semibold text-white">
                We use cookies to enhance your experience and analyze our traffic.
              </p>
              <p className="text-[0.92rem] leading-6 text-light-blue">
                By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="underline ml-1 hover:text-gold transition-colors"
                >
                  {showDetails ? 'Hide' : 'Show'} details
                </button>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 self-end md:self-auto">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleReject}
              className="bg-transparent border-white text-white hover:bg-white hover:text-navy-500"
            >
              Reject
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
            >
              Accept All
            </Button>
          </div>
        </div>

        {showDetails && (
          <div className="border-t border-gold/20 bg-navy/50 p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <CookieOption
                name="Essential"
                description="Required for the website to function"
                disabled={true}
                checked={true}
              />
              <CookieOption
                name="Performance"
                description="Help us improve our website"
                checked={true}
                onSave={handleSavePreferences}
              />
              <CookieOption
                name="Functional"
                description="Enable enhanced functionality"
                checked={true}
                onSave={handleSavePreferences}
              />
              <CookieOption
                name="Marketing"
                description="Help us show relevant ads"
                checked={true}
                onSave={handleSavePreferences}
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowDetails(false)}
                className="bg-transparent border-white text-white hover:bg-white hover:text-navy-500"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  const preferences = {
                    essential: true,
                    performance: true,
                    functional: true,
                    marketing: true
                  }
                  handleSavePreferences(preferences)
                }}
              >
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface CookieOptionProps {
  name: string
  description: string
  disabled?: boolean
  checked?: boolean
  onSave?: (preferences: Record<string, boolean>) => void
}

function CookieOption({ name, description, disabled = false, checked = false, onSave }: CookieOptionProps) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = () => {
    if (disabled) return

    const newChecked = !isChecked
    setIsChecked(newChecked)

    // Save preferences immediately
    if (onSave) {
      const preferences = {
        essential: true,
        performance: name === 'Performance' ? newChecked : true,
        functional: name === 'Functional' ? newChecked : true,
        marketing: name === 'Marketing' ? newChecked : true
      }
      onSave(preferences)
    }
  }

  return (
    <div className={`flex items-start space-x-2 ${disabled ? 'opacity-50' : ''}`}>
      <input
        type="checkbox"
        id={`cookie-${name.toLowerCase()}`}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="mt-1 w-4 h-4 text-gold bg-white border-gold/30 rounded focus:ring-gold focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy"
      />
      <div className="flex-1">
        <label
          htmlFor={`cookie-${name.toLowerCase()}`}
          className={`text-sm font-medium ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {name}
          {disabled && <span className="ml-1 text-xs">(Required)</span>}
        </label>
        <p className="text-xs leading-5 text-light-blue">{description}</p>
      </div>
    </div>
  )
}
