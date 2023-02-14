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

const router = useRouter()
const sensoresP = useSensores()

const toSensores = () => {
  router.push({
    name:'SensorList',
  })
};

const toEjecutores = () => router.push({
    name:'EjecutorList',
});


</script>

<style scoped>
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  button{
    padding: 1em;
    cursor: pointer;
    outline: 0;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 16px;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;                
  }
  button:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
</style>
