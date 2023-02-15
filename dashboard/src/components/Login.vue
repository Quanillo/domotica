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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const router = useRouter()
const userP = useUserStore()

const name = ref('')
const pass = ref('')
const err = ref('')

const auth = getAuth();
const setMainUser = async () => {
    await signInWithEmailAndPassword(auth, email, password)
    try{
      userP.setUser(userCredential.user) 
    }
    catch{
        err.value = 'algo salio mal'
    }
}
</script>


<style  scoped>

</style>