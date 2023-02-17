<template>
    <h1>Dashboard</h1>

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
            <div class="dispositivo" v-for="dispositivo in dispList.filter(x=>x.room == room && x.type == 'ejecutor')">
                <p>{{ dispositivo.name }}</p>
                <p>{{ dispositivo.action }}</p>
                <p>{{ dispositivo.value }}</p>
                <p>{{ dispositivo.state }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useUserStore } from '../stores/user'
import { onGetDispositivoLeaked } from '../components/API/firebase'

const userP = useUserStore()

const dispList = ref([])

onMounted(() => {
    onGetDispositivoLeaked(userP.user.name, (docs)=>{
        const list = []
        docs.forEach(x =>{
            list.push(x.data())
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