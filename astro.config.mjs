// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import pagefind from "astro-pagefind";

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
    shikiConfig: {
      // theme: "catppuccin-latte",
      // theme: "night-owl",
      themes: {
        light: "catppuccin-latte",
        dark: "night-owl",
      },
    },
  },
});
