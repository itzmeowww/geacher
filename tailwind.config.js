module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Prompt: ['Prompt', 'serif'],
      },
      animation: {
        'v-move': 'vmove 9s ease-in-out infinite',
        'h-move': 'hmove 9s ease-in-out infinite',
      },
      keyframes: {
        vmove: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        hmove: {
          '0%, 100%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
}
