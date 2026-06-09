// tailwind.config.ts
// ResCommand Design System - Tailwind Configuration
// Scramblers Golf dark/moody aesthetic adapted for restaurant operations

import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ResCommand Color Palette (from Scramblers)
        primary: {
          navy: '#010D17',      // Darkest backgrounds, page base
          panel: '#071A2C',     // Card backgrounds, primary panels
          deep: '#0C2740',      // Alternate sections, depth layers
        },
        accent: {
          sky: '#6BB3DE',       // CTAs, highlights, primary interactive
          bright: '#9AD0F0',    // Hover states, secondary accents
        },
        text: {
          ink: '#EAF2F8',       // Primary text, high contrast
          muted: '#8DA4B8',     // Secondary text, labels, metadata
        },
        semantic: {
          success: '#2D8659',   // Confirmation, positive states
          warning: '#D97706',   // Alerts, cautions
          error: '#DC2626',     // Errors, destructive actions
        },
      },
      backgroundColor: {
        base: '#010D17',        // Primary page background
        panel: '#071A2C',       // Card/section background
        'panel-deep': '#0C2740',// Secondary section background
      },
      textColor: {
        default: '#EAF2F8',     // Primary text
        secondary: '#8DA4B8',   // Secondary text
      },
      fontFamily: {
        // Display: Fraunces (serif, headlines)
        display: ['var(--font-fraunces)', ...defaultTheme.fontFamily.serif],
        // Body: Hanken Grotesk (sans-serif)
        body: ['var(--font-hanken-grotesk)', ...defaultTheme.fontFamily.sans],
        // Defaults
        serif: ['var(--font-fraunces)', ...defaultTheme.fontFamily.serif],
        sans: ['var(--font-hanken-grotesk)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Display sizes
        'display-lg': ['64px', { lineHeight: '1.2', fontWeight: '700' }],   // Hero H1
        'display-md': ['56px', { lineHeight: '1.2', fontWeight: '700' }],   // H1
        'display-sm': ['48px', { lineHeight: '1.2', fontWeight: '700' }],   // H2
        
        // Heading sizes
        'heading-lg': ['40px', { lineHeight: '1.3', fontWeight: '600' }],   // H2
        'heading-md': ['36px', { lineHeight: '1.3', fontWeight: '600' }],   // H3
        'heading-sm': ['32px', { lineHeight: '1.3', fontWeight: '600' }],   // H4
        'heading-xs': ['28px', { lineHeight: '1.3', fontWeight: '600' }],   // H5
        
        // Body sizes
        'body-lg': ['18px', { lineHeight: '1.6' }],     // Large body text
        'body-md': ['16px', { lineHeight: '1.6' }],     // Default body
        'body-sm': ['14px', { lineHeight: '1.6' }],     // Small body
        'body-xs': ['12px', { lineHeight: '1.5' }],     // Extra small (metadata)
        
        // Override defaults
        base: '16px',
        sm: '14px',
        lg: '18px',
        xl: '20px',
      },
      spacing: {
        // 8px grid system
        0: '0px',
        0.5: '4px',
        1: '8px',
        1.5: '12px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        3.5: '28px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
        12: '96px',
        14: '112px',
        16: '128px',
      },
      containerQueriesQueryName: {
        sm: '30rem',
        md: '40rem',
        lg: '50rem',
        xl: '60rem',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      boxShadow: {
        none: 'none',
        // Subtle shadows for depth
        sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 12px rgba(0, 0, 0, 0.15)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.2)',
        
        // Elevated card shadows
        'card-sm': '0 2px 8px rgba(0, 0, 0, 0.12)',
        'card-md': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card-lg': '0 8px 24px rgba(0, 0, 0, 0.2)',
        
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
    // Optional: Custom plugins for specific patterns
    function({ addComponents, theme }: any) {
      addComponents({
        // Utility classes for common patterns
        
        // Container with padding
        '.container-safe': {
          '@apply mx-auto px-4 sm:px-6 lg:px-8': {},
        },
        
        // Full-width section
        '.section': {
          '@apply w-full py-12 sm:py-16 lg:py-20': {},
        },
        
        // Centered container
        '.container-center': {
          '@apply mx-auto max-w-6xl': {},
        },
        
        // Grid 12-column
        '.grid-12': {
          '@apply grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8': {},
        },
        
        // Button reset
        '.btn-reset': {
          '@apply appearance-none border-0 bg-transparent p-0 font-inherit text-inherit cursor-pointer': {},
        },
        
        // Link underline on hover
        '.link-hover': {
          '@apply border-b border-transparent transition-colors duration-300 hover:border-sky-400': {},
        },
      })
    },
  ],
}

export default config
