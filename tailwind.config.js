/** @type {import('tailwindcss').Config} */

// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR THE BRAND GRADIENT
// Change these three stops and the whole UI re-themes: brand name in the
// navbar, the gradient word in the hero heading, and every primary button
// all read from this one place.
// ---------------------------------------------------------------------------
const brandGradientStops = {
  from: '#f97316', // orange
  via: '#ec1f8f', // pink
  to: '#8b3ff0', // violet
}
const brandGradient = `linear-gradient(90deg, ${brandGradientStops.from} 0%, ${brandGradientStops.via} 55%, ${brandGradientStops.to} 100%)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: brandGradientStops,
      },
      backgroundImage: {
        // Use this ONE utility everywhere the gradient is needed:
        // `bg-brand-gradient` for buttons, `bg-brand-gradient bg-clip-text text-transparent` for text.
        'brand-gradient': brandGradient,
      },
    },
  },
  daisyui: {
    themes: [
      {
        devstack: {
          primary: brandGradientStops.via,
          secondary: brandGradientStops.to,
          accent: brandGradientStops.from,
          neutral: '#0f172a',
          'base-100': '#ffffff',
          info: '#3b82f6',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
