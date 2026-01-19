import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This 'base' setting is required for GitHub Pages.
  // If your repository name is different from 'lumina-press', 
  // change the name between the slashes below to match it.
  base: '/lumina-press/', 
})