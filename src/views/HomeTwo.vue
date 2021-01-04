<template>
  <main>
    <h1>HomeTwo</h1>
    <div v-if="error" style="color: red">{{error}}</div>
    <div v-if="posts.length">
      <PostsList :postsProp="posts" />
    </div>
    <p v-else>Loading...</p>

  </main>
</template>

<script>
  import PostsList from '../components/PostsList.vue'
  import getPosts from '../composables/getPosts.js'

  export default {
    name: 'HomeTwo',
    components: { PostsList },
    setup() {
      const { posts, error, load } = getPosts()

      load()

      return { posts, error }
    }
  }
</script>

<style>

</style>
