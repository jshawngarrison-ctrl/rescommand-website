// tailwind.config.ts
// ResCommand Design System - Tailwind Configuration
// Scramblers Golf dark/moody aesthetic adapted for restaurant operations

import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ResCommand Brand Palette (Venturio Studios brand kit)
        primary: {
          navy: '#0C1D17', // Darkest backgrounds, page base (brand "Navy")
          panel: '#13271E', // Card backgrounds, primary panels
          deep: '#1B3A2D', // Alternate sections, depth layers
        },
        accent: {
          sky: '#6BB3DE', // CTAs, highlights, primary interactive (brand "Sky")
          bright: '#9AD0F0', // Hover states, secondary accents
          gold: '#C9A05B', // Brand "Gold" — highlight accent (use sparingly)
        },
        ink: '#EAF2F8', // Primary text on dark (brand "Cream")
        cream: '#EAF2F8', // Alias for brand "Cream"
        coal: '#141414', // Brand "Ink" — near-black, for light-ground marks
        muted: '#8DA4B8', // Secondary text, labels, metadata
        semantic: {
          success: '#2D8659', // Confirmation, positive states
          warning: '#D97706', // Alerts, cautions
          error: '#DC2626', // Errors, destructive actions
        },
      },
      fontFamily: {
        // Display: Young Serif (wordmark & display) — single weight
        display: ['var(--font-young-serif)', ...defaultTheme.fontFamily.serif],
        // Body: Instrument Sans (UI & body copy)
        body: ['var(--font-instrument-sans)', ...defaultTheme.fontFamily.sans],
        // Defaults
        serif: ['var(--font-young-serif)', ...defaultTheme.fontFamily.serif],
        sans: ['var(--font-instrument-sans)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Display sizes
        'display-lg': ['64px', { lineHeight: '1.2', fontWeight: '700' }], // Hero H1
        'display-md': ['56px', { lineHeight: '1.2', fontWeight: '700' }], // H1
        'display-sm': ['48px', { lineHeight: '1.2', fontWeight: '700' }], // H2

        // Heading sizes
        'heading-lg': ['40px', { lineHeight: '1.3', fontWeight: '600' }], // H2
        'heading-md': ['36px', { lineHeight: '1.3', fontWeight: '600' }], // H3
        'heading-sm': ['32px', { lineHeight: '1.3', fontWeight: '600' }], // H4
        'heading-xs': ['28px', { lineHeight: '1.3', fontWeight: '600' }], // H5

        // Body sizes
        'body-lg': ['18px', { lineHeight: '1.6' }], // Large body text
        'body-md': ['16px', { lineHeight: '1.6' }], // Default body
        'body-sm': ['14px', { lineHeight: '1.6' }], // Small body
        'body-xs': ['12px', { lineHeight: '1.5' }], // Extra small (metadata)
      },
      maxWidth: {
        container: '1280px',
        prose: '720px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        // Subtle shadows for depth
        sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 12px rgba(0, 0, 0, 0.15)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.2)',

        // Sky blue accent shadows (on hover)
        'sky-sm': '0 4px 12px rgba(107, 179, 222, 0.15)',
        'sky-md': '0 8px 24px rgba(107, 179, 222, 0.2)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
        fast: '150ms',
        slow: '500ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 500ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'slide-up': 'slideUp 500ms cubic-bezier(0.4, 0, 0.2, 1) both',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Custom component utilities for common layout patterns
    function ({ addComponents }: { addComponents: (components: Record<string, unknown>) => void }) {
      addComponents({
        // Centered, max-width container with responsive padding
        '.container-safe': {
          '@apply mx-auto w-full max-w-container px-5 sm:px-6 lg:px-8': {},
        },
        // Full-width section with vertical rhythm
        '.section': {
          '@apply w-full py-16 sm:py-20 lg:py-24': {},
        },
      })
    },
  ],
}

export default config
