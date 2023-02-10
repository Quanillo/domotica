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
import { getDispositivosLeaked } from '../firebase'

const router = useRouter()
const sensoresP = useSensores()

const toSensores = async () => {
  await getSensores()
  router.push({
    name:'SensorList',
  })
};

const toEjecutores = () => router.push({
    name:'EjecutorList',
});

const getSensores = async() => {
  const sensores = await getDispositivosLeaked('dispositivos', 'type', 'sensor')
  const sensoresFB = []
  sensores.docs.map(x=>sensoresFB.push(x.data()))
  sensoresP.addSensores(sensoresFB)
}

</script>

<style scoped>
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
