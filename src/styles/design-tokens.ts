// MylesCorp Technologies Design System v4 - rn Professional UI
// Enhanced design tokens for rn, professional appearance

export const colors = {
  // Brand Colors - Enhanced palette
  navy: {
    50: '#F0F4F8',
    100: '#E2E8F0',
    200: '#CBD5E1',
    300: '#94A3B8',
    400: '#64748B',
    500: '#1A395B',  // Navy Blue (Primary)
    600: '#0F2847',
    700: '#0A1E3A',
    800: '#061529',
    900: '#030F1A',
  },
  gold: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#C79639',  // Gold (Primary)
    500: '#A67C2A',  // Gold (Hover)
    600: '#92400E',
    700: '#78350F',
    800: '#451A03',
    900: '#1C0F00',
  },
  
  // rn semantic colors
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Status colors
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#2EA44F',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FEF08A',
    300: '#FDE047',
    400: '#FACC15',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
  info: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#0EA5E9',
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C4A6E',
  },
  
  // Legacy color mappings for compatibility
  'light-blue': '#C7D7EF',
  'off-white': '#F8FAFC',
  'dark-grey': '#212121',
  'medium-grey': '#545454',
  'light-grey': '#E8EDF4',
  'success-green': '#2EA44F',
  'warning-amber': '#F59E0B',
  
  // Semantic tokens
  'navy-500': '#1A395B',
  'navy-100': '#C7D7EF',
  'gold-400': '#C79639',
  'gold-500': '#A67C2A',
  'gold-100': '#FEF3C7',
} as const

export const typography = {
  fonts: {
    'plus-jakarta': '"Plus Jakarta Sans", system-ui, sans-serif',
    'inter': '"Inter", system-ui, sans-serif',
    'jetbrains-mono': '"JetBrains Mono", monospace',
  },
  
  // Exact typography specifications from design system
  sizes: {
    h1: '48px',        // H1 Page Title - 48–64px
    h1Large: '64px',   // H1 Page Title - Large variant
    h2: '32px',        // H2 Section Title - 32–40px
    h2Large: '40px',   // H2 Section Title - Large variant
    h3: '20px',        // H3 Card Title - 20–24px
    h3Large: '24px',   // H3 Card Title - Large variant
    body: '16px',      // Body Text - 16px
    small: '14px',     // Small / Caption - 14px
    button: '16px',    // Button Text - 16px
    nav: '15px',       // Navigation - 15px
    code: '14px',      // Code - 14px
  },
  
  weights: {
    h1: '800',         // H1 Page Title - 800 ExtraBold
    h2: '700',         // H2 Section Title - 700 Bold
    h3: '600',         // H3 Card Title - 600 SemiBold
    body: '400',       // Body Text - 400 Regular
    small: '400',      // Small / Caption - 400 Regular
    button: '600',     // Button Text - 600 SemiBold
    nav: '500',        // Navigation - 500 Medium
    code: '400',       // Code - 400 Regular
  },
  
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const

export const spacing = {
  xs: '0.5rem',      // 8px
  sm: '1rem',         // 16px
  md: '1.5rem',        // 24px
  lg: '2rem',         // 32px
  xl: '3rem',         // 48px
  '2xl': '4rem',        // 64px
  '3xl': '6rem',        // 96px
  '4xl': '8rem',        // 128px
} as const

export const shadows = {
  small: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  medium: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
  large: '0 10px 15px 0 rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px 0 rgba(0, 0, 0, 0.15)',
} as const

export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',    // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px (for rounded-xl)
  full: '9999px',
} as const

export const animations = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  
  easings: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.4, 0, 1, 0.2)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Component-specific tokens matching exact specifications
export const components = {
  button: {
    primary: {
      background: colors.gold[400],
      text: colors.white,
      hover: colors.gold[500],
      padding: '0.75rem 2rem', // px-8 py-3 = 12px 32px
      borderRadius: borderRadius.full,
      shadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
      transition: 'all 150ms ease',
    },
    secondary: {
      background: 'transparent',
      text: colors.navy[500],
      border: `2px solid ${colors.navy[500]}`,
      hover: {
        background: colors.navy[500],
        text: colors.white,
      },
      padding: '0.75rem 2rem',
      borderRadius: borderRadius.full,
      transition: 'all 150ms ease',
    },
  },
  
  card: {
    product: {
      background: colors.white,
      border: `1px solid ${colors.gray[200]}`,
      borderRadius: borderRadius['2xl'], // rounded-2xl
      shadow: shadows.small, // shadow-sm
      hover: {
        shadow: shadows.large, // shadow-lg
        transform: 'translateY(-4px)',
        borderTop: `4px solid ${colors.gold[400]}`, // gold top accent
      },
      transition: 'all 300ms ease',
    },
    blog: {
      borderRadius: borderRadius['2xl'], // rounded-2xl
      image: 'aspect-video', // 16:9 image
      category: {
        background: colors.gold[400], // gold category pill
        color: colors.white,
      },
      title: colors.navy[500], // navy title
      excerpt: colors.gray[600], // grey excerpt
    },
    testimonial: {
      background: colors.white,
      stars: colors.gold[400], // gold stars
      quote: 'italic',
      avatar: 'circular',
      name: colors.navy[500], // navy name
    },
  },
  
  navigation: {
    sticky: 'sticky top-0',
    background: colors.white,
    text: colors.navy[500],
    active: {
      underline: `2px solid ${colors.gold[400]}`, // gold underline on active
    },
    hero: {
      background: 'transparent', // transparent on hero
    },
    transition: 'all 150ms ease',
  },
  
  form: {
    input: {
      borderRadius: borderRadius['2xl'], // rounded-xl
      focus: {
        ring: `2px solid ${colors.navy[500]}`, // navy focus ring
      },
      border: `1px solid ${colors.gray[200]}`,
      padding: '0.75rem 1rem',
    },
    submit: {
      background: colors.gold[400], // gold submit
      color: colors.white,
    },
  },
  
  stats: {
    counter: {
      number: {
        color: colors.gold[400], // Large bold gold number
        weight: typography.weights.h2,
        size: typography.sizes.h2Large,
      },
      label: colors.navy[500], // navy label
    },
  },
} as const
