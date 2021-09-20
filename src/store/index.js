/* eslint-disable no-unused-vars */
import { createStore } from "vuex";
import Vehicles from "./Module/Vehicles";
import Localbase from "../Localbase";

export default createStore({
  state: {
    form: "",
    gudang: false,
  },
  mutations: {
    changeForm(state, val) {
      state.form = val;
    },
    gudang(state, val) {
      state.gudang = val;
    },
  },
  actions: {
    changeForm({ commit }, val) {
      commit("changeForm", val);
    },
    gudang({ commit }, val) {
      commit("gudang", val);
    },
  },
  getters: {
    form(state) {
      return state.form;
    },
    gudang(state) {
      return state.gudang;
    },
  },
  modules: {
    Vehicles,
    Localbase,
  },
});
