<template>
  <header>
    <router-link :to="{ name: 'Home' }">
      <h1>The Dojo Blog</h1>
    </router-link>

    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create&nbsp;Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px;
  }
  header h1 {
    color: #9c9c9c;
    font-size: 2.5rem;;
  }
  header a {
    color: rgb(126, 126, 126);
    text-decoration: none;
  }
  header a.router-link-active {
    color: rgb(36, 36, 36);
    font-weight: bold;
  }
  nav a {
    margin-left: 1rem;
  }
</style>
