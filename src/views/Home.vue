<template>
  <main>

    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term:</p>
    <p>{{search || "––"}}&nbsp;</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>

  </main>
</template>

<script>
  import { computed, ref } from 'vue'

  export default {
    name: 'Home',
    setup() {
      const search = ref('')
      const names = ref(['Fred', 'Jim', 'Valentina', 'Ava' ])

      const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value))
      })

      return { names, search, matchingNames }
    }
  }
</script>

<style>

</style>
