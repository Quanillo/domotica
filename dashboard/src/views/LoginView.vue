<template>
    <div v-if="showLogin">
        <button @click="showLogin = false">Sing Up</button>
        <Login />
    </div>
    <div v-else>
        <button @click="showLogin = true">Log In</button>
        <SingUp @showLogin="showLogin = true"/>
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