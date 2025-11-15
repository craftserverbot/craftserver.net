import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://craftserver.net",
    vite: {
        ssr: {
            external: ["@11ty/eleventy-img"],
        },

        plugins: [tailwindcss()],
    },
    markdown: {
        remarkPlugins: [remarkToc],
    },
});
