<script setup>
import { ref } from 'vue';
import { addUserDB } from './API/firebase'

const emits = defineEmits(['showLogin'])
 
const name = ref('')
const pass = ref('')
const pass2 = ref('')
const err = ref('')

const addUser = () => {
    if(pass.value == pass2.value){
        addUserDB({name: name.value, pass: pass.value, rooms: []})
        emits('showLogin')
    }
    else{
        err.value='Las contraseñas no coinciden'
    }
}
</script>

<template>
    <div>
        <div class="loginContainer">
            <h1>Sing Up</h1>
            <p>User name</p>
            <input v-model.trim="name"  type="text">
            <p>Password</p>
            <input v-model.trim="pass"  type="password">
            <p>Repeat password</p>
            <input v-model.trim="pass2"  type="password">
            <button @click="addUser">enviar</button>
        </div>
        <div v-if="err != ''">
            <p>{{ err }}</p>
        </div>
    </div>
</template>


<style  scoped>
button{
    @apply bg-sky-600 text-lg no-underline text-slate-200 p-0.5 px-4 rounded-lg hover:text-sky-300 hover:cursor-pointer mt-10;
}
input{
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
.loginContainer{
    @apply flex flex-col items-center;
}
p{
    @apply mt-10;
}
</style>