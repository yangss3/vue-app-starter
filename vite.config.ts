import { defineConfig } from 'vite'
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import PostCSSPresetEnv from 'postcss-preset-env'
import { VueRouterAutoImports } from 'unplugin-vue-router'

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
    // https://github.com/posva/unplugin-vue-router
    VueRouter(),
    Vue(),
    // https://github.com/unocss/unocss
    UnoCSS(),
    // https://github.com/antfu/unplugin-vue-components
    Components(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', VueRouterAutoImports],
      eslintrc: { enabled: true }
    })
  ]
})
