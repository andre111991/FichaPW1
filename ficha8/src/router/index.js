import { createRouter, createWebHistory } from 'vue-router'

import inicioView from '../views/inicioView.vue'
import loginView from '../views/loginView.vue'
import catalogoView from '../views/catalogoView.vue'
import registoView from '../views/registoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicioView,
    },
    {
      path: '/login',
      name: 'login',
      component: loginView,
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: catalogoView,
    },
    {
      path: '/registo',
      name: 'registo',
      component: registoView,
    }


  ],
})

export default router
