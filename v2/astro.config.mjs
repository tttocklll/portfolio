// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    icon(),
    favicons({
      input: "public/favicon.jpg",
      name: "tttocklll",
      short_name: "tttocklll",
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
