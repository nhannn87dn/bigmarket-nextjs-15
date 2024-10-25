import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        /* Cấu hình màu tùy chỉnh dùng chung */
        primary: '#006837', //bg-primary
        secondary: '#015c31',  //bg-secondary
        price: '#be1e2d',
        graytext: '#82869e',
        grayborder: '#e0e0e0'
      },
    },
  },
  plugins: [],
};
export default config;
