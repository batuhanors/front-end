<template>
  <h1>Create Post</h1>
  <div class="form">
    <form @submit.prevent="submitPost">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          v-model="title"
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
          autocomplete="off"
          required
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label content-label">Content</label>
        <textarea
          v-model="content"
          id="content"
          placeholder="Write your post here"
          required
        ></textarea>
      </div>
      <label>Tags (hit enter to add a tag)</label>
      <input
        v-model="tag"
        @keydown.enter.prevent="tagHandler"
        type="text"
        class="input-form"
        placeholder="Add a tag"
      />
      <button type="submit" class="btn btn-primary">Publish</button>
    </form>
    <div class="center">
      <div v-for="tag in tags" :key="tag" class="tag">
        <p class="tag-p">{{ tag }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const content = ref("");
    const tag = ref("");

    const tags = ref([]);

    const router = useRouter();

    const tagHandler = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const submitPost = async () => {
      const newPost = {
        title: title.value,
        content: content.value,
        tags: tags.value.toString(),
      };

      await fetch("http://localhost:3500/api/posts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      router.push({ name: "Home" });
    };

    return { title, content, tags, tagHandler, tag, submitPost };
  },
};
</script>

<style></style>
