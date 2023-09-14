const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      rexRed: "#E3211E",
      navigationLinks: '#1E3A8A',
      blueButton: '#2563EB',
      orangeButton: '#EA580C',
      footerBackground: '#1F2937',
      footerDescription: '#E5E7EB',
      footerGrayText: '#D1D5DB',
      footerSocialBg: '#FD3E3E',
      footerHover: '#2464EB',
      freePageHeader: '#1F254B',
      freePageTextDescription: '#374151',
      freePageBtn: '#2563EB',
      pricingGreen: '#0D9488',
      etsyLightOrange: "#FEC886",
      etsyDarkOrange: "#F45900",
      bookBtn: "#2563EB",
      bookText: "#111827",

      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      amber: colors.amber
    },
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      boxShadow: {
        red: '0 0 189px 90px #EC4899',
        blue: '0 0 189px 90px #8B5CF6',
      }
    },
  },
  plugins: [],
}