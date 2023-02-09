<template>
    <div>
        <p>{{ route.params.name }}</p>
        <p>{{ route.query.sensor.room }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route.query)
</script>
<style>

</style>
  