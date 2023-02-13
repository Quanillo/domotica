<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { getSensoresFB, getEjecutoresFB } from './firebase'
import { useSensores, useEjecutores } from '@/stores/dispositivos.js'

const sensoresP = useSensores()
const ejecutoresP = useEjecutores()

getSensoresFB((querySnapshot)=>{
  const sensores = []
  querySnapshot.forEach((doc) => {
    const sensor = doc.data()
    sensor.id = doc.id
    sensores.push(sensor)
  })
  sensoresP.setSensores(sensores)
})

getEjecutoresFB((querySnapshot)=>{
  const ejecutores = []
  querySnapshot.forEach((doc) => {
    const ejecutor = doc.data()
    ejecutor.id = doc.id
    ejecutores.push(ejecutor)
  })
  ejecutoresP.setEjecutores(ejecutores)
})
</script>


<style scoped>
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
