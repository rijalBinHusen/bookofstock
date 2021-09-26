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
    dateFormat: () => (a) => {
      const a001 = a[1] ? new Date(a[1]) : new Date();
      const a002 = a001.getDate();
      const a003 = a001.getMonth();
      const a004 = a001.getFullYear();
      const a005 =
        a001.getHours() > 9 ? a001.getHours() : "0" + a001.getHours();
      const a006 =
        a001.getMinutes() > 9 ? a001.getMinutes() : "0" + a001.getMinutes();
      const a007 = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Des",
      ];

      if (a[0] == "time") {
        return a001.getTime();
      } //dapatkan waktu dalam bentuk mili second
      else if (a[0] == "full") {
        return a002 + " " + a007[a003] + " " + a004 + " " + a005 + ":" + a006;
      } //dapatkan waktu penuh yyyy mmm dd hh:mm
      else if (a[0] == "+1") {
        return a001.getTime() - 25200000 + 86400000;
      } // hari selanjutnya pada jam 00:00
      else if (a[0] == "-1") {
        return a001.getTime() - 25200000 - 86400000;
      } // hari sebelumnya pada jam 00:00
      else if (a[0] == "0") {
        return a001.getTime() - 25200000;
      } // hari yang tersebut pada jam 00:00
      else if (a[0] == "waktu") {
        return a005 + ":" + a006;
      }
    },
  },
  modules: {
    Vehicles,
    Localbase,
  },
});
