import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
    username: null,
  },
  mutations: {
    setAuth(state) {
      state.isLoggedIn = true;
    },
    setUserName(state, name) {
      state.username = name;
    },
  },
  actions: {
    //
  },
  modules: {},
});
