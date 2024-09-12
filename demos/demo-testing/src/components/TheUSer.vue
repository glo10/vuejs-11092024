<script setup>
import { defineProps } from 'vue'
const emit = defineEmits(['app:user:event1', 'app:user:event2'])
const props = defineProps({
  users: {
    type: Array
  }
})
console.log('user', props.users)

const signalHelloWorld1 = () => {
    emit('app:user:event1', { message : 'Chargement des users ok au niveau de l\'enfant'})
}
const signalHelloWorld2 = () => {
    emit('app:user:event2', 'OK')
}
</script>
<template>
  <div>
    <ul v-if="users.length > 0">
      <li v-for="{ name } in users" :key="name" :id="name">{{ name }}</li>
    </ul>
    <p v-else>Aucun utilisateur</p>
    <button @click="signalHelloWorld1">Chargement terminé</button>
    <button @click="signalHelloWorld2">Autre boutons</button>
  </div>
</template>
<style></style>
