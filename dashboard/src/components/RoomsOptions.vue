<template>
<div>
    <div>
        <h3>Add room</h3>
        <p>Name</p>
        <input type="text" v-model="newRoom">
        <button @click="pushRoom">add</button>
    </div>

    <div>
        <h3>Delete room</h3>
        <select name="rooms" id="rooms" v-model="selectedRoom">
            <option v-for="room in roomList">{{ room }}</option>
        </select>
        <button @click="deleteRoom">delete</button>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/user'
import { addRoom, onGetRooms, removeRoom, updateRoom, onGetDispositivoLeaked } from '../components/API/firebase';

const userP = useUserStore()

const dispList = ref([])
const newRoom = ref('')
let roomList = ref([])
const selectedRoom = ref('')

onMounted(() => {
    onGetRooms(userP.user.name, (docs)=>{
        docs.forEach(x =>{
            roomList.value = x.data().rooms
        })
    }),
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

const pushRoom = () => {
    addRoom('usuarios', userP.user.id, newRoom.value)
    newRoom.value = ''
} 

const deleteRoom = () => {
    removeRoom('usuarios', userP.user.id, selectedRoom.value)
    dispList.value.filter(x=>x.room == selectedRoom.value).map(disp=>{
        updateRoom('dispositivos', disp.id, '')
    })
}

</script>

<style  scoped>

</style>