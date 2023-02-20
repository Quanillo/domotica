<template>
  <div>
      <p><b>Nombre: </b>{{ ejecutoresP.getEjecutor(route.params.id).name }}</p>
      <p><b>ID: </b>{{ route.params.id }}</p>
      <p><b>Room: </b>{{ ejecutoresP.getEjecutor(route.params.id).room }}</p>
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
  div{
    padding: 2em;
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
