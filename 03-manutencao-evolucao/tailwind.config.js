// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Arquivos dentro da pasta pages
    "./components/**/*.{js,ts,jsx,tsx}", // Arquivos dentro da pasta components
    "./src/**/*.{js,ts,jsx,tsx}", // Arquivos dentro da pasta src (se aplicável)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
