import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    site: "https://craftserver.net",
    vite: {
        ssr: {
            external: ["@11ty/eleventy-img"],
        },
    },
    markdown: {
        remarkPlugins: [remarkToc],
    },
});
