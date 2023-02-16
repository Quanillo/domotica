<template>
    <div>
        <div>
            <h1>Iniciar sesión</h1>
            <p>nombre de usuario</p>
            <input v-model.trim="name"  type="text">
            <p>contraseña</p>
            <input v-model.trim="pass"  type="password">
            <button @click="setMainUser" @keypress="enter">enviar</button>
        </div>
        <div v-if="err!=''">
            <p>{{ err }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { getUser } from '../components/API/firebase'

const router = useRouter()
const userP = useUserStore()

const name = ref('')
const pass = ref('')
let err = ref('')

const setMainUser = async () => {
    const qs = await getUser(name.value)
    if(qs.size == 1){
        qs.forEach((doc) => {
            if(doc.data().pass === pass.value){
                const aux = doc.data()
                aux.id = doc.id
                userP.setUser(aux)
                router.push({path: '/'}) 
            }
            else{
                err.value = 'Contraseña incorrecta'
            }

        });
    }
    else{
        err.value = 'Usuario incorrecto'
    }
}



</script>


<style  scoped>

</style>