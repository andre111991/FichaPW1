<template>
    <form>

        <!-- for do label empararelha com o id do input -->

        <label for="txtNome">Nome do produto:</label>       
        <input type="text" id="txtNome" v-model="nome">
        <button @click="preço+=5">Aumentar preço</button>

    </form>
    <div>
        <CartaoProduto nome="Caderno" preço="4.562" />
        <cartao-produto :nome="nome" :preço="preço" />

    </div>
</template>

<script>
    import CartaoProduto from './CartaoProduto.vue';
    export default {
        name: 'Ex2',
        components: {
            CartaoProduto
        },
        data() {
            return {
                nome: "Mochila",
                preço: 25
            }
        },
    }
    
</script>

<style lang="scss" scoped>

</style>