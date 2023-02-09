<template>
    <div>
        <p><b>Nombre: </b>{{ route.query.name }}</p>
        <p><b>ID: </b>{{ route.params.id }}</p>
        <p><b>Room: </b>{{ route.query.room }}</p>
        <p><b>Param: </b>{{ route.query.param }}</p>
        <p><b>Value: </b>{{ route.query.value }}</p>

    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<style>

</style>