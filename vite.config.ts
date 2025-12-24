import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer"
// @ts-ignore
import purgeCss from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [
    react(),
    purgeCss({
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      safelist: {
        standard: [
          'html', 'body', 
          // Essential layout classes that are often toggled by JS
          'show', 'collapse', 'collapsing', 'active', 'fade',
          // Navbar essentials
          'navbar-collapse', 'navbar-toggler', 'navbar-nav',
          'nav-item', 'nav-link',
          // Placeholder classes for lazy loading
          'placeholder', 'placeholder-glow', 'placeholder-wave',
          // General UI safety
          /modal/, /disabled/, /^btn-/, /^bg-/
        ],
        // Deep safelist keeps all sub-classes of these components
        deep: [
            /navbar/, 
            /dropdown/, 
            /nav/, 
            /accordion/,
            /placeholder/ // Ensures all placeholder variants (widths, colors) are kept
        ],
      }
    }) as any, 
    visualizer({ open: true, filename: 'bundle-analysis.html' }),
  ],
  server: {
    host: true,
    allowedHosts: ["yashindo.local", "dev.syn-forge.com"]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'vendor-react-dom';
            if (id.includes('react/')) return 'vendor-react-core';
            if (id.includes('react-bootstrap')) return 'vendor-react-bootstrap';
            if (id.includes('bootstrap')) return 'vendor-bootstrap-js';
            return 'vendor-others';
          }
        },
      },
    },
  },
})