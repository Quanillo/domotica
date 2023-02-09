<template>
  <main>
    <Home />
    <button @click="toSensores">Sensores</button>
  </main>
</template>

<script setup>
import Home from '../components/Home.vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const toSensores = () => router.push({
    name:'SensorList',
});

</script>
