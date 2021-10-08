import Localbase from "../../Localbase";

const Vehicles = {
  namespaced: true,
  state: {
    vehicles: [],
    check: "",
  },
  mutations: {
    // Append data
    append(state, value) {
      state.vehicles.unshift(value);
      //append to indexeddb
      Localbase.append("vehicles", value);
      // console.log(value);
    },
    //  replace old data with new
    fresh(state, value) {
      state.vehicles = value;
    },
    check(state, value) {
      state.check = value
    }
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
    check( {commit }, value) {
      commit("check", value)
    }
  },
  getters: {
    vehicles(state) {
      return JSON.stringify(state.vehicles);
    },
    antrian(state) {
      return state.vehicles[0].antrian + 1;
    },
    check(state){
      let result = state.vehicles.filter((val) => 
        val.id == state.check
      )
      if(result.length > 0) {
        return result
      }
      Localbase.findData("vehicles", { id: state.check }).then((val) => {
        result = val
      })
      return result;
    }
  },
};

export default Vehicles;
