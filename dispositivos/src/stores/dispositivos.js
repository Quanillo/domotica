import { ref } from "vue";
import { defineStore } from "pinia";

export const useSensores = defineStore("sensores", () => {
  const sensoresList = ref([]);
  const addSensores = (sensores) => sensoresList.value = sensores; 


  return { sensores, addSensores };
});
