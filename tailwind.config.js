{import('tailwindcss').Config}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'typewriter': "url('../pages/background/typewriterwall.jpg')",
        'wood-texture': "url('../pages/background/wood-texture.jpg')"
      },
      colors: {
        'custom-burnt': '#EAB676',
        'custom-light': '#FBF6EB'
      }

    },
  },
  plugins: [
  ],
};
