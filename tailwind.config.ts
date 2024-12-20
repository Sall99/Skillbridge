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
          100: "var(--primary-color-100)",
          200: "var(--primary-color-200)",
          400: "var(--primary-color-400)",
          500: "var(--primary-color-500)",
        },
        gray: {
          100: "var(--gray-color-100)",
          200: "var(--gray-color-200)",
          300: "var(--gray-color-300)",
          500: "var(--gray-color-500)",
          600: "var(--gray-color-600)",
          700: "var(--gray-color-700)",
        },
      },

      spacing: {
        _10: "10px",
        _14: "14px",
        _20: "20px",
        _26: "26px",
        _34: "34px",
        _30: "30px",
        _39: "39px",
        _44: "44px",
        _50: "50px",
        _54: "54px",
        _60: "60px",
        _62: "62px",
        _86: "86px",
        _100: "100px",
        _107: "107px",
        _117: "117px",
        _120: "120px",
        _126: "126px",
        _132: "132px",
        _140: "140px",
        _150: "150px",
        _162: "162px",
        _168: "168px",
        _172: "172px",
        _181: "181px",
        _200: "200px",
        _250: "250px",
        _266: "266px",
        _300: "300px",
        _304: "304px",
        _309: "309px",
        _314: "314px",
        _326: "326px",
        _358: "358px",
        _370: "370px",
        _380: "380px",
        _386: "386px",
        _408: "408px",
        _413: "413px",
        _422: "422px",
        _437: "437px",
        _445: "445px",
        _478: "478px",
        _554: "554px",
        _519: "519px",
        _549: "549px",
        _613: "613px",
        _629: "629px",
        _631: "631px",
        _660: "660px",
        _683: "683px",
        _748: "748px",
        _767: "767px",
        _783: "783px",
        _790: "790px",
        _803: "803px",
        _829: "829px",
        _941: "941px",
        _1117: "1117px",
        _1279: "1279px",
        _1596: "1596px",
        _1920: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
