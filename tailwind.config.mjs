/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Palatino", "serif"],
      },
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        line: "var(--line)",
        ember: "var(--ember)",
        "on-ember": "var(--on-ember)",
        "ember-soft": "var(--ember-soft)",
      },
    },
  },
  plugins: [],
};
