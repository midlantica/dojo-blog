<template>
  <div class="posts-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
  import { onMounted, onUnmounted, onUpdated} from "vue"
  import SinglePost from "./SinglePost.vue"

  export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
      console.log(props.posts)
      onMounted(() => console.log('component Mounted'))
      onUnmounted(() => console.log('component Unmounted'))
      onUpdated(() => console.log('component onUpdated'))
    }

  }
</script>

<style>

</style>
