<template>
  <div id="vehicles_main" class="mx-auto">
    <div id="vehicles_form" class="my-2 py-2 flex text-2xl border-b-2">
      <div class="tabs-boxed mr-2">
        <a class="tab tab-active">Proses</a>
        <a class="tab">Selesai</a>
      </div>
      <span class="my-2 mr-2">Tanggal :</span>
      <datepicker class="input input-primary" v-model="selected"></datepicker>
    </div>

    <div id="vehicles_form_add" class="container text-center my-4">
      <span class="text-3xl font-bold">Vehicles</span>

      <a
        v-if="selected.getDate() == new Date().getDate()"
        class="btn btn-outline btn-accent"
        @click="changeForm('vehiclesForm')"
        href="#my-modal"
      >
        <font-awesome-icon icon="plus-square" style="font-size: 30px; color: black" />
      </a>
    </div>

    <div id="vehicles_table">
      <data-table
        :heads="heads"
        :datanya="vehicles"
        :keydata="'id'"
        :no="false"
        :option="true"
        :id="'table_vehicle'"
        v-slot:default="slotProps"
      >
        <div class="dropdown mr-5 px-5">
          <div tabindex="0" class="m-1 btn btn-xs btn-primary">
            Opsi
            <font-awesome-icon class="ml-1" icon="ellipsis-h" />
          </div>
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-30">
            <li>
              <a>
                Muat
                <font-awesome-icon class="ml-1" icon="arrow-alt-circle-right" />
              </a>
            </li>
            <li @click="lihat(slotProps.id)">
              <a>
                Lihat
                <font-awesome-icon class="ml-1" icon="info-circle" />
              </a>
            </li>
            <li>
              <a>
                Edit
                <font-awesome-icon class="ml-1" icon="pencil-alt" />
              </a>
            </li>
            <li>
              <a>
                Hapus
                <font-awesome-icon class="ml-1" icon="trash-alt" />
              </a>
            </li>
          </ul>
        </div>
      </data-table>
    </div>
  </div>
</template>

<script>
import Datatable from "./parts/Datatable.vue";

export default {
  name: "Vehicles",
  data() {
    return {
      selected: new Date(),
      heads: ["antrian", "waktu", "platNo", "noDoc", "notes"],
    };
  },
  methods: {
    // Tambah data
    changeForm(form) {
      this.$store.dispatch("changeForm", form);
    },
    // Lihat data
    lihat(ev) {
      // OPEN THE MODAL
      this.$store.dispatch("changeForm", "VehiclesDetails");
      // SEND ID TO THE STATE
      this.$store.dispatch("Vehicles/check", ev);
    },
    // Edit data
    // Hapus data
  },
  components: {
    "data-table": Datatable,
  },
  mounted() {
    // is user selected warehouse
    this.$store.getters["gudang"];
  },
  computed: {
    vehicles() {
      let result = new Array();

      JSON.parse(this.$store.getters["Vehicles/vehicles"]).forEach((val) => {
        result.push({
          id: val.id,
          gudang: val.gudang,
          antrian: val.antrian,
          waktu: this.$store.getters["dateFormat"](["waktu", val.waktu]),
          platNo: val.platNo,
          noDoc: val.noDoc
            .split("/")
            .map((val) => val.slice(-5))
            .join("/"),
          notes: val.notes,
        });
      });

      return result;
    },
  },
};
</script>
