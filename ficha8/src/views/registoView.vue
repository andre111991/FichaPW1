<template>
    <div>

        <h1>Registo User</h1>

        <form>
            <label for="txtNome"></label>
            <input type="nome" id="txtNome">        // for e id do label e do input ser o mesmo para puder carregar na label e acionar a caixa de texto

            <label for="txtEmail"></label>
            <input type="email" id="txtEmail">

            <label for="txtPassword"></label>
            <input type="password" id="txtPassword">
        </form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                nome: "",
                email: "",
                password:"",
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>