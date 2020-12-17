<template>
  <main>

    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term:</p>
    <p>{{search || "––"}}&nbsp;</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop de watch</button>
  </main>
</template>

<script>
  import { computed, ref, watch, watchEffect } from 'vue'

  export default {
    name: 'Home',
    setup() {
      const search = ref('')
      const names = ref(['Fred', 'Jim', 'Valentina', 'Ava' ])

      const stopWatch = watch(search, () => {
        console.log('watch function run');
      })

      const stopEffect = watchEffect(() => {
        console.log('watchEffect run', search.value)
      })

      const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value))
      })

      const handleClick = () => {
        stopWatch()
        stopEffect()
      }

      return { names, search, matchingNames, handleClick }
    }
  }
</script>

<style>

</style>
