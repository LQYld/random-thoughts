import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { ViteSSG } from 'vite-ssg'
import '@unocss/reset/tailwind.css'
import NProgress from 'nprogress'
import dayjs from 'dayjs'
import FloatingVue from 'floating-vue'
import { setupRouterScroller } from 'vue-router-better-scroller'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import './styles/main.css'
import 'uno.css'

//@ts-ignore
import routes from '~pages'

export const createApp = ViteSSG(
  App,
  {
    routes,
  },
  ({ router, app, isClient }) => {
    dayjs.extend(LocalizedFormat)

    app.use(FloatingVue)

    if (isClient) {
      const html = document.querySelector('html')!
      setupRouterScroller(router, {
        selectors: {
          html(ctx) {
            // only do the sliding transition when the scroll position is not 0
            if (ctx.savedPosition?.top)
              html.classList.add('no-sliding')
            else
              html.classList.remove('no-sliding')
            return true
          },
        },
        behavior: 'auto',
      })

      router.beforeEach(() => {
        NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
  },
)
