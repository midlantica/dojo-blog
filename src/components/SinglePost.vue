<template>
  <div class="post">
    <h4>{{ post.title }}</h4>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag" class="tag">
      #{{tag}}
    </span>
  </div>

</template>

<script>
  import { computed } from 'vue'

  export default {
    props: ['post'],
    setup(props) {

      const snippet = computed(() => {
        return props.post.body.substring(0,100) + '...'
      })

      return { snippet }
    }
  }
</script>

<style>
  p {
    /* color: red;  */
  }

  .tag {
    padding: .25rem .75rem;
    background: rgb(223, 223, 223);
    border-radius: 1rem;
    color: rgb(77, 77, 77);
    font-size: .85rem;
    margin: 0 .15rem;
    cursor: pointer;
  }

  .tag:hover {
    color: rgb(26, 26, 26);
    background: rgb(209, 209, 209);
  }
</style>
