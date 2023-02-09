<template>
  <main>
    <ul v-for="(sensor, index) in sensorList" :key="index">
        <RouterLink 
            :to="{name: 'Sensor', 
                  params: {name: sensor.name},
                  query: {sensor}}" 
        > {{ sensor.name }} </RouterLink>
    </ul>
  </main>
</template>

<script setup>

const sensorList = [
    {id: 1,
    name: 'termostato',
    type: 'Sensor',
    room: 'Salon',
    temp: "20"},
    {id: 2,
    name: 'movimiento',
    type: 'Sensor',
    room: 'Salon',
    detected: false}
]

//en query desestructurar el objeto
</script>
