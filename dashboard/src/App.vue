<template>
  <header>
    <div v-if="userP.user == null">
      <LoginView />
    </div>
  </header>
  <div v-if="userP.user != null" >
    <div class="nav-menu">
      <nav class="nav">
        <div class="mb-2 sm:mb-0">
          <a class="home" href="">Home</a>
        </div>
        <RouterLink class="navLink" to="/Dashboard">Dashboard</RouterLink>
        <RouterLink class="navLink" to="/Options">Options</RouterLink>
        <a class="logout" @click="showModal = true">Log Out</a>
      </nav>
    </div >
      <EventModal v-if="showModal" @closeModal="showModal = false" @logOut="logOut" ></EventModal>
      <RouterView />
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/user'
import LoginView from './views/LoginView.vue';
import EventModal from './components/EventModal.vue'

const router = useRouter()
const userP = useUserStore()
const showModal = ref(false)

const logOut = () => {
  router.push({path: '/'}) 
  userP.logOut()
  showModal.value = false
}

</script>

<style scoped>

.nav{
  @apply  flex flex-row text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full;
}
.navLink{
  @apply text-lg no-underline text-zinc-800	 hover:text-sky-600 ml-2;
}
.home{
  @apply text-2xl no-underline text-zinc-800 hover:text-sky-600;
}
.logout{
  @apply bg-sky-600 text-lg no-underline text-slate-200 p-2 px-4 rounded-lg hover:text-sky-300 hover:cursor-pointer;
}
</style>
