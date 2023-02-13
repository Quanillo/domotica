<template>
  <main>
    <ul v-for="(sensor, index) in sensoresP.sensoresList" :key="index">
        <RouterLink 
            :to="{name: 'Sensor', 
                  params: {id: sensor.id},
                  }"
        > {{ sensor.name }} </RouterLink>
    </ul>
    <button @click="toHome">back</button>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useSensores } from '@/stores/dispositivos.js'

const sensoresP = useSensores()

const router = useRouter();

const toHome = () => router.push({
    name:'home',
});

/*
const sensorList = ref([
    {id: 1,
    name: 'termostato',
    type: 'Sensor',
    room: 'Salon',
    param: "temp",
    value: 20},
    {id: 2,
    name: 'luz',
    type: 'Sensor',
    room: 'Salon',
    param: 'lux',
    value: 200}
]

query: {  name: sensor.name,
                            type: sensor.type,
                            room: sensor.room,
                            param: sensor.param,
                            value: sensor.value}
*/
</script>
