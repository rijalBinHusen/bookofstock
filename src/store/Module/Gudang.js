import Localbase from "../../Localbase";

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
      let record = {
        id: Localbase.generateId(
          state.lists.length > 0 ? state.lists.slice(-1)[0].id : "WRH"
        ),
        name_warehouse: value,
      };
      // simpan ke state
      commit("append", record);
      // Simpan ke indexeddb
      Localbase.append("gudang", record);
    },
    update({ commit }, value) {
      commit("update", value);
      Localbase.update(
        "gudang",
        { id: value.id },
        { name_warehouse: value.name_warehouse }
      );
    },
    // Get lists gudang
    gudang({ commit }) {
      Localbase.getData({
        store: "gudang",
      }).then((result) => commit("gudang", result));
    },
  },
  getters: {
    gudang(state) {
      return state.lists;
    },
  },
};

export default Gudang;
