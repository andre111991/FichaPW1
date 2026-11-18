<template>
    <div>

        <p>
            {{ qtd }}
        </p>
        <p> 
            <button @click="incrementar">+</button>
            <button @click="dfecrementar" :disabled="!active" >-</button>
        </p>

    </div>
</template>

<script>
    export default {
        name: 'AjustadorQuantidade',
        props: {
            qtd: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                active: true
            }
        },
        methods: {
            incrementar() {
                this.$emit('alterar-quantidade', 1);
            },
            dfecrementar() {
                if (this.qtd > 0) {
                    this.$emit('alterar-quantidade', -1)
                    if(this.qtd - 1 <= 0) {
                        this.active = false;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>