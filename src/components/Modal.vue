<template>
  <div id="my-modal" class="modal bg-base-200">
    <a
      href="#"
      v-if="form !== 'ListGudang'"
      class="btn fixed btn-secondary right-0 top-0 m-10 btn-lg justify-self-end"
    >
      <font-awesome-icon icon="times-circle" />
    </a>
    <div class="w-full mx-20 my-2 p-2">
      <component :is="form"></component>
    </div>
  </div>
</template>

<script>
import IncomingForm from "./IncomingForm.vue";
import VehiclesForm from "./VehiclesForm.vue";
import ListGudang from "./ListGudang.vue";
import importSorder from "./ImportSorder.vue";
import VehiclesDetails from "./VehiclesDetails.vue"

export default {
  name: "Modal",
  components: {
    IncomingForm,
    VehiclesForm,
    ListGudang,
    importSorder,
    VehiclesDetails
  },
  computed: {
    form() {
      return this.$store.getters["form"];
    },
  },
};
</script>
