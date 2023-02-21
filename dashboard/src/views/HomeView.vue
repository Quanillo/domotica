<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '../stores/user'
const userP = useUserStore()

</script>

<template>
  <main>
    <p>Welcome, {{ userP.user.name }}, this is the master home automation application to control your environment from your hand. </p>
    <p>Be careful, and remember, that with great power comes great responsibility.</p>
  </main>
</template>
