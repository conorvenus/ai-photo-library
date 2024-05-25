/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}", "./index.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#028A73',
      'background': '#FFFFFF',
      'gray-dark': '#080808',
      'gray': '#5A5A5A',
      'gray-light': '#F5F5F5'
    },
  },
  plugins: [],
}