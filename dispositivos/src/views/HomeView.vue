<template>
  <main>
    <Home />
    <div>
      <button @click="toSensores">Sensores</button>
      <button @click="toEjecutores">Ejecutores</button>
    </div>

  </main>
</template>

<script setup>
import Home from '../components/Home.vue'
import { useRouter } from 'vue-router';
import { useSensores } from '@/stores/dispositivos.js'

const router = useRouter()
const sensoresP = useSensores()

const toSensores = () => {
  router.push({
    name:'SensorList',
  })
};

const toEjecutores = () => router.push({
    name:'EjecutorList',
});


</script>

<style scoped>
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
