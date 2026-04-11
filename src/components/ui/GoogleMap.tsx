'use client'

import React, { useEffect, useRef } from 'react'

interface GoogleMapProps {
  address?: string
  height?: string
  zoom?: number
}

export function GoogleMap({ 
  address = "Wester Heights, Westlands, Nairobi, Kenya", 
  height = "400px",
  zoom = 15 
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)

  useEffect(() => {
    // Only load map if Google Maps API is available
    if (!window.google || !mapRef.current) return

    // Initialize map
    const geocoder = new google.maps.Geocoder()
    
    geocoder.geocode({ address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
        const location = results[0].geometry.location
        
        // Create map instance
        mapInstanceRef.current = new google.maps.Map(mapRef.current!, {
          center: location,
          zoom: zoom,
          styles: [
            {
              "featureType": "all",
              "elementType": "geometry",
              "stylers": [{ "color": "#1A395B" }]
            },
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#545454" }]
            },
            {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#F8FAFC" }]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [{ "color": "#E8EDF4" }]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{ "color": "#C79639" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{ "color": "#F8FAFC" }]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{ "color": "#C7D7EF" }]
            }
          ],
          mapTypeControl: false,
          streetViewControl: true,
          fullscreenControl: false,
          zoomControl: true,
        })

        // Add marker
        new google.maps.Marker({
          position: location,
          map: mapInstanceRef.current,
          title: "MylesCorp Technologies",
          animation: google.maps.Animation.DROP,
          icon: {
            url: "/favicon-32x32.png?v=4",
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 20)
          }
        })

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; font-family: Inter, sans-serif;">
              <h3 style="margin: 0 0 8px 0; color: #1A395B; font-weight: 600;">MylesCorp Technologies</h3>
              <p style="margin: 0 0 4px 0; color: #545454; font-size: 14px;">Wester Heights, Westlands</p>
              <p style="margin: 0 0 8px 0; color: #545454; font-size: 14px;">Nairobi, Kenya</p>
              <a href="https://wa.me/254743993715" style="color: #C79639; text-decoration: none; font-weight: 500;">Get Directions →</a>
            </div>
          `
        })

        // Open info window on marker click
        const marker = new google.maps.Marker({
          position: location,
          map: mapInstanceRef.current,
          title: "MylesCorp Technologies"
        })

        marker.addListener('click', () => {
          infoWindow.open(mapInstanceRef.current!, marker)
        })
      } else {
        // Geocoding failed silently
      }
    })
  }, [address, zoom])

  // Load Google Maps script
  useEffect(() => {
    if (window.google) return // Already loaded

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`
    script.async = true
    script.defer = true
    
    // Define callback function
    window.initMap = () => {
      // Google Maps loaded successfully
    }
    
    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      delete window.initMap
    }
  }, [])

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        style={{ height, width: '100%' }}
        className="rounded-xl overflow-hidden shadow-medium"
      />
      
      {/* Fallback for when Google Maps is not available */}
      <div className="absolute inset-0 bg-navy-100 flex items-center justify-center rounded-xl overflow-hidden">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <h3 className="heading-3 mb-2">MylesCorp Technologies</h3>
          <p className="body-text text-medium-grey mb-4">
            Wester Heights, Westlands<br />
            Nairobi, Kenya
          </p>
          <a 
            href="https://maps.google.com/?q=Wester+Heights,+Westlands,+Nairobi,+Kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 font-medium"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  )
}

// Add TypeScript declaration for the global callback
declare global {
  interface Window {
    initMap?: () => void
    google: typeof google
  }
}
