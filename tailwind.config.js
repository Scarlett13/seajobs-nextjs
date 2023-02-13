module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      colors: {
        "footer-bg": "#05070E",
        "hero-bg": "#09090A",
        "main-cta-button-bg": "#FFB24B",
      },
      backgroundImage: {
        "hero1-bg": "url('/image.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
