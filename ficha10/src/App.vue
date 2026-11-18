<script>
import { RouterLink, RouterView } from 'vue-router';
import { useUsersStore } from './stores/users.js';

export default {
  name: 'App',
  setup() {
    // Chama a função para criar uma instância da store
    const usersStore = useUsersStore();

    // Retorna a instância para ser usada no template
    return {
      usersStore,
    };
  },
};
</script>

<template>
  <h1>Games APP</h1>

  <!-- Menu login -->
  <p v-if="!usersStore.isUserLogined">
    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
    <!-- ir buscar ao roteador o nome da rota que quero -->
  </p>

  <p v-else>
    Welcome, {{ usersStore.getUserLogged.name }}!
    <RouterLink :to="{ name: 'games' }">Games</RouterLink>

    <span v-if="usersStore.isUserAdmin">
      <RouterLink :to="{ name: 'admin' }">Admin</RouterLink>
    </span>
  </p>

  <!-- Menu outras opções -->
  <p>
    <RouterView />
  </p>
</template>