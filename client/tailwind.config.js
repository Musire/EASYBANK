/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        darkblue: '#2D314D',
        limegreen: '#31D35C',
        brightcyan: '#2BB7DA',
        grayblue: '#9698A6',
        lightgrayblue: '#F3F4F6',
        lightgray: '#FAFAFA'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      backgroundImage: {
        'menu-icon': "url('./assets/menu-icon.svg')",
        'close-icon': "url('./assets/close-icon.svg')",
        'icon-api': "url('./assets/icon-api.svg')",
        'icon-budgeting': "url('./assets/icon-budgeting.svg')",
        'icon-onboarding': "url('./assets/icon-onboarding.svg')",
        'icon-online': "url('./assets/icon-online.svg')",
        'logo': "url('./assets/logo.svg')",
        'logo-white': "url('./assets/logo-white.svg')",
        'hero-desktop': "url('./assets/hero-desktop.svg')",
        'hero-mobile': "url('./assets/hero-mobile.svg')",
        'image-mockups': "url('./assets/image-mockups.png')",
        'image-currency': "url('./assets/image-currency.jpg')",
        'image-confetti': "url('./assets/image-confetti.jpg')",
        'image-plane': "url('./assets/image-plane.jpg')",
        'image-restaurant': "url('./assets/image-restaurant.jpg')"
      },
    },
  },
}

