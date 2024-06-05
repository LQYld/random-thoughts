import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'

import { routes } from 'vue-router/auto-routes'
import 'uno.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
  },
)
