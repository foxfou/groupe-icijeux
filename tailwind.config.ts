import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'main-cover': "url('/main-cover.jpg')",
            },
            colors: {
                primary: "#dfe777",
                secondary: "#fffdc1",
                footer: "#464646",
                title: "#336218"
            },
            lineHeight: {
                '1px': '1px',
            },

        },
    },
    plugins: [],

}
export default config
