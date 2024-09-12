<script setup>
import { onMounted, ref } from 'vue'
import TheUser from '@/components/TheUser.vue'
const users = ref([])
const fetchJsonPlaceHolder = () =>  {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((result) => {
    console.log('result', result)
    if(result.ok) {
      return result.json() // retourne une promesse
    }
  })
  .then(data =>  {
    // Modifier les users
    users.value = data
  })
  .catch((error) => console.log('error', error))
}

onMounted(() => {
 fetchJsonPlaceHolder()
})

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const alertMessage = (payload) => {
  const message = payload?.message??payload
  alert(message)
}

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <TheUser
      :users="users"
      @app:user:event1="alertMessage"
      @app:user:event2="alertMessage"
    />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
