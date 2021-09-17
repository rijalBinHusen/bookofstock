<template>
  <div id="my-modal" class="modal bg-base-200">
    <div class="w-full mx-20 my-2 p-2">
      <a
        href="#"
        class="btn fixed btn-secondary right-0 mr-10 btn-lg justify-self-end"
      >
        <font-awesome-icon icon="times-circle" />
      </a>
      <component :is="form"></component>
      <!-- <div class="modal-action">
        <a href="#" class="btn btn-primary">Accept</a>
        <a href="#" class="btn">Close</a>
      </div> -->
    </div>
  </div>
</template>

<script>
import IncomingForm from "./IncomingForm.vue";
import VehiclesForm from "./VehiclesForm.vue";

export default {
  name: "Modal",
  components: {
    IncomingForm,
    VehiclesForm,
  },
  computed: {
    form() {
      return this.$store.getters["form"];
    },
  },
};
</script>
