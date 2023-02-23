<template>
    <div v-if="props.dispList.filter(x => x.room == '').length > 0">
        <h2>No room</h2>
        <div v-if="props.dispList.filter(x => x.room == '' && x.type == 'sensor').length > 0">
            <p><b>Sensores</b></p>
        </div>
        <div class="dispositivo" v-for="dispositivo in props.dispList.filter(x => x.room == '' && x.type == 'sensor')">
            <p>{{ dispositivo.name }}</p>
            <p>{{ dispositivo.param }}</p>
            <p>{{ dispositivo.value }}</p>
        </div>

        <div v-if="props.dispList.filter(x => x.room == '' && x.type == 'ejecutor').length > 0">
            <p><b>Ejecutores</b></p>
        </div>
        <div class="dispositivo" v-for="(dispositivo, index) in props.dispList.filter(x => x.room == '' && x.type == 'ejecutor')"
            :key="index">
            <p>{{ dispositivo.name }}</p>
            <p>{{ dispositivo.state }}</p>
            <div v-if="dispositivo.state" class="inline-flex">
                <button @click="updateOn(dispositivo.id)" class="buttonOnSelected">
                    On
                </button>
                <button @click="updateOff(dispositivo.id)" class="buttonOff">
                    Off
                </button>
            </div>
            <div v-else class="inline-flex">
                <button @click="updateOn(dispositivo.id)" class="buttonOn">
                    On
                </button>
                <button @click="updateOff(dispositivo.id)" class="buttonOffSelected">
                    Off
                </button>
            </div>
        </div>
    </div>
</template> 

<script setup>

import { updateEjecutor } from '../components/API/firebase'

const props = defineProps({
  dispList: Array
})

const updateOff = (id) =>{
    updateEjecutor('dispositivos', id, false)
} 

const updateOn = (id) => {
    updateEjecutor('dispositivos', id, true)
}
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