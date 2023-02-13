<template>
    <div>
        <p><b>Nombre: </b>{{ sensoresP.getSensor(route.params.id).name }}</p>
        <p><b>ID: </b>{{ route.params.id }}</p>
        <p><b>Room: </b>{{ sensoresP.getSensor(route.params.id).room }}</p>
        <p><b>Param: </b>{{ sensoresP.getSensor(route.params.id).param }}</p>
        <p><b>Value: </b>{{ sensoresP.getSensor(route.params.id).value }}</p>
    </div>
    <button @click="toSensores">back</button>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useSensores } from '@/stores/dispositivos.js'

const sensoresP = useSensores()
const route = useRoute();
const router = useRouter();

const toSensores = () => router.push({
    name:'SensorList',
});
</script>
<style>

</style>