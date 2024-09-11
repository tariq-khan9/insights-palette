import {
  Inter,
  Montserrat,
  Plus_Jakarta_Sans,
  Roboto,
} from "next/font/google";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      barlow: ["var(--font-barlow)", "sans-serif"],
      Roboto: ["Roboto", "ui-sans-serif", "system-ui"],
      Montserrat: ["Montserrat", "ui-sans-serif", "system-ui"],
      inter: ["var(--font-inter)", "sans-serif"],
      Inter: ["Inter", "ui-sans-serif", "system-ui"],
      jakarta: ["var(--font-jakarta)", "sans-serif"],
      marienda: ["var(--font-marienda)", " cursive"],
      montserrat: ["var(--font-montserrat)", "sans-serif"],
      roboto: ["var(--font-roboto)", "sans-serif"],
      Tenor_Sans: ["Tenor Sans", "ui-sans-serif", "system-ui"],
      Plus_Jakarta_Sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
    },
   
    extend: {
      colors:{
        "primary": '#312ECB',
        "secondary": '#007AFF',
       
     }
    },
  },
 
  plugins: [],
};
