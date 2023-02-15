<template>
    <div v-if="showLogin">
        <Login />
        <button @click="showLogin = false">Sing Up</button>
    </div>
    <div v-else>
        <SingUp />
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

</style>