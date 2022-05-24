import { defineConfig } from 'vite'
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import PostCSSPresetEnv from 'postcss-preset-env'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        PostCSSPresetEnv({ features: { 'nesting-rules': true } }) as any
      ]
    }
  },
  plugins: [
    Vue(),
    UnoCSS(),
    Components(),
    AutoImport({
      imports: ['vue'],
      eslintrc: { enabled: true }
    })
  ]
})
