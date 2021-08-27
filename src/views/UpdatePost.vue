<template>
  <h1>Update Post</h1>
  <form @submit.prevent="updatePost">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        v-model="title"
        type="text"
        class="form-control"
        id="title"
        placeholder="Title"
        autocomplete="off"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label content-label">Content</label>
      <textarea
        v-model="content"
        id="content"
        placeholder="Write your post here"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Update</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  setup(props) {
    const title = ref("");
    const content = ref("");

    const router = useRouter();

    const updatePost = async () => {
      const updatedPost = {
        title: title.value,
        content: content.value,
      };
      fetch("http://localhost:3500/api/posts/" + props.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      }).then(() => router.push({ name: "Home" }));
    };

    return { title, content, updatePost };
  },
};
</script>

<style></style>
