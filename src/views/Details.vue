<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="details-post">
    <span class="date">
      <img src="https://img.icons8.com/cotton/21/000000/delivery-time.png" />
      {{ post.created.slice(0, 10) }}, {{ post.created.slice(11, 16) }}
    </span>
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

  <router-link :to="{ name: 'Update', params: { id: pid } }" class="update-btn"
    >Update</router-link
  >
  <h1 class="seperator">|</h1>
  <button class="delete-btn" @click="deleteHandler">Delete</button>
</template>

<script>
import getPost from "../services/getPost.js";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, postLoad } = getPost(props.id);

    const pid = props.id;

    const router = useRouter();

    const deleteHandler = async () => {
      fetch("http://localhost:3500/api/posts/" + pid, {
        method: "DELETE",
      }).then(() => router.push({ name: "Home" }));
    };

    postLoad();

    return {
      post,
      error,
      postLoad,
      pid,
      deleteHandler,
    };
  },
};
</script>

<style></style>
