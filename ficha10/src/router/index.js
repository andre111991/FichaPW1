import LoginView from "@/views/LoginView.vue";
import GamesView from "@/views/GamesView.vue";
import AdminView from "@/views/AdminView.vue";
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    }



  ],
})

export default router
