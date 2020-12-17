<template>
  <main>
    <h1>Home</h1>
    <p>My name is {{ name }} and I am {{ age }} years old</p>
    <button @click="handleClick">Click me Drewby Doo</button>
    <br><br>
    <input type="text" v-model='name'>
    <br><br>
    <button @click="age++">Make me older</button>
    <br><br>
    <h4>Refs</h4>
    <p>{{ ninjaOne.name }} – {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">updateNinjaOne</button>
    <br><br>
    <h4>Reactive ie two way</h4>
    <p>{{ ninjaTwo.name }} – {{ ninjaTwo.age }}</p>
    <label>Update Ninja Two</label>
    <input @click="updateNinjaTwo">
    <button @click="updateNinjaTwo">updateNinjaTwo</button>
  </main>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    name: 'Home',
    setup() {

      const name = ref('Drooby Doo')
      const age = ref(32)

      const ninjaOne = ref({
        name: 'Jason',
        age: 51
      })

      const ninjaTwo = reactive({
        name: 'Andrew',
        age: 53
      })

      const updateNinjaOne = () => {
        ninjaOne.value.age = 29
      }

      const updateNinjaTwo = () => {
        ninjaTwo.age = 29
      }


      const handleClick = () => {
        name.value = 'Freddy'
        age.value = 35
        // console.log(p, p.value)
        // p.value.classList.toggle('test')
      }

      return {
        name: name,
        age: age,
        handleClick,
        ninjaOne,
        updateNinjaOne,
        ninjaTwo,
        updateNinjaTwo
      }
    }
  }
</script>

<style>
  .test {
    color: red;
  }
</style>
