import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: false,   // 🚀 disables minification
    sourcemap: true, // optional: keeps source maps for debugging
  },
})
