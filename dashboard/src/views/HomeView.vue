<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '../stores/user'
const userP = useUserStore()
console.log(userP.user)

</script>

<template>
  <main>
    <header v-if="userP.user != null">
      <nav>
        <RouterLink to="/Dashboard">Dashboard</RouterLink>
        <RouterLink to="/Options">Options</RouterLink>
      </nav>
    </header>
  <RouterView />
  </main>
</template>
