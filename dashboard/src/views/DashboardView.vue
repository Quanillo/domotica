<template>
    <p>Welcome {{ userP.user.name }}, this is your dashboard panel</p>
    <RoomDashboard />
    <NoRoomDashboard />
</template> 

<script setup>
import { useUserStore } from '../stores/user'
import RoomDashboard from '../components/RoomDashboard.vue';
import NoRoomDashboard from '../components/NoRoomDashboard.vue';

const userP = useUserStore()


</script>

<style  scoped>
.room {
    border: solid black 1px;
}

.dispositivo {
    border: solid green 1px;
}
</style>