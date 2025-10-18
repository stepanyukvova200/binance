import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/binance/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  define: {
    __BASE_PATH__: JSON.stringify('/binance/'),
  },
})
