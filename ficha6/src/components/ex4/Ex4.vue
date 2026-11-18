<template>
    <div>
        <AjustadorQuantidade @alterar-quantidade="alterarQtd" :qtd="qtd" />
        <p>
            {{ preco }} * {{ qtd }} = {{ preco * qtd }}
        </p> 

    </div>
</template>

<script>
    import AjustadorQuantidade from './AjustadorQuantidade.vue'
    export default {
        name: 'Ex4',
        components: {
            AjustadorQuantidade
        },
        data() {
            return {
                qtd: 1
            }
        },
        methods: {
            alterarQtd(valor) {
                let temp = this.qtd + valor;
                if (temp >= 1) {
                    this.qtd = temp;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>