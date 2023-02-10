<template>
  <main>
    <ul v-for="(ejecutor, index) in ejecutorList" :key="index">
        <RouterLink 
            :to="{name: 'Ejecutor', 
                  params: {id: ejecutor.id},
                  query: {  name: ejecutor.name,
                            type: ejecutor.type,
                            room: ejecutor.room,
                            action: ejecutor.action,
                            state: ejecutor.state,
                            value: ejecutor.value}}" 
        > {{ ejecutor.name }} </RouterLink>
    </ul>
    <button @click="toHome">back</button>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const toHome = () => router.push({
    name:'home',
});
const ejecutorList = [
    {id: 1,
    name: 'persiana',
    type: 'Ejecutor',
    room: 'Salon',
    action: 'moving',
    state: true,
    value: 'up'},
    {id: 2,
    name: 'luz',
    type: 'Ejecutor',
    room: 'Salon',
    action: 'turn',
    state: false,
    value: 'on'}
]
</script>