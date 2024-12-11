/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {

    },
  },
  daisyui: {
    themes: [
      {
        alpha: {

          "primary": "#1E293B",
          "primary-content": "#E2E8F0",
          "secondary": "#10B981",
          "secondary-content": "#FFEDD5",
          "accent": "#2DD4BF",
          "accent-content": "#134E4A",
          "neutral": "#F9FAFB",
          "neutral-content": "#374151",
          "base-100": "#F3F4F6",
          "base-200": "#E5E7EB",
          "base-300": "#D1D5DB",
          "base-content": "#1F2937",
          "info": "#164E63",
          "info-content": "#FF0099",
          "success": "#4ADE80",
          "success-content": "#14532D",
          "warning": "#EAB308",
          "warning-content": "#713F12",
          "error": "#F87171",
          "error-content": "#7F1D1D",
        },
        beta: {
            "primary": "#E2E8F0",
            "primary-hover": "#CBD5E1",
            "primary-active": "#94A3B8",
            "primary-disabled": "#475569",
            "primary-content": "#1E293B",
          
            "secondary": "#E2E8F0",
            "secondary-hover": "#CBD5E1",
            "secondary-active": "#94A3B8",
            "secondary-disabled": "#475569",
            "secondary-content": "#1E293B",
          
            "accent": "#A7F3D0",
            "accent-hover": "#86EFAC",
            "accent-active": "#6EE7B7",
            "accent-disabled": "#34D399",
            "accent-content": "#059669",
          
            "neutral": "#333",
            "neutral-200": "#444",
            "neutral-300": "#555",
            "neutral-400": "#666", 
            "neutral-content": "#FFFFFF",
            "neutral-content-200": "#F1F5F9",
            "neutral-content-300": "#CBD5E1",
            "neutral-content-400": "#64748B",
          
            "base": "#444",
            "base-200": "#666",
            "base-300": "#888",
            "base-content": "#fff",
          
            "info": "#93C5FD",
            "info-hover": "#60A5FA",
            "info-active": "#3282FD",
            "info-disabled": "#2563EB",
            "info-content": "#1D4ED8",
          
            "success": "#86EFAC",
            "success-hover": "#65D48D",
            "success-active": "#4ADE80",
            "success-disabled": "#22C55E",
            "success-content": "#16A34A",
          
            "warning": "#FDBA74",
            "warning-hover": "#FACC61",
            "warning-active": "#FB923C",
            "warning-disabled": "#F97316",
            "warning-content": "#EA580C",
          
            "error": "#FCA5A5",
            "error-hover": "#F87171",
            "error-active": "#EF4444",
            "error-disabled": "#DC2626",
            "error-content": "#B91C1C"
          },
      }
    ],
    darkTheme: "beta",
  },
  plugins: [
    require('daisyui'),
  ],
}

