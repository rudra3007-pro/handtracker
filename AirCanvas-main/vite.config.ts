import { defineConfig } from 'vite'

export default defineConfig({
  base: "./",
  server: {
    host: true,
    port: 5173
  },
  optimizeDeps: {
    exclude: ['@mediapipe/hands']
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['@mediapipe/hands']
    }
  }
})
