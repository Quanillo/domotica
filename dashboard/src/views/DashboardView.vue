<template>
    <h1>Dashboard</h1>

    <p>Welcome {{ userP.user.name }}, this is your options panel</p>
</template>

<script setup>
import { useUserStore } from '../stores/user'
const userP = useUserStore()
</script>

<style  scoped>

</style>