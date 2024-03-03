/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-bg": "url('../public/assets/home-bg-image.png')",
        "mission-bg": "url('../public/assets/icons/Mission.svg')",
        "vision-bg": "url('../public/assets/icons/Vision.svg')",
        "practice-areas": "url('../public/assets/practice-areas.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // colors: {
    //   Cyan: "hsl(180, 66%, 49%)",
    //   Violet: "hsl(257,27%, 26%)",
    //   DarkViolet: "hsl(260, 8%, 14%)",
    // }
  },
  plugins: [],
};
