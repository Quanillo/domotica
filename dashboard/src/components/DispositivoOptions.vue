<template>
<div class="containerOptions">
    <div class="title">
        <h1>Dispositivos options</h1>
    </div>
    <div>
        <h3>Add dispositivo</h3>
        <p>Name</p>
        <input type="text" v-model="newDispName">
        <p>Room</p>
        <select name="rooms" id="rooms" v-model="newDispRoom">
            <option v-for="room in roomList">{{ room }}</option>
        </select>
        <p>Type</p>
        <select name="type" id="type" v-model="newDispType" >
            <option>sensor</option>
            <option>ejecutor</option>
        </select>
        <div v-if="newDispType == 'sensor'">
            <p>param</p>
            <select name="type" id="type" v-model="newDispParam" >
                <option>hr</option>
                <option>temp</option>
                <option>lux</option>
            </select>
            <div class="buttons">
                <button @click="addSensor">add</button>
            </div>
        </div>
        <div class="buttons" v-if="newDispType == 'ejecutor'">
            <button @click="addEjecutor">add</button>
        </div>
    </div>

    <div>
        <h3>Delete dispositivo</h3>
        <p>Room</p>
        <select name="rooms" id="rooms" v-model="roomSelected">
            <option v-for="room in roomList">{{ room }}</option>
        </select>
        <p>Name</p>
        <select name="dispositivos" id="dispositivos" v-model="dispSelected">
            <option v-for="(disp, index) in dispList.filter(x=>x.room == roomSelected)" :key="index" v-bind:value="disp">{{ disp.name }}</option>
        </select>
        <div class="buttons">
            <button @click="deleteDisp">delete</button>
            <button @click="updateDisp">Update</button>
        </div>
    </div>
</div>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/user'
import { onGetRooms, addDispositivo, onGetDispositivoLeaked, deleteDocument } from '../components/API/firebase';
import { useDispStore } from '../stores/disp'

const userP = useUserStore()
const dispP = useDispStore()

const dispList = dispP.dispList
let roomSelected = ref('')
const dispSelected = ref({})

let roomList = ref([])
const newDispName = ref('')
const newDispType = ref('')
const newDispRoom = ref('')
const newDispParam = ref('')


onMounted(() => {
    onGetRooms(userP.user.name, (docs)=>{
        docs.forEach(x =>{
            roomList.value = x.data().rooms
        })
    })
})

const addSensor = () =>{
    if(newDispName.value !== ''){
        addDispositivo({
        user: userP.user.name,
        name: newDispName.value,
        room: newDispRoom.value,
        type: newDispType.value,
        param: newDispParam.value,
        value: 0
    })
    }
    newDispName.value = ''
    newDispType.value = ''
    newDispRoom.value = ''
    newDispParam.value = ''
}

const addEjecutor = () =>{
    if(newDispName.value !== ''){
        addDispositivo({
            user: userP.user.name,
            name: newDispName.value,
            room: newDispRoom.value,
            type: newDispType.value,
            state: false,
        })
    }
    newDispName.value = ''
    newDispType.value = ''
    newDispRoom.value = ''
    newDispParam.value = ''
}

const deleteDisp = () => {
    deleteDocument('dispositivos', dispSelected.value.id)
    roomSelected = ''
    dispSelected = {}
}
</script>

<style  scoped>
button{
    @apply w-auto bg-sky-600 text-lg no-underline text-slate-200 p-0.5 px-4 rounded-lg hover:text-sky-200 hover:cursor-pointer;
}
input{
    @apply appearance-none block w-full bg-slate-50 text-gray-700 border border-sky-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-600
}
h1{
    @apply text-sky-600 text-2xl text-center 
}

.containerOptions{
    @apply w-96 flex flex-col p-2 border-2 rounded-xl border-sky-200 hover:border-sky-600  bg-slate-100
}
.title{
    @apply bg-sky-200 p-2 rounded-t-lg
}
.buttons{
    @apply flex flex-row place-content-center p-4
}
h3{
    @apply text-center p-2
}
select{
    @apply block appearance-none w-full bg-slate-50 border border-sky-200 text-gray-700 py-3 px-4 pr-8 mb-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-sky-600
}
</style>