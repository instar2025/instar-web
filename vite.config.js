import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: '/',            // root site
  build: {
    outDir: 'docs'      // 👈 build output into docs/
  }
})
