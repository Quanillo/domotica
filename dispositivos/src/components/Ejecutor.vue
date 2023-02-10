<template>
  <div>
      <p><b>Nombre: </b>{{ route.query.name }}</p>
      <p><b>ID: </b>{{ route.params.id }}</p>
      <p><b>Room: </b>{{ route.query.room }}</p>
      <p><b>Action: </b>{{ route.query.action }}</p>
      <p><b>State: </b>{{ route.query.state }}</p>
      <p><b>Value: </b>{{ route.query.value }}</p>

  </div>
  <button @click="toEjecutores">back</button>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const toEjecutores = () => router.push({
  name:'EjecutorList',
});
</script>
<style>

</style>