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
        // https://preset-env.netlify.app/
        PostCSSPresetEnv({ features: { 'nesting-rules': true } })
      ]
    }
  },
  plugins: [
    Vue(),
    // https://github.com/unocss/unocss
    UnoCSS(),
    // https://github.com/antfu/unplugin-vue-components
    Components(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue'],
      eslintrc: { enabled: true }
    })
  ]
})
