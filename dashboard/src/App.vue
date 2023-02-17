<template>
  <header>
    <div v-if="userP.user == null">
      <LoginView />
    </div>
  </header>
  <div v-if="userP.user != null" >
    <div class="nav-menu">
      <nav>
        <RouterLink to="/Dashboard">Dashboard</RouterLink>
        <RouterLink to="/Options">Options</RouterLink>
        <a @click="showModal = true">Log Out</a>
      </nav>
    </div>

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
.nav-menu a {
  color: black;
  text-decoration: none;
  margin-right: 2rem;
}

.nav-menu a:last-child {
  background: #4ad295;
  padding: 0.25rem 0.75rem;
  border-radius: 0.2rem;
}
.nav-menu a:last-child:hover {
  cursor: pointer;
}
.menu-icon img {
  width: 30px;
  height: 30px;
  border-radius: 2px;
}
.router-link-active {
  color: gray !important;
}
.router-link-exact-active {
  color:red;
}
</style>
