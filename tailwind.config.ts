import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            maxWidth: {
                'screen': '1280px',
            },
            backgroundImage: {
                'main-cover': `url(${process.env.BASE_URL}/main-cover.jpg)`,
            },
            colors: {
                primary: "#dfe777",
                secondary: "#fffdc1",
                footer: "#464646",
                title: "#336218",
                secondaryText: "#2e3105",
                content: "#3f5e28"
            },
            lineHeight: {
                '1px': '1px',
            },

        },
    },
    plugins: [],

}
export default config
