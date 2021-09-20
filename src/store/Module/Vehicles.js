import Localbase from "../../Localbase";

const Vehicles = {
  namespaced: true,
  state: {
    vehicles: [],
  },
  mutations: {
    // Append data
    append(state, value) {
      state.vehicles.unshift(value);
      //append to indexeddb
      Localbase.append("vehicles", value);
      //Record to activity
      Localbase.append("activity", {
        time: new Date.getTime(),
        operation: "create",
        document: value.id,
      });
    },
    // get data when start
    fresh(state, value) {
      state.vehicles = value;
    },
  },
  actions: {
    // Append data
    append({ commit }, value) {
      Localbase.getData({
        store: "vehicles",
        orderBy: "id",
        desc: true,
        limit: 1,
      }).then((result) => {
        result[0]
          ? commit(
              "append",
              Object.assign(
                { id: Localbase.generateId(result[0].id, true) },
                value
              )
            )
          : commit("append", Object.assign({ id: "VEH21090001" }, value));
      });
    },
    // get data when start
    getStart({ commit }) {
      Localbase.getData({
        store: "vehicles",
        orderBy: "id",
        desc: true,
        limit: 100,
      }).then((result) => {
        commit("fresh", result);
      });
    },
  },
  getters: {
    vehicles(state) {
      return state.vehicles;
    },
  },
};

export default Vehicles;
