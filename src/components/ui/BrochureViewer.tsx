'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface HtmlContent {
  body: string
  styles: string
}

interface BrochureViewerProps {
  htmlPath: string
}

export function BrochureViewer({ htmlPath }: BrochureViewerProps) {
  const [htmlContent, setHtmlContent] = useState<HtmlContent>({ body: '', styles: '' })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const loadBrochure = async () => {
      try {
        const response = await fetch(htmlPath)
        if (!response.ok) {
          throw new Error('Failed to load brochure')
        }
        const html = await response.text()

        // Extract the body content to avoid nested html/head tags
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
        const bodyContent = bodyMatch ? bodyMatch[1] : html

        // Extract head content for styles
        const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)
        const headContent = headMatch ? headMatch[1] : ''

        // Extract styles from head
        const styleMatch = headContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i)
        const styles = styleMatch ? styleMatch[1] : ''

        setHtmlContent({ body: bodyContent, styles })
        setLoading(false)
      } catch (err) {
        setError('Failed to load brochure. Please try again later.')
        setLoading(false)
      }
    }

    loadBrochure()
  }, [htmlPath])

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C79639] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#95A9CC] text-lg">Loading brochure...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-400 text-xl mb-4">Error</div>
          <p className="text-[#95A9CC] mb-6">{error}</p>
          <Link href="/" className="inline-block px-6 py-3 bg-[#C79639] text-[#1A395B] font-bold rounded-lg hover:bg-[#A67C2E] transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              ${htmlContent.styles}
            </style>
            ${htmlContent.body}
          `
        }}
        style={{ all: 'unset', display: 'contents' }}
      />
    </>
  )
}
