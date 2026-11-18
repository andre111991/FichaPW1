<template>
    <div>
        <ProdutoValidade nome="Teclado" :preço="Number(35)" />
        <PrdutoValidade nome="Rato" :preço="Number(18)" moeda="USD" />

    </div>
</template>

<script>
    import ProdutoValidade from './ProdutoValidade.vue'
    export default {
        name: 'Ex3',
        components: {
            ProdutoValidade
        },
        
    }
</script>

<style lang="scss" scoped>

</style>