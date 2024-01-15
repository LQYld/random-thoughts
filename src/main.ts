import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import '@unocss/reset/tailwind.css'
import NProgress from 'nprogress'
import dayjs from 'dayjs'
import FloatingVue from 'floating-vue'
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
  ({ router, app }) => {
    dayjs.extend(LocalizedFormat)

    app.use(FloatingVue)
      router.beforeEach((to,form,next) => {
        NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
  },
)
