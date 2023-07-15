/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dba87f",
      },
      boxShadow: {
        custom: "10px 10px 20px rgba(218, 213, 213, 0.15)",
      },
    },
  },
  plugins: [],
};
