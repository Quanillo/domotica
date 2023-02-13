import { ref } from "vue";
import { defineStore } from "pinia";

export const useSensores = defineStore("sensores", () => {
  const sensoresList = ref([]);
  const setSensores = (sensores) => sensoresList.value = sensores; 
  const getSensor = (id) => sensoresList.value.filter(x=>x.id === id)[0];
  return { sensoresList, setSensores, getSensor };
});

export const useEjecutores = defineStore("ejecutores", () => {
  const ejecutorList = ref([]);
  const setEjecutores = (ejecutores) => ejecutorList.value = ejecutores; 
  const getEjecutor = (id) => ejecutorList.value.filter(x=>x.id === id)[0];
  return { ejecutorList, setEjecutores, getEjecutor };
});
