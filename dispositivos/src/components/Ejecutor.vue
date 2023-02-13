<template>
  <div>
      <p><b>Nombre: </b>{{ ejecutoresP.getEjecutor(route.params.id).name }}</p>
      <p><b>ID: </b>{{ route.params.id }}</p>
      <p><b>Room: </b>{{ ejecutoresP.getEjecutor(route.params.id).room }}</p>
      <p><b>action: </b>{{ ejecutoresP.getEjecutor(route.params.id).action }}</p>
      <p><b>Value: </b>{{ ejecutoresP.getEjecutor(route.params.id).value }}</p>
      <p><b>State: </b>{{ ejecutoresP.getEjecutor(route.params.id).state }}</p>

  </div>
  <button @click="toEjecutores">back</button>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useEjecutores } from '@/stores/dispositivos.js'

const ejecutoresP = useEjecutores()
const route = useRoute();
const router = useRouter();

const toEjecutores = () => router.push({
  name:'EjecutorList',
});
</script>
<style>

</style>
