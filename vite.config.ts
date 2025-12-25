import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  base: "/",
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