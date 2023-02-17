<script setup>
import { ref } from 'vue';
import { addUserDB } from './API/firebase'

const emits = defineEmits(['showLogin'])
 
const name = ref('')
const pass = ref('')
const pass2 = ref('')
const err = ref('')

const addUser = () => {
    if(pass.value == pass2.value){
        addUserDB({name: name.value, pass: pass.value, rooms: []})
        emits('showLogin')
    }
    else{
        err.value='Las contraseñas no coinciden'
    }
}
</script>

<template>
    <div>
        <div>
            <h1>Registro</h1>
            <p>Nombre de usuario</p>
            <input v-model.trim="name"  type="text">
            <p>Contraseña</p>
            <input v-model.trim="pass"  type="password">
            <p>Repite contraseña</p>
            <input v-model.trim="pass2"  type="password">
            <button @click="addUser">enviar</button>
        </div>
        <div v-if="err != ''">
            <p>{{ err }}</p>
        </div>
    </div>
</template>


<style  scoped>

</style>