import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import autoRoutes from 'pages-generated'
import 'uno.css'

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

export const createApp = ViteSSG(
  App,
  {
    routes,
  },
  ({ router }) => {

      router.beforeEach((to,form,next) => {
        if (to.path === '/') {
          next();
        } else {
          // 检查是否存在当前路由
          if (router.hasRoute(to.path)) {
            next();
          } else {
            // 不存在的路由跳转到 404 页面
            next({ path: '/404' });
          }
        }
      })
    }
)
