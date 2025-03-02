import react from "@astrojs/react";
import vercelStatic from "@astrojs/vercel/static";
import tailwindcss from "@tailwindcss/vite";
import favicons from "astro-favicons";
import icon from "astro-icon";
// @ts-check
import { defineConfig } from "astro/config";

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
