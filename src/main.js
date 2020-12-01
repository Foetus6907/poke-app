
// import './registerServiceWorker'
import { routes } from './routes'



import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'


import * as mdb from 'mdb-ui-kit'; // lib

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
})

const app = createApp(App)
app.use(mdb)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
