<script setup>
import { useUserStore } from '../stores/user'
const userP = useUserStore()
console.log(userP.user)

</script>

<template>
  <main>
    <p>holis</p>
  </main>
</template>
