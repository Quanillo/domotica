<template>
    <p>Welcome {{ userP.user.name }}, this is your dashboard panel</p>
    <div v-for="room in userP.user.rooms">
        <div class="room">
            <h2>{{ room }}</h2>
            <p><b>Sensores</b></p>
            <div class="dispositivo" v-for="dispositivo in dispList.filter(x=>x.room == room && x.type == 'sensor')">
                <p>{{ dispositivo.name }}</p>
                <p>{{ dispositivo.param }}</p>
                <p>{{ dispositivo.value }}</p>
            </div>
            <p><b>Ejecutores</b></p>
            <div class="dispositivo" v-for="(dispositivo, index) in dispList.filter(x=>x.room == room && x.type == 'ejecutor')"  :key="index">
                <p>{{ dispositivo.name }}</p>
                <p>{{ dispositivo.state }}</p>
                <button @click="updateEjecutor('dispositivos', dispositivo.id, true)">on</button>
                <button @click="updateEjecutor('dispositivos', dispositivo.id, false)">off</button>
            </div>
        </div>
        <div>
            <h2>No room</h2>
            <div class="dispositivo" v-for="dispositivo in dispList.filter(x=>x.room == '' && x.type == 'sensor')">
                <p>{{ dispositivo.name }}</p>
                <p>{{ dispositivo.param }}</p>
                <p>{{ dispositivo.value }}</p>
            </div>
            <p><b>Ejecutores</b></p>
            <div class="dispositivo" v-for="(dispositivo, index) in dispList.filter(x=>x.room == '' && x.type == 'ejecutor')"  :key="index">
                <p>{{ dispositivo.name }}</p>
                <p>{{ dispositivo.state }}</p>
                <button @click="updateEjecutor('dispositivos', dispositivo.id, true)">on</button>
                <button @click="updateEjecutor('dispositivos', dispositivo.id, false)">off</button>
            </div>
        </div>
    </div>
</template> 

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useUserStore } from '../stores/user'
import { onGetDispositivoLeaked, updateEjecutor } from '../components/API/firebase'

const userP = useUserStore()

const dispList = ref([])

onMounted(() => {
    onGetDispositivoLeaked(userP.user.name, (docs)=>{
        const list = []
        docs.forEach(x =>{
            const disp = x.data()
            disp.id = x.id
            list.push(disp)
        })
        dispList.value = list
    })
})


</script>

<style  scoped>
.room{
    border: solid black 1px;
}
.dispositivo{
    border: solid green 1px;
}
</style>