/* eslint-disable no-unused-vars */
import { createStore } from "vuex";
import Vehicles from "./Module/Vehicles";
import Localbase from "../Localbase";

export default createStore({
  state: {
    form: "",
    gudang: "",
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
  modules: {
    Vehicles,
    Localbase,
  },
});
