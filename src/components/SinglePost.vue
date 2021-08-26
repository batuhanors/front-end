<template>
  <div class="post">
    <router-link
      :to="{ name: 'Details', params: { id: post._id } }"
      class="post-header"
      ><h2>{{ post.title }}</h2></router-link
    >

    <p class="snippet">{{ snippet }}</p>
    <router-link
      :to="{ name: 'Details', params: { id: post._id } }"
      class="see-more"
      >See More</router-link
    >
    <span class="snippet-span"> Tags: {{ post.tags }} </span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    // props.post.routerTitle = props.post.title.replace(/ /g, "-").toLowerCase();
    const snippet = computed(() => {
      return props.post.content.substring(0, 120) + "...";
    });

    return { snippet };
  },
};
</script>

<style></style>
