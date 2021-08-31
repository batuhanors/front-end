<template>
  <div class="auth-form">
    <h1>Sign Up</h1>
    <form v-on:submit.prevent="onsubmit">
      <label for="username" class="form-label">Username</label>
      <input
        type="text"
        class="form-control"
        id="username"
        v-model="username"
        placeholder="Enter a username"
        autocomplete="off"
      />

      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
        placeholder="Enter a password"
      />

      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
    <p>
      Already have an account?
      <router-link :to="{ name: 'Login' }" class="auth-link">
        Click here
      </router-link>
      to go to Login page!
    </p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    const onsubmit = async () => {
      const newUser = {
        username: username.value,
        password: password.value,
      };

      fetch("http://localhost:3500/api/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }).then(() => {
        router.push({ name: "Login" });
      });
    };

    return { username, password, onsubmit };
  },
};
</script>

<style></style>
