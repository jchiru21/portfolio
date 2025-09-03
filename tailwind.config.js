/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      // If you use a /src directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',  // Enable class-based dark mode
    theme: {
      extend: {
        // (optional) customize colors, fonts, etc. here
      },
    },
    plugins: [
      // (optional) add any Tailwind plugins here
    ],
  }
  