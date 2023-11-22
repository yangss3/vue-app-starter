import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import PostCSSPresetEnv from 'postcss-preset-env'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        // https://preset-env.netlify.app/
        PostCSSPresetEnv({ features: { 'nesting-rules': true } }),
      ],
    },
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
    }),
  ],
})
