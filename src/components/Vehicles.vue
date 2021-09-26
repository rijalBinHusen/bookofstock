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
      <span class="text-3xl font-bold"> Vehicles </span>

      <a
        class="btn btn-outline btn-accent"
        @click="changeForm('vehiclesForm')"
        href="#my-modal"
      >
        <font-awesome-icon
          icon="plus-square"
          style="font-size: 30px; color: black"
        />
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
      >
        <button class="btn btn-primary btn-xs">
          Muat
          <font-awesome-icon icon="arrow-alt-circle-right" />
        </button>
      </data-table>
      <!-- 
        @edit="edit($event)"
        @delete="del($event)"

       -->
    </div>
  </div>
</template>

<script>
import Datatable from "./Datatable.vue";

export default {
  name: "Vehicles",
  data() {
    return {
      selected: new Date(),
      heads: ["antrian", "waktu", "platNo", "noDoc", "notes"],
    };
  },
  methods: {
    changeForm(form) {
      this.$store.dispatch("changeForm", form);
    },
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
          noDoc: val.noDoc,
          notes: val.notes,
        });
      });

      return result;
    },
  },
};
</script>
