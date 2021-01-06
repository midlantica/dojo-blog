<template>
  <main>
    <PostsList :posts="posts"/>
  </main>
</template>

<script>
  import PostsList from "../components/PostsList.vue"
  import { ref } from 'vue'

  export default {
    name: 'Home',
    components: { PostsList },
    setup() {
      const posts = ref([
        { title: 'Welcome to the blog', body: 'Nulla vulputate enim sed diam tempus dapibus. Nunc congue neque sapien, vitae feugiat diam euismod sit amet. Nunc auctor massa nec purus pellentesque gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Quisque eget ipsum viverra, vehicula quam ornare, mattis magna. Ut pulvinar nunc vel condimentum dapibus.', id: 1 },
        { title: 'Tope 5 CSS tips', body: 'Nulla pharetra ultrices ante. Donec id faucibus massa. Etiam in mi dolor. Phasellus egestas, eros eget rhoncus vulputate, ex ipsum placerat nisi, quis dignissim tellus turpis vitae lorem. Etiam consectetur urna sit amet magna ullamcorper dignissim. Fusce dolor ex, tristique non libero a, imperdiet pellentesque elit. Nullam eget mi pellentesque, cursus risus consequat, congue dolor. Quisque a sapien quis metus ornare euismod. Praesent nisi erat, placerat ut lectus et, sodales pretium orci. In a ligula quam. Morbi lacus diam, convallis vel purus ac, sagittis efficitur ipsum. Mauris bibendum tempus dui vel ornare. Donec laoreet justo nec sollicitudin pulvinar.', id: 2 }
      ])

      return { posts }

    }
  }
</script>

<style>

</style>
