<template>
    <div>

    </div>
</template>

<script>

    export default {
        name: 'ProdutoValidade',
        props: {
            nome: {
                type: String,
                required: true
            },
            preço: {
                type: Number,
                required: true
            },  
            moeda: {
                type: String,
                default: 'EUR'
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>