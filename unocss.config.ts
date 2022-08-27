import {
  defineConfig, presetUno, presetIcons,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      },
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default)
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  shortcuts: {
    'btn': 'py-1 px-4 text-white rounded bg-teal-800/60 hover:bg-teal-800/70 active:bg-teal-800/80'
  }
})
