/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        line: "var(--line)",
        muted: "var(--muted)",
        tint: "var(--tint)",
        "accent-ink": "var(--accent-ink)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2858ad",
          "primary-content": "#ffffff",
          "base-100": "#f6f8fc",
          "base-content": "#16223a",
          neutral: "#1f2c40",
          "neutral-content": "#ffffff",
        },
        dark: {
          primary: "#a7c9ff",
          "primary-content": "#142443",
          "base-100": "#101722",
          "base-content": "#edf3ff",
          neutral: "#28374b",
          "neutral-content": "#edf3ff",
        },
      },
    ],
  },
};
