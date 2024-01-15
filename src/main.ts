import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import '@unocss/reset/tailwind.css'
import NProgress from 'nprogress'
import dayjs from 'dayjs'
import FloatingVue from 'floating-vue'
import { setupRouterScroller } from 'vue-router-better-scroller'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import autoRoutes from 'pages-generated'
import './styles/main.css'
import 'uno.css'

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

console.log(routes,'routes111')

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
            if (ctx.savedPosition?.top)
              html.classList.add('no-sliding')
            else
              html.classList.remove('no-sliding')
            return true
          },
        },
        behavior: 'auto',
      })

      router.beforeEach((to,form,next) => {
        NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
  },
)
