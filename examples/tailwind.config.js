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
        alpha: {
          "primary": "#1E293B",
          "primary-hover": "#334155",
          "primary-active": "#0F172A",
          "primary-disabled": "#64748B",
          "primary-content": "#E2E8F0",
  
          "secondary": "#1E293B",
          "secondary-hover": "#334155",
          "secondary-active": "#0F172A",
          "secondary-disabled": "#64748B",
          "secondary-content": "#E2E8F0",
  
          "accent": "#10B981",
          "accent-hover": "#34D399",
          "accent-active": "#059669",
          "accent-disabled": "#A7F3D0",
          "accent-content": "#064E3B",
  
          "neutral": "#FFFFFF",
          "neutral-200": "#F1F5F9",
          "neutral-300": "#CBD5E1",
          "neutral-400": "#64748B",
          "neutral-content": "#0F172A",
          "neutral-content-200": "#475569",
          "neutral-content-300": "#94A3B8",
          "neutral-content-400": "#CBD5E1",
  
          "base": "#fff",
          "base-200": "#eee",
          "base-300": "#999",
          "base-content": "#000",
  
          "info": "#2563EB",
          "info-hover": "#3B82F6",
          "info-active": "#1D4ED8",
          "info-disabled": "#93C5FD",
          "info-content": "#DBEAFE",
  
          "success": "#22C55E",
          "success-hover": "#4ADE80",
          "success-active": "#16A34A",
          "success-disabled": "#86EFAC",
          "success-content": "#14532D",
  
          "warning": "#F97316",
          "warning-hover": "#FB923C",
          "warning-active": "#EA580C",
          "warning-disabled": "#FDBA74",
          "warning-content": "#FFEDD5",
  
          "error": "#DC2626",
          "error-hover": "#EF4444",
          "error-active": "#B91C1C",
          "error-disabled": "#FCA5A5",
          "error-content": "#FEE2E2",
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
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

