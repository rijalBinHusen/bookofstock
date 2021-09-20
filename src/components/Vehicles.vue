<template>
  <div id="vehicles_main" class="mx-auto">
    <div id="vehicles_form" class="mt-4 flex gap-2 text-2xl">
      Tanggal :
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
      <Datatable
        :heads="heads"
        :datanya="vehicles"
        :option="['edit', 'delete']"
        :keydata="'id'"
        :id="'table_vehicle'"
      />
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
      vehicles: this.$store.getters["Vehicles/vehicles"],
      heads: ["antrian", "waktu", "platNo", "noDoc", "notes"],
    };
  },
  methods: {
    changeForm(form) {
      this.$store.dispatch("changeForm", form);
    },
  },
  components: {
    Datatable,
  },
};
</script>
