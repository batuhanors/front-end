<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="details-post">
    <span class="date">
      <img src="https://img.icons8.com/cotton/21/000000/delivery-time.png" />
      {{ post.created.slice(0, 10) }}, {{ post.created.slice(11, 16) }}
      <span style="margin-left: 2rem;" class="author-img">
        <img src="https://img.icons8.com/ios-filled/32/000000/user.png" />
        Author:
        {{ post.author }}
      </span>
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
  <div v-if="post.author === $store.state.username">
    <router-link
      :to="{ name: 'Update', params: { id: pid } }"
      class="update-btn"
      >Update</router-link
    >
    <h1 class="seperator">|</h1>
    <button class="delete-btn" @click="deleteHandler">Delete</button>
  </div>
</template>

<script>
import getPost from "../services/getPost.js";
import { useRouter } from "vue-router";
import store from "../store/index.js";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, postLoad } = getPost(props.id);

    const pid = props.id;

    const username = store.state.username;
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
      username,
    };
  },
};
</script>

<style></style>
