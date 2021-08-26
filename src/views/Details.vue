<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="details-post">
    <h2 class="details-header">{{ post.title }}</h2>
    <p class="details-content">{{ post.content }}</p>
  </div>
  <div class="btn-div">
    <button class="details-btn">
      <router-link :to="{ name: 'Home' }" class="details-btn-p">
        Go to Home
      </router-link>
    </button>
  </div>
</template>

<script>
import getPost from "../services/getPost.js";
export default {
  props: ["id"],
  setup(props) {
    const { post, error, postLoad } = getPost(props.id);
    postLoad();

    return {
      post,
      error,
      postLoad,
    };
  },
};
</script>

<style></style>
