<template>
  <div class="tag-cloud">
    <h3>Tag Cloud</h3>
    <div v-for="tag in tags" :key="tag" class="tag-pill">
      <router-link :to="{ name: 'Tag', params: { tag: tag }}">
        #{{tag}}
      </router-link>
    </div>
  </div>
</template>

<script>
  import useTags from '../composables/useTags'

  export default {
    props: ['posts'],
    setup(props) {
      const { tags } = useTags(props.posts)

      return { tags }
    }

  }
</script>

<style>
  .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    /* padding: 16px 8px; */
    color: #a1a1a1;
  }
  .tag-pill {
    display: inline-block;
    padding: .3rem .6rem;
    font-size: .75rem;
    background: rgb(211, 211, 211);
    color: black;
    border-radius: 2rem;
    margin-right: .5rem;
    margin: 0.15rem .15rem;
    text-decoration: none;
  }
  .tag-pill a {
    text-decoration: none;
  }
  .tag-pill:hover {
    background: rgb(170, 170, 170);
  }
  .tag-pill a.router-link-active {
    color: rgb(184, 0, 0);
    font-weight: bold;
  }
  .tag-cloud a {
    color: black;
    text-decoration: none;
  }

</style>
