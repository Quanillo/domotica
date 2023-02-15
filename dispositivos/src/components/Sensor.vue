<template>
    <div>
        <p><b>Nombre: </b>{{ sensoresP.getSensor(route.params.id).name }}</p>
        <p><b>ID: </b>{{ route.params.id }}</p>
        <p><b>Room: </b>{{ sensoresP.getSensor(route.params.id).room }}</p>
        <p><b>Param: </b>{{ sensoresP.getSensor(route.params.id).param }}</p>
        <p><b>Value: </b>{{ sensoresP.getSensor(route.params.id).value }}</p>
        <input type="number" v-model="newValue">
        <button @click="changeValue">change</button>
    </div>
    <button @click="toSensores">back</button>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSensores } from '@/stores/dispositivos.js'
import { updateDocument } from '../firebase'

const sensoresP = useSensores()
const route = useRoute();
const router = useRouter();
const newValue = ref(0)

const toSensores = () => router.push({
    name:'SensorList',
});

const changeValue = () => updateDocument('dispositivos', route.params.id, newValue.value)

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