/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,md,mdx,js,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#F9FAFB',
          text: '#0A0A0A',
          mute: '#6B7280',
          border: '#E5E7EB',
          accent: '#1F6FEB' // high‑key blue accent
        }
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      fontWeight: {
        thin: '300',
        normal: '400',
        semibold: '600'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};