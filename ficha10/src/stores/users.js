import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {

state: () => ({

    userlogged:null,
    users: [
        {

            id:1,
            name:"user",
            password:"user123"

        },
        {

            id:2,
            name:"admin",
            password:"admin123"

        }
    ]
        
    }),
    
    getters: {
        getUsers:(state) => state.users,
        getUserLogged:(state) => state.userlogged,
        isUserLogined:(state) => state.userlogged !== null,
        isUserAdmin:(state) => state.userlogged !== null && state.userlogged.name === "admin"

    },

    actions:{
        login(name,password){
            const user = this.users.find(user => user.name === name && user.password === password);
            if(user){
                this.userlogged = user;
                return true;
            }else{
                return false;
            }
        }
    }



})