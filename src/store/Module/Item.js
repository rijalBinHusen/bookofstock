const Items = {
  namespaced: true,
  state: {
    lists: [],
  },
  mutations: {
    append(state, value) {
      state.lists.push(value);
    },
    item(state, value) {
      state.lists = value;
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
      let record = {
        store: "Item",
        obj: value,
        id: state.lists.length > 0 ? state.lists.slice(-1)[0].id : "ITM",
      };
      // send to root vuex actions to append to database
      dispatch("append", record, { root: true });
    },
  },
  getters: {},
};

export default Items;
