<template>
  <div class="modal-overlay" @click="$emit('closeModal')">
    <div class="modal" @click.stop>
      <p>¿Estás seguro de cerrar sesión?</p>
      <button @click="logOut">Log Out</button>
    </div>
    <div class="close" @click="$emit('closeModal')">
      <img class="close-img" src="../assets/CloseIcon.svg" alt="" />
    </div>
  </div>
</template>
  

<script setup>
const emits = defineEmits(['closeModal', 'logOut'])

const logOut = () => emits('logOut')

</script>


<style scoped>    

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: #FAFCFF;
  height: 500px;
  width: 500px;
  margin-top:5%;
  margin-bottom:5%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  height: 100%;
  margin-top: 8%;
  margin-left: 2%;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
}

p {
  font-size: 16px;
  margin: .5em;
}

button {
  background: #4ad295;
  width: 150px;
  height: 40px;
  color: #FAFCFF;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  cursor: pointer;
}
</style>