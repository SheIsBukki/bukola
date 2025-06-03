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
    }),
    pagefind(), // This should always be placed last so that all integrations run before it does
  ],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      [remarkToc, { heading: "toc", maxDepth: 3 }],
      // remarkPlugins: [ [remarkToc, { heading: "contents"} ] ],
    ],
    shikiConfig: {
      // theme: "catppuccin-latte",
      theme: "night-owl",
      // theme: "monokai",
      // themes: {
      //   light: "catppuccin-latte",
      //   dark: "night-owl",
      // },
    },
  },
});
