const Items = {
  namepsaced: true,
  state: {
    lists: [],
  },
  mutations: {},
  actions: {
    append({ commit }, value) {
      commit("append", value);
    },
  },
  getters: {},
};

export default Items;
