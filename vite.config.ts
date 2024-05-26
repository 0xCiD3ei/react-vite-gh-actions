import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const PORT = 3000;
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
