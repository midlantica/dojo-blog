<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input v-model="title" type="text" required>
      <label>Content</label>
      <textarea v-model="body" required></textarea>
      <label>Tags – hit enter to add a tag</label>
      <input
        v-model="tag"
        type="text"
        @keydown.enter.prevent="handleKeydown"
      >
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{tag}}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { projectFirestore, timestamp } from '../firebase/config'

  export default {
    setup() {
      const title = ref('')
      const body = ref('')
      const tags = ref([])
      const tag = ref('')

      const router = useRouter()

      const handleKeydown = () => {
        if(!tags.value.includes(tag.value)) {
          tag.value = tag.value.replace(/\s/, '') // removes whitespace
          tags.value.push(tag.value)
        }
        tag.value = ''
      }

      const handleSubmit = async () => {
        const post = {
          title: title.value,
          body: body.value,
          tags: tags.value,
          createdAt: timestamp()
        }
        const res = await projectFirestore.collection('posts').add(post)
        router.push({ name: 'Home' })
      }

      return { title, body, tag, tags, handleKeydown, handleSubmit }
    }
  }
</script>

<style scoped>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid rgb(224, 224, 224);
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 1.25rem;
    color: #646464;
    /* margin-bottom: 10px; */
  }

  button {
    display: block;
    margin-top: 30px;
    background: #e47900;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
  }
</style>


