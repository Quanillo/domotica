<template>
    <div class="divLogin" v-if="showLogin">
        <Login class="loginContainer" />
        <button @click="showLogin = false">Sing Up</button>
    </div>
    <div class="divLogin" v-else>
        <SingUp class="loginContainer" @showLogin="showLogin = true"/>
        <button @click="showLogin = true">Log In</button>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import Login from '../components/Login.vue';
import SingUp from '../components/SingUp.vue';

const showLogin = ref(true)

</script>


<style  scoped>
.divLogin{
    @apply flex flex-col items-center pt-20
}
.loginContainer{
    @apply p-36
}
button{
    @apply bg-sky-600 text-lg no-underline text-slate-200 p-0.5 px-4 rounded-lg hover:text-sky-300 hover:cursor-pointer;
}
</style>