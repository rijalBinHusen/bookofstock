import Localbase from "../../Localbase";

const Impor = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    write({ commit }, obj) {
      // Kembalikan sebagai promise
      return new Promise((resolve) => {
        // Tulis ke indexeddb
        Localbase.reWrite(obj.store, obj.val);
        // Simpan ke state sorder
        commit("Sorder/fresh", obj.val, { root: true });
        // Tunggu 2 detik
        Localbase.tunggu(2000).then(() => {
          // Pesan setelah 2 detik
          resolve("Selesai");
        });
      });
    },
  },
  getters: {},
};

export default Impor;
