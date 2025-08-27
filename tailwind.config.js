/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: {
        card: "0 6px 20px -8px rgba(0,0,0,0.15)",
        cardHover: "0 12px 32px -12px rgba(0,0,0,0.22)",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0, transform: "translateY(4px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
      },
      animation: { fadeIn: "fadeIn .35s ease-out both" },
    },
  },
  plugins: [],
};
