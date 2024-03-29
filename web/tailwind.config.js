module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        md: '4px',
      },

      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E5',
        }
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),

  ],
}
