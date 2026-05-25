import Image from 'next/image'
import type { CSSProperties } from 'react'
import type { HeroImage } from '@/lib/constants/hero-images'

type HeroImageBackdropProps = {
  images: HeroImage[]
  priority?: boolean
}

export function HeroImageBackdrop({ images, priority = false }: HeroImageBackdropProps) {
  const durationSeconds = images.length > 1 ? images.length * 5 : 0

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={priority && index === 0}
          sizes="100vw"
          className={images.length > 1 ? 'hero-image-loop object-cover' : 'hero-image-static object-cover'}
          style={
            images.length > 1
              ? ({
                  animationDelay: `${index * 5}s`,
                  animationDuration: `${durationSeconds}s`,
                } satisfies CSSProperties)
              : undefined
          }
        />
      ))}
    </div>
  )
}
