
import './registerServiceWorker'
import { routes } from './routes'



import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'


const router = createRouter({
  routes: routes,
  history: createWebHistory(),
})

const app = createApp(App)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
