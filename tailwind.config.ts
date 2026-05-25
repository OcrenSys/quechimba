import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blackBase: "#050505",
        blackSoft: "#111827",
        magentaNeon: "#EC008C",
        blueElectric: "#00A3FF",
        gold: "#F5C542",
        grayMuted: "#A1A1AA",
      },
      boxShadow: {
        neon: "0 0 35px rgba(236, 0, 140, 0.32), 0 0 50px rgba(0, 163, 255, 0.18)",
        gold: "0 0 30px rgba(245, 197, 66, 0.18)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
