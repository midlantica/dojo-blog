<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
  import getPost from '@/composables/getPost'
  import Spinner from '../components/Spinner.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { projectFirestore } from '../firebase/config'


  export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
      const route = useRoute()
      const router = useRouter()
      // console.log(route)

      const { error, post, load } = getPost(route.params.id)
      load()

      const handleClick = async () => {
        await projectFirestore.collection('posts')
          .doc(props.id)
          .delete()

        router.push({ name: 'Home' })

      }

      return { error, post, handleClick }
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

  .post button {
    border-radius: 2rem;
    padding: .5rem 1rem;
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(128, 128, 128, 0.25);
    cursor: pointer;
  }
  .post button:hover {
    color: rgba(0, 0, 0, 1);
    background: rgb(255, 216, 223);
    border: 1px solid rgba(128, 128, 128, 0.5);
  }
</style>
