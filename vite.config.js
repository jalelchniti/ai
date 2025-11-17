import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use subdirectory path only in production, root path for development
  base: mode === 'production' ? '/cours/arabe/lettres/4/' : '/',
}))
