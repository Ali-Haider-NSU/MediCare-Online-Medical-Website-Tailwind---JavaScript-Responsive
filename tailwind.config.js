/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
        },
        extend: {
            colors: {
                'blue': '#1A76D1',
                'violet': '#2C2D3F',
                'gray': '#757575',
            },
        },
    },
    plugins: [],
}