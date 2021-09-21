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
      // open modal
      window.location.href = "#my-modal";
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
      if (state.gudang) {
        return state.gudang;
      } else {
        window.location.href = "#my-modal";
        state.form = "ListGudang";
      }
    },
  },
  modules: {
    Vehicles,
    Localbase,
  },
});
