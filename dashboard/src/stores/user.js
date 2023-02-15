import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const setUser = (newUser) => user.value = newUser 

  return { user, setUser }
})
