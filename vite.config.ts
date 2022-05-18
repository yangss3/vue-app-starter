import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    Vue(),
    UnoCSS(),
    Components(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true
      }
    })
  ]
})
