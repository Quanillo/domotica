<template>
<div class="containerRoom">
    <div class="title">
        <h1>Room options</h1>
    </div>
    <div>
        <h3>Add room</h3>
        <p>Name</p>
        <input type="text" v-model="newRoom"><br>
        <div class="buttons">
            <button @click="pushRoom">add</button>
        </div>
    </div>

    <div>
        <h3>Delete room</h3>
        <p>Name</p>
        <select name="rooms" id="rooms" v-model="selectedRoom">
            <option v-for="room in roomList">{{ room }}</option>
        </select><br>
        <div class="buttons">
            <button @click="deleteRoom">delete</button>
        </div>
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
    if(newRoom.value !== ''){
        addRoom('usuarios', userP.user.id, newRoom.value)
        newRoom.value = ''
    }
} 

const deleteRoom = () => {
    removeRoom('usuarios', userP.user.id, selectedRoom.value)
    dispList.value.filter(x=>x.room == selectedRoom.value).map(disp=>{
        updateRoom('dispositivos', disp.id, '')
    })
    selectedRoom.value = ''
}

</script>

<style  scoped>
button{
    @apply  bg-sky-600 text-lg no-underline text-slate-200 p-0.5 px-4  rounded-lg hover:text-sky-200 hover:cursor-pointer;
}
input{
    @apply appearance-none block w-full  bg-slate-50 text-gray-700 border border-sky-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-600
}
h1{
    @apply text-sky-600 text-2xl text-center
}
.buttons{
    @apply flex flex-col items-center
}
.containerRoom{
    @apply w-96 flex flex-col p-2 border-2 rounded-xl border-sky-200 hover:border-sky-600  bg-slate-100
}
.title{
    @apply bg-sky-200 p-2 rounded-t-lg
}
h3{
    @apply text-center p-2
}
select{
    @apply block appearance-none w-full bg-slate-50 border border-sky-200 text-gray-700 py-3 px-4 pr-8 mb-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-sky-600
}
</style>