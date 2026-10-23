import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vita'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() tailwindcss()],
})
plugins: [react(), tailwindcss()],
