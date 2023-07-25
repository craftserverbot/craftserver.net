import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
    ],
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
