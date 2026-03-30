import React from 'react'
import { 
  GraduationCap, 
  Stethoscope, 
  Sprout, 
  Briefcase, 
  CreditCard, 
  Truck,
  Bus,
  Building,
  Heart,
  Brain,
  Users,
  FileText,
  Shield,
  Zap,
  Leaf,
  Linkedin,
  Facebook,
  Twitter,
  Github,
  Youtube,
  Instagram,
  Settings,
  CheckCircle,
  Calendar,
  TrendingUp,
  MapPin,
  Smartphone,
  Route,
  AlertTriangle,
  Clipboard,
  DollarSign,
  Pill,
  Microscope,
  Bed,
  BarChart,
  Headset,
  Mail,
  Package,
  CheckSquare,
  MessageCircle,
  Server,
  Globe,
  Database,
  Cloud,
  Monitor
} from 'lucide-react'

interface IconProps {
  name: string
  size?: number
  className?: string
}

const iconMap = {
  'graduation-cap': GraduationCap,
  'stethoscope': Stethoscope,
  'sprout': Sprout,
  'briefcase': Briefcase,
  'credit-card': CreditCard,
  'truck': Truck,
  'bus': Bus,
  'building': Building,
  'heart': Heart,
  'brain': Brain,
  'users': Users,
  'file-text': FileText,
  'shield': Shield,
  'zap': Zap,
  'leaf': Leaf,
  'linkedin': Linkedin,
  'facebook': Facebook,
  'twitter': Twitter,
  'github': Github,
  'youtube': Youtube,
  'instagram': Instagram,
  'tiktok': () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  ),
  'settings': Settings,
  'check-circle': CheckCircle,
  'calendar': Calendar,
  'trending-up': TrendingUp,
  'map-pin': MapPin,
  'smartphone': Smartphone,
  'route': Route,
  'alert-triangle': AlertTriangle,
  'clipboard': Clipboard,
  'dollar-sign': DollarSign,
  'pill': Pill,
  'microscope': Microscope,
  'bed': Bed,
  'bar-chart': BarChart,
  'headset': Headset,
  'mail': Mail,
  'package': Package,
  'check-square': CheckSquare,
  'message-circle': MessageCircle,
  'server': Server,
  'globe': Globe,
  'database': Database,
  'cloud': Cloud,
  'monitor': Monitor,
}

export function Icon({ name, size = 48, className = '' }: IconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap]
  
  if (!IconComponent) {
    return null
  }

  return <IconComponent size={size} className={className} />
}
