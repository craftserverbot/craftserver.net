/** @type {import('tailwindcss/types/generated/colors').DefaultColors} */
const { default: defaultColors } = require("tailwindcss/lib/public/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                title: ["Oxygen", "Futura", "sans-serif"],
                sans: ["Red Hat Text", "Arial", "sans-serif"],
                mono: [
                    "Menlo",
                    "Monaco",
                    "Lucida Console",
                    "Liberation Mono",
                    "DejaVu Sans Mono",
                    "Bitstream Vera Sans Mono",
                    "Courier New",
                    "monospace",
                ],
            },
            colors: {
                primary: defaultColors.gray[800],
                secondary: defaultColors.gray[700],
                discord: "#35383f",
            },
        },
    },
    plugins: [],
};
