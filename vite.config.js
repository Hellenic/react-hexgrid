// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            external: [
                "./docs/Hero/Hero.tsx"
            ]
        }
    }
})