import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  title: string
  organization: string
  quote: string
  rating: number
  avatar?: string
}

export function TestimonialCard({ name, title, organization, quote, rating, avatar }: TestimonialCardProps) {
  return (
    <div className="testimonial-card fade-in">
      <div className="testimonial-stars">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? 'text-gold fill-current' : 'text-light-grey'}
          />
        ))}
      </div>

      <blockquote className="testimonial-quote">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="testimonial-author">
        <div className="flex-shrink-0">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="testimonial-avatar rounded-full"
            />
          ) : (
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
              <span className="text-navy font-semibold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-title">
            {title}, {organization}
          </div>
        </div>
      </div>
    </div>
  )
}
