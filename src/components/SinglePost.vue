<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag" class="tag-pill">
     <router-link :to="{ name: 'Tag', params: { tag: tag }}">
        #{{tag}}
      </router-link>
    </span>
  </div>
</template>

<script>
  import { computed } from 'vue'

  export default {
    props: ['post'],
    setup(props) {
      const snippet = computed(() => {
        return props.post.body.substring(0, 100) + '...'
      })
      return { snippet }
    }
  }
</script>

<style>
  .post {
    margin: 0 auto 30px;
    padding-bottom: 0;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 1.25rem;
    color: rgb(145, 145, 145);
    margin-top: 0;
    margin-bottom: 10px;
    max-width: 400px;
  }
   .post h3:hover {
     color: rgb(80, 80, 80);
   }
  .post p {
    margin: 0 0 1rem;
  }

</style>
