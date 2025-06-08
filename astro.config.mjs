// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: { mdi: ["*"] },
    }), // This should always be placed last integration so that all integrations run before it does
    pagefind(),
  ],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      [remarkToc, { heading: "toc", maxDepth: 3 }],
      // remarkPlugins: [ [remarkToc, { heading: "contents"} ] ],
    ],
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        // dark: "night-owl",
        dark: "ayu-dark",
        // dark: "material-theme-ocean",
        // dark: "tokyo-night",
        // dark: "catppuccin-mocha",
      },
    },
  },
});
