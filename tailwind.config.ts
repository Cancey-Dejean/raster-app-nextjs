import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      raster: "var(--font-raster)",
    },
    colors: {
      transparent: "transparent",
      black: {
        DEFAULT: "hsl(var(--color-black) / <alpha-value>)",
      },
      white: {
        DEFAULT: "hsl(var(--color-white) / <alpha-value>)",
      },
      gray: {
        DEFAULT: "hsl(var(--color-gray-500) / <alpha-value>)",
        300: "hsl(var(--color-gray-300) / <alpha-value>)",
      },
      red: {
        DEFAULT: "hsl(var(--color-red-500) / <alpha-value>)",
      },
      yellow: {
        500: "hsl(var(--color-yellow-500) / <alpha-value>)",
      },
      purple: {
        500: "hsl(var(--color-purple-500) / <alpha-value>)",
      },
      green: {
        400: "hsl(var(--color-green-400) / <alpha-value>)",
        500: "hsl(var(--color-green-500) / <alpha-value>)",
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
