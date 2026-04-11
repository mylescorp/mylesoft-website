'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Calendar, User, Video, Check } from 'lucide-react'

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

interface MeetingType {
  id: string
  name: string
  description: string
  duration: string
  icon: React.ReactNode
}

const meetingTypes: MeetingType[] = [
  {
    id: 'product-demo',
    name: 'Product Demo',
    description: 'Comprehensive demonstration of our solutions tailored to your needs.',
    duration: '45 minutes',
    icon: <Video size={24} className="text-gold-400" />
  },
  {
    id: 'consultation',
    name: 'Consultation',
    description: 'Strategic discussion about your digital transformation needs.',
    duration: '60 minutes',
    icon: <User size={24} className="text-gold-400" />
  },
  {
    id: 'technical-support',
    name: 'Technical Support',
    description: 'Get help with existing products or technical questions.',
    duration: '30 minutes',
    icon: <Check size={24} className="text-gold-400" />
  }
]

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = []
  const today = new Date()
  
  for (let day = 0; day < 7; day++) {
    const currentDate = new Date(today)
    currentDate.setDate(today.getDate() + day)
    
    // Generate slots for business hours (9 AM - 6 PM)
    for (let hour = 9; hour <= 17; hour++) {
      if (hour >= 12 && hour <= 13) continue // Lunch break
      
      const timeSlot: TimeSlot = {
        id: `${day}-${hour}`,
        time: `${hour.toString().padStart(2, '0')}:00`,
        available: ![11, 15].includes(hour)
      }
      slots.push(timeSlot)
    }
  }
  
  return slots
}

export function CalComBooking() {
  const [selectedType, setSelectedType] = useState<string>('product-demo')
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)

  const timeSlots = generateTimeSlots()
  const selectedMeetingType = meetingTypes.find(type => type.id === selectedType)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setSubmitted(true)
  }

  return (
    <div className="bg-white rounded-xl shadow-medium p-8 hover-lift fade-in">
      <div className="mb-8">
        <h3 className="heading-3 mb-4">Book a Meeting</h3>
        <p className="body-text">
          Schedule a personalized demonstration with our experts. Choose the meeting type that best fits your needs.
        </p>
      </div>

      {/* Meeting Type Selection */}
      <div className="mb-8">
        <h4 className="font-semibold text-navy-500 mb-4">Meeting Type</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {meetingTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-4 rounded-lg border text-left transition-colors hover-lift ${
                selectedType === type.id
                  ? 'border-gold-400 bg-gold-50 text-gold-600'
                  : 'border-light-grey hover:border-gold-400 hover:bg-gold-50'
              }`}
            >
              <div className="flex items-center mb-2">
                {type.icon}
                <span className="ml-3 font-medium">{type.name}</span>
              </div>
              <div className="text-sm text-medium-grey">{type.description}</div>
              <div className="text-xs text-gold-600 font-medium mt-2">{type.duration}</div>
            </button>
          ))}
        </div>
      </div>

      {selectedMeetingType && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Selection */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-navy-500 mb-2">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              required
              min={new Date().toISOString().split('T')[0]}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="form-input"
              placeholder="Select date"
            />
          </div>

          {/* Time Selection */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-navy-500 mb-2">
              Select Time
            </label>
            <select
              id="time"
              required
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="form-input"
            >
              <option value="">Select a time</option>
              {timeSlots.map((slot) => (
                <option key={slot.id} value={slot.time} disabled={!slot.available}>
                  {slot.time} {!slot.available && '(Unavailable)'}
                </option>
              ))}
            </select>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-500 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-500 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-navy-500 mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-navy-500 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                placeholder="+254 7XX XXX XXX"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy-500 mb-2">
              Additional Information
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-light-grey rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none resize-none"
              placeholder="Tell us about your specific needs or questions..."
            />
          </div>

          <Button type="submit" className="w-full">
            <Calendar size={20} className="mr-2" />
            Book Meeting
          </Button>

          {submitted && (
            <p className="text-sm text-green-600">
              Booking request received. Our team will confirm your preferred slot shortly.
            </p>
          )}
        </form>
      )}

      {/* Additional Information */}
      <div className="mt-8 pt-8 border-t border-light-grey">
        <h4 className="font-semibold text-navy-500 mb-4">What to Expect</h4>
        <div className="space-y-4 text-sm">
          <div className="flex items-start">
            <Check size={16} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Personalized Demo:</strong> See our products in action with scenarios relevant to your organization.
            </div>
          </div>
          <div className="flex items-start">
            <Check size={16} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Expert Guidance:</strong> Get answers to your specific questions from our solution experts.
            </div>
          </div>
          <div className="flex items-start">
            <Check size={16} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <strong>No Obligation:</strong> Explore solutions without any commitment to purchase.
            </div>
          </div>
          <div className="flex items-start">
            <Check size={16} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Follow-up Support:</strong> Ongoing assistance after your meeting.
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-8 pt-8 border-t border-light-grey">
        <div className="text-center">
          <p className="body-text mb-4">
            Need immediate assistance? Contact our team directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-sm text-medium-grey mb-1">Sales</div>
              <a href="tel:+254743993716" className="text-lg text-gold-600 hover:text-gold-500 font-semibold">
                +254 743 993 716
              </a>
            </div>
            <div className="text-center">
              <div className="text-sm text-medium-grey mb-1">Email</div>
              <a href="mailto:sales@mylescorptech.com" className="text-lg text-gold-600 hover:text-gold-500 font-semibold">
                sales@mylescorptech.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
