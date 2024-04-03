import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Client port
    proxy: {
      '/pizzas': {
        target: 'http://localhost:5100', // Mock server port
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
})