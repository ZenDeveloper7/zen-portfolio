/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070b",
        panel: "#0b0f17",
        panelSoft: "#0f1622",
        line: "rgba(255, 255, 255, 0.12)",
        mist: "#94a3b8",
        signal: "#8bf0cf",
        flare: "#7dd3fc",
        ember: "#f59e0b"
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Avenir Next'", "'Segoe UI'", "sans-serif"],
        display: ["'Space Grotesk'", "'Plus Jakarta Sans'", "'Segoe UI'", "sans-serif"],
        mono: ["'JetBrains Mono'", "'SFMono-Regular'", "'Cascadia Code'", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139, 240, 207, 0.12), 0 24px 70px rgba(2, 6, 23, 0.45)",
        card: "0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 50px rgba(2, 6, 23, 0.38)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
      },
      animation: {
        drift: "drift 16s ease-in-out infinite",
        pulseLine: "pulseLine 8s ease-in-out infinite",
        sheen: "sheen 8s linear infinite"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" }
        },
        sheen: {
          "0%": { transform: "translateX(-140%)" },
          "100%": { transform: "translateX(140%)" }
        }
      },
      maxWidth: {
        proseplus: "80rem"
      }
    }
  },
  plugins: []
};
