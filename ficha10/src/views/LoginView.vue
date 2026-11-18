<template>
    <div>

        <form @submit.prevent="login" >
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username">
            <br/>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password">
            <br/>
            <button type="submit">Login</button>
        </form>

        

    </div>
</template>

<script>
    import {useUsersStore} from '../stores/users.js'
    export default {
        name : 'LoginView',
        data() {
            return {
                username: "",
                password: "",
                usersStore: useUsersStore()
            }
        },

        methods: {
            login() {
                let isUser = this.usersStore.login(this.username, this.password)
                if (isUser) {
                    this.$router.push({ name: 'games' }); // direciona para um rota especifica
                } else {
                    alert("Invalid username or password")
                }

            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>