<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onGetDispositivoLeaked } from './firebase'
import { useSensores, useEjecutores } from '@/stores/dispositivos.js'

const sensoresP = useSensores()
const ejecutoresP = useEjecutores()

onGetDispositivoLeaked('type', 'sensor', (qs) => {
  const sensores = []
  qs.forEach((doc) => {
    const sensor = doc.data()
    sensor.id = doc.id
    sensores.push(sensor)
  })
  sensoresP.setSensores(sensores)
})

onGetDispositivoLeaked('type', 'ejecutor', (qs) => {
  const ejecutores = []
  qs.forEach((doc) => {
    const ejecutor = doc.data()
    ejecutor.id = doc.id
    ejecutores.push(ejecutor)
  })
  ejecutoresP.setEjecutores(ejecutores)
})


</script>


<style scoped>
  main{
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
