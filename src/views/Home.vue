<template>
  <div class="home">
    <h1>Posts</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else class="loader">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";
import fetchPosts from "../services/fetchService.js";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const showPosts = ref(true);

    const { posts, error, load } = fetchPosts();
    load();

    return { showPosts, posts, error };
  },
};
</script>
