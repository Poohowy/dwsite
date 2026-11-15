// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// TODO: replace with the final production domain before deployment.
const SITE_URL = "https://datawildcat.example";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  build: { format: "directory" },
  i18n: {
    locales: ["pl", "en"],
    defaultLocale: "pl",
    routing: { prefixDefaultLocale: false },
  },
  // Fonts are downloaded at build time and served from our own hosting (no runtime calls to Google).
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-sans",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Geist Mono",
      cssVariable: "--font-mono",
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
  integrations: [
    sitemap({
      i18n: { defaultLocale: "pl", locales: { pl: "pl-PL", en: "en-US" } },
    }),
  ],
});
