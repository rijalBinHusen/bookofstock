import Localbase from "../../Localbase";

const Sorder = {
  namespaced: true,
  state: {},
  mutations: {
    fresh(state, val) {
      state.sOrder = val;
    },
  },
  actions: {
    getStart({ commit }) {
      Localbase.getData({
        store: "sorder",
        orderBy: "noSo",
      }).then((result) => {
        commit("fresh", result);
      });
    },
  },
  getters: {
    sorder(state) {
      return state.sOrder;
    },
  },
};

export default Sorder;
