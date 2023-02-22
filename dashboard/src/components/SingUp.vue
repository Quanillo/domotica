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
    @apply  bg-sky-600 text-lg no-underline text-slate-200 p-0.5 px-4  rounded-lg hover:text-sky-300 hover:cursor-pointer;
}
input{
    @apply appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
}
h1{
    @apply text-sky-600 text-2xl text-center
}
.buttons{
    @apply flex flex-col items-center
}
.containerRoom{
    @apply flex flex-col p-3 border-2 rounded-xl border-sky-200 bg-slate-100
}
.title{
    @apply bg-sky-200 p-2 rounded-t-lg
}
h3{
    @apply text-center p-2
}
select{
    @apply block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500
}
</style>