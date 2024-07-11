/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#22C55E",
          "primary-content": "#1F2937",
          "secondary": "#84CC16",
          "secondary-content": "#1F2937",
          "accent": "#10B981",
          "accent-content": "#FFFFFF",
          "neutral": "#F3F4F6",
          "neutral-content": "#1F2937",
          "base-100": "#FFFFFF",
          "base-content": "#1F2937",
          "info": "#2563EB",
          "info-content": "#FFFFFF",
          "success": "#16A34A",
          "success-content": "#FFFFFF",
          "warning": "#F59E0B",
          "warning-content": "#1F2937",
          "error": "#DC2626",
          "error-content": "#FFFFFF"
        }
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

