const Incoming = {
  namespaced: true,
  state: {
    lists: [],
  },
  mutations: {
    append(state, value) {
      state.lists.unshift(value);
    },
  },
  actions: {
    append({ commit }, value) {
      value.items.forEach((val) => {
        commit("append", {
          tanggal: value.tanggal,
          shift: value.shift,
          come: value.come,
          paperId: value.paperId,
          handBy: value.handBy,
          received: value.received,
          item: val.item,
          qty: val.qty,
          tgl: val.tgl,
        });
      });
    },
  },
  getters: {
    lists(state) {
      return state.lists;
    },
  },
};

export default Incoming;
