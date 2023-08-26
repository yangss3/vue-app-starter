import '@unocss/reset/tailwind.css'
import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
