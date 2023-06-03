const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1FB2A5",
        
"secondary": "#fbbf24",
        
"accent": "#ef4444",
        
"neutral": "#111827",
        
"base-100": "#2A303C",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#dc2626",
        
"error": "#F87272",
        },
      },
    ],
  },

}
