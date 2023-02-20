<template>

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
            <button @click="addSensor">add</button>
        </div>
        <div v-if="newDispType == 'ejecutor'">
            <button @click="addEjecutor">add</button>
        </div>
    </div>

    <div>
        <h3>Delete dispositivo</h3>
        <select name="rooms" id="rooms" v-model="roomSelected">
            <option v-for="room in roomList">{{ room }}</option>
        </select>
        <select name="dispositivos" id="dispositivos" v-model="dispSelected">
            <option v-for="(disp, index) in dispList.filter(x=>x.room == roomSelected)" :key="index" v-bind:value="disp">{{ disp.name }}</option>
        </select>
        <button @click="deleteDisp">delete</button>
        <button @click="updateDisp">Update</button>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/user'
import { onGetRooms, addDispositivo, onGetDispositivoLeaked, deleteDocument } from '../components/API/firebase';

const userP = useUserStore()

const dispList = ref([])
const roomSelected = ref('')
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

const addSensor = () =>{
    addDispositivo({
        user: userP.user.name,
        name: newDispName.value,
        room: newDispRoom.value,
        type: newDispType.value,
        param: newDispParam.value,
        value: 0
    })
}

const addEjecutor = () =>{
    addDispositivo({
        user: userP.user.name,
        name: newDispName.value,
        room: newDispRoom.value,
        type: newDispType.value,
        state: false,
    })
}

const deleteDisp = () => {
    deleteDocument('dispositivos', dispSelected.value.id)
}
</script>

<style  scoped>

</style>