/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',
      // => @media (min-width: 375px) { ... }
      
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

    },
    extend: {
      'banner': 'url(/assets/illustration-sign-up-desktop.svg)'
    },
  },
  plugins: [],
}

