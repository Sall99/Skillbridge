import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1600px",
      },

      colors: {
        primary: {
          400: "var(--primary-color-400)",
          500: "var(--primary-color-500)",
        },
        gray: {
          100: "var(--gray-color-100)",
        },
      },

      spacing: {
        _10: "10px",
        _14: "14px",
        _26: "26px",
        _34: "34px",
        _30: "30px",
        _39: "39px",
        _44: "44px",
        _50: "50px",
        _54: "54px",
        _62: "62px",
        _86: "86px",
        _100: "100px",
        _117: "117px",
        _126: "126px",
        _132: "132px",
        _140: "140px",
        _941: "941px",
      },
    },
  },
  plugins: [],
};
export default config;
