<template>
  <div>
    <h2>Exercício 1 - Contadores</h2>
    <Contador />
    <Contador />
    <Contador />
  </div>
</template>

<script>
import Contador from './ex1/Contador.vue/index.js';

export default {
  name: 'Ex1',
  components: {
    Contador
  }
};
</script>

<style scoped>
</style>