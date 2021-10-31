const Gudang = {
  namespaced: true,
  state: {
    lists: [],
  },
  mutations: {
    gudang(state, value) {
      state.lists = value;
    },
    append(state, value) {
      state.lists.unshift(value);
    },
    update(state, value) {
      state.lists = state.lists.map((val) => {
        return val.id === value.id ? value : val;
      });
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    append({ dispatch, commit, state }, value) {
      // atur record yang akan dimasukkan
      let record = {
        store: "Gudang",
        obj: value,
        id: state.lists.length > 0 ? state.lists[0].id : "WRH",
      };
      // send to root to append to indexeddb
      dispatch("append", record, { root: true });
    },
  },
  getters: {
    gudangActive(state) {
      return state.lists.filter((val) => val.status === true);
    },
  },
};

export default Gudang;
