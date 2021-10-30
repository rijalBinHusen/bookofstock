import Localbase from "../../Localbase";

const Group = {
  namespaced: true,
  state: {
    lists: [],
  },
  mutations: {
    group(state, value) {
      state.lists = value;
    },
    append(state, value) {
      state.lists.push(value);
    },
    update(state, value) {
      state.lists = state.lists.map((val) => {
        return val.id === value.id ? value : val;
      });
    },
  },
  actions: {
    append({ commit, state }, value) {
      // atur record yang akan dimasukkan
      let record = Object.assign(
        {
          id: Localbase.generateId(
            state.lists.length > 0 ? state.lists.slice(-1)[0].id : "GRP"
          ),
        },
        value
      );
      // simpan ke state
      commit("append", record);
      // Simpan ke indexeddb
      Localbase.append("group", record);
    },
    update({ commit }, value) {
      commit("update", value);
      Localbase.update("group", { id: value.id }, value);
    },
    // Get lists group
    group({ commit }) {
      Localbase.getData({
        store: "group",
      }).then((result) => commit("group", result));
    },
  },
  getters: {
    group(state) {
      return state.lists;
    },
    groupByWarehouse: (state) => (warehouse) => {
      return state.lists.filter((val) => val.location === warehouse);
    },
    groupActive(state) {
      return state.lists.filter((val) => val.status);
    },
  },
};

export default Group;
