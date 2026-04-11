'use client'

import { useState, useEffect } from 'react'
import { MapPin, Users, Building, Phone, Mail, Globe, Navigation } from 'lucide-react'

// TypeScript declarations for Leaflet
declare global {
  interface Window {
    L: {
      map: (id: string, options?: any) => {
        setView: (coordinates: [number, number], zoom: number) => any
        addLayer: (layer: any) => any
        invalidateSize: () => any
      }
      tileLayer: (url: string, options: any) => any
      marker: (coordinates: [number, number], options: any) => any
      popup: (content: string) => any
      icon: (options: any) => any
      divIcon: (options: any) => any
      circle: (coordinates: [number, number], options: any) => any
      control: {
        zoom: (options: any) => any
      }
    }
  }
}

interface Office {
  id: string
  city: string
  country: string
  coordinates: { lat: number; lng: number }
  address: string
  phone: string
  email: string
  type: 'headquarters' | 'branch'
  employees: number
}

interface ClientCoverage {
  id: string
  country: string
  coordinates: { lat: number; lng: number }
  clients: number
  sectors: string[]
  expansion: boolean
}

const offices: Office[] = [
  {
    id: 'nairobi-hq',
    city: 'Nairobi',
    country: 'Kenya',
    coordinates: { lat: -1.2921, lng: 36.8219 },
    address: 'Westlands, Nairobi, Kenya',
    phone: '+254 743 993 715',
    email: 'nairobi@mylescorptech.com',
    type: 'headquarters',
    employees: 45
  },
  {
    id: 'mombasa',
    city: 'Mombasa',
    country: 'Kenya',
    coordinates: { lat: -4.0435, lng: 39.6682 },
    address: 'Mombasa CBD, Mombasa, Kenya',
    phone: '+254 743 993 715',
    email: 'mombasa@mylescorptech.com',
    type: 'branch',
    employees: 12
  },
  {
    id: 'kampala',
    city: 'Kampala',
    country: 'Uganda',
    coordinates: { lat: 0.3476, lng: 32.5825 },
    address: 'Kampala Central, Uganda',
    phone: '+256 743 993 715',
    email: 'kampala@mylescorptech.com',
    type: 'branch',
    employees: 8
  },
  {
    id: 'dar-es-salaam',
    city: 'Dar es Salaam',
    country: 'Tanzania',
    coordinates: { lat: -6.7924, lng: 39.2083 },
    address: 'Dar es Salaam CBD, Tanzania',
    phone: '+255 743 993 715',
    email: 'dar@mylescorptech.com',
    type: 'branch',
    employees: 6
  },
  {
    id: 'kigali',
    city: 'Kigali',
    country: 'Rwanda',
    coordinates: { lat: -1.9403, lng: 30.1044 },
    address: 'Kigali Central, Rwanda',
    phone: '+250 743 993 715',
    email: 'kigali@mylescorptech.com',
    type: 'branch',
    employees: 5
  }
]

const clientCoverage: ClientCoverage[] = [
  {
    id: 'kenya',
    country: 'Kenya',
    coordinates: { lat: 0.0236, lng: 37.9062 },
    clients: 500,
    sectors: ['Education', 'Healthcare', 'Agriculture', 'Business', 'Government'],
    expansion: true
  },
  {
    id: 'uganda',
    country: 'Uganda',
    coordinates: { lat: 1.3733, lng: 32.2903 },
    clients: 120,
    sectors: ['Education', 'Healthcare', 'Agriculture'],
    expansion: true
  },
  {
    id: 'tanzania',
    country: 'Tanzania',
    coordinates: { lat: -6.3690, lng: 34.8888 },
    clients: 85,
    sectors: ['Education', 'Agriculture', 'Business'],
    expansion: false
  },
  {
    id: 'rwanda',
    country: 'Rwanda',
    coordinates: { lat: -1.9403, lng: 29.8739 },
    clients: 65,
    sectors: ['Education', 'Healthcare'],
    expansion: true
  },
  {
    id: 'burundi',
    country: 'Burundi',
    coordinates: { lat: -3.3731, lng: 29.9189 },
    clients: 25,
    sectors: ['Education'],
    expansion: false
  },
  {
    id: 'south-sudan',
    country: 'South Sudan',
    coordinates: { lat: 6.8770, lng: 31.3070 },
    clients: 15,
    sectors: ['Healthcare'],
    expansion: true
  }
]

export default function InteractiveMap() {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null)
  const [selectedCoverage, setSelectedCoverage] = useState<ClientCoverage | null>(null)
  const [mapCenter, setMapCenter] = useState({ lat: -1.2921, lng: 36.8219 })
  const [mapZoom, setMapZoom] = useState(6)
  const [activeTab, setActiveTab] = useState<'offices' | 'coverage'>('offices')

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    // Load Leaflet JS
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.async = true
    script.onload = () => {
      // Initialize map after Leaflet loads
      if (typeof window !== 'undefined' && window.L) {
        const L = window.L
        
        const map = L.map('map').setView([mapCenter.lat, mapCenter.lng], mapZoom)
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 18,
        }).addTo(map)

        // Add office markers
        offices.forEach(office => {
          const markerColor = office.type === 'headquarters' ? '#C79639' : '#1A395B'
          const markerHtml = `
            <div style="
              background-color: ${markerColor};
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: 3px solid white;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">
              <div style="color: white; font-weight: bold; font-size: 12px;">
                ${office.type === 'headquarters' ? 'HQ' : office.city.slice(0, 2).toUpperCase()}
              </div>
            </div>
          `
          
          const icon = L.divIcon({
            html: markerHtml,
            className: 'custom-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
          })

          L.marker([office.coordinates.lat, office.coordinates.lng], { icon })
            .addTo(map)
            .on('click', () => handleOfficeClick(office))
        })

        // Add coverage circles
        clientCoverage.forEach(coverage => {
          const circleColor = coverage.expansion ? '#3B82F6' : '#10B981'
          L.circle([coverage.coordinates.lat, coverage.coordinates.lng], {
            color: circleColor,
            fillColor: circleColor,
            fillOpacity: 0.2,
            radius: coverage.clients * 1000 // Scale radius based on client count
          }).addTo(map)
            .on('click', () => handleCoverageClick(coverage))
        })

        // Update map when center/zoom changes
        map.on('moveend', () => {
          const center = map.getCenter()
          const zoom = map.getZoom()
          setMapCenter({ lat: center.lat, lng: center.lng })
          setMapZoom(zoom)
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [mapCenter, mapZoom])

  const handleOfficeClick = (office: Office) => {
    setSelectedOffice(office)
    setSelectedCoverage(null)
    setMapCenter(office.coordinates)
    setMapZoom(10)
  }

  const handleCoverageClick = (coverage: ClientCoverage) => {
    setSelectedCoverage(coverage)
    setSelectedOffice(null)
    setMapCenter(coverage.coordinates)
    setMapZoom(7)
  }

  const getTotalClients = () => {
    return clientCoverage.reduce((total, country) => total + country.clients, 0)
  }

  const getTotalEmployees = () => {
    return offices.reduce((total, office) => total + office.employees, 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy-deep to-navy-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Our East African Presence
            </h1>
            <p className="text-lg text-light-blue max-w-3xl mx-auto">
              Serving {getTotalClients()}+ clients across {clientCoverage.length} countries with {getTotalEmployees()}+ dedicated team members
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('offices')}
              className={`px-6 py-3 font-semibold transition-all duration-300 ${
                activeTab === 'offices'
                  ? 'bg-gold text-navy'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Building className="inline-block w-4 h-4 mr-2" />
              Offices
            </button>
            <button
              onClick={() => setActiveTab('coverage')}
              className={`px-6 py-3 font-semibold transition-all duration-300 ${
                activeTab === 'coverage'
                  ? 'bg-gold text-navy'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Globe className="inline-block w-4 h-4 mr-2" />
              Client Coverage
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Map Container */}
        <div className="flex-1 relative">
          <div 
            id="map" 
            className="w-full h-[600px] lg:h-full"
            style={{ minHeight: '600px' }}
          />
          
          {/* Map Legend */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 z-[1000]">
            <h3 className="font-semibold text-navy mb-3">Legend</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gold rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Headquarters</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-navy rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Branch Office</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Active Coverage</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Expanding Coverage</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-2 z-[1000]">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => setMapZoom(mapZoom + 1)}
                className="w-8 h-8 bg-navy text-white rounded hover:bg-gold transition-colors"
              >
                +
              </button>
              <button
                onClick={() => setMapZoom(mapZoom - 1)}
                className="w-8 h-8 bg-navy text-white rounded hover:bg-gold transition-colors"
              >
                −
              </button>
              <button
                onClick={() => {
                  setMapCenter({ lat: -1.2921, lng: 36.8219 })
                  setMapZoom(6)
                }}
                className="w-8 h-8 bg-navy text-white rounded hover:bg-gold transition-colors"
                title="Reset View"
              >
                <Navigation className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 overflow-y-auto">
          <div className="p-6">
            {activeTab === 'offices' ? (
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">Office Locations</h2>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.id}
                      onClick={() => handleOfficeClick(office)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedOffice?.id === office.id
                          ? 'border-gold bg-gold/10'
                          : 'border-gray-200 hover:border-gold/50 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-navy">{office.city}</h3>
                          <p className="text-sm text-gray-600">{office.country}</p>
                        </div>
                        {office.type === 'headquarters' && (
                          <span className="bg-gold text-navy text-xs px-2 py-1 rounded-full font-semibold">
                            HQ
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-gold" />
                          {office.address}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-4 h-4 mr-2 text-gold" />
                          {office.phone}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-4 h-4 mr-2 text-gold" />
                          {office.email}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-gold" />
                          {office.employees} team members
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">Client Coverage</h2>
                <div className="space-y-4">
                  {clientCoverage.map((coverage) => (
                    <div
                      key={coverage.id}
                      onClick={() => handleCoverageClick(coverage)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedCoverage?.id === coverage.id
                          ? 'border-gold bg-gold/10'
                          : 'border-gray-200 hover:border-gold/50 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-navy">{coverage.country}</h3>
                          <p className="text-sm text-gray-600">{coverage.clients} active clients</p>
                        </div>
                        {coverage.expansion && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            Expanding
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-gold" />
                          {coverage.clients} clients served
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Building className="w-4 h-4 mr-2 text-gold" />
                          {coverage.sectors.join(', ')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gold text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">{offices.length}</div>
              <div className="text-sm font-medium">Office Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{clientCoverage.length}</div>
              <div className="text-sm font-medium">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{getTotalClients()}+</div>
              <div className="text-sm font-medium">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{getTotalEmployees()}+</div>
              <div className="text-sm font-medium">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
