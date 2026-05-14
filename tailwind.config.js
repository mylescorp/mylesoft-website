/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ringColor: {
        gold: {
          DEFAULT: '#C79639',
          light: '#A67C2E',
        },
        navy: {
          DEFAULT: '#1A395B',
          dark: '#0f1f35',
        },
      },
      colors: {
        // MylesCorp brand colour system
        navy: {
          DEFAULT: '#1A395B',
          dark: '#0f1f35',
          deep: '#080e18'
        },
        gold: {
          DEFAULT: '#C79639',
          light: '#A67C2E',
          pale: '#f5e4b8'
        },
        ice: '#EEF2F8',
        'light-blue': '#C7D7EF',
        'muted-blue': '#95A9CC',
        // Supporting Colors
        white: '#ffffff',
        'off-white': '#EEF2F8',
        'light-grey': '#E8EDF4',
        'dark-grey': '#212121',
        'med-grey': '#545454',
        'medium-grey': '#545454',
        // Semantic Colors
        success: '#2EA44F',
        warning: '#F59E0B',
        error: '#D32F2F',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
        sans: ['var(--font-body)'],
      },
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1rem' }],
        xs: ['0.875rem', { lineHeight: '1.25rem' }],
        sm: ['0.9375rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 25px -5px rgba(0, 0, 0, 0.1)',
        'gold': '0 8px 32px rgba(199, 150, 57, 0.25)',
        'glow': '0 0 20px rgba(199, 150, 57, 0.3)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.06)',
        'large': '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)',
        'navy': '0 4px 20px rgba(26, 57, 91, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -8px, 0)' },
          '70%': { transform: 'translate3d(0, -4px, 0)' },
          '90%': { transform: 'translate3d(0, -2px, 0)' },
        },
      },
    },
  },
  plugins: [],
}
