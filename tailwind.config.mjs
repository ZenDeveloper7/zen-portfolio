/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070b",
        panel: "#0b0f17",
        line: "rgba(255, 255, 255, 0.12)",
        mist: "#94a3b8",
        signal: "#8bf0cf",
        flare: "#7dd3fc",
        ember: "#f59e0b"
      },
      fontFamily: {
        sans: ["'Manrope'", "'Avenir Next'", "'Segoe UI'", "sans-serif"],
        mono: ["'JetBrains Mono'", "'SFMono-Regular'", "'Cascadia Code'", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139, 240, 207, 0.12), 0 18px 60px rgba(2, 6, 23, 0.5)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        pulseLine: "pulseLine 8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" }
        }
      },
      maxWidth: {
        proseplus: "78rem"
      }
    }
  },
  plugins: []
};
