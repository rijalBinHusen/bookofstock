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
  },
  actions: {
    append({ dispatch, commit, state }, value) {
      let record = {
        store: "item",
        obj: value,
        id: state.lists.length > 0 ? state.lists.slice(-1)[0].id : "ITM",
      };
      // send to root vuex actions to append to database
      dispatch("append", record, { root: true }).then((result) => {
        console.log(result);
        commit("append", result.obj);
      });
    },
  },
  getters: {},
};

export default Items;
