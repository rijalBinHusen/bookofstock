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
      }).then((result) => {
        commit("fresh", result);
      });
    },
  },
  getters: {},
};

export default Sorder;
