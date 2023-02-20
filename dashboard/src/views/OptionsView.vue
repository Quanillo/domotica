<template>
    <h1>Options</h1>
    
    <p>Welcome {{ userP.user.name }}, this is your options panel</p>

    <RoomsOptions />

    <DispositivoOptions />

</template>

<script setup>
import RoomsOptions from '../components/RoomsOptions.vue';
import DispositivoOptions from '../components/DispositivoOptions.vue';
import { useUserStore } from '../stores/user'

const userP = useUserStore()


</script>

<style  scoped>

</style>