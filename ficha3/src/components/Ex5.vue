<template>
    <div>
        <img 
            :src="logo"
            :widht="tamanho"
            :title="titulo"
            :class="{ativo: ativo}"

    </div>
</template>

<script>
    import logo from '../assets/logo.png'
    export default {
        data() {
            return {
                logo: logo,
                titulo: 'Logo P.Porto',
                tamanho: "200px",
                ativo: true
            }
        }
        
    }
</script>



<style>
    .ativo {
        border: 2px solid rgbred;
    }
</style>