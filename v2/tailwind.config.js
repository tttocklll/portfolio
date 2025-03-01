/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#f4f5f7',
        text: '#2e2a2c',
        accent: '#f63f35',
      },
    },
  },
  plugins: [],
}
