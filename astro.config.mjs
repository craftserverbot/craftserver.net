import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

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
});
