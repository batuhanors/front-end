import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/authentication/Signup.vue";
import Login from "../views/authentication/Login.vue";
import Error from "../views/404Page/Error.vue";
import CreatePost from "../views/CreatePost.vue";
import Details from "../views/Details.vue";

const isLoggedIn = true;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/create",
    name: "CreatePost",
    component: CreatePost,
    beforeEnter: (to, from, next) => {
      if (isLoggedIn) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/sign-up",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error Page",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
