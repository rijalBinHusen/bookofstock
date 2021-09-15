import { createStore } from "vuex";

export default createStore({
  state: {
    form: "",
  },
  mutations: {
    changeForm(state, val) {
      state.form = val;
    },
  },
  actions: {
    changeForm({ commit }, val) {
      commit("changeForm", val);
    },
  },
  getters: {
    form(state) {
      return state.form;
    },
  },
  modules: {},
});
