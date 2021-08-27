<template>
  <div class="post">
    <div>
      <span class="date">
        <img src="https://img.icons8.com/cotton/21/000000/delivery-time.png" />
        {{ date }}
      </span>
    </div>
    <router-link
      :to="{ name: 'Details', params: { id: post._id } }"
      class="post-header"
      ><h2>{{ post.title }}</h2></router-link
    >

    <p class="snippet">
      {{ snippet }}
      <router-link
        :to="{ name: 'Details', params: { id: post._id } }"
        class="see-more"
        >See More</router-link
      >
    </p>

    <span class="snippet-span"> Tags: {{ post.tags }} </span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.content.substring(0, 200) + "...";
    });

    const date = computed(() => {
      let year = props.post.created.slice(0, 10);
      return year;
    });

    console.log(date);
    return { snippet, date };
  },
};
</script>

<style></style>
