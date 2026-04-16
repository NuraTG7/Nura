import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Nura/',  // Add this line!
  plugins: [react()],
  build:{
    outDir: 'docs'
  }
})