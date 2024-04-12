import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#f0f0f0",

        secondary: "#3D3D3D",

        accent: "#808080",

        neutral: "#808080",

        "base-100": "#292929",

        info: "#008db6",

        success: "#9cc400",

        warning: "#ffad00",

        error: "#ff2a63",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f0f0f0",

          secondary: "#3D3D3D",

          accent: "#808080",

          neutral: "#1f2319",

          "base-100": "#292929",

          info: "#008db6",

          success: "#9cc400",

          warning: "#ffad00",

          error: "#ff2a63",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
