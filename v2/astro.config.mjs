// @ts-check
import react from "@astrojs/react";
import vercelStatic from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
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
