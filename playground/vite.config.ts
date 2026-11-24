import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Dev runs against the library source, so edits hot-reload without a build.
    alias: {
      '@fists/performance-ui': fileURLToPath(new URL('../src/index.ts', import.meta.url)),
    },
    dedupe: ['react', 'react-dom'],
  },
})
