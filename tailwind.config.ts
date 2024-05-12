import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "analyst":"url('/public/analyst_1.jpg')"
      },
      fontFamily :{
        "montserat" : ['Montserrat', 'sans-serif'],
        "pacifico" : ["Pacifico", "cursive"]
      },
      colors:{
        "primary":"#FFA500",
        "secondary":"#FFFFCC",
        "accent":"#FF6347",
        "bg":"#FFF8E1",
        "text":"#333333"
      },
      fontSize:{
        xxxs : "1px"
      }
    },
  },
  plugins: [],
};
export default config;
