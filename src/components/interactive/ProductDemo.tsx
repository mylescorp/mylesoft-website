'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Star, Users, TrendingUp, Shield } from 'lucide-react'

interface DemoStep {
  id: string
  title: string
  description: string
  content: React.ReactNode
  duration?: number
}

interface ProductDemoProps {
  productName: string
  productIcon: React.ReactNode
  steps: DemoStep[]
  features: string[]
  stats: {
    users?: string
    growth?: string
    reliability?: string
  }
  className?: string
}

export function ProductDemo({
  productName,
  productIcon,
  steps,
  features,
  stats,
  className = ''
}: ProductDemoProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && currentStep < steps.length - 1) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentStep((step) => Math.min(step + 1, steps.length - 1))
            return 0
          }
          return prev + 2
        })
      }, 50)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentStep, steps.length])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying && currentStep === steps.length - 1) {
      setCurrentStep(0)
      setProgress(0)
    }
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStep(0)
    setProgress(0)
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setProgress(0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setProgress(0)
    }
  }

  const currentDemoStep = steps[currentStep]

  return (
    <div className={`bg-white rounded-2xl border border-light-grey shadow-premium-card overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-600 to-navy-700 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
              {productIcon}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{productName} Demo</h2>
              <p className="text-navy-200">Interactive Product Tour</p>
            </div>
          </div>
          <Badge variant="gold" className="bg-gold text-navy">
            {steps.length} Steps
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {stats.users && (
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Users className="w-4 h-4 text-gold" />
                <span className="text-lg font-bold">{stats.users}</span>
              </div>
              <p className="text-xs text-navy-200">Active Users</p>
            </div>
          )}
          {stats.growth && (
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <TrendingUp className="w-4 h-4 text-gold" />
                <span className="text-lg font-bold">{stats.growth}</span>
              </div>
              <p className="text-xs text-navy-200">Growth Rate</p>
            </div>
          )}
          {stats.reliability && (
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Shield className="w-4 h-4 text-gold" />
                <span className="text-lg font-bold">{stats.reliability}</span>
              </div>
              <p className="text-xs text-navy-200">Reliability</p>
            </div>
          )}
        </div>
      </div>

      {/* Demo Content */}
      <div className="p-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-medium-grey mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-light-grey rounded-full h-2">
            <div
              className="bg-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <ScrollReveal key={currentStep} direction="up">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-navy-500 mb-2">
              {currentDemoStep.title}
            </h3>
            <p className="text-medium-grey mb-4">
              {currentDemoStep.description}
            </p>
            <div className="bg-off-white rounded-lg p-6 min-h-[300px]">
              {currentDemoStep.content}
            </div>
          </div>
        </ScrollReveal>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleReset}
              className="flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handlePlay}
              className="flex items-center space-x-2"
              disabled={currentStep === steps.length - 1}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Play Tour</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentStep(index)
                setProgress(0)
                setIsPlaying(false)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'bg-gold w-8'
                  : 'bg-light-grey hover:bg-medium-grey'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="border-t border-light-grey p-6 bg-off-white">
        <h4 className="text-lg font-semibold text-navy-500 mb-4">Key Features</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-sm text-medium-grey">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
