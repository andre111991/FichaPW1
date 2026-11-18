<script>
  import { RouterLink,RouterView } from 'vue-router';
  import {guardar} from "./services/storage.js"

  export default {
    name: 'App',
    created () {
      console.log('App created');
      if (!localStorage.getItem('series')) {
        guardar()
    }
  }
  }


</script>

<template>
  <h1>Gestor de series</h1>
  <nav>
    <RouterLink :to="{name:'inicio'}">Inicio</RouterLink> |
    <RouterLink :to="{name:'login'}">Login</RouterLink> |
    <RouterLink :to="{name:'catalogo'}">Catalogo</RouterLink> |
    <RouterLink :to="{name:'registo'}">Registo</RouterLink>

  </nav>
  <p>
    <RouterView/>
  </p>
</template>

<style scoped></style>
