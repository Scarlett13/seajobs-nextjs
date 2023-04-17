module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
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
      maxHeight: {
        10: "10%",
        25: "25%",
        40: "40%",
        50: "50%",
        75: "75%",
      },
      colors: {
        "footer-bg": "#05070E",
        "hero-bg": "#09090A",
        "main-cta-button-bg": "#FFB24B",
        "form-bg": "#212121",
        "form-section-blue": "#0077FF",
        "form-section-required-red": "#EB1636",
        "timeline-line-color": "#9E9E9E",
      },
      backgroundImage: {
        "hero1-bg": "url('/image.png')",
        "hero2-bg": "url('/image_2.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("flowbite/plugin"),
  ],
};
