// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/HCI-525-Group-Project/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        gallery: resolve(__dirname, './Gallery/index.html'),
        credits: resolve(__dirname, './Credits/index.html'),
        timeline: resolve(__dirname, './Timeline/index.html'),
      },
    },
    outDir: '../docs/',
  },
})
