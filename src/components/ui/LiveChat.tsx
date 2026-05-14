'use client'

import React, { useEffect, useState } from 'react'
import { X, Minimize2, Maximize2, Send, User, Bot } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to MylesCorp Technologies. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Initialize Crisp or Intercom based on environment variables
    if (process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) {
      initializeCrisp()
    } else if (process.env.NEXT_PUBLIC_INTERCOM_APP_ID) {
      initializeIntercom()
    }
  }, [])

  const initializeCrisp = () => {
    // Crisp initialization would go here
    // For now, we'll use our custom chat interface
  }

  const initializeIntercom = () => {
    // Intercom initialization would go here
    // For now, we'll use our custom chat interface
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes('product') || input.includes('solution')) {
      return 'I can help you learn about our AI-powered solutions! We offer EduMyles for school management, EduRyde for school transport, and MylesCRM for business. Which product interests you most?'
    } else if (input.includes('pricing') || input.includes('cost') || input.includes('price')) {
      return 'Our pricing varies by product and organization size. I\'d recommend booking a demo with our team to get a customized quote. Would you like me to arrange that for you?'
    } else if (input.includes('demo') || input.includes('trial')) {
      return 'Great! I can help you book a demo. Our team will walk you through our solutions and answer all your questions. Click the "Book a Demo" button or I can connect you with our sales team.'
    } else if (input.includes('support') || input.includes('help')) {
      return 'I\'m here to help! For technical support, you can reach our team at support@mylescorptech.com or call +254 743 993 715. What specific issue are you experiencing?'
    } else if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      return 'You can reach us at:\nEmail: info@mylescorptech.com\nPhone: +254 743 993 715\nLocation: Wester Heights, Westlands, Nairobi\nWould you like me to connect you with a specific team member?'
    } else if (input.includes('career') || input.includes('job') || input.includes('work')) {
      return 'We\'re always looking for talented individuals! Check our careers page at /careers for current openings. What type of role are you interested in?'
    } else {
      return 'Thank you for your message! Our team typically responds within a few hours during business hours (9 AM - 6 PM EAT). For urgent matters, please call us at +254 743 993 715. Is there anything specific I can help you with?'
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3
                   bg-[#1A395B] border-2 border-[#C79639] text-white
                   pl-4 pr-5 py-3 rounded-full font-bold
                   shadow-[0_8px_32px_rgba(26,57,91,0.4)]
                   hover:bg-[#C79639] hover:text-[#1A395B]
                   hover:-translate-y-1 transition-all duration-200"
          aria-label="Open live chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 flex-shrink-0"
            fill="currentColor"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <span className="hidden sm:inline text-[13px] font-bold tracking-wide">
            Live Chat
          </span>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-96 max-w-[calc(100vw-3rem)]">
      {!isMinimized && (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#C79639]/20">
          {/* Header */}
          <div className="bg-[#1A395B] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#C79639]/10 rounded-full flex items-center justify-center">
                <Bot size={20} className="text-[#C79639]" />
              </div>
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-sm text-[#C7D7EF]">We typically reply in minutes</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 text-white hover:text-[#C79639] hover:bg-[#0f1f35]/30 rounded-md transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C79639] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A395B]"
                aria-label="Minimize chat"
              >
                <Minimize2 size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-white hover:text-[#C79639] hover:bg-[#0f1f35]/30 rounded-md transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C79639] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A395B]"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-ice">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 bg-[#C79639]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-[#C79639]" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#C79639] text-[#1A395B]'
                      : 'bg-white text-gray-800 border border-[#C79639]/20'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-[#1A395B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-[#1A395B]" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-2 justify-start">
                <div className="w-8 h-8 bg-[#C79639]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-[#C79639]" />
                </div>
                <div className="bg-white text-gray-800 border border-[#C79639]/20 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#C79639]/20 bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-[#C79639]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C79639] focus:border-transparent"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="p-2 bg-[#C79639] text-[#1A395B] rounded-lg hover:bg-[#A67C2E] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by MylesCorp Technologies • Available 9 AM - 6 PM EAT
            </p>
          </div>
        </div>
      )}

      {/* Minimized Chat */}
      {isMinimized && (
        <div className="bg-white rounded-2xl shadow-2xl border border-[#C79639]/20 p-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#C79639]/10 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-[#C79639]" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Live Chat</h3>
              <p className="text-xs text-gray-500">Click to expand</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1 hover:bg-ice rounded transition-colors"
              aria-label="Expand chat"
            >
              <Maximize2 size={16} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-ice rounded transition-colors"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// Hook for live chat integration
export function useLiveChat() {
  const [isAvailable] = useState(true)
  const [businessHours] = useState({
    start: '09:00',
    end: '18:00',
    timezone: 'EAT'
  })

  const isBusinessHours = () => {
    const now = new Date()
    const currentTime = now.toLocaleTimeString('en-US', {
      timeZone: 'Africa/Nairobi',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })

    return currentTime >= businessHours.start && currentTime <= businessHours.end
  }

  const initiateChat = () => {
    // Logic to initiate chat
  }

  return {
    isAvailable,
    isBusinessHours,
    businessHours,
    initiateChat
  }
}
