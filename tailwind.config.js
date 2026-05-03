/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d1117",
          card: "#161b22",
          deep: "#080b10",
        },
        ink: {
          DEFAULT: "#f0f6fc",
          dim: "#8b949e",
          line: "#30363d",
        },
        moss: {
          DEFAULT: "#1a7a1a",
          light: "#7edc70",
          glow: "#22a322",
        },
        amber: {
          flag: "#eab308",
        },
        crimson: {
          flag: "#ef4444",
        },
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        kurdish: ["'Noto Naskh Arabic'", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "scan-x": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "30%": { opacity: "0.7" },
          "70%": { opacity: "0.7" },
          "100%": { transform: "translateX(120vw)", opacity: "0" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(126,220,112,0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(126,220,112,0.55)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "scan-x": "scan-x 6s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "border-flow": "border-flow 6s linear infinite",
        "fade-up": "fade-up 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
