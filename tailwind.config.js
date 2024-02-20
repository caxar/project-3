/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text_heading: "#ffffff",
        bg_color: "#111015",
        card_color: "#bbd7ec",
        grab_color: "#55a0d9",
        sidebar_color: "#1b1b1d",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
