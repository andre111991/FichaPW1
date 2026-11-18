<template>
    <div>
        <p v-if="idade < 13"> Criança</p>
        <p v-else-if = "idade > 13 && idade < 17" > Adolescente</p>
        <p v-else> Adulto</p>        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                idade: "23"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>