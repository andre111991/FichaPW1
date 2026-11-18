<template>
    <div>
        {{ nome }} - {{ Number(preço).toFixed(2) }}€

    </div>
</template>

<script>
    export default {
        name: 'CartaoProduto',
        props: ["nome","preço"]

    }
</script>

<style lang="scss" scoped>

</style>