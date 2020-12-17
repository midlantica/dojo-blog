<template>
  <main>
    <h1>Home</h1>
    <p>My name is {{ name }} and I am {{ age }} years old</p>
    <button @click="handleClick">Click me Drewby Doo</button>
    <button @click="age++">Make me older</button>
    <br><br>
    <input type="text" v-model='name'>
  </main>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'Home',
    setup() {

      const name = ref('Drooby Doo')
      const age = ref(32)

      const handleClick = () => {
        name.value = 'Freddy'
        age.value = 35
        // console.log(p, p.value)
        // p.value.classList.toggle('test')
      }

      return {
        name: name,
        age: age,
        handleClick
      }
    }
  }
</script>

<style>
  .test {
    color: red;
  }
</style>
