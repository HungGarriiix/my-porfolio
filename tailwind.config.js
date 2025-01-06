// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Your custom palette
        darkBlue: '#2F4A68',
        mutedTeal: '#56A1A5',
        lightMint: '#88DCB8',
        lightCream: '#FAF9F6',
      },
    },
  },
  plugins: [],
}
