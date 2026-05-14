'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Search as SearchIcon, X, FileText, Briefcase, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { InstantSearch, Hits } from 'react-instantsearch'

// Initialize Algolia client
const searchClient = {
  search: async () => {
    return {
      results: []
    }
  }
}

interface SearchProps {
  isOpen: boolean
  onClose: () => void
}

export function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div
        ref={searchRef}
        className="w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden fade-in"
      >
        {/* Search Header */}
        <div className="p-6 border-b border-light-grey">
          <div className="flex items-center space-x-4">
            <SearchIcon className="text-gold" size={24} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, blog posts, careers..."
              className="flex-1 text-lg outline-none placeholder-medium-grey"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-2 text-muted-blue hover:text-gold hover:bg-gold/[0.06] rounded-md transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {query ? (
            <InstantSearch searchClient={searchClient} indexName="mylescorp_content">
              <Hits hitComponent={CustomHit} />
            </InstantSearch>
          ) : (
            <div className="p-8 text-center">
              <SearchIcon className="text-medium-grey mx-auto mb-4" size={48} />
              <h3 className="heading-3 mb-2">Start typing to search</h3>
              <p className="text-medium-grey">
                Search for products, blog posts, careers, and more
              </p>
            </div>
          )}
        </div>

        {/* Quick Links */}
        {!query && (
          <div className="p-6 border-t border-light-grey">
            <h4 className="font-semibold text-navy-500 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/products"
                className="flex flex-col items-center p-4 bg-off-white rounded-lg hover:bg-ice transition-colors"
                onClick={onClose}
              >
                <Briefcase className="text-gold mb-2" size={24} />
                <span className="text-sm font-medium">Products</span>
              </Link>
              <Link
                href="/blog"
                className="flex flex-col items-center p-4 bg-off-white rounded-lg hover:bg-ice transition-colors"
                onClick={onClose}
              >
                <FileText className="text-gold mb-2" size={24} />
                <span className="text-sm font-medium">Blog</span>
              </Link>
              <Link
                href="/careers"
                className="flex flex-col items-center p-4 bg-off-white rounded-lg hover:bg-ice transition-colors"
                onClick={onClose}
              >
                <Users className="text-gold mb-2" size={24} />
                <span className="text-sm font-medium">Careers</span>
              </Link>
              <Link
                href="/contact"
                className="flex flex-col items-center p-4 bg-off-white rounded-lg hover:bg-ice transition-colors"
                onClick={onClose}
              >
                <ArrowRight className="text-gold mb-2" size={24} />
                <span className="text-sm font-medium">Contact</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Hit component for search results
function CustomHit({ hit }: { hit: any }) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'product':
        return <Briefcase size={16} className="text-gold" />
      case 'blog':
        return <FileText size={16} className="text-gold" />
      case 'career':
        return <Users size={16} className="text-gold" />
      default:
        return <SearchIcon size={16} className="text-gold" />
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'product':
        return 'Product'
      case 'blog':
        return 'Blog Post'
      case 'career':
        return 'Career'
      default:
        return 'Content'
    }
  }

  const getLink = (hit: any) => {
    switch (hit.category) {
      case 'product':
        return `/products/${hit.slug}`
      case 'blog':
        return `/blog/${hit.slug}`
      case 'career':
        return `/careers/${hit.slug}`
      default:
        return hit.url || '/'
    }
  }

  return (
    <Link
      href={getLink(hit)}
      className="block p-4 hover:bg-off-white transition-colors border-b border-light-grey last:border-b-0"
      onClick={() => {
        // Close search when a result is clicked
        const searchElement = document.querySelector('[data-search-overlay]')
        if (searchElement) {
          (searchElement as HTMLElement).click()
        }
      }}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          {getCategoryIcon(hit.category)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs font-medium text-navy uppercase tracking-wide">
              {getCategoryLabel(hit.category)}
            </span>
            {hit.tags && hit.tags.slice(0, 2).map((tag: string, index: number) => (
              <span key={index} className="text-xs text-medium-grey">
                #{tag}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-navy-500 mb-1">
            {hit.title}
          </h3>
          <p className="text-sm text-medium-grey line-clamp-2">
            {hit.description || hit.excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}
