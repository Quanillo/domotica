<template>
    <div>
        <div class="loginContainer">
            <h1>Login</h1>
            <p>User name</p>
            <input v-model.trim="name"  type="text">
            <p>Password</p>
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

const setMainUser = () => {
    getUser(name.value, (docs)=>{
        if (docs.size ==1){
            docs.forEach(doc=>{
            if(doc.data().pass === pass.value){
                const aux = doc.data()
                aux.id = doc.id
                userP.setUser(aux)
                if(userP.user != null)
                    router.push({path: '/Options'})
            }
            else{
                err.value = 'Contraseña incorrecta'
            }
            })
        }
    })
}
</script>

<style  scoped>
button{
    @apply bg-sky-600 text-lg no-underline text-slate-200 p-0.5 px-4 rounded-lg hover:text-sky-300 hover:cursor-pointer mt-10;
}
input{
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
.loginContainer{
    @apply flex flex-col items-center;
}
p{
    @apply mt-10;
}
</style>