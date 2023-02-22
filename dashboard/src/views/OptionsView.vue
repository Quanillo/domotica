<template>
    <p>Welcome {{ userP.user.name }}, this is your options panel</p>

    <div class="container">
        <RoomsOptions />
        <DispositivoOptions />
    </div>


</template>

<script setup>
import RoomsOptions from '../components/RoomsOptions.vue';
import DispositivoOptions from '../components/DispositivoOptions.vue';
import { useUserStore } from '../stores/user'

const userP = useUserStore()


</script>

<style  scoped>
.container{
    @apply flex flex-row place-content-around pt-10
}
</style>