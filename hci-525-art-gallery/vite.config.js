// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        gallery: resolve(__dirname, './Gallery/index.html'),
        credits: resolve(__dirname, './Credits/index.html'),
      },
    },
    outDir: '../docs/',
  },
})