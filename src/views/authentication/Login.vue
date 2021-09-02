<template>
  <div class="auth-form">
    <h1>Login</h1>
    <form v-on:submit.prevent="onsubmit">
      <label for="username" class="form-label">Username</label>
      <input
        type="text"
        class="form-control"
        id="username"
        v-model="username"
        placeholder="Enter username"
        autocomplete="off"
      />

      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
        placeholder="Enter password"
      />

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p>{{ err }}</p>
    <p>
      Don't have an account?
      <router-link :to="{ name: 'Signup' }" class="auth-link">
        Click here
      </router-link>
      to create one!
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

    const err = ref("");

    const onsubmit = async () => {
      const userInfo = {
        username: username.value,
        password: password.value,
      };

      const response = await fetch("http://localhost:3500/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(userInfo),
      });
      if (response.status === 404) {
        err.value = "Username or password is Incorrect!";
      } else {
        location.replace("/");
      }
    };

    return { username, password, onsubmit, err };
  },
};
</script>

<style></style>
