import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

//@ts-ignore
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),  
  routes,
})

router.addRoute({ path: '/:catchAll(.*)', redirect: '/404', meta: { name: 'notfound' } })

createApp(App).use(router).mount('#app')
