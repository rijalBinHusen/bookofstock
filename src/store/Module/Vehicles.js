const Vehicles = {
  namespaced: true,
  state: {
    vehicles: [],
  },
  mutations: {
    append(state, value) {
      state.vehicles.unshift(value);
    },
  },
  actions: {
    append({ commit }, value) {
      commit("append", value);
    },
  },
  getters: {},
};

export default Vehicles;
