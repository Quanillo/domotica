<template>
    <div>
        <p><b>Nombre: </b>{{ route.query.name }}</p>
        <p><b>ID: </b>{{ route.params.id }}</p>
        <p><b>Room: </b>{{ route.query.room }}</p>
        <p><b>Param: </b>{{ route.query.param }}</p>
        <p><b>Value: </b>{{ route.query.value }}</p>
    </div>
    <button @click="toSensores">back</button>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const toSensores = () => router.push({
    name:'SensorList',
});
</script>
<style>

</style>