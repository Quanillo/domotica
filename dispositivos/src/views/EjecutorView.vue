<template>
  <main>
    <div v-for="(ejecutor, index) in ejecutoresP.ejecutorList" :key="index">
        <RouterLink 
            :to="{name: 'Ejecutor', 
                  params: {id: ejecutor.id},
                 }" 
        > {{ ejecutor.name }} </RouterLink>
    </div>
    <button @click="toHome">back</button>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useEjecutores } from '@/stores/dispositivos.js'

const router = useRouter();


const ejecutoresP = useEjecutores()
const toHome = () => router.push({
    name:'home',
});
</script>

<style scoped>
  main{
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