import { createStore } from "vuex";

export default createStore({
  state: {
    color: {
      sidebar: "#7AE644",
      mainPage: "#AAF8A9",
      icon: "#009596",
    },
  },
  mutations: {
    setColor(state, value) {
      state.color = Object.assign(state.color, value);
    },
  },
  actions: {
    setColor({ commit }, value) {
      commit("setColor", value);
    },
  },
  getters: {
    color(state) {
      return state.color;
    },
  },
  modules: {},
});
