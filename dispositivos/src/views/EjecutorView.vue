<template>
  <main>
    <ul v-for="(ejecutor, index) in ejecutoresP.ejecutorList" :key="index">
        <RouterLink 
            :to="{name: 'Ejecutor', 
                  params: {id: ejecutor.id},
                 }" 
        > {{ ejecutor.name }} </RouterLink>
    </ul>
    <button @click="toHome">back</button>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useEjecutores } from '@/stores/dispositivos.js'

const router = useRouter();


const ejecutoresP = useEjecutores()
const toHome = () => router.push({
    name:'home',
});

</script>