/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["Dm Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "bg-dark": "#191919",
        "home-dark": "#d9d9d9",
        "contact-heading": "#1e0e62",
        "heading-light": "#42446e",
        "content-light": "#666",
        "heading-dark": "#ccc",
        "content-dark": "#a7a7a7",
        "button-text": "#018c0f",
        "button-bg": "#D7ffe0",
        "projects-dark": "#363636",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(170,0,255,0.25)",
      },
    },
  },
  plugins: [],
};
