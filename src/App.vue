<template>
  <Navbar :userinf="username" />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import { onMounted, ref } from "vue";

export default {
  components: { Navbar },
  setup() {
    const username = ref("");
    onMounted(async () => {
      const response = await fetch("http://localhost:3500/api/users/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const user = await response.json();
      username.value = user.username;
    });

    return { username };
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: azure;
}
</style>
