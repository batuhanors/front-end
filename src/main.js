import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../src/assets/style.css";
import "../src/assets/media-query.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
