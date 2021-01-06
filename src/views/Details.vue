<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
  import getPost from '@/composables/getPost'
  import Spinner from '../components/Spinner.vue'
  import { useRoute } from 'vue-router'

  export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
      const route = useRoute()
      console.log(route)

      const { error, post, load } = getPost(route.params.id)
      load()
      return { error, post }
    },
  }
</script>

<style scoped>
  .post {
    max-width: 50rem;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 0;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>
