<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        >Blog Wizard</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'CreatePost' }"
              >Create Post</router-link
            >
          </li>
        </ul>
        <div v-if="!isLoggedIn" class="auth-nav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Signup' }"
                ><span
                  ><img
                    src="https://img.icons8.com/windows/30/000000/add-user-male--v1.png"
                /></span>
                Sign Up</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Login' }"
                ><span
                  ><img
                    src="https://img.icons8.com/ios-glyphs/30/000000/login-rounded-right--v1.png"
                /></span>
                Login</router-link
              >
            </li>
          </ul>
        </div>
        <div v-else class="auth-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <p>Logged in as {{ username }}</p>
            </li>
            <li class="nav-item">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["userinf"],
  setup(props) {
    const isLoggedIn = ref(false);
    const username = ref("");

    username.value = props.userinf;

    return { isLoggedIn, username };
  },
};
</script>

<style></style>
