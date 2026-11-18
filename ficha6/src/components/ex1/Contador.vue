<template>
  <div class="contador">
    <p>Valor: {{ contador }}</p>
    <button @click="aumentar">Aumentar</button>
    <button @click="repor">Repor</button>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  data() {
    return {
      contador: 0
    };
  },
  methods: {
    aumentar() {
      this.contador++;
    },
    repor() {
      this.contador = 0;
    }
  }
};
</script>

<style scoped>
.contador {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  margin-right: 5px;
}
</style>

