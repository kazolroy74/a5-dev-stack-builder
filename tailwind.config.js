/** @type {import('tailwindcss').Config} */

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
