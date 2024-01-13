import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// import { createRouter, createWebHistory } from 'vue-router' 
  
// const routes = [  
//   { path: '/', component: HomeComponent },  
//   { path: '/about', component: HomeComponent },  
//   // 其他路由规则...  
// ]  

// const router = createRouter({  
//   history: createWebHistory(),  
//   routes,  
// })  

import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),  
  routes,
})

router.addRoute({ path: '/:catchAll(.*)', redirect: '/404', meta: { name: 'notfound' } })

createApp(App).use(router).mount('#app')
