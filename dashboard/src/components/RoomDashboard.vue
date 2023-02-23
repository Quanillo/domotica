<template>
    <div v-for="room in userP.user.rooms">
        <div class="room">
            <h2>{{ room }}</h2>
            <div v-if="dispList.filter(x => x.room == room && x.type == 'sensor').length > 0">
                <p><b>Sensores</b></p>
            </div>
            <div class="dispositivo" v-for="dispositivo in dispList.filter(x => x.room == room && x.type == 'sensor')">
                <p>{{ dispositivo.name }}</p>
                <p>{{ dispositivo.param }}</p>
                <p>{{ dispositivo.value }}</p>
            </div>
            <div v-if="dispList.filter(x => x.room == room && x.type == 'ejecutor').length > 0">
                <p><b>Ejecutores</b></p>
            </div>
            <div class="dispositivo"
                v-for="(dispositivo, index) in dispList.filter(x => x.room == room && x.type == 'ejecutor')" :key="index">
                <p>{{ dispositivo.name }}</p>
                <p>{{ dispositivo.state }}</p>
                <div class="inline-flex">
                    <button @click="updateEjecutor('dispositivos', dispositivo.id, true)" class="buttonOn">
                        On
                    </button>
                    <button @click="updateEjecutor('dispositivos', dispositivo.id, false)" class="buttonOff">
                        Off
                    </button>
                </div>
            </div>
        </div>
    </div>
</template> 

<script setup>
import { useUserStore } from '../stores/user'
import { useDispStore } from '../stores/disp'
import { updateEjecutor } from '../components/API/firebase'

const userP = useUserStore()
const dispP = useDispStore()

const dispList = dispP.dispList


</script>

<style  scoped>
.buttonOn{ 
    @apply bg-sky-200  focus:bg-sky-600 focus:text-sky-200 text-sky-600 focus:font-bold py-0.5 px-4 rounded-l 
}
.buttonOff{
    @apply bg-sky-200 focus:bg-sky-600  focus:text-sky-200 text-sky-600 focus:font-bold py-0.5 px-4 rounded-r
}
.room {
    border: solid black 1px;
}

.dispositivo {
    border: solid green 1px;
}
</style>