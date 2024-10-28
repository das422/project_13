/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#12002b",
        "bg-light": "#fff",
        "argent-blue": "#157ade",
        "active-green": "#42b983",
        "argent-green": "#00bc77",
        "argent-red": "#c1241b",
        "border-grey": "#ccc",
      },
    },
  },
  plugins: [],
};

